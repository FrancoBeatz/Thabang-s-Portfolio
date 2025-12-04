import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Let's <span className="text-cyan-500">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Me</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white font-medium hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Me</p>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white font-medium hover:text-purple-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                <div className="p-3 bg-green-500/10 text-green-400 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white placeholder-gray-600" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white placeholder-gray-600" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Subject</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white placeholder-gray-600" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white placeholder-gray-600" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
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