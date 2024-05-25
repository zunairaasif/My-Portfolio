import {
  FaHtml5,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGithub,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMui,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import Lottie from "react-lottie";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../components/animations";
import BottomLine from "../../common/BottomLine";
import skill from "../../../assets/skills.json";

const Skills = () => {
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

  const languages = [
    { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    {
      title: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 rounded" />,
    },
    { title: "TypeScript", icon: <SiTypescript className="text-green-600" /> },
  ];
  const frameworks = [
    { title: "React JS", icon: <FaReact className="text-cyan-400" /> },
    { title: "Next JS", icon: <SiNextdotjs className="text-neutral" /> },
    { title: "Material UI", icon: <SiMui className="text-indigo-600" /> },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" />,
    },
  ];
  const tools = [
    { title: "GitHub", icon: <FaGithub className="text-black" /> },
    { title: "Figma", icon: <FaFigma className="text-cyan-800" /> },
    { title: "Node JS", icon: <FaNodeJs className="text-green-500" /> },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: skill,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">What I Can Do</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Skills</span>
        </h1>
        <BottomLine />
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          <div>
            <h2 className="text-cyan-500 text-xl font-semibold">Languages:</h2>
            <div className="flex flex-wrap mb-4">
              {languages?.map((skill) => (
                <div key={skill.title} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-cyan-500 text-xl font-semibold">
              Library & Frameworks:
            </h2>
            <div className="flex flex-wrap mb-4">
              {frameworks?.map((skill) => (
                <div key={skill.title} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-cyan-500 text-xl font-semibold">
              Tools & Technologies:
            </h2>
            <div className="flex flex-wrap mb-4">
              {tools?.map((skill) => (
                <div key={skill.title} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          <div>
            <Lottie options={defaultOptions} height={400} width={360} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
