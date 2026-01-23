"use client";
import React from "react";
import Scroll from "./Scroll";
import { motion } from "framer-motion";
import { FaDownload, FaCode, FaRocket, FaLightbulb } from "react-icons/fa";

const resume =
  "https://drive.google.com/file/d/1Z3mxrPhOFSvlYSdlfSzB3wMsFC1BqF6p/view?usp=sharing"

const About = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const features = [
    {
      icon: <FaCode className="text-3xl text-purple-400" />,
      title: "Full-Stack Expertise",
      description: "Proficient in MERN stack with modern frameworks and best practices"
    },
    {
      icon: <FaRocket className="text-3xl text-pink-400" />,
      title: "Problem Solver",
      description: "Strong foundation in DSA with a passion for tackling complex challenges"
    },
    {
      icon: <FaLightbulb className="text-3xl text-yellow-400" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and staying ahead of trends"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(76, 95, 213, 0.05) 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, rgba(76, 95, 213, 0.05) 2px, transparent 2px)`,
        backgroundSize: '60px 60px'
      }}></div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-sm text-purple-300 mb-4 border border-purple-500/30"
            variants={itemVariants}
          >
            About Me
          </motion.div>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Passionate Developer & Problem Solver
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div variants={itemVariants}>
            <motion.p
              className="text-lg text-gray-300 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              👋 Hi there! I&apos;m Atharva, a passionate full-stack developer with
              expertise in the MERN stack. I love creating dynamic web
              applications and crafting seamless user experiences.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              🚀 I thrive on solving complex problems and implementing efficient
              solutions. With a knack for problem-solving and a solid foundation
              in data structures and algorithms, I enjoy tackling challenging
              projects head-on.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              🌱 Constantly learning and exploring new technologies, I stay up-to-date with
              the latest trends in web development. I&apos;m always eager to expand my knowledge and
              enhance my skills to deliver innovative solutions.
            </motion.p>

            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="mr-2" />
              Download Resume
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </motion.div>

          {/* Feature Cards */}
          <motion.div className="grid gap-6" variants={containerVariants}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <Scroll page="skill" />
    </section>
  );
};

export default About;
