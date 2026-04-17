import { Target, PenTool, Layout, MessageSquare, Database, BarChart3, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Targeted Ads',
    icon: Target,
    description: 'Data-driven campaigns on Meta, Google and LinkedIn to reach high-intent buyers.',
    link: '/services/lead-generation',
    colorTheme: {
      border: 'border-violet-100/80 hover:border-violet-300',
      gradient: 'to-violet-50/60',
      iconBg: 'bg-violet-50 border-violet-100/50',
      iconHoverBg: 'group-hover:bg-violet-500',
      iconHoverShadow: 'group-hover:shadow-[0_8px_30px_rgba(139,92,246,0.3)]',
      iconText: 'text-violet-500',
      textHover: 'group-hover:text-violet-500',
      learnMore: 'text-violet-500'
    }
  },
  {
    title: 'Engaging Content',
    icon: PenTool,
    description: 'Compelling ad copy and creatives that capture attention and drive action.',
    link: '/services/ecommerce',
    colorTheme: {
      border: 'border-orange-100/80 hover:border-orange-300',
      gradient: 'to-orange-50/60',
      iconBg: 'bg-orange-50 border-orange-100/50',
      iconHoverBg: 'group-hover:bg-orange-500',
      iconHoverShadow: 'group-hover:shadow-[0_8px_30px_rgba(249,115,22,0.3)]',
      iconText: 'text-orange-500',
      textHover: 'group-hover:text-orange-500',
      learnMore: 'text-orange-500'
    }
  },
  {
    title: 'Optimized Landing Pages',
    icon: Layout,
    description: 'High-converting funnels designed to turn clicks into qualified leads.',
    link: '/services/lead-generation',
    colorTheme: {
      border: 'border-blue-100/80 hover:border-blue-300',
      gradient: 'to-blue-50/60',
      iconBg: 'bg-blue-50 border-blue-100/50',
      iconHoverBg: 'group-hover:bg-blue-500',
      iconHoverShadow: 'group-hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)]',
      iconText: 'text-blue-500',
      textHover: 'group-hover:text-blue-500',
      learnMore: 'text-blue-500'
    }
  },
  {
    title: 'WhatsApp Automation',
    icon: MessageSquare,
    description: 'Automated follow-ups and advanced nurturing to keep leads engaged 24/7.',
    link: '/crm-automation',
    colorTheme: {
      border: 'border-emerald-100/80 hover:border-emerald-300',
      gradient: 'to-emerald-50/60',
      iconBg: 'bg-emerald-50 border-emerald-100/50',
      iconHoverBg: 'group-hover:bg-emerald-500',
      iconHoverShadow: 'group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.3)]',
      iconText: 'text-emerald-500',
      textHover: 'group-hover:text-emerald-500',
      learnMore: 'text-emerald-500'
    }
  },
  {
    title: 'CRM Systems',
    icon: Database,
    description: 'Business-level scaling and pipeline management to close deals faster.',
    link: '/crm-automation',
    colorTheme: {
      border: 'border-rose-100/80 hover:border-rose-300',
      gradient: 'to-rose-50/60',
      iconBg: 'bg-rose-50 border-rose-100/50',
      iconHoverBg: 'group-hover:bg-rose-500',
      iconHoverShadow: 'group-hover:shadow-[0_8px_30px_rgba(244,63,94,0.3)]',
      iconText: 'text-rose-500',
      textHover: 'group-hover:text-rose-500',
      learnMore: 'text-rose-500'
    }
  },
  {
    title: 'Smart Analytics',
    icon: BarChart3,
    description: 'Real-time tracking and attribution to measure ROI and scale winners.',
    link: '/services/ecommerce',
    colorTheme: {
      border: 'border-amber-100/80 hover:border-amber-300',
      gradient: 'to-amber-50/60',
      iconBg: 'bg-amber-50 border-amber-100/50',
      iconHoverBg: 'group-hover:bg-amber-500',
      iconHoverShadow: 'group-hover:shadow-[0_8px_30px_rgba(245,158,11,0.3)]',
      iconText: 'text-amber-500',
      textHover: 'group-hover:text-amber-500',
      learnMore: 'text-amber-500'
    }
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
        <div className="small-card-grid gap-3 sm:gap-6 md:gap-8 mb-20 relative z-10">
          {features.map((feature, index) => (
            <Link to={feature.link} key={feature.title} className="block h-full outline-none">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover="hover"
                className={`relative p-5 sm:p-8 md:p-10 bg-white border ${feature.colorTheme.border} rounded-2xl sm:rounded-[2rem] transition-all duration-500 group h-full cursor-pointer shadow-soft hover:shadow-xl hover:-translate-y-2 overflow-hidden flex flex-col`}
              >
                {/* Subtle gradient hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent ${feature.colorTheme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                
                {/* Inner ring for glass effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-[2rem] ring-1 ring-inset ring-white/50 pointer-events-none" />

                <div className="relative z-10 flex-grow flex flex-col">
                  <motion.div 
                    variants={{
                      hover: { 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.4, type: "spring", stiffness: 300 }
                      }
                    }}
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${feature.colorTheme.iconBg} flex items-center justify-center mb-4 sm:mb-8 ${feature.colorTheme.iconHoverBg} ${feature.colorTheme.iconHoverShadow} transition-all duration-300 relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <feature.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.colorTheme.iconText} group-hover:text-white transition-colors duration-300 relative z-10`} strokeWidth={1.5} />
                  </motion.div>
                  
                  <h3 className={`text-base sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-4 ${feature.colorTheme.textHover} transition-colors duration-300 tracking-tight leading-snug`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-base md:text-lg mb-4 sm:mb-6 flex-grow line-clamp-3 sm:line-clamp-none">
                    {feature.description}
                  </p>

                  <div className="mt-auto pt-1 sm:pt-2 overflow-hidden">
                    <div className={`flex items-center text-[10px] sm:text-sm font-bold ${feature.colorTheme.learnMore} sm:translate-y-8 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out`}>
                      Learn how
                      <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
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
