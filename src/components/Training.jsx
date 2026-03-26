import { motion } from 'framer-motion';
import { TRAINING } from '../data';
import { useRef } from 'react';

// Custom 3D Tilt component
function TiltCard({ children, className }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    
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

export default function Training() {
  return (
    <section id="training" className="py-32 w-full px-6 flex justify-center relative">
      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-20"
        >
          <div className="h-[1px] bg-gradient-to-l from-gray-700 to-transparent w-12 md:w-32"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap tracking-tight">
            <span className="text-neon-purple font-mono text-2xl mr-3 opacity-80">04.</span>
            Specialized Training
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-gray-700 to-transparent w-full flex-grow"></div>
        </motion.div>

        <TiltCard>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-10 md:p-14 rounded-3xl relative overflow-hidden group border border-white/5 hover:border-neon-purple/40 bg-dark-card/60 backdrop-blur-xl shadow-2xl"
          >
            {/* Hologram background glows */}
            <div className="absolute -top-32 -right-32 w-72 h-72 bg-neon-purple/10 blur-[80px] rounded-full group-hover:bg-neon-purple/20 transition-colors duration-700 pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-neon-blue/10 blur-[80px] rounded-full group-hover:bg-neon-blue/20 transition-colors duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-10" style={{ transform: 'translateZ(30px)' }}>
              {/* Left Side: Title & Info */}
              <div className="md:w-1/3">
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-neon-purple transition-colors tracking-tight">
                  {TRAINING.title.split(' - ')[0]}
                </h3>
                <h4 className="text-xl text-gray-300 mb-6 font-medium">
                  {TRAINING.title.split(' - ')[1]}
                </h4>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-neon-blue/10 border border-neon-blue/20 rounded-xl text-sm font-mono text-neon-blue shadow-inner w-fit">
                  <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
                  {TRAINING.duration}
                </div>
              </div>

              {/* Right Side: Details & Tech */}
              <div className="md:w-2/3 flex flex-col justify-center border-l border-white/10 pl-0 md:pl-10 pt-6 md:pt-0 mt-6 md:mt-0">
                <div className="space-y-5 mb-10">
                  {TRAINING.details.map((detail, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4"
                    >
                      <span className="text-neon-blue mt-1.5 text-xs">▹</span>
                      <p className="text-gray-300 leading-relaxed text-base md:text-lg">{detail}</p>
                    </motion.div>
                  ))}
                </div>

                <div>
                  <p className="text-sm text-gray-400 font-mono mb-4 uppercase tracking-wider">Key Technologies Mastered</p>
                  <div className="flex flex-wrap gap-3">
                    {TRAINING.tech.map(tech => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-mono text-neon-purple shadow-sm group-hover:bg-neon-purple/5 group-hover:border-neon-purple/30 transition-all cursor-default"
                        style={{ transform: 'translateZ(10px)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </section>
  );
}
