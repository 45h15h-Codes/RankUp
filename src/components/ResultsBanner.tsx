import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function ResultsBanner() {
  return (
    <section className="py-20 bg-white px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="group max-w-[850px] mx-auto bg-gradient-to-b from-[#0B1530] to-[#0A1020] rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] border border-slate-800/80 hover:border-slate-700 transition-all duration-500"
      >
        {/* Glow Effects */}
        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-700"></div>
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-600/20 transition-colors duration-700"></div>

        {/* Inner ring */}
        <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/5 pointer-events-none" />

        <div className="relative z-10">
          <p className="text-white/80 text-lg mb-4 font-medium tracking-wide uppercase text-sm">
            Most brands we partner with see a
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-primary mb-4 tracking-tighter drop-shadow-sm group-hover:scale-105 transition-transform duration-700 ease-out inline-block">
            30% to 50%
          </h2>

          <p className="text-white/80 text-lg mb-4 font-medium mt-4">
            increase in leads or sales within
          </p>

          <h3 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-8 tracking-tight">
            90 days.
          </h3>

          <p className="text-white/60 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed font-medium">
            We get you more revenue with strategies that generate high-quality
            leads and increase e-commerce sales.
          </p>

          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1 inline-flex items-center mx-auto group/btn"
          >
            Let's Make Growth Happen
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
