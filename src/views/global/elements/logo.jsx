import React from "react";

export const Span = (props) => {
  return (
    <div className={`flex gap-2 items-center ${props.classname}`}>
      <span className={`flex-shrink-0`}>
        <img
          src="/images/movetogether.png"
          className="flex w-20 h-20 sm:flex sm:w-20 sm:h-20 md:w-16 md:h-16 lg:flex lg:w-16 lg:h-16 xl:flex xl:w-16 xl:h-16"
        />
      </span>
      <span className={`ml-1 font-semibold tracking-tight text-xl`}>
        MoveTogether
      </span>
    </div>
  );
};

export default Span;
