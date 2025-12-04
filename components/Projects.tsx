import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-ai-base relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gemini-blue/5 blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              A collection of innovative applications built with cutting-edge technology.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-gemini-pink"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-ai-surface rounded-3xl overflow-hidden border border-white/5 hover:border-gemini-purple/30 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-ai-surface to-transparent z-10 opacity-80"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col relative z-20 -mt-10">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-2xl font-bold text-white group-hover:text-gemini-blue transition-colors">
                    {project.title}
                  </h3>
                  <div className="bg-gemini-purple/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    <Sparkles size={16} className="text-gemini-purple" />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 rounded-full hover:bg-white/10 hover:text-white transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto flex gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                  <button 
                    disabled
                    className="inline-flex items-center justify-center px-4 py-3 border border-white/10 text-gray-500 rounded-xl font-semibold opacity-50 cursor-not-allowed hover:bg-white/5"
                  >
                    <Github size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;