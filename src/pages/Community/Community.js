import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BoardList from "components/Community/BoardList";
import BoardItem from "components/Community/BoardItem";
import { userData } from "Atom/atom";
import { useRecoilValue } from "recoil";

const Community = ({ isLogin, userId }) => {
  const content = useRecoilValue(userData);
  const myBoard = content.filter((el) => {
    return el;
  });

  const copied = [...myBoard];
  const bestBoard = copied
    .sort((a, b) => {
      return b["like"] - a["like"];
    })
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" lg:pt-[120px] pt-[72px] container w-screen min-w-full text-gray-700 box-border">
        <h2 className="text-2xl lg:text-5xl font-bold text-left lg:px-[10vw] px-7 mt-7 text-gray-800 bg-">커뮤니티</h2>
        <div className="text-sm lg:text-base text-left lg:px-[10vw] px-7 mt-3 lg:mt-6 mb-2 lg:mb-5 text-gray-800">우리아이 자랑 커뮤니티</div>
        <section className="bg-light-yellow-color lg:px-[10vw] px-7 py-5">
          <h3 className="text-left font-semibold">인기 게시물 TOP3</h3>
          <div className="top-board-wrapper h-24 lg:h-32 my-6 min-w-full flex text-left text-sm lg:text-base overflow-hidden ">
            {bestBoard.map((el, index) => {
              return (
                <Link key={el.id} to={`/community/${el.id}`} className="top1 w-1 border m-2 rounded-2xl border-transparent bg-white px-5 py-2 lg:py-3 flex-1">
                  <strong>{index + 1}위</strong> <br />
                  <div className="text-green-500 truncate pb-1">{el.title}</div>
                  <div className="truncate">
                    <span className="font-bold text-gray-700">{el.like}</span>개의 좋아요를 받았어요!
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        <div>{window.location.href.includes("community/") ? <BoardItem userId={userId} /> : <BoardList isLogin={isLogin} contents={myBoard} />}</div>
      </div>
    </>
  );
};

export default Community;
