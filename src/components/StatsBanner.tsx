import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "motion/react";
import { useRef, useEffect, useState } from "react";
import GrowthIllustration from "./GrowthIllustration";

function Counter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBanner() {
  return (
    <section className="py-12 sm:py-24 bg-[#F5F8FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-center md:text-left">
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-heading mb-8 sm:mb-12 tracking-tight">
            Let's Grow Together.
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:gap-12">
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-white/50 sm:bg-transparent sm:p-0 sm:border-0 sm:rounded-none">
              <p className="text-4xl sm:text-5xl md:text-6xl font-black text-primary mb-2 tracking-tighter">
                <Counter value={49} suffix="+" />
              </p>
              <p className="text-body font-semibold uppercase text-[10px] sm:text-xs tracking-widest">
                Happy Clients
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-white/50 sm:bg-transparent sm:p-0 sm:border-0 sm:rounded-none">
              <p className="text-4xl sm:text-5xl md:text-6xl font-black text-primary mb-2 tracking-tighter">
                <Counter value={191} prefix="₹" suffix="M+" />
              </p>
              <p className="text-body font-semibold uppercase text-[10px] sm:text-xs tracking-widest">
                Revenue Generated
              </p>
            </div>
          </div>
        </div>


        {/* Matching Illustration */}
        <div className="hidden md:flex justify-end relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-[320px] h-[220px] text-primary/10"
          >
            <GrowthIllustration />
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
}
