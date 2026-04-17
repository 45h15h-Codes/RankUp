import { motion } from 'motion/react';
import { Target, Layout, PhoneCall, CalendarCheck, TrendingUp, Users, Zap, CheckCircle2, ArrowRight, Sun, Battery, Zap as Bolt, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import IndustryServiceSection, { ServiceMediaItem } from '../../components/IndustryServiceSection';
import IndustryProblemSection from '../../components/IndustryProblemSection';
import IndustryRevenueEngine from '../../components/IndustryRevenueEngine';

const stats = ['+150% Lead Quality', 'Rs 250 Cost Per Lead', '12x ROI on Ad Spend'];
const challenges = ['High competition', 'Low intent leads', 'Inconsistent lead flow'];
const solutions = ['Landing Page Optimization', 'High Intent Meta Ads', 'Lead Nurturing Automation'];

const servicesAndSolutions: ServiceMediaItem[] = [
  {
    title: 'High-Intent Lead Funnels',
    description: 'We don\'t just drive traffic; we build high-converting landing pages that pre-qualify residential and commercial solar prospects before they even submit their details.',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop',
    mediaAlt: 'Solar panel close-up during sunset',
    ctaText: 'View Case Study',
  },
  {
    title: 'Automated Solar Appointment Setting',
    description: 'Stop chasing leads manually. Our automated systems send instant WhatsApp and email reminders, allowing prospects to book solar consultations directly into your calendar.',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2070&auto=format&fit=crop',
    mediaAlt: 'Residential solar panel installation on rooftop',
    ctaText: 'Explore Automation',
  },
  {
    title: 'Geo-Targeted Performance Ads',
    description: 'Dominate your local market. We run hyper-local Facebook and Google ads targeting homeowners in specific pin codes with the highest rooftop solar potential.',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2070&auto=format&fit=crop',
    mediaAlt: 'Large scale utility solar farm installation',
    ctaText: 'See Ad Samples',
  },
];

const industryProblems = {
  keyProblems: [
    'Leads are non-serious "window shoppers"',
    'Follow-ups happen 24 hours too late',
    'Ad budget wasted on wrong demographics',
    'No system to track ROI per project',
    'Poor tracking from ad click to installation',
  ],
  problemCards: [
    {
      title: 'The "Junk Lead" Trap',
      description: 'Facebook forms often attract users who are "just curious". Without qualifying funnels, your sales team wastes 80% of their time on junk.',
    },
    {
      title: 'Delayed Response Gap',
      description: 'A homeowner interested in solar is often talking to 3-4 installers. If you don\'t respond in 60 seconds, you lose the deal.',
      tag: 'Deal Breaker',
    },
    {
      title: 'Broken Attribution',
      description: 'Many agencies show you "clicks" and "impressions". We show you cost per site visit and cost per final installation.',
    },
  ],
  stats: [
    { percentage: '82%', label: 'Leads Lost' },
    { percentage: '12 min', label: 'Avg Follow-up' },
    { percentage: '4.5x', label: 'Potential ROI' },
  ],
};

const revenueSteps = [
  {
    title: 'Solar Awareness',
    description: 'Targeted ads for homeowners searching for "Solar Savings".',
    icon: Sun,
  },
  {
    title: 'Energy Audit Funnel',
    description: 'Interactive calculator that qualifies high-intent leads.',
    icon: Battery,
  },
  {
    title: 'Instant Nurturing',
    description: 'Automated WhatsApp follow-up with savings brochure.',
    icon: Bolt,
  },
  {
    title: 'Consultation Booking',
    description: 'Confirmed site visits booked automatically.',
    icon: CalendarCheck,
  },
  {
    title: 'Installation closure',
    description: 'End-to-end CRM tracking for final ROI attribution.',
    icon: Leaf,
  },
];

export default function SolarIndustry() {
  return (
    <div className="pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-heading mb-8 leading-tight">
              Growth Solutions for <br />
              <span className="text-primary">Solar Installers</span>
            </h1>
            <p className="text-xl text-body mb-10 leading-relaxed">
              Scale your rooftop solar installations with precision performance marketing. We generate high-quality solar leads 
              and automate your appointment setting process.
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
              src="/assets/industries/solar-hero.png"
              alt="Solar Industry"
              className="rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] w-full min-h-[400px] object-cover border-4 border-white"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Growth Rate</div>
                  <div className="text-2xl font-black text-slate-900">+185%</div>
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
          sectionTitle="Solar Performance Marketing Funnels"
          sectionDescription="We move away from 'Likes' and 'Shares' and focus on the only metric that matters for your solar business: High-intent leads and project closures."
        />

        {/* Problem Section */}
        <IndustryProblemSection 
          industryName="Solar"
          keyProblems={industryProblems.keyProblems}
          problemCards={industryProblems.problemCards}
          stats={industryProblems.stats}
        />

        {/* Revenue Engine Section */}
        <IndustryRevenueEngine 
          steps={revenueSteps}
          title="The Solar Revenue Engine"
          description="A fully automated pipeline designed specifically for solar installers to capture, nurture, and convert online visitors into rooftop installations."
          stats={[
            { value: '12x', label: 'ROAS', description: 'Average return for high-converting solar ads', gradient: 'from-blue-600 to-blue-700' },
            { value: '3x', label: 'Consultations', description: 'Increase in booked solar appointments', gradient: 'from-slate-800 to-slate-900' },
            { value: '100%', label: 'Tracking', description: 'End-to-end attribution from click to installation', gradient: 'from-indigo-600 to-indigo-700' },
          ]}
        />

        {/* Final CTA */}
        <div className="bg-primary rounded-[50px] p-16 text-center text-white mt-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to dominate the Solar Market?</h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Get a custom growth strategy session where we audit your current lead generation and show you how to scale.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
