import { motion } from 'framer-motion';
import { SKILLS } from '../data';
import { useRef } from 'react';

// Custom 3D Tilt Card component
function TiltCard({ children, className }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out will-change-transform h-full ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

const SkillCategory = ({ title, skills, colorClass, gradientClass, delay }) => (
  <TiltCard>
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
      className="glass p-8 md:p-10 rounded-3xl h-full relative overflow-hidden group hover:border-white/30 transition-all duration-500 bg-dark-card/60 backdrop-blur-xl border-white/10 shadow-2xl"
    >
      <div className={`absolute -right-20 -top-20 w-48 h-48 rounded-full blur-[80px] opacity-10 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none ${gradientClass}`}></div>
      <div className={`absolute -left-20 -bottom-20 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none ${gradientClass}`}></div>
      
      <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
        <h3 className="text-2xl font-bold mb-8 text-white tracking-tight group-hover:tracking-wide transition-all duration-300">{title}</h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.span
              whileHover={{ scale: 1.1, y: -5 }}
              key={skill}
              className={`px-4 py-2 rounded-xl text-sm md:text-base font-medium border bg-dark-bg/80 backdrop-blur-md transition-all duration-300 shadow-lg cursor-default ${colorClass}`}
              style={{ transform: 'translateZ(20px)' }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  </TiltCard>
);

export default function Skills() {
  return (
    <section id="skills" className="py-32 w-full px-6 flex justify-center relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          <SkillCategory 
            title="Languages" 
            skills={SKILLS.languages} 
            colorClass="text-blue-300 border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/20 shadow-[0_4px_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
            gradientClass="bg-blue-500"
            delay={0}
          />
          <SkillCategory 
            title="Frameworks" 
            skills={SKILLS.frameworks} 
            colorClass="text-green-300 border-green-500/30 hover:border-green-400 hover:bg-green-500/20 shadow-[0_4px_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
            gradientClass="bg-green-500"
            delay={0.1}
          />
          <SkillCategory 
            title="Tools & DBs" 
            skills={[...SKILLS.databases, ...SKILLS.versionControl]} 
            colorClass="text-purple-300 border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/20 shadow-[0_4px_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
            gradientClass="bg-purple-500"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
