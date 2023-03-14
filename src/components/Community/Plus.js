import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Plus = () => {
  return (
    <>
      <button className="flex justify-center text-xs lg:text-sm px-10 lg:px-12 py-[3px] lg:py-1 border border-gray-300 rounded-3xl">
        더보기<IoIosArrowDown className="translate-y-1"></IoIosArrowDown>
      </button>
    </>
  );
};

export default Plus;
