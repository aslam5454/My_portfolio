import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../data';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 w-full px-6 flex justify-center">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap tracking-tight">
            <span className="text-neon-blue font-mono text-2xl mr-3 opacity-80">05.</span>
            Certifications
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-gray-700 to-transparent w-full flex-grow"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CERTIFICATIONS.map((cert, idx) => {
            const [title, issuerDate] = cert.title.split(' – ');
            
            // Extract issuer and date specifically dynamically
            let issuer = issuerDate;
            let date = "";
            if (issuerDate && issuerDate.includes('(')) {
              const parts = issuerDate.split('(');
              issuer = parts[0].trim();
              date = parts[1].replace(')', '').trim();
            }

            return (
              <motion.a
                href={cert.link}
                target={cert.link !== "#" ? "_blank" : "_self"}
                rel="noreferrer"
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col p-8 glass rounded-3xl border border-white/5 hover:border-neon-blue/40 bg-dark-card/40 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-neon-blue/10 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Background glow effect on hover */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-neon-blue/20 transition-colors duration-700 pointer-events-none z-0"></div>
                
                <div className="flex items-start justify-between mb-8 z-10 relative">
                  <div className="w-16 h-16 rounded-2xl bg-neon-blue/10 flex items-center justify-center text-neon-blue text-3xl group-hover:scale-110 group-hover:bg-neon-blue/20 transition-all duration-500 shadow-inner border border-neon-blue/10">
                    <FaAward />
                  </div>
                  {/* External Link Icon */}
                  {cert.link !== "#" && (
                     <div className="text-gray-500 group-hover:text-neon-blue transition-colors duration-300">
                       <FaExternalLinkAlt className="text-xl" />
                     </div>
                  )}
                </div>

                <div className="z-10 relative flex-grow flex flex-col">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug group-hover:text-neon-blue transition-colors tracking-tight">
                    {title}
                  </h4>
                  
                  <div className="mt-auto flex flex-wrap items-end sm:items-center justify-between pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors gap-4">
                    <span className="text-gray-300 font-medium text-sm sm:text-base border-l-2 border-neon-blue/50 pl-3">
                      {issuer}
                    </span>
                    {date && (
                      <span className="text-neon-blue font-mono text-xs bg-neon-blue/10 border border-neon-blue/20 px-3 py-1.5 rounded-lg whitespace-nowrap shadow-sm group-hover:bg-neon-blue/20 transition-colors">
                        {date}
                      </span>
                    )}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
