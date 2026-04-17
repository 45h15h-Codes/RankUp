import { motion } from 'motion/react';
import { Target, Layout, PhoneCall, CalendarCheck, TrendingUp, Users, Zap, CheckCircle2, ArrowRight, ShoppingCart, ShoppingBag, CreditCard, BarChart3, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import IndustryServiceSection, { ServiceMediaItem } from '../../components/IndustryServiceSection';
import IndustryProblemSection from '../../components/IndustryProblemSection';
import IndustryRevenueEngine from '../../components/IndustryRevenueEngine';

const stats = ['+240% ROAS', 'Rs 45 Cost Per Sale', '95% Cart Recovery Rate'];
const challenges = ['High CAC', 'Cart abandonment', 'Platform scalability'];
const solutions = ['Dynamic Remarketing', 'Checkout Optimization', 'Performance Branding'];

const servicesAndSolutions: ServiceMediaItem[] = [
  {
    title: 'Precision ROAS Campaigns',
    description: 'We don\'t just drive traffic; we drive profitable sales. Our campaigns are optimized for Return on Ad Spend (ROAS) using advanced pixel tracking and server-side tagging to beat rising ad costs.',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2073',
    mediaAlt: 'Ecommerce ROAS campaign dashboard',
    ctaText: 'Scale My Sales',
  },
  {
    title: 'Automated Cart Recovery',
    description: 'Recover up to 25% of lost revenue with automated WhatsApp and email sequences that trigger the moment a customer leaves their cart, offering personalized incentives to finish the buy.',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2070',
    mediaAlt: 'Ecommerce cart recovery automation',
    ctaText: 'Recover My Revenue',
  },
  {
    title: 'D2C Brand Scalability',
    description: 'From 10 orders a day to 1,000. We build the growth infrastructure and high-performance creative testing cycles needed for D2C brands to scale without breaking.',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=2070&auto=format&fit=crop',
    mediaAlt: 'Ecommerce delivery parcel and logistics chain',
    ctaText: 'See Scaling Plan',
  },
];

const industryProblems = {
  keyProblems: [
    'Rising Customer Acquisition Cost (CAC) eating profits',
    '70% of shoppers abandon their carts at checkout',
    'Low returning customer rate and high churn',
    'Inaccurate tracking and attribution across platforms',
    'Creative fatigue in social media ads dropping ROAS',
  ],
  problemCards: [
    {
      title: 'The CAC Trap',
      description: 'Facebook and Google ads are getting more expensive. If your funnel doesn\'t convert at a high rate, you are losing money on every sale.',
    },
    {
      title: 'Silent Revenue Leak',
      description: 'Thousands are visiting your store, adding to cart, and leaving. Without a recovery system, you are throwing money away.',
      tag: 'Critical Blocker',
    },
    {
      title: 'Data Blindness',
      description: 'Relying on platform-reported ROAS is dangerous. You need first-party data to know which ads are actually putting money in your bank.',
    },
  ],
  stats: [
    { percentage: '72%', label: 'Cart Abandoned' },
    { percentage: '3.8x', label: 'Avg ROAS' },
    { percentage: '12%', label: 'Retention Rate' },
  ],
};

const revenueSteps = [
  {
    title: 'Attract',
    description: 'Creative-first ads that stop the scroll.',
    icon: Target,
  },
  {
    title: 'Convert',
    description: 'High-speed checkout and landing pages.',
    icon: ShoppingCart,
  },
  {
    title: 'Recover',
    description: 'Automated WhatsApp cart recovery flows.',
    icon: ShoppingBag,
  },
  {
    title: 'Retain',
    description: 'Post-purchase nurturing for repeat buys.',
    icon: CreditCard,
  },
  {
    title: 'Scalability',
    description: 'Data-driven scaling of winning creatives.',
    icon: BarChart3,
  },
];

export default function EcommerceIndustry() {
  return (
    <div className="pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-heading mb-8 leading-tight">
              Growth Solutions for <br />
              <span className="text-primary">E-commerce Brands</span>
            </h1>
            <p className="text-xl text-body mb-10 leading-relaxed">
              Scale your D2C brand from 5-figures to 7-figures with performance marketing that focuses on profitability. 
              We build the engine that drives sustainable e-commerce growth.
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
              src="/assets/industries/ecommerce-hero.png"
              alt="E-commerce Industry"
              className="rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] w-full min-h-[400px] object-cover border-4 border-white"
            />
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Revenue Lift</div>
                  <div className="text-2xl font-black text-slate-900">+240%</div>
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
          sectionTitle="E-commerce Pro-Max Funnels"
          sectionDescription="We move away from 'boosted posts' and build sophisticated full-funnel strategies that acquire, convert, and retain customers profitably."
        />

        {/* Problem Section */}
        <IndustryProblemSection 
          industryName="E-commerce"
          keyProblems={industryProblems.keyProblems}
          problemCards={industryProblems.problemCards}
          stats={industryProblems.stats}
        />

        {/* Revenue Engine Section */}
        <IndustryRevenueEngine 
          steps={revenueSteps}
          title="The E-commerce Revenue Engine"
          description="A data-driven pipeline that focuses on maximizing Lifetime Value (LTV) while keeping Customer Acquisition Cost (CAC) under control."
          stats={[
            { value: '6.5x', label: 'ROI', description: 'Avg return on ad spend for E-commerce', gradient: 'from-blue-600 to-blue-700' },
            { value: '28%', label: 'Recovery', description: 'Abandoned cart revenue recovered', gradient: 'from-slate-800 to-slate-900' },
            { value: '100%', label: 'Profitability', description: 'Focus on contribution margin tracking', gradient: 'from-indigo-600 to-indigo-700' },
          ]}
        />

        {/* Final CTA */}
        <div className="bg-[#0f172a] rounded-[50px] p-16 text-center text-white mt-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to scale your D2C brand?</h2>
          <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Get a high-performance growth plan tailored to your product category and scaling targets.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-500 transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Scale My Store
            <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
