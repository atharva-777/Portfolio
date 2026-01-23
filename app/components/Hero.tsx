"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { useEffect } from "react";
import Typed from "typed.js";
import Scroll from "./Scroll";
import { motion } from "framer-motion";

const roles: string[] = [
  "Fullstack Developer",
  "UI/UX Designer",
  "DSA Enthusiast🚀",
  "Problem Solver",
  "Tech Innovator"
];

const Hero = () => {
  const el = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: roles,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(156, 146, 172, 0.1) 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, rgba(156, 146, 172, 0.1) 2px, transparent 2px)`,
        backgroundSize: '60px 60px'
      }}></div>

      <motion.div
        className="container mx-auto px-6 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div className="flex-1 text-center lg:text-left" variants={itemVariants}>
            <motion.div
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-purple-200 mb-6 border border-white/20"
              variants={itemVariants}
            >
              👋 Welcome to my portfolio
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Atharva!
              </span>
            </motion.h1>

            <motion.div className="text-xl lg:text-2xl text-gray-300 mb-8" variants={itemVariants}>
              <span>I&apos;m a </span>
              <span ref={el} className="font-semibold text-purple-400"></span>
            </motion.div>

            <motion.p
              className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              Crafting digital experiences that make life easier and more meaningful.
              Passionate about solving complex problems with elegant solutions.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={itemVariants}>
              <Link
                to="projects"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                View My Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <Link
                to="contact"
                className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              ></motion.div>
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/piccc-modified.png"
                  alt="Atharva Jadhav"
                  fill
                  className="rounded-full object-cover shadow-2xl border-4 border-white/20"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Scroll page="about" />
    </section>
  );
};

export default Hero;
