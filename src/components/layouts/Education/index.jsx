import Lottie from "react-lottie";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import BottomLine from "../../common/BottomLine";
import education from "../../../assets/education.json";
import { headingAnimation, animateUp } from "../../animations";

const Education = () => {
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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: education,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <motion.div
        ref={ref}
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">All About My Education</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
        <BottomLine />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={animateUp}
        >
          <div>
            <Lottie
              options={defaultOptions}
              height="70%"
              width="70%"
              className="mx-auto lg:mr-auto"
            />
          </div>
        </motion.div>

        <div className="mx-auto lg:ml-auto">
          <div className="p-6 bg-secondary bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                BS(Computer Science)
              </h3>
              <p className="text-sm text-neutral font-semibold">2018 - 2022</p>
            </div>

            <p className="text-neutral">The University of Lahore, Lahore</p>
            <p className="text-sm text-neutral">CGPA - 3.11</p>
          </div>

          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-secondary bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Intermediate
              </h3>
              <p className="text-sm text-neutral font-semibold">2016 - 2018</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Divisional Public School & Inter College (DPS), Sahiwal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
