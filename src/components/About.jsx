import { motion } from 'framer-motion';
import { ABOUT } from '../data';
import { useRef } from 'react';

// Custom 3D Tilt Card component
function TiltCard({ children, className }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15;
    const y = (e.clientY - top - height / 2) / 15;
    
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
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 w-full px-6 flex justify-center relative">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap tracking-tight">
            <span className="text-neon-blue font-mono text-2xl mr-3 opacity-80">01.</span>
            About Me
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-gray-700 to-transparent w-full flex-grow"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Summary Box */}
          <TiltCard className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="h-full glass p-10 md:p-14 rounded-3xl relative overflow-hidden group hover:border-neon-blue/40 transition-colors bg-dark-card/60 backdrop-blur-xl border-white/10 shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -ml-20 -mt-20 group-hover:bg-neon-blue/20 transition-colors duration-700 pointer-events-none"></div>
              
              <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                  {ABOUT.summary}
                </p>
              </div>
            </motion.div>
          </TiltCard>

          {/* Core Strengths Box */}
          <TiltCard className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full glass p-10 rounded-3xl flex flex-col justify-center relative overflow-hidden group hover:border-neon-purple/40 transition-colors bg-dark-card/60 backdrop-blur-xl border-white/10 shadow-2xl"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl -mr-20 -mb-20 group-hover:bg-neon-purple/20 transition-colors duration-700 pointer-events-none"></div>

              <div className="relative z-10" style={{ transform: 'translateZ(40px)' }}>
                <h3 className="text-sm font-mono tracking-widest text-neon-purple uppercase mb-8">Soft Skills</h3>
                <div className="flex flex-col gap-5">
                  {ABOUT.softSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      whileHover={{ x: 10, color: '#fff' }}
                      className="flex items-center gap-4 text-gray-400 font-medium transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_10px_rgba(157,0,255,0.8)]"></span>
                      <span className="text-lg">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
