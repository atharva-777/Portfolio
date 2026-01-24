"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { useEffect } from "react";
import Typed from "typed.js";
import Scroll from "./Scroll";
import { motion } from "framer-motion";

const roles: string[] = [
  "Software Engineer",
  "Java Backend Developer",
  "Microservices Architect",
  "Data Processing Expert",
  "Full-Stack Developer"
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
    <section id="home" className="min-h-screen flex items-start justify-center pt-4 pb-8 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background with bright colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10"></div>

      {/* Floating colorful particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 5 === 0 ? 'bg-blue-400' :
              i % 5 === 1 ? 'bg-purple-400' :
              i % 5 === 2 ? 'bg-pink-400' :
              i % 5 === 3 ? 'bg-green-400' : 'bg-yellow-400'
            }`}
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Bright geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-500 rounded-lg opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20"
          animate={{
            scale: [1, 1.4, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 py-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.div className="w-full" variants={itemVariants}>
            <motion.div
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-purple-600 mb-6 border border-purple-200"
              variants={itemVariants}
            >
              👋 Welcome to my portfolio
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight"
              variants={itemVariants}
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Atharva Jadhav
              </span>
            </motion.h1>

            <motion.div className="text-xl lg:text-2xl text-gray-700 mb-8" variants={itemVariants}>
              <span>I&apos;m a </span>
              <span ref={el} className="font-semibold text-purple-600"></span>
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed mx-auto"
              variants={itemVariants}
            >
              Currently building scalable Java microservices at{" "}
              <span className="text-purple-600 font-semibold">Raja Software Labs</span>,
              specializing in real-time data processing with Kafka, Apache Beam, and cloud technologies.
              Passionate about creating robust backend systems that power modern applications.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3 mb-8 justify-center" variants={itemVariants}>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200 shadow-sm">
                Java & Spring Boot
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200 shadow-sm">
                Apache Kafka
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200 shadow-sm">
                Microservices
              </span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium border border-yellow-200 shadow-sm">
                Flipkart Grid 5.0 Semi-Finalist
              </span>
            </motion.div>

            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 justify-center" variants={itemVariants}>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50">
                <div className="text-3xl font-bold text-blue-600">2+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50">
                <div className="text-3xl font-bold text-purple-600">400K+</div>
                <div className="text-sm text-gray-600 font-medium">Competition Rank</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50">
                <div className="text-3xl font-bold text-green-600">10+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Built</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50">
                <div className="text-3xl font-bold text-pink-600">30%</div>
                <div className="text-sm text-gray-600 font-medium">Efficiency Boost</div>
              </div>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
              <Link
                to="projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
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
                className="px-8 py-4 border-2 border-purple-300 bg-white/80 backdrop-blur-sm rounded-full text-purple-700 font-semibold hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 shadow-lg"
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
        </div>

        <Scroll page="about" />
      </motion.div>

    </section>
  );
};

export default Hero;
