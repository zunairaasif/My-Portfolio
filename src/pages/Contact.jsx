import {
  FaUserAlt,
  FaPhoneAlt,
  FaLinkedin,
  FaWhatsapp,
  FaGithubSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaSquareUpwork, FaLocationDot } from "react-icons/fa6";

import "./style.css";
import BottomLine from "../components/common/BottomLine";
import { headingAnimation, contactAnimation } from "../components/animations";

const Contact = () => {
  const animation = useAnimation();
  const [viewDiv, setViewDiv] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const contact = [
    {
      id: 1,
      title: "Zunaira Asif",
      icon: <FaUserAlt />,
    },
    { id: 2, title: "+92 303 4774200", icon: <FaPhoneAlt /> },
    {
      id: 3,
      title: "zunairaasif900@gmail.com",
      icon: <MdEmail />,
    },
    { id: 4, title: "Sahiwal, Pakistan", icon: <FaLocationDot /> },
  ];

  const social = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/zunaira-asif-46b072216/",
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
    <div className="parent py-16">
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-neutral text-center">Feel Free To Contact Me</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <BottomLine />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="text-2xl font-medium">Contact Me</h2>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="text-2xl font-medium">Contact Info</h2>

          {contact.map((item) => (
            <div className="flex items-center my-6">
              <p className="text-xl mr-6 hover:text-primary cursor-pointer duration-300">
                {item.icon}
              </p>
              <h3 className="font-medium text-primary">{item.title}</h3>
            </div>
          ))}

          <div className="mt-8 flex items-center">
            <h3 className="text-xl text-neutral">Social</h3>
            <div className="bg-gray-400 w-8 h-[2px] mx-4"></div>

            <div className="flex gap-2">
              {social.map((item) => (
                <a
                  key={item.id}
                  target="_blank"
                  rel="noreferrer"
                  href={item.link}
                  className="text-3xl gap-2 text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
