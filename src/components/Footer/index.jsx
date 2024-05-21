import React from "react";
import { SiUpwork } from "react-icons/si";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="flex items-center justify-center mb-6">
          <a
            className="inline-block mx-2"
            href="https://www.linkedin.com/in/zunaira-asif-46b072216/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://github.com/zunairaasif"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-black" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.upwork.com/freelancers/~018da9dad38cf15c98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiUpwork className="text-2xl text-blue-600" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://wa.me/+923034774200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl text-green-500" />
          </a>
        </div>

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/zunaira-asif-46b072216/"
              className="text-primary hover:underline"
              target="blank"
            >
              Zunaira Asif
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
