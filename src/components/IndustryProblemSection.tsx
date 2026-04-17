import { motion } from 'motion/react';
import { CircleAlert } from 'lucide-react';

interface ProblemCard {
  title: string;
  description: string;
  tag?: string;
}

interface IndustryProblemSectionProps {
  industryName: string;
  keyProblems: string[];
  problemCards: ProblemCard[];
  stats: {
    percentage: string;
    label: string;
  }[];
}

export default function IndustryProblemSection({
  industryName,
  keyProblems,
  problemCards,
  stats,
}: IndustryProblemSectionProps) {
  return (
    <section className="w-full py-24 px-6 relative overflow-hidden bg-white rounded-[32px]">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(30, 77, 183, 0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold tracking-[0.11em] uppercase mb-6">
            <CircleAlert className="w-4 h-4 text-orange-500" />
            The Real Problem
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            Why Most {industryName} Providers <br />
            <span className="text-blue-600">Lose Revenue</span>
          </h2>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Even after generating enquiries, most businesses fail to convert them into real clients, not because of
            marketing, but because of what happens after the enquiry comes in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Dark Stats Card */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-[32px] p-10 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px]" />

            <div className="text-xs font-bold tracking-[0.12em] uppercase text-orange-400 mb-6 flex items-center gap-2">
              <span className="inline-block w-8 h-[2px] bg-orange-400 rounded-full" />
              Industry Reality
            </div>

            <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
              Most enquiries never become customers
            </h3>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center">
                  <span className="block text-2xl md:text-3xl font-black text-orange-400 mb-1 tracking-tight">
                    {stat.percentage}
                  </span>
                  <span className="block text-[10px] text-white/50 uppercase font-bold tracking-widest leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <ul className="space-y-4">
              {keyProblems.map((item) => (
                <li key={item} className="flex items-center gap-4 text-white/80 text-sm font-medium">
                  <CircleAlert className="w-5 h-5 text-orange-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Problem Steps */}
          <div className="flex flex-col gap-6">
            {problemCards.map((card, index) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 md:p-8 flex items-start gap-6 shadow-soft border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-600 text-white text-lg font-black flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{card.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">{card.description}</p>
                  {card.tag && (
                    <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mt-3">
                      <CircleAlert className="w-3 h-3" />
                      {card.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
