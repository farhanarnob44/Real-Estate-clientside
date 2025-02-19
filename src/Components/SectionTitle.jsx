import React from "react";

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div>
      <div>
        <div className="text-center my-8">
          <p className="text-black font-serif">{subHeading}</p>
          <p className="text-4xl uppercase border-y-4 text-black font-serif mx-auto mt-4 w-4/12">
            {heading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
