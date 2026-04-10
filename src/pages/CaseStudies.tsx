import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../content/caseStudies';

export default function CaseStudies() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-heading mb-6"
          >
            Our <span className="text-primary">Success Stories</span>
          </motion.h1>
          <p className="text-xl text-body max-w-3xl mx-auto">
            Real results for real businesses. Explore how we've helped brands across industries achieve explosive growth.
          </p>
        </div>

        <div className="space-y-20">
          {caseStudies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative group overflow-hidden rounded-[32px] shadow-soft">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-heading mb-6">{item.title}</h2>
                <p className="text-body text-lg mb-8 leading-relaxed">{item.desc}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {item.stats.map((stat) => (
                    <div key={stat.label} className="bg-blue-50 p-4 rounded-2xl text-center">
                      <p className="text-xl font-black text-primary mb-1">{stat.value}</p>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="inline-flex items-center text-primary font-bold group">
                  Read Full Case Study
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
