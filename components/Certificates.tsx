import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Award } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-yellow-500/10 text-yellow-500">
            <Award size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Certifications
          </h2>
          <p className="text-gray-400">
            Recognized achievements and professional development.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl w-full p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl"
          >
            <div className="bg-slate-900 rounded-xl overflow-hidden p-4">
              <img 
                src={PERSONAL_INFO.certificateImage} 
                alt="Certificate" 
                className="w-full h-auto rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-6 py-2 rounded-full border border-slate-700 shadow-xl">
               <span className="text-white font-semibold flex items-center gap-2">
                 <Award size={16} className="text-yellow-500" /> 
                 Verified Certificate
               </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;