import React from "react";

const Button = ({
  activeButton,
  setActiveButton
}) => {
    

  const handleButtonClick = (value) => {
    setActiveButton(value);
  };
  return (
    <div className="flex relative w-12 h-4 bg-slate-700 rounded-full border-[3px] border-slate-700 p-2">
      <button
        onClick={() => handleButtonClick("low")}
        className={`${
          activeButton === "low"
            ? "left-0 bg-orange-600"
            : "left-0 bg-transparent"
        } absolute top-0 w-1/3 h-full rounded-full focus:outline-none mx-1`}
      ></button>
      
      <button
        onClick={() => handleButtonClick("medium")}
        className={`${
          activeButton === "medium"
            ? "left-1/3 bg-orange-600"
            : "left-1/3 bg-transparent"
        } absolute top-0 w-1/3 h-full rounded-full focus:outline-none mx-1`}
      ></button>

      <button
        onClick={() => handleButtonClick("fast")}
        className={`${
          activeButton === "fast"
            ? "right-0 bg-emerald-400"
            : "right-0 bg-transparent"
        } absolute top-0 w-1/3 h-full rounded-full focus:outline-none mx-1`}
      ></button>
    </div>
  );
};

export default Button;
