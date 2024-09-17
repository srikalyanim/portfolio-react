import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { courses } from "../../resources/courses";

const Courses = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title={"Courses"} />

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left column with course names */}
        <div className="flex flex-col gap-4 md:overflow-y-auto md:max-h-[calc(100vh-200px)]">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className={`cursor-pointer p-4 rounded-lg transition-all duration-300 border border-transparent ${
                selectedItemIndex === index
                  ? "bg-tertiary text-white border-tertiary shadow-lg"
                  : "bg-white text-secondary border-gray-200 hover:bg-gray-100"
              }`}
            >
              <h1 className="text-lg font-semibold">{course.title}</h1>
            </div>
          ))}
        </div>

        {/* Right column with selected course details */}
        <div className="flex-1 bg-[#1a7f5a31] rounded-lg p-6 shadow-md overflow-y-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-tertiary mb-4">
            {courses[selectedItemIndex].title}
          </h1>
          <div className="text-white text-base md:text-lg">
            <div className="mb-4">
              <h2 className="font-semibold text-lg">Resources:</h2>
              <p>{courses[selectedItemIndex].resources}</p>
            </div>
            <div className="mb-4">
              <h2 className="font-semibold text-lg">Objective:</h2>
              <p>{courses[selectedItemIndex].objective}</p>
            </div>
            <div className="mb-4">
              <h2 className="font-semibold text-lg">Completion Date:</h2>
              <p>{courses[selectedItemIndex].completionDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
