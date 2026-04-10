import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function ClientShowcase() {
  return (
    <section className="py-24 bg-[#F0F4FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading mb-4">
            Growth of Our Client Is Our Motivation
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            See how we've helped industry leaders achieve their growth and optimize their marketing ROI.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-blue-50 grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left: Mockups */}
          <div className="lg:col-span-4 relative h-[300px] md:h-[400px]">
            <div className="absolute top-0 left-0 w-48 h-80 bg-blue-100 rounded-2xl rotate-[-6deg] shadow-lg overflow-hidden border-4 border-white">
              <img src="https://picsum.photos/seed/app1/300/500" alt="App UI" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute top-10 left-20 w-48 h-80 bg-white rounded-2xl rotate-[6deg] shadow-xl overflow-hidden border-4 border-white z-10">
              <img src="https://picsum.photos/seed/app2/300/500" alt="App UI" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* Center: Brand Info */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-lg mb-6">
              <img
                src="/RankUp-Logo-transperent.png"
                alt="RankUp"
                className="h-6 w-auto object-contain"
              />
              <span className="text-xs font-bold text-primary uppercase">Case Study</span>
            </div>
            <h3 className="text-2xl font-bold text-heading mb-2">India's #1 Home Platform</h3>
            <p className="text-primary font-semibold mb-6">India's mobile energy platform</p>
            <p className="text-body leading-relaxed mb-8">
              Helping millions of customers access clean energy solutions through a seamless digital experience and automated growth funnels.
            </p>
            <div className="flex items-center space-x-1 justify-center lg:justify-start">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="ml-2 font-bold text-heading">4.9/5</span>
            </div>
          </div>

          {/* Right: Metrics */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-bold text-heading">Ad campaigns growth</span>
                <span className="text-sm font-bold text-primary">94%</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '94%' }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-full bg-primary rounded-full"
                ></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-bold text-heading">Ad experience is qualified</span>
                <span className="text-sm font-bold text-primary">88%</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '88%' }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                  className="h-full bg-primary rounded-full"
                ></motion.div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">ROI Generated</p>
              <p className="text-3xl font-black text-heading tracking-tight">12.4x</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
