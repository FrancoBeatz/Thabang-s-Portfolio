import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Award, CheckCircle } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-24 bg-ai-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-gradient-to-tr from-yellow-500/20 to-orange-500/20 text-yellow-500 ring-1 ring-yellow-500/30">
            <Award size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Professional <span className="text-gradient">Certification</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Validated expertise and continuous learning.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative max-w-4xl w-full"
          >
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-gemini-blue via-gemini-purple to-gemini-pink blur-3xl opacity-20 -z-10 transform scale-105"></div>
            
            <div className="relative p-1 rounded-2xl bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-sm border border-white/10">
              <div className="bg-[#0f121a] rounded-xl overflow-hidden relative group">
                <img 
                  src={PERSONAL_INFO.certificateImage} 
                  alt="Certificate" 
                  className="w-full h-auto shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/50 shadow-lg flex items-center gap-2">
                   <CheckCircle size={16} className="text-green-500" />
                   <span className="text-white text-sm font-semibold tracking-wide">VERIFIED</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;