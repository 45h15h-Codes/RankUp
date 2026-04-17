import { motion } from "motion/react";
import { useState } from "react";
import {
  Target,
  PhoneCall,
  CalendarCheck,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  HeartPulse,
  ClipboardCheck,
  MessageSquare,
  Activity,
  Microscope,
  Play,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import IndustryServiceSection, {
  ServiceMediaItem,
} from "../../components/IndustryServiceSection";
import IndustryProblemSection from "../../components/IndustryProblemSection";
import IndustryRevenueEngine from "../../components/IndustryRevenueEngine";

const stats = [
  "+140% Appointment Lift",
  "Rs 250 Cost Per Booking",
  "92% Patient Show-up Rate",
];
const challenges = [
  "Delayed lead response",
  "No patient nurturing",
  "Manual booking errors",
];
const solutions = [
  "Instant WhatsApp Nudges",
  "Automated OPD Systems",
  "High-Trust Patient Education",
];

const servicesAndSolutions: ServiceMediaItem[] = [
  {
    title: "High-Intent Patient Funnels",
    description:
      'We don\'t just generate "clicks". We build dedicated medical discovery funnels that capture patient intent and qualify them based on speciality and urgency.',
    mediaType: "image",
    mediaSrc:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop",
    mediaAlt: "Modern Healthcare Clinic Lobby",
    ctaText: "View Medical Funnels",
  },
  {
    title: "Automated OPD Booking Engines",
    description:
      "Stop losing patients to manual delays. Our automated WhatsApp systems follow up with patients in seconds and allow them to confirm slots directly on your calendar.",
    mediaType: "image",
    mediaSrc:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop",
    mediaAlt: "Doctor using healthcare management platform",
    ctaText: "See Booking System",
  },
  {
    title: 'Precision Clinic Targeting',
    description: 'We target patients based on their specific health intent, location, and previous booking behavior, ensuring your clinic appears for the right searches at the right time.',
    mediaType: 'image',
    mediaSrc: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2080&auto=format&fit=crop',
    mediaAlt: 'High-tech medical lab and data visualization',
    ctaText: 'See Target Profiles',
  },
];

const industryProblems = {
  keyProblems: [
    "OPD Enquiries are lost in WhatsApp groups",
    "Follow-up speed is too slow (hours vs minutes)",
    "High cancellation rate due to zero reminders",
    "No tracking of which ad led to which surgery",
    "Sales team is exhausted by manual tracking",
  ],
  problemCards: [
    {
      title: "The 5-Minute Lead Decay",
      description:
        "A medical enquiry loses 80% of its value if not responded to within 5 minutes. Most hospitals respond after 4 hours.",
    },
    {
      title: "Manual Handling Fatigue",
      description:
        'Relying on receptionists to manually call every lead is the "Silent Growth Killer" for large clinics and multi-speciality hospitals.',
      tag: "Scale Blocker",
    },
    {
      title: "Zero Attribution Loop",
      description:
        "If you can't track a Meta Ad lead to a final OPD visit, you are gambling with your marketing budget, not investing it.",
    },
  ],
  stats: [
    { percentage: "75%", label: "Enquiries Ignored" },
    { percentage: "Rs 150-300", label: "Inquiry Cost" },
    { percentage: "12.5x", label: "Potential ROI" },
  ],
};

const revenueSteps = [
  {
    title: "Patient Acquisition",
    description: "Condition-specific ads targeting active searchers.",
    icon: Target,
  },
  {
    title: "Instant Qualification",
    description: "Auto-score patients by ailment and location.",
    icon: ClipboardCheck,
  },
  {
    title: "Smart Follow-up",
    description: "Instant WhatsApp nudge with doctor profile.",
    icon: MessageSquare,
  },
  {
    title: "Booking Sync",
    description: "Automated slot booking for OPD visits.",
    icon: CalendarCheck,
  },
  {
    title: "ROI Attribution",
    description: "Full-cycle tracking from click to procedure.",
    icon: HeartPulse,
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

export default function HealthcareIndustry() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Fixed Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-heading mb-8 leading-tight">
              Growth Solutions for <br />
              <span className="text-primary">Medical & Healthcare</span>
            </h1>
            <p className="text-xl text-body mb-10 leading-relaxed">
              Scale your OPD volume and patient trust with data-driven
              performance marketing. We build the automated systems that turn
              medical enquiries into confirmed appointments.
            </p>
            <div className="flex flex-wrap gap-4">
              {stats.map((stat) => (
                <div
                  key={stat}
                  className="bg-blue-50 px-4 py-2 rounded-lg text-primary font-bold text-sm"
                >
                  {stat}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img
              src="/assets/industries/healthcare-hero.png"
              alt="Healthcare Industry"
              className="rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] w-full min-h-[400px] object-cover border-4 border-white"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">
                    Patient Lift
                  </div>
                  <div className="text-2xl font-black text-slate-900">
                    +140%
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-gray-50 p-10 rounded-[40px] border border-slate-200">
            <h2 className="text-2xl font-bold text-heading mb-8 flex items-center">
              <Star className="mr-3 text-amber-400" />
              Common Challenges
            </h2>
            <div className="space-y-4">
              {challenges.map((item) => (
                <div
                  key={item}
                  className="flex items-center space-x-3 text-body font-medium"
                >
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
                <div
                  key={item}
                  className="flex items-center space-x-3 text-heading font-bold"
                >
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <IndustryServiceSection
          items={servicesAndSolutions}
          sectionTitle="Healthcare Growth Systems"
          sectionDescription="We move away from 'Brand Awareness' and focus on the only metric that matters: Highly qualified OPD walk-ins."
        />

        {/* Problem Section */}
        <IndustryProblemSection
          industryName="Healthcare"
          keyProblems={industryProblems.keyProblems}
          problemCards={industryProblems.problemCards}
          stats={industryProblems.stats}
        />

        {/* Revenue Engine Section */}
        <IndustryRevenueEngine
          steps={revenueSteps}
          title="The Medical Revenue Engine"
          description="A data-backed pipeline designed to turn medical enquiries into surgery-ready patients automatically."
          stats={[
            {
              value: "12.5x",
              label: "ROI",
              description: "Avg return on speciality ad spend",
              gradient: "from-blue-600 to-blue-700",
            },
            {
              value: "-60%",
              label: "No-Shows",
              description: "Reduction in appointment drop-offs",
              gradient: "from-slate-800 to-slate-900",
            },
            {
              value: "100%",
              label: "Compliance",
              description: "Fully ethical healthcare marketing",
              gradient: "from-indigo-600 to-indigo-700",
            },
          ]}
        />

        {/* Testimonials Section */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Trusted by <span className="text-blue-600">Health Leaders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-[32px] p-4 shadow-sm hover:shadow-xl transition-shadow border border-slate-100"
              >
                <div
                  className="relative aspect-square rounded-[24px] overflow-hidden group cursor-pointer"
                  onClick={() => setActiveVideoUrl(testimonial.videoUrl)}
                >
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-slate-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-slate-500 font-medium">
                    {testimonial.role},{" "}
                    <span className="text-blue-600">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal Video */}
        {activeVideoUrl && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveVideoUrl(null)}
          >
            <div
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={activeVideoUrl}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Final CTA */}
        <div className="bg-[#0f172a] rounded-[50px] p-16 text-center text-white mt-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            Ready to Boost your OPD slots?
          </h2>
          <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's build a healthcare-first strategy that makes your clinic the
            primary choice for every patient in your city.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-500 transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Get Medical Growth Plan
            <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
