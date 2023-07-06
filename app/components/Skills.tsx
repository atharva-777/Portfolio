"use client";
import React from 'react'
import Image from 'next/image';
import Scroll from './Scroll';

const skills = [
  { skill: "html", img: "/assets/html.png" },
  { skill: "css", img: "/assets/css.png" },
  { skill: "javascript", img: "/assets/javascript.png" },
  { skill: "typescript", img: "/assets/typescript.png" },
  { skill: "react", img: "/assets/react.png" },
  { skill: "git", img: "/assets/git.png" },
  { skill: "github", img: "/assets/github.png" },
  { skill: "appwrite", img: "/assets/appwrite.svg" },
  { skill: "bootstrap", img: "/assets/bootstrap.png" },
  { skill: "chakraui", img: "/assets/chakraui.png" },
  { skill: "cpp", img: "/assets/cpp.png" },
  { skill: "express", img: "/assets/express.png" },
  { skill: "java", img: "/assets/java.png" },
  { skill: "jupyter", img: "/assets/jupyter.png" },
  { skill: "mongodb", img: "/assets/mongodb.png" },
  { skill: "mysql", img: "/assets/mysql.png" },
  { skill: "next", img: "/assets/next.png" },
  { skill: "node", img: "/assets/node.png" },
  { skill: "postman", img: "/assets/postman.png" },
  { skill: "python", img: "/assets/python.png" },
  { skill: "redux", img: "/assets/redux.png" },
  { skill: "tailwind", img: "/assets/tailwind.png" },
  { skill: "vite", img: "/assets/vite.png" },
  { skill: "vscode", img: "/assets/vscode.png" },
  { skill: "zustand", img: "/assets/zustand.png" },
  { skill: "figma", img: "/assets/figma.png" },
  { skill: "canva", img: "/assets/canva.png" },
];

const Skills = () => {
  return (
    <section id="skill">
      <div className="mt-12 md:pt-16 md:pb-28 text-center">
        <h1 className="text-center font-bold text-4xl">
          Skills
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="text-center mt-12">
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {skills.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="md:space-x-2 m-2 p-4"
                >
                  <Image
                    src={item.img}
                    alt={item.skill}
                    width={60}
                    height={60}
                    className="rounded-full shadow-2xl"
                  />
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <Scroll page='projects'/>
    </section>
  );
}

export default Skills