/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CRMAutomation from './pages/CRMAutomation';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SolarIndustry from './pages/industries/SolarIndustry';
import EcommerceIndustry from './pages/industries/EcommerceIndustry';
import EducationIndustry from './pages/industries/EducationIndustry';
import HealthcareIndustry from './pages/industries/HealthcareIndustry';
import RealEstateIndustry from './pages/industries/RealEstateIndustry';
import RetailIndustry from './pages/industries/RetailIndustry';
import NotFound from './pages/NotFound';
import EcommerceService from './pages/services/EcommerceService';
import LeadGenerationService from './pages/services/LeadGenerationService';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const routeMeta: Record<string, {title: string; description: string}> = {
  '/': {
    title: 'RankUp Digital Marketing Agency | Performance Growth Partner',
    description:
      'RankUp helps businesses scale with performance marketing, CRM automation, and conversion-focused growth systems.',
  },
  '/about': {
    title: 'About RankUp | Growth-Focused Marketing Team',
    description:
      'Learn about RankUp, our mission, and how we build measurable marketing systems for sustainable revenue growth.',
  },
  '/services/ecommerce': {
    title: 'E-commerce Growth Services | RankUp',
    description:
      'Scale your online store with ad performance, conversion optimization, and retention automation.',
  },
  '/services/lead-generation': {
    title: 'Lead Generation Services | RankUp',
    description:
      'Get high-quality leads with performance campaigns, optimized funnels, and CRM-driven follow-ups.',
  },
  '/crm-automation': {
    title: 'CRM Automation Services | RankUp',
    description:
      'Automate lead nurturing and sales workflows with RankUp CRM automation solutions tailored for growth.',
  },
  '/case-studies': {
    title: 'Case Studies | RankUp Results',
    description:
      'Review real-world marketing case studies and outcomes delivered by RankUp across multiple industries.',
  },
  '/contact': {
    title: 'Contact RankUp | Book a Growth Consultation',
    description:
      'Get in touch with RankUp to discuss your growth goals. Send us your details and our team will respond quickly.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | RankUp',
    description: 'Read the RankUp privacy policy covering data collection, usage, and security practices.',
  },
  '/terms-of-service': {
    title: 'Terms of Service | RankUp',
    description: 'Read the terms and conditions governing use of the RankUp website and services.',
  },
  '/not-found': {
    title: 'Page Not Found | RankUp',
    description: 'The requested page could not be found. Return to the homepage or contact RankUp for help.',
  },
};

function ensureMetaTag(attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta =
      pathname.startsWith('/industries/')
        ? {
            title: 'Industry Growth Solutions | RankUp',
            description:
              'Custom digital growth strategies for your industry with performance marketing and automation.',
          }
        : routeMeta[pathname] || routeMeta['/not-found'];

    document.title = meta.title;
    ensureMetaTag('name', 'description', meta.description);
    ensureMetaTag('property', 'og:title', meta.title);
    ensureMetaTag('property', 'og:description', meta.description);
    ensureMetaTag('property', 'og:type', 'website');

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${window.location.origin}${pathname}`);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <RouteMeta />
      <div className="min-h-screen bg-white font-sans selection:bg-primary/10 selection:text-primary">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Navigate to="/services/ecommerce" replace />} />
            <Route path="/services/ecommerce" element={<EcommerceService />} />
            <Route path="/services/lead-generation" element={<LeadGenerationService />} />
            <Route path="/crm-automation" element={<CRMAutomation />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/industries/solar" element={<SolarIndustry />} />
            <Route path="/industries/ecommerce" element={<EcommerceIndustry />} />
            <Route path="/industries/education" element={<EducationIndustry />} />
            <Route path="/industries/healthcare" element={<HealthcareIndustry />} />
            <Route path="/industries/real-estate" element={<RealEstateIndustry />} />
            <Route path="/industries/retail" element={<RetailIndustry />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
