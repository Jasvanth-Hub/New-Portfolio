import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll'; // Import from react-scroll
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id='home' className="h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-16 text-white">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Jasvanth 👋</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        A passionate FullStack Developer and Competitive coder with expertise in DSA in C++ with a good 
        knowledge of Object-Oriented Programming.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg text-white transition dark:bg-blue-500 dark:hover:bg-blue-600 cursor-pointer"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg text-white transition dark:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer"
          >
            Contact Me
          </Link>
          <a
            href="/Jasvanth's resume.pdf"
            download
            className="bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-lg text-white font-medium flex items-center gap-2 transition"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
      <motion.div
        className="mt-12 lg:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={profileImg}
          alt="Profile"
          className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg border-4 border-cyan-400"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
