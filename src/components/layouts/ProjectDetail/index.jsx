import { useParams } from "react-router-dom";
import { FaLink, FaCode } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Work from "../../../utils/Work";
import PrimaryBtn from "../../buttons/PrimaryButton";
import SecondaryBtn from "../../buttons/SecondaryButton";

const ProjectDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const filtered = Work.find((item) => item.id === parseInt(id));
    setItem(filtered);
  }, [id]);

  return (
    <div className="parent py-16">
      <h1 className="text-center text-4xl font-medium mt-8">{item?.title}</h1>

      <Carousel autoPlay={true} infiniteLoop={true} stopOnHover={false}>
        {item?.img?.map((image, index) => (
          <div key={index} className="mt-6">
            <img src={image} alt={item?.title} loading="lazy" />
          </div>
        ))}
      </Carousel>

      <p className="text-neutral font-medium mt-10 mb-6">
        <h2 className="font-semibold text-white text-2xl mb-2">Description</h2>
        {item?.description}
      </p>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-3">Features</h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {item?.features?.map((feature, index) => (
            <li key={index} className="text-neutral">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-3">Tools & Technologies</h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {item?.technologies?.map((feature, index) => (
            <li key={index} className="text-neutral">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center mt-8">
        {item?.liveLink && (
          <a href={item?.liveLink} className="mr-4" target="blank">
            <PrimaryBtn>
              Visit Now
              <FaLink />
            </PrimaryBtn>
          </a>
        )}

        {item?.codeLink && (
          <a href={item?.codeLink} target="blank">
            <SecondaryBtn>
              Source Code
              <FaCode />
            </SecondaryBtn>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
