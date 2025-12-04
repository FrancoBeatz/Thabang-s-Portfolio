import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-ai-base pt-16">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gemini-mesh opacity-40"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gemini-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gemini-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gemini-blue/30 bg-gemini-blue/10 text-gemini-blue text-sm font-semibold mb-6 backdrop-blur-md"
            >
              <Sparkles size={14} />
              <span>Available for Hire</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
              I'm <span className="text-gradient">{PERSONAL_INFO.name.split(' ')[0]}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
              {PERSONAL_INFO.role}
            </p>
            
            <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects"
                className="group relative px-8 py-3.5 bg-white text-black rounded-full font-semibold flex items-center justify-center gap-2 overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gemini-blue via-gemini-purple to-gemini-pink opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span>View Projects</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="px-8 py-3.5 border border-white/20 text-white hover:bg-white/5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:border-white/40"
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
            className="flex-1 flex justify-center lg:justify-end relative"
          >
             {/* Tech Ring Background */}
             <div className="absolute inset-0 bg-gradient-to-tr from-gemini-blue/20 to-gemini-pink/20 rounded-full blur-[80px] -z-10"></div>
             
             <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] animate-float">
                {/* Rotating border effect */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-gemini-blue via-transparent to-gemini-pink opacity-70 blur-sm animate-[spin_8s_linear_infinite]"></div>
                
                <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-white/10 bg-ai-surface shadow-2xl">
                  <img 
                    src={PERSONAL_INFO.profileImage} 
                    alt={PERSONAL_INFO.name} 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ai-base/80 via-transparent to-transparent"></div>
                </div>

                {/* Floating Badges */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-10 -left-4 glass-panel px-4 py-3 rounded-xl flex items-center gap-3 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gemini-blue to-gemini-purple flex items-center justify-center text-white font-bold text-xs">
                    JS
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Expertise</p>
                    <p className="text-sm font-bold text-white">Full Stack</p>
                  </div>
                </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;