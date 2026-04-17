import { Play } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Sourav Parwani',
    title: 'VP – Growth & Marketing, Tradenaik',
    badge: '2X MORE REVENUE USING SMART WHATSAPP FUNNEL',
    image: 'https://picsum.photos/seed/person1/600/800',
  },
  {
    name: 'Pritam Marwah',
    title: 'Growth Marketing Lead, Amsha',
    badge: '58% GROWTH',
    image: 'https://picsum.photos/seed/person2/600/800',
  },
  {
    name: 'Ali Bharwani',
    title: 'VP – Chief Admin Officer, Naqeep Enterprises',
    badge: 'REVENUE GROWTH',
    image: 'https://picsum.photos/seed/person3/600/800',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            What Our <span className="text-primary relative inline-block">
              Clients
              <span className="absolute bottom-1 left-0 w-full h-1 bg-primary/20 -z-10"></span>
            </span> Say
          </h2>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 sm:gap-8 pb-8 md:pb-0 hide-scrollbar snap-x snap-mandatory">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center group"
            >

              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full inline-block uppercase tracking-wider">
                    {testimonial.badge}
                  </div>
                </div>

                {/* Play Button */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div> */}

                {/* Brand Logo Small */}
                <div className="absolute bottom-4 right-4">
                  <img
                    src="/RankUp-Logo-transperent.png"
                    alt="RankUp"
                    className="h-5 w-auto opacity-70"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-heading mb-1">{testimonial.name}</h4>
                <p className="text-sm text-body font-medium">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
