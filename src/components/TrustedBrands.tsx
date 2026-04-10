import { motion } from 'motion/react';

const leadGenLogos = [
  { name: 'Solar Square', src: 'https://picsum.photos/seed/solarsquare/200/100' },
  { name: 'CARE Hospitals', src: 'https://picsum.photos/seed/carehospitals/200/100' },
  { name: 'Jamboree', src: 'https://picsum.photos/seed/jamboree/200/100' },
  { name: 'Repos Energy', src: 'https://picsum.photos/seed/repos/200/100' },
  { name: 'TATA 1mg Labs', src: 'https://picsum.photos/seed/tata1mg/200/100' },
  { name: 'Walnut School', src: 'https://picsum.photos/seed/walnut/200/100' },
  { name: 'Enerparc', src: 'https://picsum.photos/seed/enerparc/200/100' },
  { name: 'Amaha', src: 'https://picsum.photos/seed/amaha/200/100' },
  { name: 'Excel', src: 'https://picsum.photos/seed/excel/200/100' },
];

const ecommerceLogos = [
  { name: 'mCaffeine', src: 'https://picsum.photos/seed/mcaffeine/200/100' },
  { name: 'La Joya', src: 'https://picsum.photos/seed/lajoya/200/100' },
  { name: 'Dusaan', src: 'https://picsum.photos/seed/dusaan/200/100' },
  { name: 'SriSri Tattva', src: 'https://picsum.photos/seed/srisri/200/100' },
  { name: 'StudioSuits', src: 'https://picsum.photos/seed/studiosuits/200/100' },
  { name: 'All Things Baby', src: 'https://picsum.photos/seed/allthingsbaby/200/100' },
  { name: 'Be Bodywise', src: 'https://picsum.photos/seed/bodywise/200/100' },
  { name: 'Sri Krishna Jewellers', src: 'https://picsum.photos/seed/srikrishna/200/100' },
  { name: 'Darveys', src: 'https://picsum.photos/seed/darveys/200/100' },
];

export default function TrustedBrands() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
          Trusted by Leading Brands Across Industries
        </h2>
        <p className="text-body max-w-2xl mx-auto">
          From Lead Generation to E-Commerce, we help brands grow through targeted marketing solutions.
        </p>
      </div>

      {/* Row 1: Lead Generation */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-[#1A6BFF] uppercase tracking-[0.2em] bg-blue-50 px-4 py-1.5 rounded-full">
            Lead Generation
          </span>
        </div>
        <div className="relative flex overflow-x-hidden py-4">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {[...leadGenLogos, ...leadGenLogos].map((logo, index) => (
              <div key={index} className="mx-4 flex-shrink-0">
                <div className="w-[180px] h-[90px] bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center p-6 hover:shadow-md transition-shadow duration-300">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: E-Commerce */}
      <div>
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-[#1A6BFF] uppercase tracking-[0.2em] bg-blue-50 px-4 py-1.5 rounded-full">
            E-Commerce
          </span>
        </div>
        <div className="relative flex overflow-x-hidden py-4">
          <div className="animate-marquee-reverse whitespace-nowrap flex items-center">
            {[...ecommerceLogos, ...ecommerceLogos].map((logo, index) => (
              <div key={index} className="mx-4 flex-shrink-0">
                <div className="w-[180px] h-[90px] bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center p-6 hover:shadow-md transition-shadow duration-300">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
