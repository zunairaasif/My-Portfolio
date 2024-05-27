import { FiArrowRight } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation, useNavigate } from "react-router-dom";

import {
  headingAnimation,
  sectionBodyAnimation,
} from "../components/animations";
import Work from "../utils/Work";
import BottomLine from "../components/common/BottomLine";
import PrimaryBtn from "../components/buttons/PrimaryButton";

const Project = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const animation = useAnimation();
  const [ref, inView] = useInView();
  const [items, setItems] = useState(Work);
  const [viewDiv, setViewDiv] = useState(false);
  const [activeBtn, setActiveBtn] = useState("all");

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
    if (location.pathname === "/" && items.length > 3) {
      setItems(items.slice(0, 3));
    }
  }, [inView, animation, location, items]);

  const buttons = [
    { id: "all", label: "All" },
    { id: "business", label: "Business" },
    { id: "personal", label: "Personal" },
  ];

  const filterItem = (category) => {
    const filtered = Work.filter((item) => item.category === category);
    setItems(filtered);
    if (filtered.length > 3 && location.pathname === "/") {
      setItems(filtered.slice(0, 3));
    }
  };

  return (
    <div className={`${location.pathname !== "/" && "pb-16"}`}>
      <div className="parent mb-16 mt-28">
        <motion.div
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={headingAnimation}
        >
          <div className="mb-12">
            <h3 className="text-neutral text-center">
              Some of My Recent Projects
            </h3>
            <h1 className="text-4xl font-semibold text-center">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <BottomLine />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          <div className="my-6 flex items-center justify-center flex-wrap">
            {buttons.map((item) => (
              <button
                key={item.id}
                className={`btn btn-sm bg-primary px-3 py-1 rounded border-2 border-primary text-white 
                hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 
                ${activeBtn === item.id ? "text-primary bg-transparent" : ""}`}
                onClick={() => {
                  setActiveBtn(item.id);
                  if (item.id === "all") {
                    location.pathname === "/"
                      ? setItems(Work.slice(0, 3))
                      : setItems(Work);
                  } else {
                    filterItem(item.id);
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Items Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <motion.div
                initial={{ x: 200, opacity: 0, scale: 0 }}
                animate={{
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                key={item.id}
                className="overflow-hidden h-60 rounded-lg shadow-lg p-3 flex flex-col 
                justify-between hover:shadow-primary duration-500 bg-secondary relative group"
              >
                <div className="item h-full relative">
                  <img
                    className="rounded-lg h-full w-full"
                    src={item.mainImage}
                    alt={item.title || "zunaira asif"}
                  />
                  <div
                    className="absolute top-1 right-1 bottom-1 left-1 p-2 text-center border-2
                    border-primary rounded transition-opacity duration-700 transform scale-140
                    opacity-0 group-hover:opacity-100 group-hover:scale-100 flex items-center 
                    justify-center flex-col bg-secondary"
                  >
                    <h3 className="text-2xl text-primary font-semibold">
                      {item.title}
                    </h3>

                    <PrimaryBtn
                      className="mt-4"
                      onClick={() => navigate(`/project/${item.id}`)}
                    >
                      See Details
                      <FiArrowRight />
                    </PrimaryBtn>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {location.pathname === "/" && (
          <PrimaryBtn className="mt-4" onClick={() => navigate("/projects")}>
            See All
            <FiArrowRight />
          </PrimaryBtn>
        )}
      </div>
    </div>
  );
};

export default Project;
