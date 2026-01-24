"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaDatabase, FaDocker, FaCloud, FaCode, FaRocket, FaStream, FaCogs, FaTools, FaServer } from "react-icons/fa";
import { SiSpring, SiApachekafka, SiApachespark, SiApacheflink, SiApacheairflow, SiMysql, SiMongodb, SiPostgresql, SiRedis, SiGit, SiGithub, SiPostman, SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiNextdotjs, SiTailwindcss, SiVite } from "react-icons/si";
import Scroll from "./Scroll";

const skillCategories = [
  {
    title: "Core Technologies",
    icon: <FaCode className="text-2xl text-blue-500" />,
    skills: [
      { name: "Java", icon: <FaJava className="text-red-500" />, level: 95, color: "bg-red-500" },
      { name: "Spring Boot", icon: <SiSpring className="text-green-500" />, level: 90, color: "bg-green-500" },
      { name: "Microservices", icon: <FaServer className="text-purple-500" />, level: 88, color: "bg-purple-500" },
      { name: "Python", icon: <FaPython className="text-yellow-500" />, level: 80, color: "bg-yellow-500" },
    ]
  },
  {
    title: "Data Processing",
    icon: <FaStream className="text-2xl text-cyan-500" />,
    skills: [
      { name: "Apache Kafka", icon: <SiApachekafka className="text-black" />, level: 92, color: "bg-gray-800" },
      { name: "Apache Beam", icon: <SiApachespark className="text-blue-600" />, level: 85, color: "bg-blue-600" },
      { name: "Apache Flink", icon: <SiApacheflink className="text-orange-500" />, level: 82, color: "bg-orange-500" },
      { name: "Apache Airflow", icon: <SiApacheairflow className="text-blue-400" />, level: 78, color: "bg-blue-400" },
    ]
  },
  {
    title: "Databases",
    icon: <FaDatabase className="text-2xl text-green-600" />,
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: 88, color: "bg-blue-600" },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" />, level: 82, color: "bg-blue-500" },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 80, color: "bg-green-500" },
      { name: "Redis", icon: <SiRedis className="text-red-500" />, level: 75, color: "bg-red-500" },
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <FaTools className="text-2xl text-gray-600" />,
    skills: [
      { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: 85, color: "bg-blue-500" },
      { name: "Git", icon: <SiGit className="text-orange-600" />, level: 90, color: "bg-orange-600" },
      { name: "GitHub", icon: <SiGithub className="text-gray-800" />, level: 88, color: "bg-gray-800" },
      { name: "Postman", icon: <SiPostman className="text-orange-500" />, level: 82, color: "bg-orange-500" },
    ]
  },
  {
    title: "Frontend Development",
    icon: <FaRocket className="text-2xl text-pink-500" />,
    skills: [
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 85, color: "bg-blue-600" },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, level: 88, color: "bg-yellow-500" },
      { name: "React", icon: <SiReact className="text-blue-400" />, level: 82, color: "bg-blue-400" },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-800" />, level: 80, color: "bg-gray-800" },
    ]
  },
  {
    title: "Web Technologies",
    icon: <FaCloud className="text-2xl text-indigo-500" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, level: 78, color: "bg-green-500" },
      { name: "Express.js", icon: <SiExpress className="text-gray-600" />, level: 75, color: "bg-gray-600" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" />, level: 90, color: "bg-teal-500" },
      { name: "Vite", icon: <SiVite className="text-yellow-400" />, level: 80, color: "bg-yellow-400" },
    ]
  }
];

const Skills = () => {
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skill" className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Bright background decoration */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 2px, transparent 2px)`,
        backgroundSize: '80px 80px'
      }}></div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={categoryVariants}>
          <motion.div
            className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-sm text-purple-700 mb-4 border border-purple-500/30"
            variants={categoryVariants}
          >
            Technical Expertise
          </motion.div>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
            variants={categoryVariants}
          >
            Skills & Technologies
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
            variants={categoryVariants}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={categoryVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group"
                    variants={skillVariants}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Scroll page="projects" />
    </section>
  );
};

export default Skills;
