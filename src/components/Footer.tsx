import { Linkedin, Instagram, Youtube, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'E-commerce Service', href: '/services/ecommerce' },
    { name: 'Lead Generation Service', href: '/services/lead-generation' },
    { name: 'CRM Automation', href: '/crm-automation' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  const industries = [
    { name: 'Solar', href: '/industries/solar' },
    { name: 'E-commerce', href: '/industries/ecommerce' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Retail', href: '/industries/retail' },
  ];

  return (
    <footer className="bg-[#080F1E] pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="inline-block mb-6" aria-label="RankUp Home">
              <img
                src="/RankUp-Logo-transperent.png"
                alt="RankUp"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              A high-performance digital marketing agency specializing in lead generation, e-commerce growth, and CRM automation.
            </p>
            <div className="flex items-center space-x-4">
              {[Linkedin, Instagram, Youtube, Twitter].map((Icon, i) => (
                <Link
                  key={i}
                  to="/contact"
                  aria-label="Contact us on social media"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-gray-400"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-8">Industries</h4>
            <ul className="space-y-4">
              {industries.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 text-gray-400">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">+91 95581 16138</span>
              </li>
              <li className="flex items-start space-x-4 text-gray-400">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">hello@rankup.com</span>
              </li>
              <li className="flex items-start space-x-4 text-gray-400">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium leading-relaxed">
                  2nd Floor, Biz Hub, Near 99 Shipping Center,<br />
                  Amroli, Surat, Gujarat, India - 394107
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-medium">
            © 2025 RankUp Agency. All rights reserved.
          </p>
          <div className="flex items-center space-x-8 text-xs font-medium text-gray-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
