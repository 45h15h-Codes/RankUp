import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-hero-gradient">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-8"
        >
          <Zap className="w-4 h-4 text-primary fill-primary" />
          <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">
            Grow faster with Smart Automation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[32px] sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-heading leading-[1.1] mb-8 max-w-4xl mx-auto tracking-tight"
        >
          Get More Revenue with <br className="hidden sm:block" />
          <span className="text-gradient-blue">Qualified Leads</span> & <br className="hidden sm:block" />
          <span className="text-gradient-blue">Online Sales</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-body max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          Helping businesses grow by reaching the right audience and turning them into loyal customers with smart targeting and automation.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="px-4 sm:px-0"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-5 sm:py-4 rounded-2xl sm:rounded-full font-bold text-lg transition-all shadow-xl shadow-primary/25 inline-flex items-center justify-center group active:scale-95"
          >
            Get Your Growth Plan
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
