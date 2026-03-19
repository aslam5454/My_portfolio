import { motion } from 'framer-motion';
import { EDUCATION } from '../data';

export default function Education() {
  return (
    <section id="education" className="py-24 w-full px-6 flex justify-center bg-black/20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-[1px] bg-gray-700 w-12 md:w-32"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
            <span className="text-neon-purple font-mono text-xl mr-2">06.</span> Education
          </h2>
          <div className="h-[1px] bg-gray-700 w-full flex-grow"></div>
        </motion.div>

        <div className="relative border-l border-gray-700 ml-4 md:ml-8 space-y-12">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-neon-purple ring-4 ring-dark-bg"></div>
              
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <h4 className="text-lg text-neon-blue mb-2">{edu.institution}</h4>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm font-mono text-gray-400 mb-4 gap-2">
                  <span>{edu.duration}</span>
                  <span>{edu.location}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-200">
                  {edu.score}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
