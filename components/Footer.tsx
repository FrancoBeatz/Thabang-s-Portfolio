import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Heart, Github, Linkedin, Briefcase, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: { [key: string]: React.ElementType } = {
  Github: Github,
  Linkedin: Linkedin,
  Briefcase: Briefcase
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0F19] py-12 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-1 bg-gradient-to-r from-transparent via-gemini-blue/50 to-transparent blur-sm"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-display font-bold text-gradient">TM.</span>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. <br className="hidden md:block"/>All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon] || ExternalLink;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-3 rounded-full bg-ai-surface hover:bg-ai-surface-light border border-white/5 hover:border-gemini-blue/50 transition-all group"
                  aria-label={link.name}
                >
                  <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              );
            })}
          </div>

          <p className="text-gray-500 text-sm flex items-center gap-2">
            Made with <Heart size={14} className="text-gemini-pink fill-gemini-pink animate-pulse" /> in South Africa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;