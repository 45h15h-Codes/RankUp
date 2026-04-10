import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Users, Zap } from 'lucide-react';

const stats = ['+60% Store Footfall', '+110% Online Sales', '4.2x Marketing ROI'];
const challenges = ['Online-offline gap', 'Inventory management', 'Brand loyalty'];
const solutions = ['Local Inventory Ads', 'Loyalty Program Automation', 'Geo-targeted Campaigns'];
type ServiceMediaItem = {
  title: string;
  description: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  mediaAlt: string;
};

const servicesAndSolutions: ServiceMediaItem[] = [
  {
    title: 'Omni-channel Ad Strategy',
    description: 'Coordinate in-store offers and online campaigns so traffic and purchase intent move together.',
    mediaType: 'image',
    mediaSrc: 'https://picsum.photos/seed/retail-service-1/960/640',
    mediaAlt: 'Retail omni-channel ads dashboard',
  },
  {
    title: 'Promotions and Loyalty Automation',
    description: 'Automate reward points, repeat purchase nudges, and festive sale campaigns across channels.',
    mediaType: 'image',
    mediaSrc: 'https://picsum.photos/seed/retail-service-2/960/640',
    mediaAlt: 'Retail loyalty campaign automation',
  },
  {
    title: 'Hyperlocal Growth Campaigns',
    description: 'Use local creatives and short video formats to increase store footfall and nearby conversions.',
    mediaType: 'video',
    mediaSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    mediaAlt: 'Hyperlocal retail campaign video',
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

export default function RetailIndustry() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-heading mb-8 leading-tight">
              Growth Solutions for <br />
              <span className="text-primary">Retail</span>
            </h1>
            <p className="text-xl text-body mb-10 leading-relaxed">
              Drive foot traffic and online sales with integrated omni-channel marketing strategies. We understand the
              unique challenges of the Retail sector and have built proven systems to overcome them.
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
              src="https://picsum.photos/seed/retail/800/600"
              alt="Retail"
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
                className={`grid lg:grid-cols-2 gap-6 items-center ${
                  index % 2 !== 0 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
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

        <div className="bg-primary rounded-[40px] p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your Retail business?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Get a custom growth plan tailored to your specific goals and market conditions.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center group"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
