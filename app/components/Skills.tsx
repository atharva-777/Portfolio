"use client";
import React from "react";
import Image from "next/image";
import Scroll from "./Scroll";
import { motion } from "framer-motion";

const skills = [
  { skill: "HTML", img: "/assets/html.png", category: "Frontend" },
  { skill: "CSS", img: "/assets/css.png", category: "Frontend" },
  { skill: "JavaScript", img: "/assets/javascript.png", category: "Frontend" },
  { skill: "TypeScript", img: "/assets/typescript.png", category: "Frontend" },
  { skill: "React", img: "/assets/react.png", category: "Frontend" },
  { skill: "Next.js", img: "/assets/next.png", category: "Frontend" },
  { skill: "Tailwind CSS", img: "/assets/tailwind.png", category: "Frontend" },
  { skill: "Node.js", img: "/assets/node.png", category: "Backend" },
  { skill: "Express", img: "/assets/express.png", category: "Backend" },
  { skill: "MongoDB", img: "/assets/mongodb.png", category: "Database" },
  { skill: "MySQL", img: "/assets/mysql.png", category: "Database" },
  { skill: "Git", img: "/assets/git.png", category: "Tools" },
  { skill: "GitHub", img: "/assets/github.png", category: "Tools" },
  { skill: "Appwrite", img: "/assets/appwrite.svg", category: "Backend" },
  { skill: "Bootstrap", img: "/assets/bootstrap.png", category: "Frontend" },
  { skill: "Chakra UI", img: "/assets/chakraui.png", category: "Frontend" },
  { skill: "C++", img: "/assets/cpp.png", category: "Languages" },
  { skill: "Python", img: "/assets/python.png", category: "Languages" },
  { skill: "Postman", img: "/assets/postman.png", category: "Tools" },
  { skill: "Redux", img: "/assets/redux.png", category: "Frontend" },
  { skill: "Vite", img: "/assets/vite.png", category: "Tools" },
];

const categories = ["Frontend", "Backend", "Database", "Languages", "Tools"];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="skill" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.05) 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.05) 2px, transparent 2px)`,
        backgroundSize: '80px 80px'
      }}></div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={titleVariants}>
          <motion.div
            className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm text-blue-300 mb-4 border border-blue-500/30"
            variants={titleVariants}
          >
            My Expertise
          </motion.div>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            variants={titleVariants}
          >
            Technologies I Work With
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            variants={titleVariants}
          ></motion.div>
        </motion.div>

        {categories.map((category) => (
          <motion.div key={category} className="mb-12" variants={containerVariants}>
            <motion.h3
              className="text-2xl font-semibold text-white mb-6 text-center"
              variants={itemVariants}
            >
              {category}
            </motion.h3>
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center"
              variants={containerVariants}
            >
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="group relative"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
                      whileHover={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        borderColor: "rgba(59, 130, 246, 0.5)",
                      }}
                    >
                      <Image
                        src={skill.img}
                        height={40}
                        width={40}
                        alt={skill.skill}
                        className="w-8 h-8 md:w-10 md:h-10 object-contain filter brightness-110"
                      />
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      {skill.skill}
                    </motion.div>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <Scroll page="projects" />
    </section>
  );
};

export default Skills;
