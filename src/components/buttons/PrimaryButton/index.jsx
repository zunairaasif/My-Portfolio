import React from "react";

const PrimaryBtn = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} relative overflow-hidden border-2 border-primary 
      bg-primary text-white uppercase font-semibold px-3 py-2 rounded-md flex items-center
      justify-center cursor-pointer transition-all duration-300 ease transform 
      hover:translate-y-[-5px] hover:text-primary before:content-[''] before:absolute 
      before:w-0 before:h-0 before:rounded-full before:bg-[#ec743c] before:transition-all 
      before:duration-300 before:ease-out hover:before:w-[200px] hover:before:h-[200px] 
      hover:before:rounded-md after:content-[''] after:absolute after:w-0 after:h-0 
      after:rounded-full after:bg-secondary after:transition-all after:duration-500 
      after:ease-in hover:after:w-[200px] hover:after:h-[200px] hover:after:rounded-md`}
    >
      <span className="relative flex items-center gap-2 z-10 transition-all duration-300 ease-out mx-1">
        {children}
      </span>
    </button>
  );
};

export default PrimaryBtn;
