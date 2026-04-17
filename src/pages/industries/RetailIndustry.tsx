import { motion } from 'motion/react';
import { ShoppingCart, Users, Zap, CheckCircle2, ArrowRight, Store, Repeat, MapPin, BarChart3, Tag, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import IndustryServiceSection, { ServiceMediaItem } from '../../components/IndustryServiceSection';
import IndustryProblemSection from '../../components/IndustryProblemSection';
import IndustryRevenueEngine from '../../components/IndustryRevenueEngine';

const stats = ['+60% Store Footfall', '+110% Online Sales', '4.2x Marketing ROI'];
const challenges = ['Online-offline data gap', 'High customer churn', 'Inventory management'];
const solutions = ['Local Inventory Ads', 'Loyalty Program Automation', 'Geo-targeted Footfall Campaigns'];

const servicesAndSolutions: ServiceMediaItem[] = [
  {
    title: 'Hyperlocal Store Discovery',
    description: 'We drive mass footfall to your physical stores using location-aware creatives and Google Maps ads that target customers within a 5-10km radius of your shop.',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    mediaAlt: 'Premium modern retail store interior',
    ctaText: 'Drive Local Traffic',
  },
  {
    title: 'Omni-channel Ad Strategy',
    description: 'Coordinate in-store offers and online campaigns so traffic and purchase intent move together across all touchpoints, from social media to the sales floor.',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1556740734-754f159a40c2?q=80&w=2070&auto=format&fit=crop',
    mediaAlt: 'Retail checkout and point of sale interface',
    ctaText: 'Sync My Channels',
  },
  {
    title: 'Loyalty & Retention Automation',
    description: 'Turn one-time buyers into brand advocates. We build automated WhatsApp and email sequences that reward repeat purchases and announce local festive sales.',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?q=80&w=2070&auto=format&fit=crop',
    mediaAlt: 'Modern high-end clothing store interior',
    ctaText: 'Scale Retention',
  },
];

const industryProblems = {
  keyProblems: [
    'No tracking of online ads to in-store sales',
    'Low customer repeat purchase rate',
    'Wasted ad spend on non-local buyers',
    'Manual festive promotion handling',
    'Inconsistent brand experience across channels',
  ],
  problemCards: [
    {
      title: 'Digital-to-Store Blind Spot',
      description: 'Most retailers cannot track if a person seeing an ad on Meta actually walked into their store to buy.',
    },
    {
      title: 'High Customer Churn',
      description: 'Without automated retention, 70% of customers never return for a second purchase after the first sale.',
      tag: 'Main Growth Barrier',
    },
    {
      title: 'Fragmented Customer Data',
      description: 'Customer data is stuck in POS systems and billing software, never utilized for targeted marketing.',
    },
  ],
  stats: [
    { percentage: '72%', label: 'Unused Data' },
    { percentage: '65%', label: 'One-time Buyers' },
    { percentage: '3.2x', label: 'Potential ROI' },
  ],
};

const revenueSteps = [
  {
    title: 'Local Discovery',
    description: 'Targeted ads for customers within 5-10km of store.',
    icon: MapPin,
  },
  {
    title: 'Lead Capture',
    description: 'Digital coupons or loyalty sign-ups to capture data.',
    icon: Tag,
  },
  {
    title: 'Store Visit',
    description: 'Conversion tracking using store visit conversions.',
    icon: Store,
  },
  {
    title: 'Analytics Sync',
    description: 'Monitor footfall trends and local market share.',
    icon: BarChart3,
  },
  {
    title: 'Repeat Growth',
    description: 'Retarget store visitors for loyalty & recurrency.',
    icon: ShoppingBag,
  },
];

export default function RetailIndustry() {
  return (
    <div className="pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-heading mb-8 leading-tight">
              Growth Solutions for <br />
              <span className="text-primary">Retail & Local Stores</span>
            </h1>
            <p className="text-xl text-body mb-10 leading-relaxed">
              Dominate your local market and drive mass footfall to your physical stores. We specialize in 
              hyper-local performance marketing that converts digital clicks into physical walk-ins.
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
              src="/assets/industries/retail-hero.png"
              alt="Retail Industry"
              className="rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] w-full min-h-[400px] object-cover border-4 border-white"
            />
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Footfall Lift</div>
                  <div className="text-2xl font-black text-slate-900">+110%</div>
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
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section (Alternating) */}
        <IndustryServiceSection 
          items={servicesAndSolutions}
          sectionTitle="Retail Growth Solutions"
          sectionDescription="We bridge the gap between digital discovery and physical sales using location-based targeting that works in real-time."
        />

        {/* Problem Section */}
        <IndustryProblemSection 
          industryName="Retail"
          keyProblems={industryProblems.keyProblems}
          problemCards={industryProblems.problemCards}
          stats={industryProblems.stats}
        />

        {/* Revenue Engine Section */}
        <IndustryRevenueEngine 
          steps={revenueSteps}
          title="The Retail Revenue Engine"
          description="A location-first methodology designed to drive sustainable growth for physical stores through precision digital awareness."
          stats={[
            { value: '4.8x', label: 'ROI', description: 'Avg return on local store visit ads', gradient: 'from-blue-600 to-blue-700' },
            { value: 'Rs 45', label: 'Per Visit', description: 'Lowest cost per physical store walk-in', gradient: 'from-slate-800 to-slate-900' },
            { value: '100%', label: 'Visibility', description: 'Real-time footfall analytics per location', gradient: 'from-indigo-600 to-indigo-700' },
          ]}
        />

        {/* Final CTA */}
        <div className="bg-[#0f172a] rounded-[50px] p-16 text-center text-white mt-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to boost your Store Footfall?</h2>
          <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's build a hyper-local strategy that makes your store the primary choice for every customer in your neighborhood.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-500 transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Get Local Growth Plan
            <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
