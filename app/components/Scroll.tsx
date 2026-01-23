import React from 'react'
import { HiArrowDown } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Scroll = ({page}:{page:string}) => {
  return (
    <motion.div
      className="flex flex-row items-center text-center justify-center py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <Link
        to={page}
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <motion.div
          className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <HiArrowDown size={24} />
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default Scroll