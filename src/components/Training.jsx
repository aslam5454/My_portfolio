import { motion } from 'framer-motion';
import { TRAINING } from '../data';

export default function Training() {
  return (
    <section id="training" className="py-24 w-full px-6 flex justify-center bg-black/20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-[1px] bg-gray-700 w-12 md:w-32"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
            <span className="text-neon-purple font-mono text-xl mr-2">04.</span> Specialized Training
          </h2>
          <div className="h-[1px] bg-gray-700 w-full flex-grow"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass p-8 md:p-10 rounded-2xl relative overflow-hidden group"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-purple/20 blur-3xl rounded-full"></div>
          
          <h3 className="text-2xl font-bold text-white mb-2">{TRAINING.title}</h3>
          <p className="text-neon-blue font-mono mb-6">{TRAINING.duration}</p>

          <div className="space-y-4 mb-8">
            {TRAINING.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-neon-blue mt-1">▹</span>
                <p className="text-gray-300 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-sm text-gray-400 font-mono mb-3">Key Technologies & Concepts:</p>
            <div className="flex flex-wrap gap-2">
              {TRAINING.tech.map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-neon-purple">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
