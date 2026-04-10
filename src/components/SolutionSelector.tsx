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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-primary rounded-2xl p-8 md:p-12 shadow-soft flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold text-heading mb-8">Lead Generation</h3>
            <ul className="space-y-6 mb-12 flex-grow">
              {[
                'Generate qualified leads from Google, Meta and LinkedIn',
                'Automate your follow-ups and increase conversions',
                'Track everything with powerful analytics',
              ].map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-body font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-full font-bold text-base transition-all inline-flex items-center justify-center group"
            >
              Get More Qualified Leads
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* E-commerce Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0D1B40] rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col h-full text-white"
          >
            <h3 className="text-2xl font-bold mb-8">E-commerce</h3>
            <ul className="space-y-6 mb-12 flex-grow">
              {[
                'Drive targeted traffic to your product pages',
                'Increase sales with optimized product pages',
                'Use data-driven creatives to improve your ROI',
              ].map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="w-full border-2 border-white/20 hover:bg-white hover:text-[#0D1B40] text-white px-6 py-4 rounded-full font-bold text-base transition-all inline-flex items-center justify-center group"
            >
              Get More Online Sales
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
