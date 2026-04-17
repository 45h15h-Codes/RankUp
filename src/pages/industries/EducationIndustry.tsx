import { motion } from 'motion/react';
import { Target, Layout, PhoneCall, CalendarCheck, TrendingUp, Users, Zap, CheckCircle2, ArrowRight, GraduationCap, BookOpen, Presentation, UserPlus, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import IndustryServiceSection, { ServiceMediaItem } from '../../components/IndustryServiceSection';
import IndustryProblemSection from '../../components/IndustryProblemSection';
import IndustryRevenueEngine from '../../components/IndustryRevenueEngine';

const stats = ['+180% Enrolment Rate', 'Rs 150 Cost Per Lead', '90% Admission Conversion'];
const challenges = ['High competition', 'Parent/Student trust', 'Seasonal admission cycles'];
const solutions = ['Webinar-driven Funnels', 'Course Specific Meta Ads', 'Automated Admission Counseling'];

const servicesAndSolutions: ServiceMediaItem[] = [
  {
    title: 'Admissions Capture Funnel',
    description: 'Stop using generic enquiry forms. We build high-converting landing pages that exchange course brochures or admission guides for verified student data.',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    mediaAlt: 'Education admissions capture dashboard',
    ctaText: 'View Success Cases',
  },
  {
    title: 'Webinar & Event Automation',
    description: 'Maximize attendance for your open house and information sessions. Our automated systems send personalized reminders via WhatsApp to ensure students show up.',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    mediaAlt: 'Education webinar and event automation',
    ctaText: 'Automate My Events',
  },
  {
    title: 'Course-Specific Meta Ads',
    description: 'We target students based on their actual academic interests and intent, ensuring your ad budget is spent only on prospects who can actually enroll.',
    mediaType: 'video',
    mediaSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    mediaAlt: 'Education ad sequence video',
    ctaText: 'See Course Ads',
  },
];

const industryProblems = {
  keyProblems: [
    'Leads come in but admission counselor follow-up is slow',
    'Parents visit the website but never leave contact info',
    'Low attendance for webinars and info sessions',
    'No way to track ad spend to final fee-paying student',
    'Irrelevant enquiries for wrong courses or years',
  ],
  problemCards: [
    {
      title: 'The Counselor Bottleneck',
      description: 'Waiting for a human to call back a student results in an 80% drop-off. Speed to engagement is the only metric that leads to admissions.',
    },
    {
      title: 'Anonymous Visitor Waste',
      description: '98% of people visit your website and leave. Without "Lead Magnets" like brochures, you are paying for traffic you never talk to again.',
      tag: 'Budget Leak',
    },
    {
      title: 'Broken Tracking Loop',
      description: 'If you can\'t tell which specific ad campaign resulted in a final fee-paying enrollment, you are gambling, not marketing.',
    },
  ],
  stats: [
    { percentage: '85%', label: 'Leads Lost' },
    { percentage: '2 hours', label: 'Avg Follow-up' },
    { percentage: '6.5x', label: 'Potential ROI' },
  ],
};

const revenueSteps = [
  {
    title: 'Awareness',
    description: 'Course-specific ads targeting students & parents.',
    icon: Target,
  },
  {
    title: 'Interest',
    description: 'Prospects download brochures/guides via funnels.',
    icon: BookOpen,
  },
  {
    title: 'Engagement',
    description: 'Automated webinar/event invites via WhatsApp.',
    icon: Presentation,
  },
  {
    title: 'Counseling',
    description: 'Pre-qualified leads sent to admission teams.',
    icon: UserPlus,
  },
  {
    title: 'Admission',
    description: 'Final enrolment with click-to-admission ROI.',
    icon: Award,
  },
];

export default function EducationIndustry() {
  return (
    <div className="pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-heading mb-8 leading-tight">
              Growth Solutions for <br />
              <span className="text-primary">Educational Institutions</span>
            </h1>
            <p className="text-xl text-body mb-10 leading-relaxed">
              Scale your admissions with precision targeting and automated student nurturing. We build the systems that 
              fill your classrooms with high-intent, fee-paying students.
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
              src="/assets/industries/education-hero.png"
              alt="Education Industry"
              className="rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] w-full min-h-[400px] object-cover border-4 border-white"
            />
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Admissions UP</div>
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
          sectionTitle="Education Growth Funnels"
          sectionDescription="We move students from anonymous browsers to fee-paying enrolments through a combination of high-value lead magnets and automated nurturing."
        />

        {/* Problem Section */}
        <IndustryProblemSection 
          industryName="Education"
          keyProblems={industryProblems.keyProblems}
          problemCards={industryProblems.problemCards}
          stats={industryProblems.stats}
        />

        {/* Revenue Engine Section */}
        <IndustryRevenueEngine 
          steps={revenueSteps}
          title="The Admission Revenue Engine"
          description="A multi-step funnel that qualifies interest, automates engagement, and delivers only the highest-intent prospects to your admission desk."
          stats={[
            { value: '4.2x', label: 'ROI', description: 'Avg return on ad spend for Education', gradient: 'from-blue-600 to-blue-700' },
            { value: '+65%', label: 'Efficiency', description: 'Reduction in manual follow-up time', gradient: 'from-slate-800 to-slate-900' },
            { value: '100%', label: 'Visibility', description: 'Full lead-to-admission reporting', gradient: 'from-indigo-600 to-indigo-700' },
          ]}
        />

        {/* Final CTA */}
        <div className="bg-[#0c4a6e] rounded-[50px] p-16 text-center text-white mt-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to scale your Admissions?</h2>
          <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Get a custom growth session tailored to your institution\'s specific course offerings and admission goals.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-500 transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Design My Funnel
            <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
