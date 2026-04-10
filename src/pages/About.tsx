import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Compass, Goal, Rocket, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import GrowthIllustration from '../components/GrowthIllustration';

export default function About() {
  const pillars = [
    {
      title: 'Turning marketing into measurable growth',
      icon: Compass,
      points: [
        'Performance-first strategy and planning',
        'Data-backed targeting and creative testing',
        'Weekly reporting with clear KPIs',
      ],
      accent: 'from-blue-50 to-white',
    },
    {
      title: 'Helping brands generate, qualify, and convert leads',
      icon: Goal,
      points: [
        'Funnel and landing page optimization',
        'Lead scoring and qualification workflows',
        'Automated follow-ups across channels',
      ],
      accent: 'from-indigo-50 to-white',
    },
    {
      title: 'Becoming your most trusted growth partner',
      icon: ShieldCheck,
      points: [
        'Transparent communication and ownership',
        'Fast experimentation and scaling wins',
        'Long-term revenue focused execution',
      ],
      accent: 'from-sky-50 to-white',
    },
  ];

  const partners = [
    {
      name: 'Google Partner',
      badge: 'Premier 2024',
      logo: 'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg',
    },
    {
      name: 'Meta Business Partner',
      badge: 'Authorized Agency',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    },
    {
      name: 'WhatsApp Business',
      badge: 'Solution Provider',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-heading mb-5"
          >
            About us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-body max-w-3xl mx-auto leading-relaxed"
          >
            Digital ROI is a full-funnel performance marketing agency helping brands grow through high-quality lead generation, smart automation, and measurable conversions.
          </motion.p>
        </div>

        {/* Pillar Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`rounded-3xl border border-blue-100 bg-gradient-to-b ${pillar.accent} p-7 md:p-8 shadow-soft`}
            >
              <div className="w-11 h-11 rounded-2xl bg-white border border-blue-100 flex items-center justify-center mb-5">
                <pillar.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-heading mb-6 leading-tight">{pillar.title}</h3>
              <div className="space-y-3">
                {pillar.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <p className="text-body leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-3xl border border-blue-100 bg-white p-8">
            <div className="w-11 h-11 bg-primary rounded-2xl flex items-center justify-center mb-5">
              <Goal className="text-white w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-heading mb-3">Our Mission</h2>
            <p className="text-body leading-relaxed">
              To help growth-focused businesses scale with predictable lead generation and conversion systems that improve month after month.
            </p>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-white p-8">
            <div className="w-11 h-11 bg-heading rounded-2xl flex items-center justify-center mb-5">
              <Rocket className="text-white w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-heading mb-3">Our Vision</h2>
            <p className="text-body leading-relaxed">
              To become the most trusted full-funnel partner for brands that want transparent collaboration, faster execution, and measurable revenue impact.
            </p>
          </div>
        </div>

        {/* Partners */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-heading">Official Partners with</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white border border-blue-100 rounded-2xl py-6 px-5 text-center shadow-soft"
            >
              <div className="h-10 flex items-center justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full w-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm font-bold text-heading">{partner.name}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{partner.badge}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="rounded-[28px] border border-primary/25 bg-white p-8 md:p-10 shadow-soft">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
              <h3 className="text-3xl font-extrabold text-heading mb-6">Let&apos;s Grow Together.</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-black text-primary mb-2">500+</p>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Campaigns Executed</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-primary mb-2">₹10Cr+</p>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Monthly GMV Managed</p>
                </div>
              </div>
              </div>
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all inline-flex items-center whitespace-nowrap self-start md:self-auto"
              >
                Get Your Growth Plan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="hidden md:flex justify-end text-primary/10 w-[220px] h-[150px]">
              <GrowthIllustration />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
