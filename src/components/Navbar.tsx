import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services/ecommerce', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'E-commerce', href: '/services/ecommerce' },
        { name: 'Lead Generation', href: '/services/lead-generation' },
      ]
    },
    { 
      name: 'Industries', 
      href: '#', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Solar', href: '/industries/solar' },
        { name: 'E-commerce', href: '/industries/ecommerce' },
        { name: 'Education', href: '/industries/education' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Real Estate', href: '/industries/real-estate' },
        { name: 'Retail', href: '/industries/retail' },
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-6">
      <nav
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-full border border-white/20 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] ${
          scrolled ? 'py-2' : 'py-3'
        }`}
      >
        <div className="px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="RankUp Home">
            <img
              src="/RankUp-Logo-transperent.png"
              alt="RankUp"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-4">
                <Link
                  to={link.href}
                  className={`text-sm font-semibold flex items-center transition-colors ${
                    location.pathname === link.href ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="ml-1 w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />}
                </Link>
                
                {/* Dropdown */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-4 min-w-[200px]">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {location.pathname === link.href && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="bg-linear-to-r from-[#0039A6] to-[#1A6BFF] hover:opacity-90 text-white px-7 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-primary/20">
                Get A Free Consultation
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors z-50 overflow-hidden"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="absolute top-0 left-0 w-full h-0.5 bg-current rounded-full origin-center"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                  className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-current rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden fixed inset-x-6 top-24 z-40"
            >
              <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-[32px] shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto hide-scrollbar">
                <div className="p-8 space-y-8">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.07 } }
                    }}
                    className="space-y-8"
                  >
                    {navLinks.map((link) => (
                      <motion.div
                        key={link.name}
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        className="space-y-4"
                      >
                        <Link
                          to={link.href}
                          className={`inline-block text-3xl font-black tracking-tight transition-all active:scale-95 ${
                            location.pathname === link.href ? 'text-primary' : 'text-[#0A0A0A]'
                          }`}
                          onClick={() => !link.hasDropdown && setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                        
                        {link.hasDropdown && (
                          <div className="grid grid-cols-2 gap-3">
                            {link.dropdownItems?.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="group flex flex-col p-4 bg-gray-50 hover:bg-blue-50/50 rounded-2xl active:scale-95 transition-all"
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="text-sm font-bold text-gray-900 group-active:text-primary">
                                  {item.name}
                                </span>
                                <span className="text-[10px] text-gray-400 font-medium mt-1">
                                  Explore {link.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      className="pt-4"
                    >
                      <Link to="/contact" onClick={() => setIsOpen(false)}>
                        <button className="w-full bg-linear-to-r from-primary to-primary-dark text-white px-6 py-5 rounded-[22px] font-bold text-lg transition-all active:scale-[0.98] flex items-center justify-center shadow-xl shadow-primary/20">
                          Get Free Consultation
                          <ArrowRight className="ml-2 w-6 h-6" />
                        </button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
}
