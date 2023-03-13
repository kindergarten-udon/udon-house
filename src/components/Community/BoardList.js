import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const BoardList = () => {
  return (
    <>
      <section className="board-list  w-4/5 mx-auto">
        <div className="text-right mt-5">
          <Link className="write-button text-gray-700 text-xs lg:text-base right-[10vw] lg:mr-24 my-3 lg:my-5 px-3 py-1 border rounded-2xl border-slate-400 bg-white" to={"/WriteCommunity"}>
            글쓰기
          </Link>
        </div>
        {/* 글 리스트 받아오기 */}
        <ul className="w-full min-w-[280px] mb-20 text-sm lg:text-base text-gray-700">
          <li className="text-left  flex py-2 lg:py-3 border border-transparent border-b-gray-300 w-full">
            <span className="text-gray-500 text-center w-[15vw] font-bold">아이디1</span>
            <Link className="w-full" to="./BoardItem.js">
              내용 어쩌구 들어갈 곳
            </Link>
          </li>
          <li className="text-left  flex py-2 lg:py-3 border border-transparent border-b-gray-300 w-full">
            <span className="text-gray-500 text-center w-[15vw] font-bold">아이디1</span>
            <Link className="w-full" to="/">
              내용 어쩌구 들어갈 곳
            </Link>
          </li>
          <li className="text-left  flex py-2 lg:py-3 border border-transparent border-b-gray-300 w-full">
            <span className="text-gray-500 text-center w-[15vw] font-bold">아이디1</span>
            <Link className="w-full" to="/">
              내용 어쩌구 들어갈 곳
            </Link>
          </li>
          <li className="text-left  flex py-2 lg:py-3 border border-transparent border-b-gray-300 w-full">
            <span className="text-gray-500 text-center w-[15vw] font-bold">아이디1</span>
            <Link className="w-full" to="/">
              내용 어쩌구 들어갈 곳
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default BoardList;
