import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export interface ServiceMediaItem {
  title: string;
  description: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  mediaAlt: string;
  ctaText?: string;
  ctaLink?: string;
}

interface IndustryServiceSectionProps {
  items: ServiceMediaItem[];
  sectionTitle?: string;
  sectionDescription?: string;
}

function ServiceMedia({ item }: { item: ServiceMediaItem }) {
  if (item.mediaType === "video") {
    return (
      <video
        className="w-full h-full object-cover"
        controls
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={item.mediaSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <img
      src={item.mediaSrc}
      alt={item.mediaAlt}
      className="w-full h-full object-cover"
      referrerPolicy="no-referrer"
      loading="lazy"
    />
  );
}

export default function IndustryServiceSection({
  items,
  sectionTitle = "Our Services and Solutions",
  sectionDescription = "Our section design stays consistent across industries while the execution strategy and creative assets are customized for your market.",
}: IndustryServiceSectionProps) {
  return (
    <section className="mb-24 px-4 sm:px-0">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold tracking-wider uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Pro-Max Solutions
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-heading mb-6 tracking-tight">
          {sectionTitle}
        </h2>
        <p className="text-body max-w-3xl mx-auto text-lg leading-relaxed">
          {sectionDescription}
        </p>
      </div>

      <div className="space-y-20 max-w-6xl mx-auto">
        {items.map((item, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-0 md:gap-12 items-center ${
                isReversed
                  ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                  : ""
              }`}
            >
              {/* Image Container */}
              <div className="rounded-[40px] border border-slate-200 bg-white shadow-soft overflow-hidden aspect-[4/3] relative z-10 group">
                <ServiceMedia item={item} />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Card Container */}
              <div className="relative group mt-8 lg:mt-0">

                <div
                  className={`rounded-[40px] ${
                    isReversed
                      ? "lg:rounded-br-[100px]"
                      : "lg:rounded-bl-[100px]"
                  } bg-gradient-to-r from-[#0A4A9D] via-[#1565C0] to-[#2F80ED] p-10 md:p-14 shadow-[0_24px_50px_rgba(21,101,192,0.3)] relative overflow-hidden`}
                >
                  {/* Decorative background circle */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

                  <h3 className="text-3xl font-bold text-white mb-6 tracking-tight relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-blue-50 text-xl leading-relaxed mb-10 opacity-90 relative z-10 font-medium">
                    {item.description}
                  </p>

                  <Link
                    to={item.ctaLink || "/contact"}
                    className="inline-flex items-center text-white font-bold group/btn bg-white/10 hover:bg-white/20 px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 relative z-10"
                  >
                    {item.ctaText || "Explore Solutions"}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
