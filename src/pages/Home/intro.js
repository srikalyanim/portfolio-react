import React from "react";
import { intros } from "../../resources/intros";

const Intro = () => {
  // Check if intros array has data
  if (!intros || intros.length === 0) {
    return <div>Error: Intro data is not available</div>;
  }

  // Destructure the first object in the intros array
  const { firstName, lastName, welcomeText, description, caption } = intros[0];

  return (
    <div className="bg-primary flex flex-col items-start justify-center gap-5 py-10">
      <h1 className="text-white">{welcomeText || "Welcome"}</h1>
      <h1 className="text-7xl sm:text-3xl font-semibold text-secondary">
        {firstName || "First Name"} {lastName || "Last Name"}
      </h1>
      <h1 className="text-6xl sm:text-2xl font-semibold text-white">
        {caption || "Your Caption Here"}
      </h1>
      <p className="text-white w-2/3 sm:w-full">{description || "Your Description Here"}</p>
      <button className="border-2 border-tertiary text-tertiary mt-5 px-10 py-3 rounded pointer-events-none">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
