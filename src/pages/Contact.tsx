import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { FormEvent, useMemo, useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    industry: 'Solar',
    message: '',
  });
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  const apiBase = useMemo(() => {
    return import.meta.env.VITE_API_BASE_URL || '';
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: 'idle', message: '' });

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in name, email, and message.' });
      return;
    }

    try {
      setStatus({ type: 'loading', message: 'Sending your message...' });
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.message || 'Unable to submit the form.');
      }

      setStatus({
        type: 'success',
        message: data?.message || 'Thanks! Your message has been sent.',
      });
      setForm({
        name: '',
        email: '',
        phone: '',
        industry: 'Solar',
        message: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Unable to submit right now.',
      });
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Side: Info */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-extrabold text-heading mb-8"
            >
              Let's Start Your <br />
              <span className="text-primary">Growth Journey</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-body mb-12 leading-relaxed"
            >
              Ready to scale your revenue? Fill out the form and our growth experts will get back to you within 24 hours.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email Us', value: 'hello@rankup.com', href: 'mailto:hello@rankup.com' },
                { icon: Phone, label: 'Call Us', value: '+91 95581 16138', href: 'tel:+919558116138' },
                { icon: MapPin, label: 'Visit Us', value: '2nd Floor, Biz Hub, Near 99 Shipping Center, Amroli, Surat, Gujarat, India - 394107', href: 'https://www.google.com/maps/search/?api=1&query=2nd+Floor%2C+Biz+Hub%2C+Near+99+Shipping+Center%2C+Amroli%2C+Surat%2C+Gujarat%2C+India+394107' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center space-x-6 group"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <item.icon className="text-primary w-6 h-6 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-heading group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-16 p-8 bg-heading rounded-[32px] text-white flex items-center justify-between">
              <div>
                <p className="text-lg font-bold mb-1">Prefer WhatsApp?</p>
                <p className="text-white/60 text-sm">Chat with us instantly</p>
              </div>
              <a
                href="https://wa.me/9558116138"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] p-4 rounded-full hover:scale-110 transition-transform"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-6 h-6 fill-white text-white" />
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-10 md:p-12 rounded-[40px] shadow-soft border border-gray-100"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-heading mb-2 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-heading mb-2 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-heading mb-2 uppercase tracking-widest">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-heading mb-2 uppercase tracking-widest">Industry</label>
                  <select
                    value={form.industry}
                    onChange={(e) => setForm((prev) => ({ ...prev, industry: e.target.value }))}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option>Solar</option>
                    <option>E-commerce</option>
                    <option>Education</option>
                    <option>Healthcare</option>
                    <option>Real Estate</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-heading mb-2 uppercase tracking-widest">How can we help?</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals..."
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-primary transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 flex items-center justify-center group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              {status.type !== 'idle' && (
                <p
                  className={`text-sm font-medium ${status.type === 'success'
                      ? 'text-green-600'
                      : status.type === 'error'
                        ? 'text-red-600'
                        : 'text-body'
                    }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading text-center mb-8">
            Find Us and Connect
          </h2>
          <div className="overflow-hidden rounded-[32px] border border-gray-100 shadow-soft bg-white">
            <iframe
              title="RankUp Agency location map"
              src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1775819462712!5m2!1sen!2sin!6m8!1m7!1sWUU48GgJ7kLfy-JQSD7fzA!2m2!1d21.24201183595171!2d72.85145348425387!3f109.42609918017347!4f5.080926512821165!5f2.8082921192693244"
              className="w-full h-[320px] md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
