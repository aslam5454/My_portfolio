import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-dark-bg min-h-screen text-gray-200 font-sans relative">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <footer className="w-full py-6 text-center text-sm text-gray-500 border-t border-white/10 mt-12 bg-dark-bg/80 backdrop-blur-md">
        <p>© {new Date().getFullYear()} Aslam Husain. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
