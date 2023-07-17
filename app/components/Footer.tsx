import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import {TbBrandLeetcode} from 'react-icons/tb'
import {BiLogoGmail} from 'react-icons/bi'

const mailId = process.env.NEXT_PUBLIC_EMAIL_ID;

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-slate-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center space-y-2  md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1">
          © 2023 Atharva Jadhav
        </div>
        <div className="flex flex-row items-center justify-center space-x-3 mb-1">
          <a href={`mailto:${mailId}`} rel="noreferrer" target="_blank">
            <BiLogoGmail
              className="hover:-translate-y-1 transition-transform cursor-pointer "
              size={30}
            />
          </a>
          <a
            href="https://github.com/atharva-777"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
            />
          </a>
          <a
            href="https://instagram.com/atharvaaaj"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer "
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/atharva-jadhav-833149222/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer "
              size={30}
            />
          </a>
          <a
            href="https://leetcode.com/atharva_777/"
            rel="noreferrer"
            target="_blank"
          >
            <TbBrandLeetcode
              className="hover:-translate-y-1 transition-transform cursor-pointer "
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
