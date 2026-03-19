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

        <div className="flex flex-col gap-24 md:gap-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
            >
              {/* Premium Image Showcase */}
              <div className="w-full md:w-2/3 relative group cursor-pointer perspective-1000">
                <motion.div 
                  whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? -2 : 2, rotateX: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative rounded-2xl overflow-hidden glass shadow-2xl z-10 aspect-video border-[1px] border-white/10 group-hover:border-neon-blue/50 transition-colors duration-500"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 filter group-hover:brightness-110"
                  />
                  {/* Subtle color overlay */}
                  <div className="absolute inset-0 bg-neon-purple/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
                {/* Background Glow */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${index % 2 === 0 ? 'from-neon-blue to-neon-purple' : 'from-neon-purple to-neon-blue'} opacity-0 group-hover:opacity-30 blur-2xl transition duration-700 rounded-3xl -z-10`}></div>
              </div>

              {/* Text Highlights */}
              <div className={`w-full md:w-1/3 flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} z-20`}>
                <p className="text-neon-blue font-mono text-sm tracking-widest mb-3 uppercase opacity-90">Featured Project</p>
                <h3 className="text-3xl font-bold text-white mb-6 hover:text-neon-purple transition-colors cursor-pointer tracking-tight">{project.title}</h3>
                
                <div className="glass p-6 md:p-8 rounded-2xl mb-6 text-gray-300 shadow-2xl backdrop-blur-xl bg-dark-card/80 border-white/5 relative">
                  <p className="text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <ul className={`flex flex-wrap text-sm font-mono text-gray-400 gap-x-5 gap-y-2 mb-8 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  {project.techStack.map(tech => (
                    <li key={tech} className="whitespace-nowrap hover:text-white transition-colors cursor-default">{tech}</li>
                  ))}
                </ul>

                <div className={`flex gap-5 items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors text-2xl hover:scale-110 transform duration-300">
                      <FaGithub />
                    </a>
                  )}
                  <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors text-2xl hover:scale-110 transform duration-300">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
