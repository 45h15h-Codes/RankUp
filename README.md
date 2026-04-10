<div align="center">
  <img width="1200" height="475" alt="RankUp Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# RankUp Digital Marketing Agency Website

Marketing agency website built with React, Vite, TypeScript, Tailwind CSS, and a lightweight Express contact API.

## Tech Stack

- Frontend: React 19 + TypeScript + Vite 6
- Styling: Tailwind CSS 4
- Routing: React Router
- Motion/Icons: Motion + Lucide React
- Backend: Express (Node) for contact form API
- Testing: Vitest + Testing Library

## Key Pages and Routes

- `/` Home
- `/about`
- `/services/ecommerce`
- `/services/lead-generation`
- `/crm-automation`
- `/case-studies`
- `/contact`
- `/industries/solar`
- `/industries/ecommerce`
- `/industries/education`
- `/industries/healthcare`
- `/industries/real-estate`
- `/industries/retail`
- `/privacy-policy`
- `/terms-of-service`

## Features

- Conversion-focused agency site pages and industry-specific landing pages
- Dynamic route metadata (title, description, OG tags, canonical URL)
- Contact form submission to backend API (`/api/contact`)
- Input sanitization, payload validation, and per-IP rate limiting on contact API
- Optional webhook forwarding for email and WhatsApp automations
- Security headers in API responses

## Project Structure

```txt
.
|- src/
|  |- components/           # UI building blocks
|  |- pages/                # Route pages
|  |  |- industries/        # Industry-specific pages
|  |  |- services/          # Service-specific pages
|  |- content/              # Case studies and industry content data
|  |- App.tsx               # Router + route metadata logic
|- server/
|  |- index.js              # Express contact API
|- public/
|  |- _headers              # Hosting/security headers (static host)
|- .env.example             # Environment variables reference
```

## Environment Variables

Copy `.env.example` to `.env.local` (or `.env`) and adjust values:

```bash
PORT=8787
ALLOWED_ORIGIN=http://localhost:3000
RATE_LIMIT_MAX=10
RATE_LIMIT_WINDOW_MS=600000
EMAIL_WEBHOOK_URL=
WHATSAPP_WEBHOOK_URL=
VITE_API_BASE_URL=http://localhost:8787
```

Notes:

- `VITE_API_BASE_URL` is used by the frontend contact form.
- If webhook URLs are not configured, API will still accept form submissions and return a partial-success message.

## Local Development

Prerequisites:

- Node.js 18+ (recommended: latest LTS)
- npm

Install dependencies:

```bash
npm install
```

Run frontend (Terminal 1):

```bash
npm run dev
```

Run backend API (Terminal 2):

```bash
npm run server
```

Default local URLs:

- Frontend: `http://localhost:3000`
- API: `http://localhost:8787`

## Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run server` - Start Express API server with `tsx`
- `npm run build` - Create production frontend build
- `npm run preview` - Preview production frontend build
- `npm run lint` - Type-check with TypeScript (`tsc --noEmit`)
- `npm run test` - Run tests once (Vitest)
- `npm run test:watch` - Run tests in watch mode
- `npm run clean` - Remove `dist` folder

## API Endpoints

### `POST /api/contact`

Accepts JSON payload:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9000000000",
  "industry": "Solar",
  "message": "I want to scale our lead generation."
}
```

Behavior:

- Validates required fields (`name`, `email`, `message`)
- Sanitizes text fields
- Applies rate limiting by IP
- Forwards payload to configured webhook endpoints

### `GET /api/health`

Simple health check endpoint returning `{ "ok": true }`.

## Build and Deployment

Build frontend:

```bash
npm run build
```

The Express server can be deployed as a separate service, or behind the same domain with proxying configured for `/api/*`.

`public/_headers` includes security headers for static hosting platforms that support custom header files.
