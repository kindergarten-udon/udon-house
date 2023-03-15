import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import boardData from "./boardData";

const getContentByNumber = (number) => {
  return boardData[number].내용;
};

const BestBoardList = ({ first, second, third }) => {
  return (
    <section className="bg-light-yellow-color lg:px-[10vw] px-7 py-5">
      <h3 className="text-left font-semibold">인기 게시물 TOP3</h3>
      <div className="top-board-wrapper h-24 lg:h-32 my-6 min-w-full flex text-left text-sm lg:text-base overflow-hidden ">
        <Link className="top1 border rounded-2xl border-transparent bg-white px-5 py-2 lg:py-3 flex-1" to="/">
          <strong>1</strong> <br /> {first}
        </Link>
        <Link className="top2 mx-4 border rounded-2xl border-transparent bg-white px-5 py-2 lg:py-3 flex-1" to="/">
          <strong>2</strong> <br /> {second}
        </Link>
        <Link className="top3 border rounded-2xl border-transparent bg-white px-5 py-2 lg:py-3 flex-1" to="/">
          <strong>3</strong> <br /> {third}
        </Link>
      </div>
    </section>
  );
};

const BestBoard = () => {
  return (
    <>
      <div>
        {/* 추후 best 게시물 id 값을 찾아와서 넣어주는 형식으로 작성하면 될것 같습니다. */}
        <BestBoardList first={getContentByNumber(0)} second={getContentByNumber(1)} third={getContentByNumber(2)} />
      </div>
    </>
  );
};

export default BestBoard;
