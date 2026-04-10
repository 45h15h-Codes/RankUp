import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LeadGenerationService() {
  return (
    <div className="pt-32 pb-20 bg-hero-gradient">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="inline-flex items-center rounded-full bg-white border border-blue-100 px-4 py-1.5 text-xs font-semibold text-primary mb-5">
          Lead Generation Service
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-heading leading-tight">
          Lead Generation
          <br />
          Page Is Coming Next
        </h1>
        <p className="text-body text-lg max-w-3xl mx-auto mt-5">
          This page will be designed in the next step. For now, we have removed the old single
          services layout and set dedicated routes for both service pages.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="/services/ecommerce"
            className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 font-bold hover:bg-primary-dark transition-colors"
          >
            View E-commerce Service
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white border border-gray-200 text-heading px-6 py-3 font-bold hover:bg-gray-50 transition-colors"
          >
            Talk to Our Team
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
