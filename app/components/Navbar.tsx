"use client";
import React from "react";
import { useState } from "react";
import { Link as _link } from 'react-scroll/modules'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

interface navItem {
  label: string;
  page: string;
  show: boolean;
}

const navContent: Array<navItem> = [
  {
    label: "Home",
    page: "home",
    show: false,
  },
  {
    label: "About",
    page: "about",
    show: true,
  },
  {
    label: "Skills",
    page: "skill",
    show: true,
  },
  {
    label: "Projects",
    page: "projects",
    show: true,
  },
  {
    label: "Contact",
    page: "contact",
    show: true,
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const currentTheme = theme;
  const pathName = usePathname();
  const [navbar, setNavbar] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.header
      className="w-full mx-auto px-4 sm:px-20 fixed bg-white/95 backdrop-blur-md top-0 z-50 shadow-lg border-b border-gray-200/50 h-16"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="justify-between md:items-center md:flex h-full">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block h-full">
            <_link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              <motion.div
                className="container flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                  Atharva Jadhav
                </h2>
              </motion.div>
            </_link>
            <div className="md:hidden">
              <motion.button
                className="p-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setNavbar(!navbar)}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: navbar ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {navbar ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <motion.div
              className="items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0"
              variants={mobileMenuVariants}
              animate={navbar ? "open" : "closed"}
            >
              {navContent.map((item, idx) => {
                return item.show === true ? (
                  <_link
                    key={idx}
                    to={item.page}
                    className={
                      "relative block lg:inline-block text-gray-700 hover:text-purple-500 transition-colors duration-300 cursor-pointer font-medium"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    <motion.span
                      className="relative z-10"
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.label}
                    </motion.span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </_link>
                ) : null;
              })}

              <Link href='/blog' className="relative block lg:inline-block text-gray-700 hover:text-purple-500 transition-colors duration-300 cursor-pointer font-medium">
                <motion.span
                  className="relative z-10"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Blog
                </motion.span>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              <motion.div
                className="flex items-center justify-center pt-4 md:pt-0"
                whileHover={{ scale: 1.05 }}
              >
                <motion.button
                  onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300 shadow-lg"
                  whileHover={{ rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <RiSunLine size={20} className="text-yellow-500" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {navbar && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setNavbar(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
