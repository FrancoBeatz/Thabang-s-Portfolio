import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Featured <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work turning ideas into digital reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white text-slate-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                  {/* Placeholder for github link if exists in future */}
                  <button 
                    disabled
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-slate-600 text-slate-400 rounded-lg font-semibold opacity-50 cursor-not-allowed"
                  >
                    <Github size={18} className="mr-2" />
                    Private Repo
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