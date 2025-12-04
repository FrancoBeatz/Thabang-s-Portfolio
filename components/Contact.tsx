import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-ai-base relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gemini-purple/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gemini-blue/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-3 rounded-2xl bg-gradient-to-br from-gemini-blue/20 to-gemini-purple/20 mb-6">
               <Zap className="text-gemini-blue" size={32} />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Let's <span className="text-gradient">Collaborate</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Have a project in mind? I'm available for freelance work and open to new opportunities. Let's build something amazing together.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="block group">
                <div className="flex items-center gap-5 p-5 glass-panel rounded-2xl hover:border-gemini-blue/50 transition-all">
                  <div className="p-4 bg-gemini-blue/10 text-gemini-blue rounded-xl group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Email</p>
                    <p className="text-xl text-white font-display font-medium group-hover:text-gemini-blue transition-colors">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>
              </a>

              <a href={`tel:${PERSONAL_INFO.phone}`} className="block group">
                <div className="flex items-center gap-5 p-5 glass-panel rounded-2xl hover:border-gemini-purple/50 transition-all">
                  <div className="p-4 bg-gemini-purple/10 text-gemini-purple rounded-xl group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-xl text-white font-display font-medium group-hover:text-gemini-purple transition-colors">
                      {PERSONAL_INFO.phone}
                    </p>
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-5 p-5 glass-panel rounded-2xl">
                <div className="p-4 bg-gemini-pink/10 text-gemini-pink rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Location</p>
                  <p className="text-xl text-white font-display font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-ai-surface p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-[#0B0F19] border border-white/10 rounded-xl focus:ring-2 focus:ring-gemini-blue focus:border-transparent outline-none text-white placeholder-gray-700 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                  <input type="email" className="w-full px-5 py-4 bg-[#0B0F19] border border-white/10 rounded-xl focus:ring-2 focus:ring-gemini-purple focus:border-transparent outline-none text-white placeholder-gray-700 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                <input type="text" className="w-full px-5 py-4 bg-[#0B0F19] border border-white/10 rounded-xl focus:ring-2 focus:ring-gemini-pink focus:border-transparent outline-none text-white placeholder-gray-700 transition-all" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 bg-[#0B0F19] border border-white/10 rounded-xl focus:ring-2 focus:ring-gemini-blue focus:border-transparent outline-none text-white placeholder-gray-700 transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;