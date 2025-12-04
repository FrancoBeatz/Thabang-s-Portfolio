import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm flex items-center gap-2">
          Made with <Heart size={14} className="text-red-500 fill-red-500" /> in South Africa
        </p>
      </div>
    </footer>
  );
};

export default Footer;