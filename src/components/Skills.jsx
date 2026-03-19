import { motion } from 'framer-motion';
import { SKILLS } from '../data';

const SkillCategory = ({ title, skills, colorClass, gradientClass, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="glass p-8 rounded-3xl h-full relative overflow-hidden group hover:border-white/20 transition-all duration-300"
  >
    <div className={`absolute -right-20 -top-20 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 ${gradientClass}`}></div>
    
    <h3 className="text-xl font-bold mb-8 text-white tracking-tight">{title}</h3>
    <div className="flex flex-wrap gap-3 relative z-10">
      {skills.map((skill, index) => (
        <span
          key={skill}
          className={`px-4 py-2 rounded-xl text-sm font-medium border bg-dark-bg/80 backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-default ${colorClass}`}
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-32 w-full px-6 flex justify-center bg-black/40 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-20"
        >
          <div className="h-[1px] bg-gradient-to-l from-gray-700 to-transparent w-12 md:w-32"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap tracking-tight">
            <span className="text-neon-purple font-mono text-2xl mr-3 opacity-80">02.</span>
            Technical Arsenal
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-gray-700 to-transparent w-full flex-grow"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory 
            title="Languages" 
            skills={SKILLS.languages} 
            colorClass="text-blue-300 border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            gradientClass="bg-blue-500"
            delay={0}
          />
          <SkillCategory 
            title="Frameworks" 
            skills={SKILLS.frameworks} 
            colorClass="text-green-300 border-green-500/20 hover:border-green-400/50 hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
            gradientClass="bg-green-500"
            delay={0.1}
          />
          <SkillCategory 
            title="Tools & DBs" 
            skills={[...SKILLS.databases, ...SKILLS.versionControl]} 
            colorClass="text-purple-300 border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            gradientClass="bg-purple-500"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
