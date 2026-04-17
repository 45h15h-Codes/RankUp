import { motion } from 'motion/react';
import { Target, Layout, PhoneCall, CalendarCheck, TrendingUp, Users, Zap, CheckCircle2, ArrowRight, Home, Building2, Map, Camera, Key } from 'lucide-react';
import { Link } from 'react-router-dom';
import IndustryServiceSection, { ServiceMediaItem } from '../../components/IndustryServiceSection';
import IndustryProblemSection from '../../components/IndustryProblemSection';
import IndustryRevenueEngine from '../../components/IndustryRevenueEngine';

const stats = ['+85% Lead-to-Site Visit', '3.5x ROI on Ad Spend', '92% Quality Score'];
const challenges = ['High competition', 'Low intent window shoppers', 'Complex decision cycles'];
const solutions = ['Virtual Tour Funnels', 'Geo-Fencing Ads', 'Identity-driven Remarketing'];

const servicesAndSolutions: ServiceMediaItem[] = [
  {
    title: 'Virtual Tour Lead Funnels',
    description: 'Stop driving traffic to generic listings. We build high-converting funnels that exchange an exclusive "Virtual Tour" or "Project Brochure" for high-quality student data.',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop',
    mediaAlt: 'Luxury Real Estate Interior',
    ctaText: 'View Luxe Funnel',
  },
  {
    title: 'Automated Site Visit Booking',
    description: 'Stop waiting for your sales team to call back. Our automated WhatsApp systems follow up with prospects in seconds and allow them to book site visits directly.',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    mediaAlt: 'Modern Luxury Property Architecture',
    ctaText: 'Book Site Visit',
  },
  {
    title: 'Precision Luxury Targeting',
    description: 'We target High-Net-Worth Individuals (HNIs) using advanced interest-based profiling and location targeting to move premium inventories faster.',
    mediaType: 'video',
    mediaSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    mediaAlt: 'Real estate precision targeting walkthrough',
    ctaText: 'See Target Profiles',
  },
];

const industryProblems = {
  keyProblems: [
    'Leads are non-serious "window shoppers"',
    '60% of leads are never called back by sales',
    'High cost per site visit due to bad targeting',
    'No system to track which ad led to a booking',
    'Brochures are sent manually, wasting time',
  ],
  problemCards: [
    {
      title: 'The Response Dead-Zone',
      description: 'In Real Estate, a lead\'s interest drops by 400% if not contacted within 5 minutes. Most sales teams take 5 hours.',
    },
    {
      title: 'The "Luxe" Marketing Failure',
      description: 'Running generic ads for luxury properties results in "unqualified" spam. You need filtered funnels to protect your sales team\'s time.',
      tag: 'Luxury Special',
    },
    {
      title: 'Attribution Blindness',
      description: 'If you don\'t know which specific ad campaign resulted in a physical site visit, you are gambling with your marketing budget.',
    },
  ],
  stats: [
    { percentage: '65%', label: 'Leads Ignored' },
    { percentage: 'Rs 300-500', label: 'Cost Per Visit' },
    { percentage: '15.5x', label: 'Avg ROI' },
  ],
};

const revenueSteps = [
  {
    title: 'Interest Capture',
    description: 'Ads for exclusive brochures and virtual tours.',
    icon: Home,
  },
  {
    title: 'Qualify & Nurture',
    description: 'Instant WhatsApp follow-up with project details.',
    icon: PhoneCall,
  },
  {
    title: 'Visit Booking',
    description: 'Automated site visit scheduling and reminders.',
    icon: Building2,
  },
  {
    title: 'Site Visit Closure',
    description: 'Sales team closes high-intent walk-ins.',
    icon: Key,
  },
  {
    title: 'Data Optimization',
    description: 'Full-cycle ROI tracking for campaign scaling.',
    icon: Map,
  },
];

export default function RealEstateIndustry() {
  return (
    <div className="pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-heading mb-8 leading-tight">
              Growth Solutions for <br />
              <span className="text-primary">Real Estate Developers</span>
            </h1>
            <p className="text-xl text-body mb-10 leading-relaxed">
              Transform your digital presence into a physical sales machine. We specialize in generating high-intent site visits 
              and automating the property sales cycle for builders and brokers.
            </p>
            <div className="flex flex-wrap gap-4">
              {stats.map((stat) => (
                <div key={stat} className="bg-blue-50 px-4 py-2 rounded-lg text-primary font-bold text-sm">
                  {stat}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <img
              src="/assets/industries/realestate-hero.png"
              alt="Real Estate Industry"
              className="rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] w-full min-h-[400px] object-cover border-4 border-white"
            />
             {/* Floating Badge */}
             <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">HNI Leads</div>
                  <div className="text-2xl font-black text-slate-900">+180%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-gray-50 p-10 rounded-[40px] border border-slate-200">
            <h2 className="text-2xl font-bold text-heading mb-8 flex items-center">
              <Users className="mr-3 text-gray-400" />
              Common Challenges
            </h2>
            <div className="space-y-4">
              {challenges.map((item) => (
                <div key={item} className="flex items-center space-x-3 text-body font-medium">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 p-10 rounded-[40px] border border-blue-100">
            <h2 className="text-2xl font-bold text-heading mb-8 flex items-center">
              <Zap className="mr-3 text-primary" />
              Our Solutions
            </h2>
            <div className="space-y-4">
              {solutions.map((item) => (
                <div key={item} className="flex items-center space-x-3 text-heading font-bold">
                  <span className="text-primary font-bold text-lg leading-none mt-1">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section (Alternating) */}
        <IndustryServiceSection 
          items={servicesAndSolutions}
          sectionTitle="Real Estate Conversion Funnels"
          sectionDescription="We stop 'advertising' and start building automated buyer journeys that deliver physical walk-ins consistently."
        />

        {/* Problem Section */}
        <IndustryProblemSection 
          industryName="Real Estate"
          keyProblems={industryProblems.keyProblems}
          problemCards={industryProblems.problemCards}
          stats={industryProblems.stats}
        />

        {/* Revenue Engine Section */}
        <IndustryRevenueEngine 
          steps={revenueSteps}
          title="The Real Estate Revenue Engine"
          description="A data-backed pipeline designed to turn anonymous property seekers into confirmed site visit walk-ins."
          stats={[
            { value: '22x', label: 'ROI', description: 'Average return on ad spend for luxury projects', gradient: 'from-blue-600 to-blue-700' },
            { value: '+180%', label: 'Walk-ins', description: 'Increase in monthly physical site visits', gradient: 'from-slate-800 to-slate-900' },
            { value: 'Rs 350', label: 'Per Visit', description: 'Market leading cost per physical walk-in', gradient: 'from-indigo-600 to-indigo-700' },
          ]}
        />

        {/* Final CTA */}
        <div className="bg-[#1e293b] rounded-[50px] p-16 text-center text-white mt-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to Fill your Site Visits?</h2>
          <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Get a high-performance inventory disposal plan tailored to your specific project locations and buyer demographics.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-500 transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Scale My Bookings
            <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
