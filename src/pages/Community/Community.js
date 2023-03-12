import "./Community.css";
import React from "react";
import { Link } from "react-router-dom";
import Board from "components/Board/Board";

const Community = () => {
  return (
    <div className="container w-screen min-w-full ">
      <h2 className="text-2xl lg:text-5xl font-bold text-left lg:px-[10vw] px-7 mt-7 text-gray-800 bg-">커뮤니티</h2>
      <div className="text-sm lg:text-base text-left lg:px-[10vw] px-7 mt-3 lg:mt-6 mb-2 lg:mb-5 text-gray-800">우리아이 자랑 커뮤니티</div>
      <section className="bg-light-yellow-color lg:px-[10vw] px-7 py-5">
        <h3 className="text-left font-semibold">인기 게시물 TOP3</h3>
        <div className="top-board-wrapper text-xs lg:text-xl h-24 lg:h-32 my-6 min-w-full flex text-left">
          <Link className="top1 text-sm lg:text-base overflow-hidden bg-white border rounded-2xl border-transparent px-5 py-3 flex-1" to="/">
            <strong>1</strong> <br /> 우리아이좀 보세요~
          </Link>
          <Link className="top2 text-sm lg:text-base overflow-hidden mx-4 bg-white border rounded-2xl border-transparent px-5 py-3 flex-1" to="/">
            <strong>2</strong> <br /> 우리아이좀 보세요~
          </Link>
          <Link className="top3 text-sm lg:text-base overflow-hidden bg-white border rounded-2xl border-transparent px-5 py-3 flex-1" to="/">
            <strong>3</strong> <br /> 우리아이좀 보세요~
          </Link>
        </div>
      </section>
      <section className="board-list bg-gray-300 w-4/5 mx-auto">
        <div className="text-right mb-10">
          <button className="write-button  text-sm lg:text-base mr-10 lg:mr-24 px-3 py-1 border rounded-2xl border-slate-400 bg-white ">글쓰기</button>
        </div>
        {/* 글 리스트 받아오기 */}
      </section>
      <Board />
    </div>
  );
};

export default Community;
