import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-heading mb-12"
        >
          Terms of <span className="text-primary">Service</span>
        </motion.h1>
        
        <div className="prose prose-lg max-w-none text-body space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">1. Terms</h2>
            <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on RankUp's website for personal, non-commercial transitory viewing only.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">3. Disclaimer</h2>
            <p>The materials on RankUp's website are provided "as is". RankUp makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">4. Limitations</h2>
            <p>In no event shall RankUp or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on RankUp's Internet site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">5. Governing Law</h2>
            <p>Any claim relating to RankUp's website shall be governed by the laws of the State of India without regard to its conflict of law provisions.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
