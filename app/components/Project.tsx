"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import Scroll from "./Scroll";
import { client } from "../lib/sanity";
import { ProjectType } from "../lib/interface";
import { urlFor } from "../lib/sanityImageUrl";
import { fetchProjects } from "../lib/fetchData";

const imageParser = (value: string) => {
  return urlFor(value).url();
};

interface IProjectProps {
  projects: ProjectType;
}

const Project: React.FC<IProjectProps> = ({ projects }): React.ReactElement => {
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
                      <Link href={project.all_links[0].url}>
                        <Image
                          src={imageParser(project.content[0].asset._ref)}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="md:w-1/2">
                      <div className="flex flex-row space-x-8">
                        {project.technologies.map((technology, ind) => {
                          return (
                            <div key={ind}>
                              <Image
                                src={imageParser(technology.logo.asset._ref)}
                                alt=""
                                height={50}
                                width={50}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <h1 className="text-4xl font-bold mb-6">
                        {project.title}
                      </h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-500  dark:text-neutral-500">
                        {project.description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                        {project.all_links.map((_link, ind) => {
                          return (
                            <div key={ind}>
                              {_link.name === "Github" && (
                                <Link href={_link.url}>
                                  <BsGithub
                                    size={30}
                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                  />
                                </Link>
                              )}
                              {_link.name === "Live" && (
                                <Link href={_link.url} target="_blank">
                                  <BsArrowUpRightSquare
                                    size={30}
                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                  />
                                </Link>
                              )}
                            </div>
                          );
                        })}
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
