import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 w-full px-6 flex justify-center">
      <div className="max-w-3xl w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-neon-blue font-mono mb-4 text-sm"
        >
          07. What's Next?
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 leading-relaxed mb-12 max-w-xl mx-auto"
        >
          Although I'm currently looking for any new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12"
        >
          <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-gray-300 hover:text-neon-blue transition-colors group">
            <span className="p-4 rounded-full bg-white/5 group-hover:bg-neon-blue/10 border border-white/10 group-hover:border-neon-blue/30 transition-all">
              <FaEnvelope className="text-xl" />
            </span>
            <span className="font-mono text-sm">{PERSONAL_INFO.email}</span>
          </a>
          <div className="flex items-center gap-3 text-gray-300 hover:text-neon-purple transition-colors group">
            <span className="p-4 rounded-full bg-white/5 group-hover:bg-neon-purple/10 border border-white/10 group-hover:border-neon-purple/30 transition-all">
              <FaPhoneAlt className="text-xl" />
            </span>
            <span className="font-mono text-sm">{PERSONAL_INFO.phone}</span>
          </div>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-block px-8 py-4 bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg font-bold rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]"
        >
          Say Hello
        </motion.a>
      </div>
    </section>
  );
}
