import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen relative">
      <img className=" w-36 translate-y-16 -translate-x-5 rotate-180" src="/gomImage.svg" alt="빼꼼 곰" />
      <h1 className="absolute modalPosition text-xl lg:text-2xl">
        <Link to="/">존재하지 않는 페이지입니다</Link>
      </h1>
      <img className="absolute p-0 m-0 bottom-0 right-[-1rem] z-[10]" src="/BackgroundImage.svg" alt="곰과 악어가 있는 이미지" />
      <img className=" shapeSize absolute right-0  bottom-0 opacity-50 z-0" src="/mainShape2.svg" alt="배경 이미지2" />
    </div>
  );
};

export default NotFound;
