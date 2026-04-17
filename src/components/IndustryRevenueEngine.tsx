import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RevenueStep {
  title: string;
  description: string;
  icon: LucideIcon;
  subTag?: string;
}

interface IndustryRevenueEngineProps {
  steps: RevenueStep[];
  title?: string;
  description?: string;
  ctaText?: string;
  stats: {
    value: string;
    label: string;
    description: string;
    gradient: string;
  }[];
}

export default function IndustryRevenueEngine({
  steps,
  title = 'The Revenue Engine',
  description = 'A fully automated system designed to attract, qualify, and convert leads into high-value customers.',
  ctaText = 'Get Your Growth Plan',
  stats,
}: IndustryRevenueEngineProps) {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden rounded-[48px]">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(30, 77, 183, 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black tracking-widest uppercase px-6 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping" />
            Our Framework
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
            The <span className="text-blue-600">Revenue Engine</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </header>

        {/* Pipeline Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-start mb-20 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-slate-200 z-0">
            <motion.div
              className="h-full bg-blue-600 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              viewport={{ once: true }}
            />
          </div>

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="w-20 h-20 rounded-[28px] flex items-center justify-center bg-slate-900 group-hover:bg-blue-600 text-white shadow-xl transition-colors mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-2">
                  Phase 0{i + 1}
                </span>
                <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{s.description}</p>
                {s.subTag && (
                  <span className="inline-flex items-center mt-3 bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-100">
                    {s.subTag}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Result Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-[40px] p-10 text-white relative overflow-hidden bg-gradient-to-br ${stat.gradient} shadow-2xl`}
            >
              <div className="text-5xl font-black tracking-tighter mb-4">{stat.value}</div>
              <div className="text-sm font-black uppercase tracking-[0.2em] mb-2 text-white/60">{stat.label}</div>
              <p className="text-base text-white/80 font-medium leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[48px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
        >
          <div className="flex-1 text-center md:text-left relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Ready to automate your <br /> growth engine?
            </h3>
            <p className="text-lg text-white/60 font-medium leading-relaxed">
              Join high-growth businesses using our system to scale their sales pipeline with zero manual effort.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-black px-10 py-5 rounded-full transition-all group shrink-0 relative z-10"
          >
            {ctaText}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </motion.svg>
          </Link>
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
}
