import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 w-full px-6 flex justify-center">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
            <span className="text-neon-blue font-mono text-xl mr-2">05.</span> Certifications
          </h2>
          <div className="h-[1px] bg-gray-700 w-full flex-grow"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, idx) => {
            const [title, issuerDate] = cert.split(' – ');
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-xl flex items-start gap-4 hover:border-neon-blue/50 transition-colors"
              >
                <div className="text-3xl text-neon-blue mt-1">
                  🏅
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 leading-tight">{title}</h4>
                  <p className="text-gray-400 font-mono text-sm">{issuerDate}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
