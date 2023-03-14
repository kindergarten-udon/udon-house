/* eslint-disable no-undef */
import React from "react";
import boardData from "./boardData";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function BoardItem({ index, title, content }) {
  return (
    <div className="text-left  flex py-2 lg:py-3 border border-transparent border-b-gray-300 w-full">
      <span className="text-gray-500 text-center w-[15vw] font-bold">{title}</span>
      <Link className="w-full" to={`${index}`}>
        {content}
      </Link>
    </div>
  );
}

const BoardListItem = () => {
  return (
    <>
      <div>
        {boardData.map((item, index) => (
          <BoardItem title={item.제목} content={item.내용} index={index} />
        ))}
      </div>
    </>
  );
};

export default BoardListItem;
