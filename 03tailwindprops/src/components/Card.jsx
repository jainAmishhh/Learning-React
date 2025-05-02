import React from "react";

const Card = ({userName = "The Anit-Patterns", no = "No. 4"}) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png"
          />
        </div>
        <div className="flex items-center md:items-start">
          <span className="text-2xl font-medium">{ userName }</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400"> { no } </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
