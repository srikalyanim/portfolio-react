import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { contacts } from "../../resources/contacts";

const Contact = () => {
  // Check if contacts array is not empty
  if (!contacts || contacts.length === 0) {
    return <div>Error: No contact data available</div>;
  }

  // Get the first contact
  const contact = contacts[0];

  return (
    <div>
      <SectionTitle title={"Say Hello"} />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-tertiary text-sm">{"{"}</h1>
          <div className="text-tertiary text-sm">
            <h1>
              <span>"Name"</span>: <span>"{contact.name}"</span>
            </h1>
            <h1>
              <span>"Gender"</span>: <span>"{contact.gender}"</span>
            </h1>
            <h1>
              <span>"Age"</span>: <span>"{contact.age}"</span>
            </h1>
            <h1>
              <span>"Email"</span>: <span>"{contact.email}"</span>
            </h1>
            <h1>
              <span>"Mobile"</span>: <span>"{contact.mobile}"</span>
            </h1>
            <h1>
              <span>"Address"</span>: <span>"{contact.address}"</span>
            </h1>
          </div>
          <h1 className="text-tertiary text-sm">{"}"}</h1>
        </div>
        <div className="h-[400px]">
          <dotlottie-player
            src="https://lottie.host/12ececa3-fed0-4ac6-bf2c-bd740829c9c4/tSoe5I1vVg.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
