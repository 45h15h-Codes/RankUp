import { motion } from 'motion/react';
import { useState } from 'react';
import { Eye, LayoutTemplate, ShoppingCart, Target, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import OfficialPartners from '../../components/OfficialPartners';
import StatsBanner from '../../components/StatsBanner';

const processCards = [
  {
    step: '01',
    title: 'Targeted Ads',
    desc: 'We help you get your products in front of the right customers with ads on Google, Meta, and TikTok, bringing more people to your store.',
    tone: 'bg-gradient-to-br from-[#0A3D91] to-[#2563EB] text-white border-transparent md:col-span-2',
    icon: Target,
  },
  {
    step: '02',
    title: 'Eye-Catching Ads',
    desc: 'We create ads that grab attention and get people to click, making sure your ads lead to sales.',
    tone: 'bg-white text-[#111118] border-slate-200',
    icon: Eye,
  },
  {
    step: '03',
    title: 'Product Page Improvement',
    desc: 'We make your product pages easy to use and fast, so visitors stay longer and are more likely to buy.',
    tone: 'bg-white text-[#111118] border-slate-200',
    icon: LayoutTemplate,
  },
  {
    step: '04',
    title: 'Abandoned Cart Recovery',
    desc: 'We automatically remind customers who leave items in their cart, helping you recover sales that might have been lost.',
    tone: 'bg-[#111118] text-white border-transparent md:col-span-2',
    icon: ShoppingCart,
  },
  {
    step: '05',
    title: 'Customer Retention',
    desc: 'Strategies to turn one-time buyers into repeat customers and increase lifetime value.',
    tone: 'bg-gradient-to-r from-blue-50 to-indigo-50 text-[#111118] border-blue-100 md:col-span-2',
    icon: Users,
  },
  {
    step: '06',
    title: 'Simple Analytics',
    desc: 'We track how well your store is doing and help you make smarter choices to grow your business.',
    tone: 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-transparent',
    icon: TrendingUp,
  },
];

const logos = [
  'all-things-baby.png',
  'bodywise.png',
  'carolina.png',
  'dan-henry.png',
  'darveys.png',
  'daughter-earth.png',
  'dusaan.png',
  'flossy.png',
  'glen.png',
  'kaya%20clinic.png',
  'mcaffeine.png',
  'sri-sri-tattva.png',
  'studio-suits.png',
  'the-kaatn-trail.png',
  'traser-logo.png',
];

const testimonials = [
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

export default function EcommerceService() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <main className="flex-grow">
      <section
        className="relative pt-32 pb-4 overflow-hidden"
        style={{
          background:
            'linear-gradient(transparent 63.39%, rgb(255, 255, 255) 82%), linear-gradient(107deg, rgba(8, 78, 150, 0.1) 0%, rgba(8, 78, 150, 0.2) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#111118] text-white/90 font-medium text-sm mb-8 shadow-[0_0_20px_rgba(17,17,24,0.3)]">
              Grow Faster with Smart Automation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#111118] mb-6 max-w-4xl mx-auto leading-[1.1]">
              Grow Your <br className="hidden md:block" />
              <span className="text-gradient-blue">Online Sales</span> &amp; <br className="hidden md:block" />
              <span className="text-gradient-blue">Get More Revenue</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              We help online stores get more customers and increase sales with smart marketing strategies.
            </p>
            <div className="flex justify-center mb-4">
              <Link to="/contact" className="btn-primary">
                Get Your Growth Plan
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-12 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111118]">Trusted by Leading Online Brands</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {logos.map((logo) => (
              <div key={logo} className="bg-white border border-slate-100 rounded-xl p-3 flex items-center justify-center">
                <img
                  alt="Brand Logo"
                  referrerPolicy="no-referrer"
                  src={`https://ik.imagekit.io/digitalroipune/${logo}`}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111118] tracking-tight">
              How We Help Your <br className="hidden md:block" />
              <span className="text-gradient-blue">Online Store Grow</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {processCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.step}
                  className={`relative p-8 md:p-10 rounded-[32px] border overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${card.tone}`}
                >
                  <div className="absolute -right-4 -bottom-10 text-[150px] font-black opacity-[0.03] pointer-events-none leading-none select-none">
                    {card.step}
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 bg-white/20 text-current">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{card.title}</h3>
                    <p className="text-lg leading-relaxed mt-auto opacity-80">{card.desc}</p>
                  </div>
                </article>
              );
            })}
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
              <article key={testimonial.name} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-300">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <OfficialPartners />
      <StatsBanner />

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
    </main>
  );
}
