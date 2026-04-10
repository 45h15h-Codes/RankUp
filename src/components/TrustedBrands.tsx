const SAMPLE_LOGO = '/RankUp-Logo-transperent.png';

const leadGenLogos = [
  { name: 'CARE Hospitals', src: SAMPLE_LOGO },
  { name: 'Jamboree', src: SAMPLE_LOGO },
  { name: 'Repos Energy', src: SAMPLE_LOGO },
  { name: 'TATA 1mg', src: SAMPLE_LOGO },
  { name: 'Walnut School', src: SAMPLE_LOGO },
  { name: 'Enerparc', src: SAMPLE_LOGO },
  { name: 'Amaha', src: SAMPLE_LOGO },
  { name: 'ExcelR', src: SAMPLE_LOGO },
  { name: 'Solar Square', src: SAMPLE_LOGO },
];

const ecommerceLogos = [
  { name: 'Darveys', src: SAMPLE_LOGO },
  { name: 'mCaffeine', src: SAMPLE_LOGO },
  { name: 'La Joya', src: SAMPLE_LOGO },
  { name: 'Dusaan', src: SAMPLE_LOGO },
  { name: 'Sri Sri Tattva', src: SAMPLE_LOGO },
  { name: 'StudioSuits', src: SAMPLE_LOGO },
  { name: 'All Things Baby', src: SAMPLE_LOGO },
  { name: 'Bodywise', src: SAMPLE_LOGO },
  { name: 'Sri Krishna Jewellers', src: SAMPLE_LOGO },
];

export default function TrustedBrands() {
  return (
    <section className="py-16 bg-[#FAFBFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
          Trusted by Leading Brands Across Industries
        </h2>
        <p className="text-body max-w-2xl mx-auto">
          From Lead Generation to E-Commerce, we help brands grow through targeted marketing solutions.
        </p>
      </div>

      {/* Row 1: Lead Generation */}
      <div className="mb-12">
        <div className="text-center mb-6">
          <span className="text-[11px] font-semibold text-[#1A6BFF] uppercase tracking-[0.18em] bg-[#EEF4FF] px-4 py-1.5 rounded-full">
            Lead Generation
          </span>
        </div>
        <div className="relative flex overflow-x-hidden py-3">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {[...leadGenLogos, ...leadGenLogos].map((logo, index) => (
              <div key={index} className="mx-3 flex-shrink-0">
                <div className="w-[160px] h-[72px] bg-white border border-[#E8ECF4] rounded-xl flex items-center justify-center px-4 transition-all duration-300 hover:border-[#D7E2F5] hover:-translate-y-0.5">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-[84%] max-h-[64%] object-contain"
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
        <div className="text-center mb-6">
          <span className="text-[11px] font-semibold text-[#1A6BFF] uppercase tracking-[0.18em] bg-[#EEF4FF] px-4 py-1.5 rounded-full">
            E-Commerce
          </span>
        </div>
        <div className="relative flex overflow-x-hidden py-3">
          <div className="animate-marquee-reverse whitespace-nowrap flex items-center">
            {[...ecommerceLogos, ...ecommerceLogos].map((logo, index) => (
              <div key={index} className="mx-3 flex-shrink-0">
                <div className="w-[160px] h-[72px] bg-white border border-[#E8ECF4] rounded-xl flex items-center justify-center px-4 transition-all duration-300 hover:border-[#D7E2F5] hover:-translate-y-0.5">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-[84%] max-h-[64%] object-contain"
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
