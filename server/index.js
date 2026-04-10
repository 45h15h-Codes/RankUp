import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 8787);
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:3000';
const EMAIL_WEBHOOK_URL = process.env.EMAIL_WEBHOOK_URL || '';
const WHATSAPP_WEBHOOK_URL = process.env.WHATSAPP_WEBHOOK_URL || '';
const MAX_REQUESTS_PER_WINDOW = Number(process.env.RATE_LIMIT_MAX || 10);
const RATE_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS || 10 * 60 * 1000);

const ipHits = new Map();

app.use(express.json({limit: '100kb'}));

app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  next();
});

app.use('/api/contact', (req, res, next) => {
  const now = Date.now();
  const key = req.ip || req.socket.remoteAddress || 'unknown';
  const data = ipHits.get(key) || {count: 0, resetAt: now + RATE_WINDOW_MS};

  if (now > data.resetAt) {
    data.count = 0;
    data.resetAt = now + RATE_WINDOW_MS;
  }

  data.count += 1;
  ipHits.set(key, data);

  if (data.count > MAX_REQUESTS_PER_WINDOW) {
    res.status(429).json({ok: false, message: 'Too many requests. Try again later.'});
    return;
  }

  next();
});

function sanitize(value) {
  return String(value || '').trim().replace(/\s+/g, ' ').slice(0, 2000);
}

function validatePayload(payload) {
  const name = sanitize(payload.name);
  const email = sanitize(payload.email).toLowerCase();
  const phone = sanitize(payload.phone);
  const industry = sanitize(payload.industry);
  const message = sanitize(payload.message);

  if (!name || name.length < 2) return {ok: false, error: 'Name is required.'};
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return {ok: false, error: 'Valid email is required.'};
  if (!message || message.length < 10) return {ok: false, error: 'Message must be at least 10 characters.'};
  if (phone && !/^[+\d\s()-]{7,20}$/.test(phone)) return {ok: false, error: 'Phone number is invalid.'};

  return {ok: true, data: {name, email, phone, industry, message}};
}

async function postWebhook(url, body) {
  if (!url) return {ok: true, skipped: true};

  const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Webhook failed (${response.status}): ${text.slice(0, 200)}`);
  }

  return {ok: true};
}

app.post('/api/contact', async (req, res) => {
  const result = validatePayload(req.body || {});
  if (!result.ok) {
    res.status(400).json({ok: false, message: result.error});
    return;
  }

  const payload = {
    ...result.data,
    submittedAt: new Date().toISOString(),
    source: 'rankup-website-contact-form',
  };

  try {
    const emailResult = await postWebhook(EMAIL_WEBHOOK_URL, payload);
    const whatsappResult = await postWebhook(WHATSAPP_WEBHOOK_URL, payload);

    if (emailResult.skipped || whatsappResult.skipped) {
      res.status(202).json({
        ok: true,
        message: 'Received, but one or more webhook destinations are not configured.',
      });
      return;
    }

    res.status(200).json({ok: true, message: 'Message sent successfully.'});
  } catch (error) {
    console.error('[contact-submit-error]', error);
    res.status(502).json({ok: false, message: 'Unable to submit right now. Please try again later.'});
  }
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({ok: true});
});

app.listen(PORT, () => {
  console.log(`Contact API running on http://localhost:${PORT}`);
});
