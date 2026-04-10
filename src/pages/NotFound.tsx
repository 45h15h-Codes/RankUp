import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-primary font-bold uppercase tracking-widest mb-4">404</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-heading mb-6">Page Not Found</h1>
        <p className="text-body text-lg mb-10">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/"
            className="bg-primary text-white px-7 py-3 rounded-full font-bold inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="border border-gray-200 text-heading px-7 py-3 rounded-full font-bold hover:bg-gray-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
