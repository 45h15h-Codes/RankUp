import { motion } from 'motion/react';

const partners = [
  {
    name: 'Google Partner',
    badge: 'Premier 2024',
    logo: 'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg',
    color: 'text-blue-500',
  },
  {
    name: 'Meta Business Partner',
    badge: 'Authorized Agency',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    color: 'text-blue-600',
  },
  {
    name: 'WhatsApp Business',
    badge: 'Solution Provider',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
    color: 'text-green-500',
  },
];

export default function OfficialPartners() {
  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-heading flex items-center justify-center">
            <span className="mr-2 sm:mr-3">🤝</span> Official Partners with
          </h2>
        </div>

        <div className="small-card-grid sm:grid-cols-3 gap-3 sm:gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-soft flex flex-col items-center justify-center text-center group transition-all"
            >
              <div className="h-8 sm:h-12 flex items-center justify-center mb-4 sm:mb-6">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full w-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[10px] sm:text-sm font-bold text-heading mb-0.5 sm:mb-1">{partner.name}</p>
              <p className="text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {partner.badge}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
