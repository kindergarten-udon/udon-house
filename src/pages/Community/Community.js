import "./Community.css";
import { React, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import BoardList from "components/Community/BoardList";
import BoardItem from "components/Community/BoardItem";
import BestBoard from "components/Community/BestBoard";

const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" lg:pt-[120px] pt-[72px] container w-screen min-w-full text-gray-700 ">
      <h2 className="text-2xl lg:text-5xl font-bold text-left lg:px-[10vw] px-7 mt-7 text-gray-800 bg-">커뮤니티</h2>
      <div className="text-sm lg:text-base text-left lg:px-[10vw] px-7 mt-3 lg:mt-6 mb-2 lg:mb-5 text-gray-800">우리아이 자랑 커뮤니티</div>
      <BestBoard />
      <div>{window.location.href.includes("community/") ? <BoardItem /> : <BoardList />}</div>
    </div>
  );
};

export default Community;
