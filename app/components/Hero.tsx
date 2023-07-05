"use client";
import React from 'react'
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import {useEffect} from 'react'
import Typed from 'typed.js';
interface role {
    role : string;
}

const roles: Array<role> = [
  { role: "Full Stack Web Developer" },
  { role: "UI/UX Designer" },
  { role: "DSA Enthusiast🚀" },
];

const Hero = () => {
    const el = React.useRef(null);
    useEffect(()=>{
        const typed = new Typed(el.current, {
          strings: [
            "Fullstack Developer.",
            "UI/UX Designer.",
            "DSA Enthusiast🚀.",
            "Learner.",
            "Fullstack Web Developer.",
          ],
          typeSpeed: 50,
        });
        return () => {
          typed.destroy();
        };
    },[])
   
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:pb-28 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/piccc-modified.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Atharva!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            <h3 className='text-3xl py-4'>
            I&#39;m a <span ref={el} className="font-semibold text-teal-600" />{" "}
            </h3>
            Working towards creating software that makes
            life easier and more meaningful.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}

export default Hero