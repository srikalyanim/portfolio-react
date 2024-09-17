import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experience";

const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title={"Experience"} />
      <div className="flex py-10 gap-20 sm:flex-col">
        {/* Sidebar with selectable periods */}
        <div className="flex flex-col sm:gap-6 gap-28 border-l-2 border-[#135e4c82] sm:flex-row sm:overflow-x-auto sm:w-full">
          {experiences.map((value, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`sm:text-base text-lg px-4 py-2 sm:px-6 sm:py-3 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[2px] bg-[#1a7f5a31]"
                    : "text-white"
                }`}
              >
                {value.period}
              </h1>
            </div>
          ))}
        </div>

        {/* Content area */}
        <div className="flex flex-col gap-5 w-2/3 sm:w-full">
          <h1 className="text-secondary text-2xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].company}
          </h1>

          {/* Fixed height with scrollable content */}
          <div
        className="text-white text-1xl max-h-64 overflow-y-auto p-4 border border-[#135e4c82] rounded-lg"
            dangerouslySetInnerHTML={{ __html: experiences[selectedItemIndex].description }}
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
