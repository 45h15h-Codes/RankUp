import { Target, PenTool, Layout, MessageSquare, Database, BarChart3, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Targeted Ads',
    icon: Target,
    description: 'Data-driven campaigns on Meta, Google and LinkedIn to reach high-intent buyers.',
  },
  {
    title: 'Engaging Content',
    icon: PenTool,
    description: 'Compelling ad copy and creatives that capture attention and drive action.',
  },
  {
    title: 'Optimized Landing Pages',
    icon: Layout,
    description: 'High-converting funnels designed to turn clicks into qualified leads.',
  },
  {
    title: 'WhatsApp Automation',
    icon: MessageSquare,
    description: 'Automated follow-ups and advanced nurturing to keep leads engaged 24/7.',
  },
  {
    title: 'CRM Systems',
    icon: Database,
    description: 'Business-level scaling and pipeline management to close deals faster.',
  },
  {
    title: 'Smart Analytics',
    icon: BarChart3,
    description: 'Real-time tracking and attribution to measure ROI and scale winners.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 relative">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">
            OUR GROWTH ENGINE
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-6">
            How We Grow Your <br />
            <span className="text-primary">Business</span>
          </h2>
          <p className="text-body max-w-2xl text-lg">
            Comprehensive marketing solutions designed to scale your revenue and optimize your performance.
          </p>

          {/* Floating Stat Badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute top-0 right-0 md:right-20 z-20 hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white shadow-soft border border-blue-50 px-4 py-3 rounded-xl flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Conversion Rate</p>
                <p className="text-lg font-bold text-green-600">+61%</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute bottom-0 right-0 z-20 hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="bg-white shadow-soft border border-blue-50 px-4 py-3 rounded-xl flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Cost Per Lead</p>
                <p className="text-lg font-bold text-primary">-98%</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover="hover"
              className="p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-soft hover:-translate-y-1 transition-all duration-300 group h-full cursor-pointer"
            >
              <motion.div 
                variants={{
                  hover: { 
                    rotate: [0, -10, 10, -5, 5, 0],
                    scale: 1.1,
                    transition: { duration: 0.5, ease: "easeInOut" }
                  }
                }}
                className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors"
              >
                <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="text-xl font-bold text-heading mb-4">{feature.title}</h3>
              <p className="text-body leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-primary/25 inline-flex items-center mx-auto group"
          >
            Get More Qualified Leads
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
