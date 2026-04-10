import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import { industryData, isIndustryId } from '../content/industries';

export default function IndustryPage() {
  const { id } = useParams();
  const data = id && isIndustryId(id) ? industryData[id] : null;

  if (!data) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-bold text-heading">Industry Not Found</h1>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-heading mb-8 leading-tight">
              Growth Solutions for <br />
              <span className="text-primary">{data.title}</span>
            </h1>
            <p className="text-xl text-body mb-10 leading-relaxed">
              {data.desc} We understand the unique challenges of the {data.title} sector and have built proven systems to overcome them.
            </p>
            <div className="flex flex-wrap gap-4">
              {data.stats.map((stat, i) => (
                <div key={i} className="bg-blue-50 px-4 py-2 rounded-lg text-primary font-bold text-sm">
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
              src={`https://picsum.photos/seed/${id}/800/600`} 
              alt={data.title} 
              className="rounded-[32px] shadow-soft w-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-gray-50 p-10 rounded-[32px]">
            <h2 className="text-2xl font-bold text-heading mb-8 flex items-center">
              <Users className="mr-3 text-gray-400" />
              Common Challenges
            </h2>
            <div className="space-y-4">
              {data.challenges.map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-body font-medium">
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
              {data.solutions.map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-heading font-bold">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-[40px] p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your {data.title} business?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Get a custom growth plan tailored to your specific goals and market conditions.</p>
          <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center group">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
