import React from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";

import coding from "../../../assets/coding.json";
import PrimaryBtn from "../../buttons/PrimaryButton";
import SecondaryBtn from "../../buttons/SecondaryButton";

const Intro = () => {
  const handleDownload = () => {
    const url = "/zunaira-asif_resume.pdf";
    const fileName = url.split("/").pop();
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className=" min-h-[100vh] flex flex-col-reverse lg:flex-row 
      items-center sm:justify-center justify-between mt-10"
    >
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-neutral text-xl font-medium">Hey, I'm</h2>
        <h1 className="text-4xl font-semibold mb-0">Zunaira Asif</h1>
        <div className="my-8">
          <TypeAnimation
            className="text-2xl text-primary my-4 font-bold text-center 
            sm:text-2xl sm:mb-2 md:text-left"
            cursor={true}
            sequence={[
              "Frontend Developer",
              3000,
              "React.js Developer",
              3000,
              "Next.js Developer",
              3000,
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="text-neutral max-w-xl sm:mt-4 mt-3 mb-6 font-medium">
          As a frontend developer with over 3+ years of experience, I specialize
          in creating responsive and appealing web applications. I am passionate
          about technology, proficient in developing robust and scalable
          applications and dedicated to high-quality code. I enjoys finding
          innovative solutions to complex challenges. I thrive in fast-paced,
          collaborative environments and continuously learn to stay updated with
          industry trends.
        </p>

        <div className="flex items-center">
          <PrimaryBtn onClick={handleDownload}>
            Download Resume
            <FaDownload />
          </PrimaryBtn>

          <Link to="/about" className="ml-4 w-[50%]">
            <SecondaryBtn>
              About Me
              <RiFolderInfoFill />
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie options={defaultOptions} height="90%" width="90%" />
      </motion.div>
    </div>
  );
};

export default Intro;
