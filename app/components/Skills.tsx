"use client";
import React from "react";
import Image from "next/image";
import Scroll from "./Scroll";

const skills = [
  { skill: "html", img: "/assets/html.png" },
  { skill: "css", img: "/assets/css.png" },
  { skill: "javascript", img: "/assets/javascript.png" },
  { skill: "typescript", img: "/assets/typescript.png" },
  { skill: "react", img: "/assets/react.png" },
  { skill: "next", img: "/assets/next.png" },
  { skill: "tailwind", img: "/assets/tailwind.png" },
  { skill: "node", img: "/assets/node.png" },
  { skill: "express", img: "/assets/express.png" },
  { skill: "mongodb", img: "/assets/mongodb.png" },
  { skill: "git", img: "/assets/git.png" },
  { skill: "github", img: "/assets/github.png" },
  { skill: "appwrite", img: "/assets/appwrite.svg" },
  { skill: "bootstrap", img: "/assets/bootstrap.png" },
  { skill: "chakraui", img: "/assets/chakraui.png" },
  { skill: "cpp", img: "/assets/cpp.png" },
  { skill: "mysql", img: "/assets/mysql.png" },
  { skill: "postman", img: "/assets/postman.png" },
  { skill: "python", img: "/assets/python.png" },
  { skill: "redux", img: "/assets/redux.png" },
  { skill: "vite", img: "/assets/vite.png" },
];

const Skills = () => {
  return (
    <section id="skill">
      <div className="mt-12 md:pt-16 md:pb-28 text-center items-center place-items-center">
        <h1 className="text-center font-bold text-4xl">
          Skills
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="mb-20 w-full flex flex-wrap justify-evenly items-center md:justify-start md:items-start">
          {skills.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col text-center m-4 transition-all duration-300 ease-in-out"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-ctp-crust shadow-lg grid place-items-center hover:-translate-y-2 transition-all duration-200  ">
                <Image
                  src={item.img}
                  height={50}
                  width={50}
                  alt={item.skill}
                  className="h-1/2 w-1/2 object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <Scroll page="projects" />
      </div>
    </section>
  );
};

export default Skills;
