/* eslint-disable no-undef */
import React from "react";
import boardData from "./boardData";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function BoardItem({ index, title, content }) {
  return (
    <div className="text-left  flex py-2 lg:py-3 border border-transparent border-b-gray-300 w-full">
      <span className="text-gray-500 text-center w-[15vw] font-medium">{title}</span>
      <Link className="w-full px-3 lg:px-0 overflow-hidden" to={`${index}`}>
        {content}
      </Link>
    </div>
  );
}

const BoardListItem = ({ contents }) => {
  return (
    <>
      <div>
        {contents.map((item, index) => (
          <BoardItem title={item.writer} content={item.title} index={index} />
        ))}
      </div>
    </>
  );
};

export default BoardListItem;
