import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Code, Layout, Server, Database, Layers, Monitor } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Code: Code,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Layers: Layers,
  Monitor: Monitor
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-ai-base relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Mastering the tools that power the modern web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 rounded-2xl hover:border-gemini-blue/30 transition-colors group relative overflow-visible"
              >
                {/* Tooltip */}
                {skill.description && (
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 p-3 bg-[#1E2538] border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 transform translate-y-2 group-hover:translate-y-0 shadow-xl">
                    <p className="text-xs text-gray-300 text-center leading-relaxed font-medium">{skill.description}</p>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-45 w-2 h-2 bg-[#1E2538] border-r border-b border-white/10"></div>
                  </div>
                )}

                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-gemini-blue/5 to-gemini-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="relative z-10 flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-gemini-blue group-hover:to-gemini-purple transition-all shadow-lg">
                    <Icon size={24} />
                  </div>
                  <span className="text-2xl font-display font-bold text-white/20 group-hover:text-white/40 transition-colors">
                    {skill.level}%
                  </span>
                </div>
                
                <h3 className="relative z-10 text-xl font-semibold text-white mb-3">{skill.name}</h3>
                
                <div className="relative z-10 w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for smooth easeOut
                    className="bg-gradient-to-r from-gemini-blue via-gemini-purple to-gemini-pink h-full rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;