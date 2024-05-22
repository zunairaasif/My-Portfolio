import React from "react";

const SecondaryBtn = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className} btn text-white flex items-center 
      uppercase font-semibold text-sm gap-2 border-2 rounded-md 
      p-2.5 border-primary bg-transparent hover:bg-primary 
      hover:border-transparent duration-500`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
