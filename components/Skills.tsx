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
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Technical <span className="text-cyan-500">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2.5 rounded-full"
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>Beginner</span>
                  <span>{skill.level}%</span>
                  <span>Expert</span>
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