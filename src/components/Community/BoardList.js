import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BoardListItem from "./BoardListItem";

const BoardList = ({ isLogin, contents }) => {
  const navigate = useNavigate();
  const writeOnClick = () => {
    if (isLogin) {
      navigate("/writeCommunity");
    } else {
      alert("로그인이 필요한 페이지입니다.");
      navigate("/signin");
    }
  };
  return (
    <>
      <section className="board-list w-4/5 mx-auto">
        <div className="text-right mt-8 lg:mt-10">
          <button onClick={writeOnClick} className="write-button text-gray-700 text-xs lg:text-base right-[10vw] lg:mr-24 my-3 lg:my-5 px-3 py-1 border rounded-2xl border-slate-400 bg-white">
            글쓰기
          </button>
        </div>
        <div className="w-full min-w-[280px] mb-20 text-sm lg:text-base text-gray-700">
          <BoardListItem contents={contents} />
        </div>
      </section>
    </>
  );
};

export default BoardList;
