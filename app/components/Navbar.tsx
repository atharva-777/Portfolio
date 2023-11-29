"use client";
import React from "react";
import { useState } from "react";
// import { Link } from "react-scroll/modules";
import {Link as _link} from 'react-scroll/modules'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

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
    label: "Experience",
    page: "experience",
    show: false,
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
  // {
  //   label: 'Blog',
  //   page: 'blog',
  //   show: true,
  // }
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const currentTheme = theme;
  const pathName = usePathname();
  const [navbar, setNavbar] = useState(false);
  return (
    <header
      // className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white  border-b-2 dark:bg-stone-900 border-stone-600
      // "
      className="w-full mx-auto px-4 sm:px-20 fixed dark:bg-slate-900/40 backdrop-blur-md top-0 z-50 shadow border-b-2"
    >
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <_link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 hover:cursor-pointer">
                  Atharva Jadhav
                </h2>
              </div>
            </_link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navContent.map((item, idx) => {
                return item.show === true ? (
                  <_link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900 hover:cursor-pointer  hover:text-neutral-500 dark:text-neutral-100"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </_link>
                ) : null;
              })}

              <Link href='/blog'>Blog</Link>

              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} color="black" />
                </button>
              )}

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
