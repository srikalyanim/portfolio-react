import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { abouts } from "../../resources/about";

const About = () => {
  if (!abouts || abouts.length === 0) {
    return <div>Error: No about data available</div>;
  }

  const { skills, lottieURL, description1, description2 } = abouts[0];

  return (
    <div id="about">
      <SectionTitle title={"About"} />
      <div className="flex sm:flex-col w-full items-center">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src={lottieURL}
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">{description1 || ""}</p>
          <p className="text-white">{description2 || ""}</p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap sm:gap-4 gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="border border-tertiary py-3 sm:px-2 px-5">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
