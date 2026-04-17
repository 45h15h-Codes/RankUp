import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function SolutionSelector() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading mb-4">
            Find the Perfect Solution for Your Business
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Select your business type to see how we can help you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Lead Generation Card */}
          <Link to="/services/lead-generation" className="block h-full outline-none">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative bg-white border border-slate-100 hover:border-blue-200 rounded-[2rem] p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Subtle gradient hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/50 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-8 group-hover:text-primary transition-colors">Lead Generation</h3>
                <ul className="space-y-6 mb-12 flex-grow">
                  {[
                    'Generate qualified leads from Google, Meta and LinkedIn',
                    'Automate your follow-ups and increase conversions',
                    'Track everything with powerful analytics',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <Check className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="w-full bg-slate-50 border border-slate-100 group-hover:bg-primary group-hover:border-primary text-primary group-hover:text-white px-6 py-4 rounded-full font-bold text-base transition-all duration-300 inline-flex items-center justify-center">
                  Get More Qualified Leads
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* E-commerce Card */}
          <Link to="/services/ecommerce" className="block h-full outline-none">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative bg-[#0B1530] border border-[#1E2D5A] hover:border-blue-500/50 rounded-[2rem] p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.2)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full text-white overflow-hidden"
            >
              {/* Dark glass inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/5 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold tracking-tight mb-8 group-hover:text-blue-300 transition-colors">E-commerce</h3>
                <ul className="space-y-6 mb-12 flex-grow">
                  {[
                    'Drive targeted traffic to your product pages',
                    'Increase sales with optimized product pages',
                    'Use data-driven creatives to improve your ROI',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-blue-900/40 border border-blue-700/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-500 group-hover:border-blue-400 transition-all duration-300">
                        <Check className="w-3.5 h-3.5 text-blue-300 group-hover:text-white transition-colors duration-300" strokeWidth={3} />
                      </div>
                      <span className="text-white/80 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="w-full bg-[#16254D] border border-[#2A3F7A] group-hover:bg-blue-500 group-hover:border-blue-400 text-white px-6 py-4 rounded-full font-bold text-base transition-all duration-300 inline-flex items-center justify-center">
                  Get More Online Sales
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
