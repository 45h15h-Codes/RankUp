const BASE_URL = 'https://ik.imagekit.io/digitalroipune/';

const leadGenLogos = [
  { name: 'All Things Baby', src: `${BASE_URL}all-things-baby.png` },
  { name: 'Bodywise', src: `${BASE_URL}bodywise.png` },
  { name: 'Carolina Log Co', src: `${BASE_URL}carolina.png` },
  { name: 'Dan Henry', src: `${BASE_URL}dan-henry.png` },
  { name: 'Darveys', src: `${BASE_URL}darveys.png` },
  { name: 'Daughter Earth', src: `${BASE_URL}daughter-earth.png` },
  { name: 'Dusaan', src: `${BASE_URL}dusaan.png` },
  { name: 'Flossy', src: `${BASE_URL}flossy.png` },
];

const ecommerceLogos = [
  { name: 'Glen', src: `${BASE_URL}glen.png` },
  { name: 'Kaya Clinic', src: `${BASE_URL}kaya%20clinic.png` },
  { name: 'mCaffeine', src: `${BASE_URL}mcaffeine.png` },
  { name: 'Sri Sri Tattva', src: `${BASE_URL}sri-sri-tattva.png` },
  { name: 'Studio Suits', src: `${BASE_URL}studio-suits.png` },
  { name: 'The Kaatn Trail', src: `${BASE_URL}the-kaatn-trail.png` },
  { name: 'Traser Logo', src: `${BASE_URL}traser-logo.png` },
];

export default function TrustedBrands() {
  return (
    <section className="bg-white py-24 border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <p className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">
          Trusted Partners
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-[#111118] tracking-tight">
          Fueling growth for industry leaders
        </h2>
      </div>

      <div className="space-y-12">
        {/* Row 1: Lead Generation */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-20">
            {/* <span className="text-[10px] font-black text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1 rounded-full uppercase tracking-widest shadow-sm">
              Lead Generation
            </span> */}
          </div>
          <div className="relative flex overflow-x-hidden py-4">
            <div className="animate-marquee whitespace-nowrap flex items-center">
              {[...leadGenLogos, ...leadGenLogos].map((logo, index) => (
                <div key={`leadgen-${index}`} className="mx-4 flex-shrink-0">
                  <div className="group relative bg-[#F8FAFC]/50 backdrop-blur-sm border border-slate-100 rounded-3xl px-10 py-6 flex items-center justify-center h-28 w-56 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-16 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full mx-8" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: E-Commerce */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-20">
            {/* <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 border border-indigo-100 px-4 py-1 rounded-full uppercase tracking-widest shadow-sm">
              E-Commerce
            </span> */}
          </div>
          <div className="relative flex overflow-x-hidden py-4">
            <div className="animate-marquee-reverse whitespace-nowrap flex items-center">
              {[...ecommerceLogos, ...ecommerceLogos].map((logo, index) => (
                <div key={`ecommerce-${index}`} className="mx-4 flex-shrink-0">
                  <div className="group relative bg-[#F8FAFC]/50 backdrop-blur-sm border border-slate-100 rounded-3xl px-10 py-6 flex items-center justify-center h-28 w-56 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-14 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full mx-8" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
