import { DiAtom } from "react-icons/di";
import { FiServer } from "react-icons/fi";
import { BiPalette } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import BottomLine from "../../common/BottomLine";
import { headingAnimation, sectionBodyAnimation } from "../../animations";

const Services = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
      id: 1,
      title: "Front End Development",
      icon: <DiAtom />,
      description:
        "As a Front-end developer, I would love to develop any frontend application using React.js or Next.js",
    },
    {
      id: 2,
      title: "Web Design",
      icon: <BiPalette />,
      description:
        "I provide fully flexible website designs for all devices using Tailwind CSS and Material UI and can solve any of your responsiveness issues",
    },
    {
      id: 3,
      title: "Web Maintenance",
      icon: <FiServer />,
      description:
        "I can manage and maintain any kind of website. Data Management, bug fixes, service management and so on",
    },
  ];
  return (
    <div className="py-16 parent">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">What I Provide</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Services</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className="bg-[#313131] shadow-md rounded-lg p-6 
            hover:shadow-primary cursor-pointer duration-300"
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {service.icon}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-neutral text-center">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
