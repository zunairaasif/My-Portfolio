import { FaDownload } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Skills from "../components/layouts/Skills";
import Education from "../components/layouts/Education";
import BottomLine from "../components/common/BottomLine";
import Experience from "../components/layouts/Experience";
import PrimaryBtn from "../components/buttons/PrimaryButton";
import { sectionBodyAnimation } from "../components/animations";

const About = () => {
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

  const whyMe = [
    {
      id: 1,
      desc: "Understand your needs and deliver a high-quality solution.",
    },
    {
      id: 2,
      desc: "Responsive and flexible design over all screens.",
    },
    { id: 3, desc: "24/7 availability." },
    { id: 4, desc: "Best quality work with 100% satisfaction." },
    {
      id: 5,
      desc: "Recreate or redesign the existing website with clean code.",
    },
  ];

  const contact = [
    { title: "Name", info: "Zunaira Asif" },
    { title: "Phone | WhatsApp", info: "+92 303 4774200" },
    { title: "Email", info: "zunairaasif900@gmail.com" },
    { title: "Address", info: "Sahiwal, Pakistan" },
  ];

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

  return (
    <div className="flex flex-col mb-20 mt-28 gap-28">
      <div>
        <motion.div
          className="mb-14"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="py-30"
            >
              <img
                src="/images/zunaira.png"
                alt="Zunaira Asif"
                title="Zunaira Asif"
                className="rounded-full"
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-x-6 mt-10 gap-y-4">
              {contact.map((item) => (
                <div key={item.title}>
                  <h2 className="font-medium mr-2 text-primary">
                    {item.title}
                  </h2>
                  <span>{item.info}</span>
                </div>
              ))}

              <PrimaryBtn onClick={handleDownload}>
                Download Resume
                <FaDownload />
              </PrimaryBtn>
            </div>
          </div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={viewDiv && "visible"}
            variants={sectionBodyAnimation}
            className="flex flex-col gap-6"
          >
            <h1 className="text-4xl font-semibold text-center md:text-left">
              Zunaira Asif
            </h1>

            <TypeAnimation
              className="text-2xl text-primary font-bold text-center md:text-left"
              cursor={true}
              sequence={[
                "Frontend Developer",
                3000,
                "React.js Developer",
                2000,
                "Next.js Developer",
                3000,
              ]}
              wrapper="div"
              repeat={Infinity}
            />

            <p className="text-neutral font-medium">
              I'm your Trusted Frontend Developer. I'm here to create your web
              applications in React JS or Next JS with responsive and creative
              designs. I will be your competent front-end web developer as I
              have an experience of 3+ years and build many projects that not
              only look appealing but also very performant.
            </p>
            <p className="text-neutral font-medium">
              I believe in more than just project completion but cultivating
              long-term relationships with my clients. Your satisfaction is my
              first priority & I pour my heart and skills into every project to
              ensure you get not only exceptional results but also a partner you
              can rely on.
            </p>

            <div>
              <p>Why Me?</p>
              {whyMe.map((item) => (
                <p className="text-neutral font-medium mt-2" key={item.id}>
                  {`${item.id}) ${item.desc}`}
                </p>
              ))}
            </div>
          </motion.div>

          <div className="block md:hidden grid grid-cols-2 gap-x-6 gap-y-4">
            {contact.map((item) => (
              <div key={item.title}>
                <h2 className="font-medium mr-2 text-primary">{item.title}</h2>
                <span>{item.info}</span>
              </div>
            ))}

            <PrimaryBtn onClick={handleDownload}>
              Download Resume
              <FaDownload />
            </PrimaryBtn>
          </div>
        </div>
      </div>

      {/* My Skills */}
      <Skills />

      {/* My Experience */}
      <Experience />

      {/* My Education */}
      <Education />
    </div>
  );
};

export default About;
