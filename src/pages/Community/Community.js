import "./Community.css";
import { React, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import BoardList from "components/Community/BoardList";
import BoardItem from "components/Community/BoardItem";

const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" lg:pt-[120px] pt-[72px] container w-screen min-w-full ">
      <h2 className="text-2xl lg:text-5xl font-bold text-left lg:px-[10vw] px-7 mt-7 text-gray-800 bg-">커뮤니티</h2>
      <div className="text-sm lg:text-base text-left lg:px-[10vw] px-7 mt-3 lg:mt-6 mb-2 lg:mb-5 text-gray-800">우리아이 자랑 커뮤니티</div>
      <section className="bg-light-yellow-color lg:px-[10vw] px-7 py-5">
        <h3 className="text-left font-semibold">인기 게시물 TOP3</h3>
        <div className="top-board-wrapper h-24 lg:h-32 my-6 min-w-full flex text-left text-sm lg:text-base overflow-hidden ">
          <Link className="top1 border rounded-2xl border-transparent bg-white px-5 py-2 lg:py-3 flex-1" to="/">
            <strong>1</strong> <br /> 우리아이좀 보세요~
          </Link>
          <Link className="top2 mx-4 border rounded-2xl border-transparent bg-white px-5 py-2 lg:py-3 flex-1" to="/">
            <strong>2</strong> <br /> 우리아이좀 보세요~
          </Link>
          <Link className="top3 border rounded-2xl border-transparent bg-white px-5 py-2 lg:py-3 flex-1" to="/">
            <strong>3</strong> <br /> 우리아이좀 보세요~
          </Link>
        </div>
      </section>
      <div>{window.location.href.includes("community/") ? <BoardItem /> : <BoardList />}</div>
    </div>
  );
};

export default Community;
