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
              className="p-2 text-gray-600 hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-8 py-6 space-y-4 border-t border-gray-50 mt-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.href}
                      className={`block text-lg font-semibold transition-colors ${
                        location.pathname === link.href ? 'text-primary' : 'text-gray-700 hover:text-primary'
                      }`}
                      onClick={() => !link.hasDropdown && setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block text-sm font-medium text-gray-500 hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-linear-to-r from-[#0039A6] to-[#1A6BFF] text-white px-6 py-3.5 rounded-full font-bold text-base transition-all flex items-center justify-center">
                    Get A Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
