import { motion } from 'motion/react';
import { useState } from 'react';
import { CheckCircle2, CircleAlert, Users, Zap } from 'lucide-react';

const stats = ['+90% Appointment Rate', 'Rs 300 Cost Per Booking', '98% Patient Satisfaction'];
const challenges = ['Strict regulations', 'Trust building', 'Local search visibility'];
const solutions = ['Local SEO & Google Ads', 'Patient Education Content', 'Automated Appointment Reminders'];
type ServiceMediaItem = {
  title: string;
  description: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  mediaAlt: string;
};

const servicesAndSolutions: ServiceMediaItem[] = [
  {
    title: 'Local Patient Acquisition Funnels',
    description: 'Geo-targeted campaigns and dedicated landing funnels that drive high-intent appointment enquiries.',
    mediaType: 'image',
    mediaSrc: 'https://picsum.photos/seed/healthcare-service-1/960/640',
    mediaAlt: 'Healthcare local patient acquisition dashboard',
  },
  {
    title: 'Appointment Follow-up Automation',
    description: 'Automated reminders and nurturing across WhatsApp and email to reduce no-shows and drop-offs.',
    mediaType: 'image',
    mediaSrc: 'https://picsum.photos/seed/healthcare-service-2/960/640',
    mediaAlt: 'Healthcare appointment follow-up workflow',
  },
  {
    title: 'Trust-building Content Journeys',
    description: 'Educational video-first content sequences that improve patient confidence and conversion rates.',
    mediaType: 'video',
    mediaSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    mediaAlt: 'Healthcare trust-building content sequence',
  },
];

const keyProblems = [
  'Follow-ups are Delayed',
  'Leads Not Properly Qualified',
  'No Clear Tracking System',
  'Everything Handled Manually',
  'Patients Are Never Nurtured',
];

const problemCards = [
  {
    title: 'Follow-ups are Delayed',
    description: 'A patient who enquired this morning chose your competitor by afternoon. Speed wins.',
  },
  {
    title: 'Leads Not Properly Qualified',
    description: 'Your team spends time on cold leads while serious patients slip away unattended.',
  },
  {
    title: 'No Clear Tracking System',
    description: "Without tracking, you can't know which leads are hot, cold, or already gone to someone else.",
  },
  {
    title: 'Everything Handled Manually',
    description: 'WhatsApp groups and Excel sheets are not a CRM. Manual processes mean missed patients - guaranteed.',
  },
  {
    title: 'Patients Are Never Nurtured',
    description: 'One message is not enough. Without consistent follow-up, patients forget your hospital within days.',
    tag: 'Biggest revenue leak',
  },
];

type TestimonialItem = {
  name: string;
  role: string;
  company: string;
  imageSrc: string;
  videoUrl: string;
};

const testimonials: TestimonialItem[] = [
  {
    name: 'Sourav Patwari',
    role: 'VP - Growth & Marketing',
    company: 'Truemeds',
    imageSrc: 'https://ik.imagekit.io/digitalroipune/WhatsApp-Image-2025-11-18-at-11.42.36-AM-1.jpeg',
    videoUrl: 'https://www.youtube.com/embed/A8YYjMf1uFQ?autoplay=1',
  },
  {
    name: 'Pritish Mahadik',
    role: 'Growth Marketing Lead',
    company: 'Amaha',
    imageSrc: 'https://ik.imagekit.io/digitalroipune/WhatsApp-Image-2025-11-18-at-11.42.36-AM-2.jpeg',
    videoUrl: 'https://www.youtube.com/embed/A8YYjMf1uFQ?autoplay=1',
  },
  {
    name: 'Jill Bhanushali',
    role: 'VP - Chief Admin Officer',
    company: 'Regrow Biosciences',
    imageSrc: 'https://ik.imagekit.io/digitalroipune/WhatsApp-Image-2025-11-18-at-11.42.36-AM.jpeg?updatedAt=1775149652369',
    videoUrl: 'https://www.youtube.com/embed/A8YYjMf1uFQ?autoplay=1',
  },
];

function ServiceMedia({ item }: { item: ServiceMediaItem }) {
  if (item.mediaType === 'video') {
    return (
      <video className="w-full h-full object-cover" controls muted loop playsInline preload="metadata">
        <source src={item.mediaSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return <img src={item.mediaSrc} alt={item.mediaAlt} className="w-full h-full object-cover" referrerPolicy="no-referrer" />;
}

export default function HealthcareIndustry() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-heading mb-8 leading-tight">
              Growth Solutions for <br />
              <span className="text-primary">Healthcare</span>
            </h1>
            <p className="text-xl text-body mb-10 leading-relaxed">
              Connect with patients when they need you most through ethical and effective marketing. We understand the
              unique challenges of the Healthcare sector and have built proven systems to overcome them.
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
              src="https://picsum.photos/seed/healthcare/800/600"
              alt="Healthcare"
              className="rounded-[32px] shadow-soft w-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-gray-50 p-10 rounded-[32px]">
            <h2 className="text-2xl font-bold text-heading mb-8 flex items-center">
              <Users className="mr-3 text-gray-400" />
              Common Challenges
            </h2>
            <div className="space-y-4">
              {challenges.map((item) => (
                <div key={item} className="flex items-center space-x-3 text-body font-medium">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 p-10 rounded-[32px]">
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

        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Our Services and Solutions</h2>
            <p className="text-body max-w-3xl mx-auto">
              Our section design stays consistent across industries while the execution strategy and creative assets are customized for your market.
            </p>
          </div>

          <div className="space-y-8">
            {servicesAndSolutions.map((item, index) => (
              <div
                key={item.title}
                className={`grid lg:grid-cols-2 gap-6 items-center ${index % 2 !== 0 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
                  }`}
              >
                <div className="rounded-[28px] border border-slate-200 bg-white shadow-soft overflow-hidden min-h-[260px]">
                  <ServiceMedia item={item} />
                </div>
                <div className="rounded-[36px] rounded-bl-[84px] bg-gradient-to-r from-[#0A4A9D] via-[#1565C0] to-[#2F80ED] p-8 md:p-10 shadow-[0_18px_40px_rgba(21,101,192,0.35)]">
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-blue-50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full py-[clamp(60px,8vw,110px)] px-[clamp(16px,5vw,80px)] relative overflow-hidden rounded-[32px]">
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(30, 77, 183, 0.08) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10 max-w-[1140px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5a6231a] border-[1.5px] border-[#f5a62366] text-[#b8700a] text-[clamp(11px,0.7rem+0.2vw,13px)] font-bold tracking-[0.11em] uppercase mb-4.5">
                <CircleAlert className="w-3.5 h-3.5 text-[#f5a623]" />
                The Real Problem
              </span>

              <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold text-[#0f1f5c] leading-[1.15] mb-4 tracking-tight mx-auto">
                Why Most Healthcare providers
                <br />
                <span className="text-[#1e4db7]">Lose Patients</span>
              </h2>

              <p className="text-[clamp(15px,1.8vw,18px)] text-[#4a5a8a] max-w-[560px] mx-auto leading-[1.65]">
                Even after generating enquiries, most hospitals &amp; clinics fail to convert them into real patient
                walk-ins, not because of marketing, but because of what happens after the enquiry comes in.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
              <div className="bg-gradient-to-br from-[#0f1f5c] to-[#1e4db7] rounded-[24px] p-[clamp(28px,4vw,48px)] shadow-[0_8px_32px_rgba(14,30,90,0.14),0_1px_4px_rgba(14,30,90,0.08)] relative overflow-hidden">
                <div className="absolute -top-[60px] -right-[60px] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_70%)] rounded-full pointer-events-none" />

                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#f5a623] mb-4 flex items-center gap-1.5">
                  <span className="inline-block w-5 h-[2px] bg-[#f5a623] rounded-[2px]" />
                  Industry Reality
                </div>

                <h3 className="text-[clamp(20px,1.5rem+0.5vw,30px)] font-extrabold text-white leading-[1.2] mb-2.5">
                  Most enquiries never become appointments
                </h3>
                <p className="text-[clamp(13px,0.85rem+0.1vw,15px)] text-white/70 leading-[1.7] mb-7 max-w-[44ch]">
                  Hospitals spend lakhs generating leads through ads and referrals - then lose the majority of them to
                  slow follow-up and poor tracking.
                </p>

                <div className="flex gap-3 flex-wrap mb-8">
                  <div className="bg-white/12 border border-white/12 rounded-[10px] p-2.5 px-4 text-center flex-1 min-w-[90px]">
                    <span className="block text-[clamp(18px,1.4rem+0.4vw,26px)] font-extrabold text-[#f5a623] leading-[1.1] tracking-tight">
                      78%
                    </span>
                    <span className="block text-[11px] text-white/70 mt-0.5 tracking-[0.02em] leading-[1.4]">
                      Leads never
                      <br />
                      converted
                    </span>
                  </div>
                  <div className="bg-white/12 border border-white/12 rounded-[10px] p-2.5 px-4 text-center flex-1 min-w-[90px]">
                    <span className="block text-[clamp(18px,1.4rem+0.4vw,26px)] font-extrabold text-[#f5a623] leading-[1.1] tracking-tight">
                      5 min
                    </span>
                    <span className="block text-[11px] text-white/70 mt-0.5 tracking-[0.02em] leading-[1.4]">
                      Ideal response
                      <br />
                      window
                    </span>
                  </div>
                  <div className="bg-white/12 border border-white/12 rounded-[10px] p-2.5 px-4 text-center flex-1 min-w-[90px]">
                    <span className="block text-[clamp(18px,1.4rem+0.4vw,26px)] font-extrabold text-[#f5a623] leading-[1.1] tracking-tight">
                      60%
                    </span>
                    <span className="block text-[11px] text-white/70 mt-0.5 tracking-[0.02em] leading-[1.4]">
                      Choose first
                      <br />
                      responder
                    </span>
                  </div>
                </div>

                <ul className="list-none flex flex-col gap-2.5">
                  {keyProblems.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-white/80 text-sm">
                      <CircleAlert className="w-4 h-4 text-[#f5a623] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3.5">
                {problemCards.map((card, index) => (
                  <div
                    key={card.title}
                    className="bg-white rounded-[18px] p-5 px-5.5 flex items-start gap-4 shadow-[0_2px_12px_rgba(14,30,90,0.07),0_1px_3px_rgba(14,30,90,0.04)] transition-all duration-240 hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(14,30,90,0.13),0_2px_6px_rgba(14,30,90,0.07)] group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-[#1e4db70a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-240" />

                    <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-[#0f1f5c] to-[#1e4db7] text-white text-sm font-extrabold flex items-center justify-center shrink-0 tracking-tighter relative z-10">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>

                    <div className="relative z-10">
                      <h4 className="text-[clamp(14px,0.9rem+0.15vw,16px)] font-bold text-[#1a2035] leading-[1.3] mb-1">
                        {card.title}
                      </h4>
                      <p className="text-[clamp(12px,0.78rem+0.1vw,14px)] text-[#3d4a6b] leading-[1.6]">
                        {card.description}
                      </p>

                      {card.tag ? (
                        <span className="inline-flex items-center gap-1.5 bg-[#fff4e0] text-[#a05e00] text-[11px] font-bold uppercase tracking-[0.07em] px-2.5 py-1 rounded-full mt-2">
                          <CircleAlert className="w-2.5 h-2.5" />
                          {card.tag}
                        </span>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pre-section w-full py-[clamp(60px,8vw,100px)] px-[clamp(20px,4vw,40px)] relative overflow-hidden bg-white">
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(30, 77, 183, 0.07) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="pre-inner max-w-[1160px] mx-auto relative z-10">
            <header className="text-center mb-[clamp(48px,7vw,80px)]">
              <div className="inline-flex items-center gap-2 bg-[rgba(30,77,183,0.1)] border border-[rgba(30,77,183,0.2)] text-[#1e4db7] text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 bg-[#f5a623] rounded-full animate-pulse"></span>
                Digital ROI Solution
              </div>
              <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold text-[#0f1f5c] leading-[1.15] mb-4 tracking-tight">
                The Patient{' '}
                <span className="text-[#1e4db7] relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-[#f5a623] after:to-[#e8971a] after:rounded-[2px]">
                  Revenue Engine
                </span>
              </h2>
              <p className="text-[clamp(15px,1.8vw,18px)] text-[#4a5a8a] max-w-[560px] mx-auto leading-[1.65]">
                A simple system designed to turn enquiries into real patients - tracked, followed up, and converted
                automatically.
              </p>
            </header>

            <div className="pre-pipeline grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 items-start mb-14 relative">
              <div className="hidden lg:block absolute top-[31px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#c3d0f0] via-[#1e4db7] to-[#c3d0f0] z-0"></div>

              <div className="pre-step flex flex-col items-center text-center px-2.5 pb-8 relative z-10 group">
                <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center text-[21px] font-extrabold mb-[18px] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.08] shrink-0 bg-[#0f1f5c] text-white shadow-[0_4px_18px_rgba(15,31,92,0.35)]">
                  1
                </div>
                <span className="inline-block text-[10px] font-bold tracking-[0.1em] uppercase text-[#8a9cc8] mb-1.5">
                  Step 01
                </span>
                <h3 className="text-[clamp(13px,1.3vw,15px)] font-bold text-[#0f1f5c] leading-[1.3] mb-1.5">
                  Patient Acquisition
                </h3>
                <p className="text-[12px] text-[#6070a0] leading-[1.55]">
                  Capture enquiries from ads, website forms &amp; WhatsApp
                </p>
              </div>

              <div className="pre-step flex flex-col items-center text-center px-2.5 pb-8 relative z-10 group">
                <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center text-[21px] font-extrabold mb-[18px] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.08] shrink-0 bg-[#1a327a] text-white shadow-[0_4px_18px_rgba(26,50,122,0.35)]">
                  2
                </div>
                <span className="inline-block text-[10px] font-bold tracking-[0.1em] uppercase text-[#8a9cc8] mb-1.5">
                  Step 02
                </span>
                <h3 className="text-[clamp(13px,1.3vw,15px)] font-bold text-[#0f1f5c] leading-[1.3] mb-1.5">
                  Lead Qualification
                </h3>
                <p className="text-[12px] text-[#6070a0] leading-[1.55]">
                  Auto-score leads by treatment type, urgency &amp; location
                </p>
              </div>

              <div className="pre-step flex flex-col items-center text-center px-2.5 pb-8 relative z-10 group">
                <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center text-[21px] font-extrabold mb-[18px] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.08] shrink-0 bg-[#1e4db7] text-white shadow-[0_4px_18px_rgba(30,77,183,0.35)]">
                  3
                </div>
                <span className="inline-block text-[10px] font-bold tracking-[0.1em] uppercase text-[#8a9cc8] mb-1.5">
                  Step 03
                </span>
                <h3 className="text-[clamp(13px,1.3vw,15px)] font-bold text-[#0f1f5c] leading-[1.3] mb-1.5">
                  Instant Follow-up
                </h3>
                <p className="text-[12px] text-[#6070a0] leading-[1.55]">Respond in seconds - not hours</p>
                <div className="flex gap-1 justify-center mt-2 flex-wrap">
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap bg-[rgba(37,211,102,0.1)] text-[#128C7E] border border-[rgba(37,211,102,0.25)]">
                    ✓ WhatsApp
                  </span>
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap bg-[rgba(30,77,183,0.1)] text-[#1e4db7] border border-[rgba(30,77,183,0.2)]">
                    CRM
                  </span>
                </div>
              </div>

              <div className="pre-step flex flex-col items-center text-center px-2.5 pb-8 relative z-10 group">
                <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center text-[21px] font-extrabold mb-[18px] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.08] shrink-0 bg-[#2b65d9] text-white shadow-[0_4px_18px_rgba(43,101,217,0.35)]">
                  4
                </div>
                <span className="inline-block text-[10px] font-bold tracking-[0.1em] uppercase text-[#8a9cc8] mb-1.5">
                  Step 04
                </span>
                <h3 className="text-[clamp(13px,1.3vw,15px)] font-bold text-[#0f1f5c] leading-[1.3] mb-1.5">
                  Conversion to OPD
                </h3>
                <p className="text-[12px] text-[#6070a0] leading-[1.55]">
                  Nurture leads to confirmed hospital appointments
                </p>
              </div>

              <div className="pre-step flex flex-col items-center text-center px-2.5 pb-8 relative z-10 group">
                <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center text-[21px] font-extrabold mb-[18px] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.08] shrink-0 bg-gradient-to-br from-[#212529] to-[#2391f5] text-white">
                  5
                </div>
                <span className="inline-block text-[10px] font-bold tracking-[0.1em] uppercase text-[#8a9cc8] mb-1.5">
                  Step 05
                </span>
                <h3 className="text-[clamp(13px,1.3vw,15px)] font-bold text-[#0f1f5c] leading-[1.3] mb-1.5">
                  Revenue Tracking
                </h3>
                <p className="text-[12px] text-[#6070a0] leading-[1.55]">
                  See which leads became patients &amp; what revenue they earned
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              <div className="rounded-[20px] p-7 px-6 text-white relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,31,92,0.3)] group bg-gradient-to-br from-[#0f1f5c] to-[#1e4db7]">
                <div className="absolute -top-[30px] -right-[30px] w-[100px] h-[100px] bg-white/5 rounded-full pointer-events-none"></div>
                <div className="text-[clamp(32px,4vw,44px)] font-black tracking-tight leading-none mb-1.5">3x</div>
                <div className="text-base opacity-85 leading-[1.45] font-medium">
                  More OPD conversions from the same number of enquiries
                </div>
              </div>

              <div className="rounded-[20px] p-7 px-6 text-white relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,31,92,0.3)] group bg-gradient-to-br from-[#1a327a] to-[#2b65d9]">
                <div className="absolute -top-[30px] -right-[30px] w-[100px] h-[100px] bg-white/5 rounded-full pointer-events-none"></div>
                <div className="text-[clamp(32px,4vw,44px)] font-black tracking-tight leading-none mb-1.5">
                  {'< 1 min'}
                </div>
                <div className="text-base opacity-85 leading-[1.45] font-medium">
                  Average follow-up time via WhatsApp automation
                </div>
              </div>

              <div className="rounded-[20px] p-7 px-6 text-white relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,31,92,0.3)] group bg-gradient-to-br from-[#212529] to-[#2391f5]">
                <div className="absolute -top-[30px] -right-[30px] w-[100px] h-[100px] bg-white/5 rounded-full pointer-events-none"></div>
                <div className="text-[clamp(32px,4vw,44px)] font-black tracking-tight leading-none mb-1.5">100%</div>
                <div className="text-base opacity-85 leading-[1.45] font-medium">
                  Leads tracked - zero manual entries, zero lost patients
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f1f5c] via-[#1e4db7] to-[#2b65d9] rounded-[24px] p-[clamp(28px,4vw,44px)] px-[clamp(24px,4vw,52px)] flex items-center justify-between gap-6 flex-wrap relative overflow-hidden">
              <div className="absolute -top-[60px] -right-[60px] w-[220px] h-[220px] bg-white/5 rounded-full pointer-events-none"></div>
              <div className="flex-1 min-w-[260px] relative z-10">
                <h3 className="text-[clamp(18px,2.5vw,26px)] font-extrabold text-white mb-2 leading-[1.25]">
                  Ready to automate your patient revenue?
                </h3>
                <p className="text-sm text-white/70 leading-[1.55]">
                  Join 30+ healthcare facilities using our engine to scale their OPD.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[#f5a623] hover:bg-[#ffb83a] text-[#0f1f5c] text-base font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_28px_rgba(245,166,35,0.45)] relative z-10 group"
              >
                Get Your Growth Plan
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
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A202C]">
                What Our <span className="text-[#084E96]">Clients</span> <span className="text-[#84A9DE]">Say</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div
                    className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-video"
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveVideoUrl(testimonial.videoUrl)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setActiveVideoUrl(testimonial.videoUrl);
                      }
                    }}
                  >
                    <img
                      alt={testimonial.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      src={testimonial.imageSrc}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-blue-500/30 flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <div className="w-12 h-12 rounded-full bg-[#D53F8C] flex items-center justify-center shadow-lg">
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
                            className="w-5 h-5 text-white fill-white ml-1"
                            aria-hidden="true"
                          >
                            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-6 mb-4">
                    <h3 className="text-lg font-medium text-slate-900">{testimonial.name}</h3>
                    <p className="font-bold text-slate-900">{testimonial.role}</p>
                    <p className="text-slate-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 relative overflow-hidden bg-white font-['DM_Sans',_sans-serif] rounded-3xl">
          <div className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="max-w-[1120px] mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 text-[11px] font-bold tracking-[0.14em] uppercase mb-4">
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
                  className="w-3 h-3"
                  aria-hidden="true"
                >
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
                Patient Journey Analysis
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-[#0f172a] leading-[1.15] mb-3 tracking-tight">
                What Happens to{' '}
                <span className="bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] bg-clip-text text-transparent">
                  Your Enquiries Today?
                </span>
              </h2>
              <p className="text-base text-gray-600 max-w-[50ch] mx-auto leading-relaxed">
                See exactly where patients drop off - and how every step is recovered with the OPD Growth System.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-[0_4px_24px_rgba(30,58,95,0.1),0_1px_4px_rgba(30,58,95,0.06)] flex flex-col h-full group hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(30,58,95,0.14)] transition-all duration-300">
                <div className="p-6 pb-4 bg-gradient-to-br from-[#1e3a5f] to-[#374151] flex flex-col gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-red-300/30 text-red-300 text-[11px] font-bold tracking-wider uppercase w-fit">
                    <CircleAlert className="w-2.5 h-2.5" />
                    Typical Lead Generation Funnel
                  </div>
                  <h3 className="text-[1.9rem] font-extrabold text-white leading-tight">Without a System</h3>
                  <p className="text-sm text-white/70">How most clinics lose patients every day</p>
                </div>

                <div className="p-7 flex-1">
                  <div className="flex flex-col h-full">
                    <div className="flex gap-4 group/step">
                      <div className="flex flex-col items-center shrink-0 w-[52px]">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-[13px] font-extrabold border-[2.5px] transition-transform duration-250 group-hover/step:scale-110 bg-red-50 text-red-600 border-red-600/20">
                          100
                        </div>
                        <div className="w-[2px] flex-1 min-h-[20px] rounded-full my-0.5 opacity-50 bg-gradient-to-b from-red-300 to-orange-300"></div>
                      </div>
                      <div className="flex-1 pt-1 pb-6">
                        <div className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-1">Total Enquiries</div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl font-extrabold text-[#0f172a] leading-none">100</span>
                          <span className="text-sm text-gray-500">leads come in</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-2 rounded-full flex-1 bg-black/5 overflow-hidden">
                            <div className="h-full rounded-full bg-red-500"></div>
                          </div>
                          <span className="text-[13px] font-extrabold text-gray-500 min-w-[3rem] text-right">100%</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 group/step">
                      <div className="flex flex-col items-center shrink-0 w-[52px]">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-[13px] font-extrabold border-[2.5px] transition-transform duration-250 group-hover/step:scale-110 bg-orange-50 text-orange-600 border-orange-600/20">
                          30
                        </div>
                        <div className="w-[2px] flex-1 min-h-[20px] rounded-full my-0.5 opacity-50 bg-gradient-to-b from-orange-300 to-yellow-300"></div>
                      </div>
                      <div className="flex-1 pt-1 pb-6">
                        <div className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-1">Qualified Leads</div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl font-extrabold text-[#0f172a] leading-none">30</span>
                          <span className="text-sm text-gray-500">prospects</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-2 rounded-full flex-1 bg-black/5 overflow-hidden">
                            <div className="h-full rounded-full bg-orange-500 scale-x-[0.3] origin-left"></div>
                          </div>
                          <span className="text-[13px] font-extrabold text-gray-500 min-w-[3rem] text-right">30%</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 group/step">
                      <div className="flex flex-col items-center shrink-0 w-[52px]">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-[13px] font-extrabold border-[2.5px] transition-transform duration-250 group-hover/step:scale-110 bg-yellow-50 text-yellow-600 border-yellow-600/20">
                          10
                        </div>
                        <div className="w-[2px] flex-1 min-h-[20px] rounded-full my-0.5 opacity-50 bg-gradient-to-b from-yellow-300 to-gray-300"></div>
                      </div>
                      <div className="flex-1 pt-1 pb-6">
                        <div className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-1">Clinic Visits</div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl font-extrabold text-[#0f172a] leading-none">10</span>
                          <span className="text-sm text-gray-500">actually show up</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-2 rounded-full flex-1 bg-black/5 overflow-hidden">
                            <div className="h-full rounded-full bg-yellow-500 scale-x-[0.1] origin-left"></div>
                          </div>
                          <span className="text-[13px] font-extrabold text-gray-500 min-w-[3rem] text-right">10%</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 group/step">
                      <div className="flex flex-col items-center shrink-0 w-[52px]">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-[13px] font-extrabold border-[2.5px] transition-transform duration-250 group-hover/step:scale-110 bg-gray-50 text-gray-500 border-gray-500/20">
                          3
                        </div>
                      </div>
                      <div className="flex-1 pt-1 pb-6">
                        <div className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-1">Patients Converted</div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl font-extrabold text-[#0f172a] leading-none">3</span>
                          <span className="text-sm text-gray-500">patients only</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-2 rounded-full flex-1 bg-black/5 overflow-hidden">
                            <div className="h-full rounded-full bg-gray-400 scale-x-[0.03] origin-left"></div>
                          </div>
                          <span className="text-[13px] font-extrabold text-gray-500 min-w-[3rem] text-right">3%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 px-6 border-t border-black/5 bg-gray-50 flex items-center gap-3 mt-auto">
                  <div className="w-9 h-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
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
                      className="w-4 h-4 rotate-180"
                      aria-hidden="true"
                    >
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                  </div>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    <strong className="text-gray-900">97 patients lost every month.</strong> Drop-offs happen between enquiry and follow-up - with zero system to catch them.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-[0_4px_24px_rgba(30,58,95,0.1),0_1px_4px_rgba(30,58,95,0.06)] flex flex-col h-full group hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(30,58,95,0.14)] transition-all duration-300">
                <div className="p-6 pb-4 bg-gradient-to-br from-[#1e3a5f] via-[#1d4ed8] to-[#3b82f6] flex flex-col gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-200/30 text-orange-200 text-[11px] font-bold tracking-wider uppercase w-fit">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    OPD Growth System
                  </div>
                  <h3 className="text-[1.9rem] font-extrabold text-white leading-tight">With Digital ROI</h3>
                  <p className="text-sm text-white/70">Every step tracked, followed-up &amp; optimized</p>
                </div>

                <div className="p-7 flex-1">
                  <div className="flex flex-col h-full">
                    <div className="flex gap-4 group/step">
                      <div className="flex flex-col items-center shrink-0 w-[52px]">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-[13px] font-extrabold border-[2.5px] transition-transform duration-250 group-hover/step:scale-110 bg-blue-50 text-blue-700 border-blue-700/20">
                          100
                        </div>
                        <div className="w-[2px] flex-1 min-h-[20px] rounded-full my-0.5 opacity-50 bg-gradient-to-b from-blue-300 to-green-300"></div>
                      </div>
                      <div className="flex-1 pt-1 pb-6">
                        <div className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-1">Total Enquiries</div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="text-2xl font-extrabold text-[#0f172a] leading-none">100</span>
                          <span className="text-sm text-gray-500">leads come in</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-2 rounded-full flex-1 bg-black/5 overflow-hidden">
                            <div className="h-full rounded-full bg-blue-600"></div>
                          </div>
                          <span className="text-[13px] font-extrabold text-gray-500 min-w-[3rem] text-right">100%</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 group/step">
                      <div className="flex flex-col items-center shrink-0 w-[52px]">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-[13px] font-extrabold border-[2.5px] transition-transform duration-250 group-hover/step:scale-110 bg-blue-50 text-blue-700 border-blue-700/20">
                          60
                        </div>
                        <div className="w-[2px] flex-1 min-h-[20px] rounded-full my-0.5 opacity-50 bg-gradient-to-b from-blue-300 to-green-300"></div>
                      </div>
                      <div className="flex-1 pt-1 pb-6">
                        <div className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-1">Qualified Leads</div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="text-2xl font-extrabold text-[#0f172a] leading-none">60</span>
                          <span className="text-sm text-gray-500">prospects</span>
                          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-green-100 border border-green-600/20 text-green-700 text-[11px] font-extrabold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-2.5 h-2.5"
                              aria-hidden="true"
                            >
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                            2x
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-2 rounded-full flex-1 bg-black/5 overflow-hidden">
                            <div className="h-full rounded-full bg-blue-500 scale-x-[0.6] origin-left"></div>
                          </div>
                          <span className="text-[13px] font-extrabold text-gray-500 min-w-[3rem] text-right">60%</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 group/step">
                      <div className="flex flex-col items-center shrink-0 w-[52px]">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-[13px] font-extrabold border-[2.5px] transition-transform duration-250 group-hover/step:scale-110 bg-green-50 text-green-700 border-green-700/20">
                          40
                        </div>
                        <div className="w-[2px] flex-1 min-h-[20px] rounded-full my-0.5 opacity-50 bg-gradient-to-b from-blue-300 to-green-300"></div>
                      </div>
                      <div className="flex-1 pt-1 pb-6">
                        <div className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-1">Clinic Visits</div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="text-2xl font-extrabold text-[#0f172a] leading-none">40</span>
                          <span className="text-sm text-gray-500">show up</span>
                          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-green-100 border border-green-600/20 text-green-700 text-[11px] font-extrabold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-2.5 h-2.5"
                              aria-hidden="true"
                            >
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                            4x
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-2 rounded-full flex-1 bg-black/5 overflow-hidden">
                            <div className="h-full rounded-full bg-green-500 scale-x-[0.4] origin-left"></div>
                          </div>
                          <span className="text-[13px] font-extrabold text-gray-500 min-w-[3rem] text-right">40%</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 group/step">
                      <div className="flex flex-col items-center shrink-0 w-[52px]">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-[13px] font-extrabold border-[2.5px] transition-transform duration-250 group-hover/step:scale-110 bg-green-50 text-green-700 border-green-700/20">
                          20
                        </div>
                      </div>
                      <div className="flex-1 pt-1 pb-6">
                        <div className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-1">Patients Converted</div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="text-2xl font-extrabold text-[#0f172a] leading-none">20</span>
                          <span className="text-sm text-gray-500">patients</span>
                          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-green-100 border border-green-600/20 text-green-700 text-[11px] font-extrabold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-2.5 h-2.5"
                              aria-hidden="true"
                            >
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                            7x
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-2 rounded-full flex-1 bg-black/5 overflow-hidden">
                            <div className="h-full rounded-full bg-green-600 scale-x-[0.2] origin-left"></div>
                          </div>
                          <span className="text-[13px] font-extrabold text-gray-500 min-w-[3rem] text-right">20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 px-6 border-t border-black/5 bg-blue-600/5 flex items-center gap-3 mt-auto">
                  <div className="w-9 h-9 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
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
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                  </div>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    <strong className="text-gray-900">Every enquiry captured &amp; nurtured.</strong> Automated follow-up, smart tracking - from enquiry to confirmed patient.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0f172a] rounded-[1.5rem] p-8 md:p-10 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <div className="text-center">
                <div className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-orange-200 leading-none mb-1">3%</div>
                <div className="text-[11px] font-semibold tracking-wider uppercase text-white/50">Typical Conversion Rate</div>
              </div>
              <div className="hidden sm:block w-px h-[60px] bg-white/10 mx-auto"></div>
              <div className="text-center">
                <div className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-orange-200 leading-none mb-1">6.7x</div>
                <div className="text-[11px] font-semibold tracking-wider uppercase text-white/50">
                  More Patients With OPD System
                </div>
              </div>
              <div className="hidden sm:block w-px h-[60px] bg-white/10 mx-auto"></div>
              <div className="text-center">
                <div className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-green-300 leading-none mb-1">20%</div>
                <div className="text-[11px] font-semibold tracking-wider uppercase text-white/50">With Digital ROI System</div>
              </div>
            </div>
          </div>
        </section>

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
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
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
      </div>
    </div>
  );
}
