"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import Scroll from "./Scroll";




const projects = [
  {
    name: "Trello Clone",
    description:
      "A web-based task management application, using Next.js, Appwrite Cloud, and React Beautiful DND. User-friendly application inspired by Trello's board and card-based organization system.",
    image: "/assets/trelloclone.png",
    github: "https://github.com/atharva-777/Trello",
    link: "https://github.com/atharva-777/Trello",
  },
  {
    name: "LexiMind",
    description:
      "An innovative web application built using React and Vite, which utilizes the GPT-3 API from Rapid API to provide automated article summarization",
    image: "/assets/leximind.png",
    github: "https://github.com/atharva-777/LexiMind",
    link: "https://github.com/atharva-777/LexiMind",
  },
  {
    name: "ChatGenius",
    description:
      "A robust chat web application built using React, Redux, and Redux Toolkit, with seamless integration of the React Chat Engine API. Allows users to engage in real-time chat conversations with other users as well as an AI-powered chatbot",
    image: "/assets/chatgenius.png",
    github: "https://github.com/atharva-777/openai_project",
    link: "https://github.com/atharva-777/openai_project",
  },
];

const Project = () => {
  return (
    <section id="projects">
      <div className="my-12 pb-16">
        {/* <div className="md:pt-16 md:pb-28 text-center"> */}
        <h1 className="text-center font-bold text-4xl py-16">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        {/* </div> */}

        <div className="flex flex-col space-y-32">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 space-y-6 md:flex-row md:space-x-12">
                    <div className=" md:w-1/2">
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">
                        {project.name}
                      </h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-500  dark:text-neutral-500">
                        {project.description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>
            );
          })}
        </div>
      </div>
      <Scroll page="contact" />
    </section>
  );
};

export default Project;
