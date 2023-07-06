"use client";
import React from 'react'
import Image from 'next/image';

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
//   { skill: "hadoop", img: "/assets/hadoop.png" },
  { skill: "java", img: "/assets/java.png" },
  { skill: "jupyter", img: "/assets/jupyter.png" },
//   { skill: "matplotlib", img: "/assets/matplotlib.png" },
  { skill: "mongodb", img: "/assets/mongodb.png" },
  { skill: "mysql", img: "/assets/mysql.png" },
  { skill: "next", img: "/assets/next.png" },
  { skill: "node", img: "/assets/node.png" },
//   { skill: "numpy", img: "/assets/numpy.png" },
//   { skill: "pandas", img: "/assets/pandas.png" },
  { skill: "postman", img: "/assets/postman.png" },
  { skill: "python", img: "/assets/python.png" },
  { skill: "reactrouter", img: "/assets/reactrouter.png" },
  { skill: "redux", img: "/assets/redux.png" },
//   { skill: "seaborn", img: "/assets/seaborn.png" },
//   { skill: "tableau", img: "/assets/tableau.png" },
  { skill: "tailwind", img: "/assets/tailwind.png" },
  { skill: "vite", img: "/assets/vite.png" },
  { skill: "vscode", img: "/assets/vscode.png" },
  { skill: "zustand", img: "/assets/zustand.png" },
];

const Skills = () => {
  return (
    <section id="skill">
      <div className="my-12 pb-8 md:pt-16 md:pb-28 text-center">
        <h1 className="text-center font-bold text-4xl">
          Skills
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="text-center ">
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {skills.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="md:space-x-2 m-2 p-4"
                >
                  <Image
                    src={item.img}
                    alt=""
                    width={70}
                    height={70}
                    className="rounded-full shadow-2xl"
                  />
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills