import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./style.css";
import BottomLine from "../../common/BottomLine";
import { headingAnimation } from "../../animations";

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
      title: "Freelancing",
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
        ref={ref}
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

      <div className="flex justify-between">
        {exp.map((item) => (
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[350px] hover:shadow-primary duration-300 cursor-pointer">
            <h3 className="text-2xl font-semibold text-primary animate-bounce">
              {item.title}
            </h3>
            <div className="text-right mb-4">
              <p className="text-sm text-neutral font-semibold">{item.year}</p>
            </div>

            <div className="px-3">
              {item.p1 || item.p2 || item.p3 || item.p4 ? (
                <ul className="list-disc">
                  <li className="text-sm text-neutral">{item.p1}</li>
                  <li className="text-sm text-neutral">{item.p2}</li>
                  <li className="text-sm text-neutral">{item.p3}</li>
                  <li className="text-sm text-neutral">{item.p4}</li>
                </ul>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
