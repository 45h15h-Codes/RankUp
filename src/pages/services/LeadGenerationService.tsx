import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowRight,
  Target,
  PenTool,
  Layout,
  MessageSquare,
  BarChart3,
  Filter,
  CircleAlert,
  CheckCircle2,
  Zap,
  PhoneCall,
  CalendarCheck,
  TrendingUp,
  XCircle,
  ChevronDown,
  Play,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import OfficialPartners from "../../components/OfficialPartners";
import StatsBanner from "../../components/StatsBanner";
import TrustedBrands from "../../components/TrustedBrands";

/* ────────────────────────────── DATA ────────────────────────────── */

const processCards = [
  {
    step: "01",
    title: "Targeted Ad Campaigns",
    desc: "We reach the right audience on Google, Meta & LinkedIn with precision targeting that drives high-intent enquiries — not just clicks.",
    tone: "bg-gradient-to-br from-[#0A3D91] to-[#2563EB] text-white border-transparent md:col-span-2",
    icon: Target,
  },
  {
    step: "02",
    title: "High-Converting Creatives",
    desc: "Scroll-stopping ad creatives and persuasive copy that connect with your ideal customer and compel them to act.",
    tone: "bg-white text-[#111118] border-slate-200",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Optimized Landing Pages",
    desc: "Conversion-first funnels with fast-loading pages, trust signals, and clear CTAs that turn traffic into qualified leads.",
    tone: "bg-white text-[#111118] border-slate-200",
    icon: Layout,
  },
  {
    step: "04",
    title: "Instant Follow-Up & Nurturing",
    desc: "Automated WhatsApp + email follow-ups within seconds of a lead inquiry — so you never lose a hot prospect again.",
    tone: "bg-[#111118] text-white border-transparent md:col-span-2",
    icon: MessageSquare,
  },
  {
    step: "05",
    title: "Lead Qualification & Scoring",
    desc: "Auto-score and prioritize leads based on intent, budget, and behaviour so your sales team only talks to ready-to-buy prospects.",
    tone: "bg-gradient-to-r from-blue-50 to-indigo-50 text-[#111118] border-blue-100 md:col-span-2",
    icon: Filter,
  },
  {
    step: "06",
    title: "Performance Analytics",
    desc: "Full-funnel dashboards showing CPL, conversion rates, and ROI in real-time — so you can scale what works fast.",
    tone: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-transparent",
    icon: BarChart3,
  },
];


const keyProblems = [
  "Follow-ups take hours, not seconds",
  "Leads not qualified or scored",
  "No tracking system for conversions",
  "Manual processes everywhere",
  "Leads are never nurtured after first touch",
];

const problemCards = [
  {
    title: "Follow-ups take hours, not seconds",
    description:
      "A lead who filled your form just now chose your competitor 10 minutes later. Speed-to-lead is everything.",
  },
  {
    title: "Leads not qualified or scored",
    description:
      "Your sales team wastes hours chasing cold leads while high-intent prospects go unattended.",
  },
  {
    title: "No tracking system for conversions",
    description:
      "Without proper attribution, you can't tell which channels bring paying customers and which burn budget.",
  },
  {
    title: "Manual processes everywhere",
    description:
      "Spreadsheets and WhatsApp groups are not a CRM. Manual handling guarantees missed opportunities.",
  },
  {
    title: "Leads are never nurtured after first touch",
    description:
      "One message is not enough. Without a nurture sequence, prospects forget your brand within days.",
    tag: "Biggest revenue leak",
  },
];

const testimonials = [
  {
    name: "Sourav Patwari",
    role: "VP - Growth & Marketing",
    company: "Truemeds",
    imageSrc:
      "https://ik.imagekit.io/digitalroipune/WhatsApp-Image-2025-11-18-at-11.42.36-AM-1.jpeg",
    videoUrl: "https://www.youtube.com/embed/A8YYjMf1uFQ?autoplay=1",
  },
  {
    name: "Pritish Mahadik",
    role: "Growth Marketing Lead",
    company: "Amaha",
    imageSrc:
      "https://ik.imagekit.io/digitalroipune/WhatsApp-Image-2025-11-18-at-11.42.36-AM-2.jpeg",
    videoUrl: "https://www.youtube.com/embed/A8YYjMf1uFQ?autoplay=1",
  },
  {
    name: "Jill Bhanushali",
    role: "VP - Chief Admin Officer",
    company: "Regrow Biosciences",
    imageSrc:
      "https://ik.imagekit.io/digitalroipune/WhatsApp-Image-2025-11-18-at-11.42.36-AM.jpeg?updatedAt=1775149652369",
    videoUrl: "https://www.youtube.com/embed/A8YYjMf1uFQ?autoplay=1",
  },
];

/* ────────────────────────────── COMPONENT ────────────────────────────── */

export default function LeadGenerationService() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <main className="flex-grow">
      {/* ───── HERO ───── */}
      <section
        className="relative pt-32 pb-4 overflow-hidden"
      >
        {/* Pro-Max Aurora Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div 
            className="absolute inset-0" 
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/20 text-[#111118] font-bold text-[10px] sm:text-sm mb-6 sm:mb-8 shadow-xl">
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 mr-2 sm:mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-yellow-500"></span>
              </span>
              Performance-Driven Lead Generation
            </div>
            
            <h1 className="text-[34px] sm:text-5xl md:text-[84px] font-black tracking-tight text-[#111118] mb-6 sm:mb-8 max-w-5xl mx-auto leading-[1.05] md:leading-[1.05]">
              Get More <span className="text-blue-600">Qualified Leads</span> <br className="hidden sm:block" />
              &amp; <span className="relative inline-block">
                Close More Deals
                <motion.span 
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1.5 sm:h-2 bg-blue-600/20 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-slate-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-4">
              We build high-performance lead generation systems that attract,
              qualify, and convert your ideal customers — with smart ads,
              optimized funnels, and automated follow-ups.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 sm:mb-16 px-4">
              <Link to="/contact" className="group relative px-8 py-4 bg-[#111118] text-white rounded-2xl sm:rounded-full font-bold text-lg overflow-hidden transition-all active:scale-95 shadow-2xl flex items-center justify-center">
                <span className="relative z-10 flex items-center">
                  Get Your Growth Plan
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <a href="#how-it-works" className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-700 rounded-2xl sm:rounded-full font-bold text-lg hover:bg-white transition-all shadow-lg flex items-center justify-center">
                Explore Process
              </a>
            </div>
          </motion.div>
        </div>

      </section>

      {/* ───── TRUSTED BRANDS ───── */}
      <TrustedBrands />

      {/* ───── HOW WE GENERATE LEADS — BENTO GRID ───── */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
            >
              <span className="text-blue-600 font-bold text-[10px] sm:text-xs uppercase tracking-widest">
                Our Proven Framework
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#111118] tracking-tight leading-tight">
              A System Built for <br className="hidden sm:block" />
              <span className="text-blue-600">Predictable Growth</span>
            </h2>
          </div>

          <div className="small-card-grid sm:gap-6 md:gap-8">
            {processCards.map((card, index) => {
              const Icon = card.icon;
              const isLarge = card.tone.includes('md:col-span-2');
              return (
                <motion.article
                  key={card.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-5 sm:p-12 rounded-3xl sm:rounded-[40px] border shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500 ${card.tone} ${isLarge ? 'col-span-2' : ''}`}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-[22px] flex items-center justify-center mb-6 sm:mb-10 shadow-lg bg-white/20 backdrop-blur-md border border-white/30">
                      <Icon className="w-5 h-5 sm:w-8 sm:h-8" />
                    </div>
                    
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-black mb-2 sm:mb-4 tracking-tight leading-tight">
                      {card.title}
                    </h3>
                    
                    <p className="text-xs sm:text-lg leading-relaxed mt-2 opacity-75 font-medium">
                      {card.desc}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── WHY MOST BUSINESSES LOSE LEADS — PROBLEM SECTION ───── */}
      <section className="w-full py-16 sm:py-24 px-6 relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(30, 77, 183, 0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-6"
            >
              <CircleAlert className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
              The Growth Bottleneck
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#111118] leading-tight mb-6 tracking-tight">
              Why Most Businesses <br className="hidden sm:block" />
              <span className="text-blue-600">Struggle to Scale</span>
            </h2>
            <p className="text-base sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Generating leads is only half the battle. Most companies lose 70%+ of their 
              potential revenue in the first 24 hours due to broken follow-up systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left — Dark stats card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#111118] rounded-[32px] sm:rounded-[48px] p-8 sm:p-16 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px]" />
              
              <div className="relative z-10">
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-6 flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Industry Insights
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-6">
                  Most enquiries never become customers
                </h3>

                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
                  {[
                    { val: "79%", label: "Leads Lost" },
                    { val: "5 min", label: "Response" },
                    { val: "50%", label: "Win Rate" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center">
                      <span className="block text-lg sm:text-2xl md:text-3xl font-black text-blue-400 mb-1 tracking-tight">
                        {stat.val}
                      </span>
                      <span className="block text-[8px] sm:text-[10px] text-white/40 uppercase font-bold tracking-widest">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <ul className="space-y-4">
                  {keyProblems.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 sm:gap-4 text-white/70 text-sm sm:text-base font-medium"
                    >
                      <CircleAlert className="w-4 h-4 text-red-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right — Problem cards list */}
            <div className="small-card-grid lg:flex lg:flex-col lg:gap-6">
              {problemCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl sm:rounded-[32px] p-5 sm:p-8 border border-slate-100 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 shadow-sm active:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-50 text-blue-600 text-base sm:text-lg font-black flex items-center justify-center shrink-0 group-active:bg-blue-600 group-active:text-white transition-colors">
                    {index + 1}
                  </div>

                  <div>
                    <h4 className="text-sm sm:text-xl font-black text-[#111118] mb-1 sm:mb-2 tracking-tight">
                      {card.title}
                    </h4>
                    <p className="text-[10px] sm:text-base text-slate-500 leading-relaxed font-medium line-clamp-2 sm:line-clamp-none">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
               {/* ───── THE LEAD REVENUE ENGINE — 5 STEP PIPELINE ───── */}
      <section className="w-full py-16 sm:py-24 px-6 relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(30, 77, 183, 0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <header className="text-center mb-12 sm:mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-[10px] sm:text-xs font-black tracking-widest uppercase px-6 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping" />
              The RankUp Blueprint
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#111118] leading-tight mb-6 tracking-tight">
              The Lead <span className="text-blue-600">Revenue Engine</span>
            </h2>
            <p className="text-base sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
              A fully automated system designed to attract, qualify, and convert 
              leads into high-value customers — with 100% attribution.
            </p>
          </header>

          {/* Pipeline Steps */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-start mb-12 sm:mb-20 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-slate-100 z-0">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </div>

            {[
              {
                num: 1,
                step: "Phase 01",
                title: "Ad Launch",
                desc: "Precision targeting on Meta & Google",
                bg: "bg-[#111118]",
                icon: Target,
              },
              {
                num: 2,
                step: "Phase 02",
                title: "Lead Capture",
                desc: "High-converting forms & pages",
                bg: "bg-[#111118]",
                icon: Layout,
              },
              {
                num: 3,
                step: "Phase 03",
                title: "Instant Follow-Up",
                desc: "Response in <60 seconds",
                bg: "bg-blue-600",
                icon: PhoneCall,
              },
              {
                num: 4,
                step: "Phase 04",
                title: "Qualify",
                desc: "Automated lead priority scoring",
                bg: "bg-[#111118]",
                icon: CalendarCheck,
              },
              {
                num: 5,
                step: "Phase 05",
                title: "Conversion",
                desc: "End-to-end clicks to close deal",
                bg: "bg-gradient-to-br from-blue-600 to-indigo-600",
                icon: TrendingUp,
              },
            ].map((s, i) => {
              const StepIcon = s.icon;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-4 sm:p-0 bg-white sm:bg-transparent rounded-2xl border sm:border-0 border-slate-100 shadow-sm sm:shadow-none"
                >
                  <div className={`w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-[28px] flex items-center justify-center text-xl sm:text-2xl font-black mb-4 sm:mb-6 ${s.bg} text-white`}>
                    <StepIcon className="w-5 h-5 sm:w-8 sm:h-8" />
                  </div>
                  <span className="text-[8px] sm:text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1">
                    {s.step}
                  </span>
                  <h3 className="text-xs sm:text-lg font-black text-[#111118] mb-1 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-[10px] sm:text-sm text-slate-500 leading-relaxed font-medium line-clamp-2">
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Big stat cards */}
          <div className="small-card-grid md:grid-cols-3 gap-3 sm:gap-8 mb-12 sm:mb-16">
            {[
              { val: "3x", label: "Efficiency", desc: "More sales-ready leads", color: "from-blue-600 to-blue-700" },
              { val: "< 1 min", label: "Response", desc: "Avg lead response time", color: "from-slate-800 to-slate-900" },
              { val: "100%", label: "Data", desc: "Full click-to-close tracking", color: "from-indigo-600 to-indigo-700" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl sm:rounded-[40px] p-6 sm:p-10 text-white relative overflow-hidden bg-gradient-to-br ${stat.color} shadow-2xl`}
              >
                <div className="text-3xl sm:text-5xl font-black tracking-tighter mb-2 sm:mb-4">{stat.val}</div>
                <div className="text-[8px] sm:text-sm font-black uppercase tracking-[0.2em] mb-1 sm:mb-2 text-white/60">{stat.label}</div>
                <p className="text-[10px] sm:text-base text-white/80 font-medium leading-relaxed line-clamp-2 sm:line-clamp-none">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA banner */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111118] rounded-3xl sm:rounded-[48px] p-8 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden"
          >
            <div className="flex-1 text-center md:text-left relative z-10">
              <h3 className="text-2xl sm:text-4xl font-black text-white mb-4 tracking-tight">
                Ready to automate your <br className="hidden sm:block" /> lead revenue engine?
              </h3>
              <p className="text-sm sm:text-lg text-white/60 font-medium leading-relaxed">
                Join high-growth businesses using our system to scale their sales 
                pipeline with zero manual effort.
              </p>
            </div>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-black px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-full transition-all group"
            >
              Start Engine
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* ───── BEFORE / AFTER FUNNEL COMPARISON ───── */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-[10px] sm:text-xs font-black tracking-widest uppercase mb-6"
            >
              Performance Comparison
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111118] tracking-tight mb-4 leading-tight">
              Where do your <br className="sm:hidden" /> <span className="text-blue-600">leads go?</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto font-medium">
              Most businesses lose leads at every stage of the funnel. 
              Here is how we fix it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-20 items-stretch">
            {/* Left — WITHOUT System */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50/50 rounded-3xl sm:rounded-[48px] p-6 sm:p-12 border border-slate-100 relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-8 sm:mb-12">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-800">Without System</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Leaking Revenue</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { label: "100 New Enquiries", percent: 100, color: "bg-slate-300", val: "100%" },
                  { label: "Engaged / Followed up", percent: 22, color: "bg-slate-300", val: "22%", drop: "-78% Drop" },
                  { label: "Booked Call", percent: 6, color: "bg-slate-300", val: "6%", drop: "-73% Drop" },
                  { label: "Actual Sale", percent: 1.5, color: "bg-red-200 text-red-700", val: "1.5%", drop: "-75% Drop" },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="flex justify-between items-end mb-1 sm:mb-2 text-[10px] sm:text-sm">
                      <span className="font-bold text-slate-600 uppercase tracking-tighter">{item.label}</span>
                      <span className="font-black text-slate-400">{item.val}</span>
                    </div>
                    <div className="h-2.5 sm:h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${item.color}`}
                      />
                    </div>
                    {item.drop && (
                      <div className="absolute left-[30%] -bottom-4 text-[8px] sm:text-[10px] font-black text-red-500/60 hidden sm:flex items-center animate-pulse">
                        <ChevronDown className="w-3 h-3 rotate-180" />
                        {item.drop}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-200 text-center">
                <span className="text-3xl sm:text-4xl font-black text-slate-400">1.5%</span>
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Average ROAS</p>
              </div>
            </motion.div>

            {/* Right — WITH System */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#111118] rounded-3xl sm:rounded-[48px] p-6 sm:p-12 border border-blue-900/50 relative shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-8 sm:mb-12 relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white">Lead Revenue Engine</h3>
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Growth Powered</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 relative z-10">
                {[
                  { label: "100 New Enquiries", percent: 100, color: "bg-blue-600", val: "100%" },
                  { label: "Engaged / Followed up", percent: 94, color: "bg-blue-600", val: "94%", plus: "+72% Efficiency" },
                  { label: "Booked Call", percent: 48, color: "bg-blue-600", val: "48%", plus: "+700% Volume" },
                  { label: "Actual Sale", percent: 12, color: "bg-gradient-to-r from-blue-400 to-indigo-400", val: "12%", plus: "8X Sales Growth" },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="flex justify-between items-end mb-1 sm:mb-2 text-[10px] sm:text-sm">
                      <span className="font-bold text-white/70 uppercase tracking-tighter">{item.label}</span>
                      <span className="font-black text-blue-400">{item.val}</span>
                    </div>
                    <div className="h-2.5 sm:h-3 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        transition={{ duration: 1.5, ease: "circOut", delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5 text-center relative z-10">
                <span className="text-3xl sm:text-4xl font-black text-blue-400">12%</span>
                <p className="text-[10px] sm:text-xs font-bold text-blue-400/60 uppercase tracking-widest mt-1">Average Conversion</p>
              </div>
            </motion.div>
          </div>

          {/* Result Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-20 p-6 sm:p-10 rounded-3xl sm:rounded-[40px] bg-blue-50 border border-blue-100 text-center max-w-4xl mx-auto"
          >
            <p className="text-blue-900 font-bold text-lg sm:text-2xl leading-relaxed">
              "We don’t just buy more traffic, we help you <span className="bg-blue-600 text-white px-2 py-0.5 rounded-lg whitespace-nowrap">monetize more</span> of the leads you already generate."
            </p>
          </motion.div>
        </div>
      </section>


      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 sm:mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] sm:text-xs font-black tracking-widest uppercase mb-6"
            >
              Client Success Stories
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111118] tracking-tight">
              What Our <span className="text-blue-600">Clients</span> Say
            </h2>
          </div>
          
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 sm:gap-10 hide-scrollbar snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center group relative bg-white rounded-3xl sm:rounded-[40px] p-5 sm:p-6 shadow-sm active:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div
                  className="relative rounded-2xl sm:rounded-[32px] overflow-hidden cursor-pointer aspect-video mb-6 sm:mb-8"
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveVideoUrl(testimonial.videoUrl)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveVideoUrl(testimonial.videoUrl);
                    }
                  }}
                >
                  <img
                    alt={testimonial.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    src={testimonial.imageSrc}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-125 shadow-2xl">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-3 left-3 sm:top-4 left-4">
                    <span className="bg-[#111118]/80 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-black uppercase tracking-widest px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10">
                      {testimonial.company}
                    </span>
                  </div>
                </div>

                <div className="px-1 sm:px-2">
                  <div className="flex items-center gap-0.5 text-yellow-400 mb-2 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400" />
                    ))}
                  </div>
                  <h3 className="text-base sm:text-xl font-black text-[#111118] mb-0.5 sm:mb-1 tracking-tight">
                    {testimonial.name}
                  </h3>
                  <p className="text-[10px] sm:text-sm font-bold text-blue-600 mb-1 sm:mb-2">{testimonial.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>


      <OfficialPartners />
      <StatsBanner />

      {/* ───── VIDEO MODAL ───── */}
      {activeVideoUrl ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveVideoUrl(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setActiveVideoUrl(null)}
              aria-label="Close video modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <iframe
              src={activeVideoUrl}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Client testimonial video"
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}
