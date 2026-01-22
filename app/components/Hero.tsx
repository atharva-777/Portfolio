"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { useEffect } from "react";
import Typed from "typed.js";
import Scroll from "./Scroll";

interface role {
  role: string;
}

const roles: Array<role> = [
  { role: "Full Stack Web Developer" },
  { role: "UI/UX Designer" },
  { role: "DSA Enthusiast🚀" },
];

const Hero = () => {
  const el = React.useRef(null);
  useEffect(() => {
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
  }, []);

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-8 py-16 sm:py-24 md:py-32 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/piccc-modified.png"
            alt=""
            id="img"
            width={400}
            height={400}
            className="rounded-full p-12 shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Atharva!
          </h1>
          <div className="text-lg mt-4 mb-6 md:text-2xl">
            <h3 className="text-3xl py-4">
              I&#39;m a{" "}
              <span ref={el} className="font-semibold text-teal-600" />{" "}
            </h3>
            <p>
              Working towards creating software that makes life easier and more
              meaningful.
            </p>
          </div>
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
      <Scroll page="about" />
    </section>
  );
};

export default Hero;
