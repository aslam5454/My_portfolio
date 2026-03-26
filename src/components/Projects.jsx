import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { PROJECTS } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="py-32 w-full px-6 flex justify-center">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap tracking-tight">
            <span className="text-neon-blue font-mono text-2xl mr-3 opacity-80">03.</span>
            Featured Projects
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-gray-700 to-transparent w-full flex-grow"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col glass rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-neon-blue/10 border border-white/5 hover:border-white/20 transition-all duration-500 bg-dark-card/40 backdrop-blur-md relative"
            >
              {/* Image Section */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <div className="absolute inset-0 bg-neon-blue/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/20 to-transparent z-10"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 flex flex-col flex-grow relative z-20 -mt-6">
                <div className="flex justify-between items-start mb-6 gap-4">
                  <div>
                    <p className="text-neon-blue font-mono text-xs tracking-widest mb-2 uppercase opacity-90">Featured Project</p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-neon-purple transition-colors tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-4 items-center shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl sm:text-2xl hover:scale-110 transform duration-300">
                        <FaGithub />
                      </a>
                    )}
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl sm:text-2xl hover:scale-110 transform duration-300">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <ul className="flex flex-wrap text-sm font-mono text-neon-blue/70 gap-x-4 gap-y-2 mt-auto">
                  {project.techStack.map(tech => (
                    <li key={tech} className="bg-neon-blue/10 px-3 py-1 rounded-full group-hover:text-neon-blue transition-colors">{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
