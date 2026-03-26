import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import myPhoto from '../assets/my_photo.jpeg';
import aslamCV from '../assets/Aslam_cv.pdf';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column: Text Content */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="text-left"
        >
          <motion.p variants={item} className="text-neon-blue font-mono mb-4 text-lg">
            Hi, my name is
          </motion.p>
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight">
            {PERSONAL_INFO.name}.
          </motion.h1>
          
          {/* Animated Typing Text Simulation */}
          <motion.div variants={item} className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 mb-8 flex flex-col md:flex-row flex-wrap md:gap-3 gap-1">
            <span className="text-gradient block">Full Stack Developer</span>
            <span className="hidden md:inline opacity-50">|</span>
            <span className="block">Java Developer</span>
            <span className="hidden md:inline opacity-50">|</span>
            <span className="text-gray-500 block">Problem Solver</span>
          </motion.div>

          <motion.p variants={item} className="text-gray-400 max-w-xl mb-10 text-lg leading-relaxed">
            I build exceptional and accessible digital experiences. Currently focused on building accessible, human-centered products while continuing to master scalable backend architecture.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="px-6 py-3 bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 bg-neon-purple/20 border border-neon-purple text-white hover:bg-neon-purple hover:text-white font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              Contact Me
            </a>
            <a href={aslamCV} download="Aslam_Husain_CV.pdf" className="px-6 py-3 bg-gray-800 border border-gray-600 text-gray-300 hover:bg-gray-700 font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="flex gap-6">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-transform text-3xl">
              <FaGithub />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon-blue hover:-translate-y-1 transition-transform text-3xl">
              <FaLinkedin />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-red-400 hover:-translate-y-1 transition-transform text-3xl">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Photo Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4, delay: 0.2 }}
          className="relative mx-auto mt-12 md:mt-0 w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96"
        >
          {/* Decorative Background Frame */}
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-full transform translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 -z-10 opacity-70"></div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-full overflow-hidden glass w-full h-full flex items-center justify-center border-4 border-white/10 shadow-2xl"
          >
            {/* The Image */}
            <img 
              src={myPhoto} 
              alt="Aslam Husain Photo" 
              className="object-cover w-full h-full filter saturate-150 contrast-125"
            />
            
            {/* Floating glowing overlay for polish */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent pointer-events-none rounded-full"></div>
          </motion.div>

          {/* Floating Accents */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -right-6 w-24 h-24 bg-neon-purple/20 backdrop-blur-3xl rounded-full border border-neon-purple/30 -z-20"
          ></motion.div>
          
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-8 -left-8 w-32 h-32 bg-neon-blue/20 backdrop-blur-3xl rounded-full border border-neon-blue/30 -z-20"
          ></motion.div>

        </motion.div>

      </div>
    </section>
  );
}
