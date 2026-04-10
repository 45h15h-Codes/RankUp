import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function ResultsBanner() {
  return (
    <section className="py-20 bg-white px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-[780px] mx-auto bg-[#0D1B40] rounded-[20px] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
      >
        {/* Decorative Bird Icon */}
        <div className="absolute top-8 right-8 text-primary opacity-40">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8c-2.5 0-5 1.5-6 4s-1 5-1 5l-2-1-2 1s0-2.5 1-5 3.5-4 6-4h4z" />
            <path d="M16 8c1.5 0 3 .5 4 1.5s1.5 2.5 1.5 4-1 3-2.5 4-3.5 1.5-5 1.5" />
            <path d="M9 12c-1.5 0-3 .5-4 1.5s-1.5 2.5-1.5 4" />
          </svg>
        </div>

        <div className="relative z-10">
          <p className="text-white/80 text-lg mb-4 font-medium">
            Most brands we partner with see a
          </p>
          
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-4 tracking-tight">
            30% to 50%
          </h2>
          
          <p className="text-white/80 text-lg mb-4 font-medium">
            increase in leads or sales within
          </p>
          
          <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight">
            90 days.
          </h3>
          
          <p className="text-white/60 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
            We get you more revenue with strategies that generate high-quality leads and increase e-commerce sales.
          </p>
          
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-lg shadow-primary/20 inline-flex items-center mx-auto group"
          >
            Let's Make Growth Happen
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Inner Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      </motion.div>
    </section>
  );
}
