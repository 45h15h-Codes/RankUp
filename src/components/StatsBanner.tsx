import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function Counter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
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
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsBanner() {
  return (
    <section className="py-24 bg-[#F5F8FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-12 tracking-tight">
            Let's Grow Together.
          </h2>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-5xl md:text-6xl font-black text-primary mb-2 tracking-tighter">
                <Counter value={49} suffix="+" />
              </p>
              <p className="text-body font-semibold uppercase text-xs tracking-widest">
                Happy Clients
              </p>
            </div>
            
            <div>
              <p className="text-5xl md:text-6xl font-black text-primary mb-2 tracking-tighter">
                <Counter value={191} prefix="₹" suffix="M+" />
              </p>
              <p className="text-body font-semibold uppercase text-xs tracking-widest">
                Revenue Generated
              </p>
            </div>
          </div>
        </div>

        {/* Bird Illustration */}
        <div className="hidden md:flex justify-end relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-[300px] h-[300px] text-primary/10"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <path d="M16 8c-2.5 0-5 1.5-6 4s-1 5-1 5l-2-1-2 1s0-2.5 1-5 3.5-4 6-4h4z" />
              <path d="M16 8c1.5 0 3 .5 4 1.5s1.5 2.5 1.5 4-1 3-2.5 4-3.5 1.5-5 1.5" />
              <path d="M9 12c-1.5 0-3 .5-4 1.5s-1.5 2.5-1.5 4" />
              <path d="M12 12c.5-1 1.5-2 3-2" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
}
