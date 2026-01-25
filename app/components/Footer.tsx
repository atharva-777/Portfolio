import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { TbBrandLeetcode } from 'react-icons/tb'
import { BiLogoGmail } from 'react-icons/bi'
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const mailId = process.env.NEXT_PUBLIC_EMAIL_ID;

const Footer = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: <BiLogoGmail size={24} />,
      href: `mailto:${mailId}`,
      color: "hover:text-red-400"
    },
    {
      name: "GitHub",
      icon: <AiOutlineGithub size={24} />,
      href: "https://github.com/atharva-777",
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      icon: <AiOutlineLinkedin size={24} />,
      href: "https://www.linkedin.com/in/atharva-jadhav-833149222/",
      color: "hover:text-blue-400"
    },
    {
      name: "LeetCode",
      icon: <TbBrandLeetcode size={24} />,
      href: "https://leetcode.com/atharva_777/",
      color: "hover:text-yellow-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="py-12 bg-gradient-to-t from-blue-100 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Bright background decoration */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 2px, transparent 2px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center mb-8">
          <motion.h3
            className="text-2xl font-bold text-gray-800 mb-2"
            variants={containerVariants}
          >
            Let&apos;s Connect
          </motion.h3>
          <motion.p
            className="text-gray-600 max-w-md mx-auto"
            variants={containerVariants}
          >
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </motion.p>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-8"
          variants={containerVariants}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl text-gray-600 ${link.color} transition-all duration-300 hover:bg-white/90 hover:scale-110 hover:shadow-lg`}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              variants={containerVariants}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"
          variants={containerVariants}
        ></motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center"
          variants={containerVariants}
        >
          <motion.p
            className="text-gray-600 flex items-center justify-center space-x-2"
            variants={containerVariants}
          >
            <span>© 2026 Atharva Jadhav</span>
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
