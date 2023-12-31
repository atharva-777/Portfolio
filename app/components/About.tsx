"use client";
import React from "react";
import Scroll from "./Scroll";
const resume =
  "https://drive.google.com/file/d/1nsQny_Q41v13wdYl1ir9cai0IEd42-VH/view?usp=sharing";

const About = () => {
  return (
    <section id="about">
      <div className="my-12 pb-8 md:pt-16 md:pb-10 text-center">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="text-lg text-center items-center justify-center">
          <br />
          <p>
            👋 Hi there! I&#39;m Atharva, a passionate full-stack developer with
            expertise in the MERN stack. I love creating dynamic web
            applications and crafting seamless user experiences.
          </p>
          <br />
          <p>
            🚀 I thrive on solving complex problems and implementing efficient
            solutions. With a knack for problem-solving and a solid foundation
            in data structures and algorithms, I enjoy tackling challenging
            projects head-on.
          </p>
          <br />
          <p>
            🌱 Constantly learning and exploring new technologies, I stay
            up-to-date with the latest trends in web development. I&#39;m always
            eager to expand my knowledge and enhance my skills to deliver
            innovative solutions.
          </p>
          <br />
          <p>
            Passionate about creating exceptional web experiences, I&#39;m ready
            to contribute my skills and collaborate with like-minded individuals
            to build impactful applications.
          </p>
        </div>
        <br />
        <div className="text-center">
          <button
            type="submit"
            className="py-3 px-5 text-md text-neutral-50 font-medium text-center rounded-lg bg-teal-600 sm:w-fit hover:bg-teal-700 "
          >
            <a href={resume} rel="noreferrer" target="_blank">
              {"< "} Resume {" />"}
            </a>
          </button>
        </div>
      </div>
      <Scroll page="skill" />
    </section>
  );
};

export default About;
