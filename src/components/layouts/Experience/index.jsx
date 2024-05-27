import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import BottomLine from "../../common/BottomLine";
import { headingAnimation, sectionBodyAnimation } from "../../animations";

const Experience = () => {
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

  const exp = [
    {
      id: 1,
      title: "Freelance Developer",
      year: "01/2024 - Present",
      p1: "Keeping myself up to date with the latest industry trends and technologies.",
      p2: "Collaborating with cross-functional teams to develop responsive and user-friendly web and mobile applications.",
      p3: "Continually expanding knowledge and skill set.",
      p4: "Actively delivering optimized and high quality code.",
    },
    {
      id: 2,
      title: "AltCode Labs",
      year: "10/2022 - 12/2023",
      p1: "Implemented best practices for code quality and maintainability.",
      p2: "Actively participated in code reviews and debugging issues.",
      p3: "Assisted in optimizing application performance.",
      p4: "Successfully delivered projects within deadlines, prioritized tasks and managed time effectively.",
    },
    {
      id: 3,
      title: "Global Software Consulting",
      year: "07/2022 - 09/2022",
      p1: "Learned to develop responsive and user-friendly websites and web applications.",
      p2: "Worked closely with designers and product managers.",
      p3: "Get to know about the REST APIs.",
      p4: "Managed time effectively within tight deadlines.",
    },
  ];

  return (
    <div>
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">About My Work History</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Experience</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exp.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-secondary bg-opacity-90 backdrop-blur-lg rounded-lg 
              shadow-lg hover:shadow-primary duration-300 cursor-pointer"
            >
              <h3 className="text-2xl font-semibold text-primary animate-bounce">
                {item.title}
              </h3>
              <div className="text-right mb-4">
                <p className="text-sm text-neutral font-semibold">
                  {item.year}
                </p>
              </div>

              <div className="px-3 text-sm text-neutral">
                {item.p1 || item.p2 || item.p3 || item.p4 ? (
                  <ul className="list-disc">
                    <li>{item.p1}</li>
                    <li>{item.p2}</li>
                    <li>{item.p3}</li>
                    <li>{item.p4}</li>
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
