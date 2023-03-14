import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import boardData from "./boardData";

const url = window.location.href;
const lastIndex = url.lastIndexOf("/");
let number = url.substring(lastIndex + 1);
if (isNaN(number)) {
  number = "";
}

const getTitleByIndex = (index) => {
  return boardData[index].제목;
};

const getContentByIndex = (index) => {
  return boardData[index].내용;
};

const BoardItemDetail = ({ title, content }) => {
  const [isChecked, setChecked] = useState(false);
  const toggleMenu = () => {
    setChecked((isChecked) => !isChecked);
  };
  return (
    <>
      <section className=" py-[3%] lg:py-[5%] mx-auto w-[70vw] min-w-[280px] lg:min-w-[500px] text-gray-700">
        <div className="px-6 py-2 text-left border border-gray-500 rounded-3xl mb-5">{title}</div>
        <div className="h-[300px] px-6 py-2 text-left border border-gray-500 rounded-3xl">{content}</div>
        <div className="text-sm lg:text-base my-4 mx-4 flex justify-between">
          <div className="">
            {/* {만약 이 글을 쓴 사람이라면 수정하기, 삭제하기가 보이게하기} */}
            <button className="mr-4">수정하기</button>
            <button>삭제하기</button>
          </div>
          <div className="flex">
            <button onClick={toggleMenu}>{isChecked ? <BsHandThumbsUpFill /> : <BsHandThumbsUp />}</button>
            <Link className="ml-4 flex " to="/Community">
              <GiHamburgerMenu className="block h-5"></GiHamburgerMenu> 목록
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const BoardItem = () => {
  return (
    <>
      <div>
        <BoardItemDetail title={getTitleByIndex(number)} content={getContentByIndex(number)} />
      </div>
    </>
  );
};

export default BoardItem;
