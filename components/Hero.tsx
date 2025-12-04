import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[url('https://i.ibb.co/4Zrh9Hx1/6d8e22236872023-Y3-Jvc-Cwx-MDUx-LDgy-Miww-LDA.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/80 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-slate-950"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6">
              Available for Hire
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
              {PERSONAL_INFO.role}
            </p>
            <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects"
                className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all transform hover:-translate-y-1"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute -inset-4 rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Main Image */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Badge */}
              <div className="absolute bottom-4 -right-4 bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-3 animate-bounce">
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 <span className="text-sm font-semibold text-white">Online Now</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;