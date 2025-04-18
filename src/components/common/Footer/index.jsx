import React from "react";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaLinkedin, FaGithubSquare, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const year = new Date();

  const social = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/zunaira-a-46b072216/",
      icon: <FaLinkedin />,
    },
    { id: 2, link: "https://github.com/zunairaasif", icon: <FaGithubSquare /> },
    {
      id: 3,
      link: "https://www.upwork.com/freelancers/~018da9dad38cf15c98",
      icon: <FaSquareUpwork />,
    },
    { id: 4, link: "https://wa.me/+923034774200", icon: <FaWhatsapp /> },
  ];

  return (
    <footer className="w-full text-center p-6 bg-secondary">
      <div className="flex items-center justify-center mb-4 gap-3">
        {social.map((item) => (
          <a
            key={item.id}
            target="blank"
            href={item.link}
            className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <span className="flex justify-self-center text-lg text-neutral mb-4">
        From Concept to Click — I Build It.
      </span>

      <div className="w-full h-[2px] bg-gray-600"></div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-4">
        <p>&copy; {year.getFullYear()} All Rights Reserved</p>
        <p>
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/zunaira-a-46b072216/"
            className="text-primary hover:underline"
            target="blank"
          >
            Zunaira Asif
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
