import { motion } from 'framer-motion';
import { EDUCATION } from '../data';
import { useRef } from 'react';

// Custom 3D Tilt component for timeline items
function TimelineCard({ children, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) scale3d(1.02, 1.02, 1.02) translateZ(10px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, type: 'spring' }}
      className="relative pl-8 md:pl-12 w-full"
    >
      {/* Timeline Node */}
      <div className="absolute -left-[11px] top-6 w-5 h-5 rounded-full bg-neon-purple shadow-[0_0_15px_rgba(157,0,255,0.8)] z-10 ring-4 ring-dark-bg transition-transform duration-300 hover:scale-150"></div>
      
      {/* 3D Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="transition-transform duration-300 ease-out will-change-transform glass p-8 md:p-10 rounded-3xl border border-white/5 hover:border-neon-purple/30 bg-dark-card/60 backdrop-blur-xl group shadow-2xl overflow-hidden relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-neon-purple/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-purple transition-colors tracking-tight">{children.degree}</h3>
              <h4 className="text-lg text-neon-blue font-medium">{children.institution}</h4>
            </div>
            <div className="inline-flex px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-neon-purple shadow-sm group-hover:bg-neon-purple/10 transition-colors">
              {children.score}
            </div>
          </div>
          
          <div className="flex flex-wrap items-center text-sm font-mono text-gray-400 gap-x-6 gap-y-2 mt-4 pt-4 border-t border-white/5">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-neon-purple rounded-full"></span>
              {children.duration}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-neon-blue rounded-full"></span>
              {children.location}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-32 w-full px-6 flex justify-center relative">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-20"
        >
          <div className="h-[1px] bg-gradient-to-l from-gray-700 to-transparent w-12 md:w-32"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap tracking-tight">
            <span className="text-neon-purple font-mono text-2xl mr-3 opacity-80">06.</span>
            Education
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-gray-700 to-transparent w-full flex-grow"></div>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-12 pb-10">
          {/* Glowing Line tracer */}
          <motion.div 
            className="absolute left-[-2px] top-0 w-[2px] bg-gradient-to-b from-neon-purple via-neon-blue to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {EDUCATION.map((edu, index) => (
            <TimelineCard key={index} index={index}>
              {edu}
            </TimelineCard>
          ))}
        </div>
      </div>
    </section>
  );
}
