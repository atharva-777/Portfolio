"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsGithub, BsArrowUpRightSquare, BsEye } from "react-icons/bs";
import Scroll from "./Scroll";
import { ProjectType } from "../lib/interface";
import { urlFor } from "../lib/sanityImageUrl";

const imageParser = (value: string) => {
  return urlFor(value).url();
};

interface IProjectProps {
  projects: ProjectType;
}

const Project: React.FC<IProjectProps> = ({ projects }): React.ReactElement => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
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
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.05) 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.05) 2px, transparent 2px)`,
        backgroundSize: '100px 100px'
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
            className="inline-block px-4 py-2 bg-pink-500/20 backdrop-blur-sm rounded-full text-sm text-pink-300 mb-4 border border-pink-500/30"
            variants={titleVariants}
          >
            My Work
          </motion.div>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            variants={titleVariants}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"
            variants={titleVariants}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.div
                  className="aspect-video overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={imageParser(project.content[0].asset._ref)}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {project.all_links.map((_link, ind) => (
                      <motion.a
                        key={ind}
                        href={_link.url}
                        target={_link.name === "Live" ? "_blank" : "_self"}
                        rel={_link.name === "Live" ? "noopener noreferrer" : ""}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {_link.name === "Github" && <BsGithub size={20} />}
                        {_link.name === "Live" && <BsEye size={20} />}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((technology, ind) => (
                    <motion.div
                      key={ind}
                      className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Image
                        src={imageParser(technology.logo.asset._ref)}
                        alt={technology.name || `Tech ${ind}`}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </motion.div>
                  ))}
                  {project.technologies.length > 4 && (
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-400">+{project.technologies.length - 4}</span>
                    </div>
                  )}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  {project.all_links.map((_link, ind) => (
                    <motion.a
                      key={ind}
                      href={_link.url}
                      target={_link.name === "Live" ? "_blank" : "_self"}
                      rel={_link.name === "Live" ? "noopener noreferrer" : ""}
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {_link.name === "Github" && <BsGithub size={16} />}
                      {_link.name === "Live" && <BsEye size={16} />}
                      <span>{_link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Scroll page="contact" />
    </section>
  );
};

export default Project;
