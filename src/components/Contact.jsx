import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } }
  };

  return (
    <section id="contact" className="py-32 w-full px-6 flex justify-center relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full mix-blend-screen filter blur-[100px] -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full mix-blend-screen filter blur-[100px] -translate-y-1/2 pointer-events-none z-0 mt-32"></div>

      <div className="max-w-6xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-20 text-center"
        >
          <p className="text-neon-blue font-mono mb-4 text-sm tracking-widest uppercase">
            07. What's Next?
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
        </motion.div>

        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center w-full"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Let's connect</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl">
              Although I'm currently looking for new opportunities, my inbox is always open. 
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            {/* Contact Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
            >
              {/* Email */}
              <motion.a
                variants={itemVariants}
                whileHover={{ y: -10 }}
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex flex-col items-center p-8 glass rounded-3xl border border-white/5 hover:border-neon-blue/40 bg-dark-card/40 hover:bg-neon-blue/5 transition-all duration-300 shadow-xl cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-neon-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                  <FaEnvelope className="text-2xl text-neon-blue" />
                </div>
                <p className="text-sm text-gray-400 font-mono mb-2">Email</p>
                <p className="text-gray-200 group-hover:text-white font-medium break-all text-center">{PERSONAL_INFO.email}</p>
              </motion.a>

              {/* GitHub */}
              <motion.a
                variants={itemVariants}
                whileHover={{ y: -10 }}
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center p-8 glass rounded-3xl border border-white/5 hover:border-white/40 bg-dark-card/40 hover:bg-white/5 transition-all duration-300 shadow-xl cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <FaGithub className="text-2xl text-white" />
                </div>
                <p className="text-sm text-gray-400 font-mono mb-2">GitHub</p>
                <p className="text-gray-200 group-hover:text-white font-medium">@aslam5454</p>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                variants={itemVariants}
                whileHover={{ y: -10 }}
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center p-8 glass rounded-3xl border border-white/5 hover:border-neon-purple/40 bg-dark-card/40 hover:bg-neon-purple/5 transition-all duration-300 shadow-xl cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-neon-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(157,0,255,0.2)]">
                  <FaLinkedin className="text-2xl text-neon-purple" />
                </div>
                <p className="text-sm text-gray-400 font-mono mb-2">LinkedIn</p>
                <p className="text-gray-200 group-hover:text-white font-medium">Aslam Husain</p>
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
