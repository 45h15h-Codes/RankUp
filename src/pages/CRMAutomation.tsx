import { motion } from 'motion/react';
import { Database, Zap, MessageSquare, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CRMAutomation() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-1.5 rounded-full mb-6"
            >
              <Zap className="w-4 h-4 text-primary fill-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Efficiency Redefined</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold text-heading mb-8 leading-tight"
            >
              Scale Smarter with <br />
              <span className="text-primary">CRM Automation</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-body mb-10 leading-relaxed"
            >
              Stop losing leads in spreadsheets. We build automated sales pipelines that nurture prospects, score leads, and help your team close deals faster.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/25 inline-flex items-center justify-center group"
              >
                Book a CRM Audit
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-[32px] shadow-soft border border-gray-100 relative z-10">
              <img 
                src="https://picsum.photos/seed/crm/800/600" 
                alt="CRM Interface" 
                className="rounded-2xl w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { title: 'Lead Nurturing', icon: MessageSquare, desc: 'Automated email and WhatsApp sequences that keep your brand top-of-mind.' },
            { title: 'Pipeline Management', icon: Database, desc: 'Visual sales stages that ensure no deal falls through the cracks.' },
            { title: 'Real-time Analytics', icon: BarChart3, desc: 'Track every interaction and measure the ROI of your sales efforts.' },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white border border-gray-100 rounded-2xl">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-4">{item.title}</h3>
              <p className="text-body">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="bg-[#0D1B40] rounded-[40px] p-12 md:p-20 text-white">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need to Automate Growth</h2>
            <p className="text-white/70 text-lg">We don't just give you software; we build the entire system for you.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {[
              'Custom CRM Setup (HubSpot, Salesforce, Zoho)',
              'Automated Lead Capture & Routing',
              'Multi-channel Nurturing (Email, SMS, WhatsApp)',
              'Advanced Lead Scoring Models',
              'Sales Team Activity Tracking',
              'Automated Appointment Scheduling',
              'Revenue Attribution Reporting',
              'Third-party Tool Integrations'
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-4">
                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-medium text-white/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
