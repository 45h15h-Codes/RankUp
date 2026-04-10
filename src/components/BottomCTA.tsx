import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function BottomCTA() {
  return (
    <section className="py-24 bg-[#0D1B40] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Ready to scale your <span className="text-primary">revenue?</span>
            </h2>
            <p className="text-white/70 text-lg">
              Join 49+ brands already growing their business with our performance marketing strategies.
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl shadow-primary/40 inline-flex items-center group whitespace-nowrap"
            >
              Get A Free Consultation
              <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0 -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
