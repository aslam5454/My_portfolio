import { motion } from 'framer-motion';
import { ABOUT } from '../data';

export default function About() {
  return (
    <section id="about" className="py-32 w-full px-6 flex justify-center relative">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap tracking-tight">
            <span className="text-neon-blue font-mono text-2xl mr-3 opacity-80">01.</span>
            About Me
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-gray-700 to-transparent w-full flex-grow"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Summary Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 glass p-10 md:p-12 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-colors"
          >
            {/* Soft Backlight */}
            <div className="absolute -inset-24 bg-gradient-to-br from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-full"></div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed relative z-10 font-light">
              {ABOUT.summary}
            </p>
          </motion.div>

          {/* Core Strengths Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-10 rounded-3xl flex flex-col justify-center relative overflow-hidden group hover:border-white/20 transition-colors"
          >
            <div className="absolute -inset-24 bg-gradient-to-tr from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-full"></div>

            <h3 className="text-sm font-mono tracking-widest text-neon-purple uppercase mb-6 relative z-10">Soft Skills</h3>
            <div className="flex flex-col gap-4 relative z-10">
              {ABOUT.softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-gray-300 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_8px_rgba(0,243,255,0.8)]"></span>
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
