"use client";
import React from "react";
import Scroll from "./Scroll";
import { motion } from "framer-motion";
import { FaDownload, FaCode, FaRocket, FaLightbulb, FaJava, FaDatabase, FaCloud, FaTrophy } from "react-icons/fa";

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
      icon: <FaJava className="text-3xl text-red-400" />,
      title: "Java & Microservices",
      description: "Building scalable Java-based microservices with Spring Boot for enterprise applications"
    },
    {
      icon: <FaDatabase className="text-3xl text-green-400" />,
      title: "Data Processing Expert",
      description: "Real-time data processing with Apache Kafka, Beam, and Flink for high-throughput systems"
    },
    {
      icon: <FaCloud className="text-3xl text-blue-400" />,
      title: "Cloud & DevOps",
      description: "Containerization with Docker and workflow orchestration using Apache Airflow"
    },
    {
      icon: <FaTrophy className="text-3xl text-yellow-400" />,
      title: "Hackathon Champion",
      description: "Flipkart Grid 5.0 Semi-Finalist - Top 1% from 400K+ participants worldwide"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Bright background decoration */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 2px, transparent 2px)`,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Floating bright shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-500 rounded-lg opacity-20"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm text-white mb-6 border border-white/20 shadow-lg"
            variants={itemVariants}
          >
            About Me
          </motion.div>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
            variants={itemVariants}
          >
            Software Engineer & Backend Architect
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div variants={itemVariants}>
            <motion.p
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              👋 Hi there! I&apos;m Atharva Jadhav, a Software Engineer at{" "}
              <span className="text-blue-600 font-semibold">Raja Software Labs</span>{" "}
              specializing in building scalable Java microservices and real-time data processing systems.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              🚀 Currently working on Java-based microservices supporting LinkedIn&apos;s reporting ecosystem,
              implementing real-time data processing with Apache Kafka, Apache Beam, and Flink.
              Previously led backend development at Yoliday LLP, improving efficiency by 30%.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              🏆 Recognized as a{" "}
              <span className="text-purple-600 font-semibold">Flipkart Grid 5.0 Semi-Finalist</span>{" "}
              (Top 1% from 400K+ participants) and keynote speaker at GitHub workshops.
              Passionate about learning Golang and exploring cutting-edge technologies.
            </motion.p>

            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
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
                className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-xl p-6 hover:bg-white/90 hover:shadow-xl transition-all duration-300 shadow-lg"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Scroll page="skill" />
      </motion.div>

    </section>
  );
};

export default About;
