/* eslint-disable no-undef */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsHandThumbsUpFill } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import "components/utilCss/boardListItem.css";

function BoardItem({ title, content, id, like }) {
  return (
    <div className="text-left  flex py-2 lg:py-3 border border-transparent border-b-gray-300 w-full">
      <span className="text-gray-500 text-center max-sm:w-[15vw] truncate w-[25vw] font-medium">{title}</span>
      <Link className="w-full px-3 overflow-hidden" to={`${id}`}>
        {content}
      </Link>
      <span className="max-sm:w-[clamp(50px,10vw,60px)] w-[clamp(60px,7vw,70px)] flex justify-between">
        <BsHandThumbsUpFill className="mt-[1px]" />
        {like}
      </span>
    </div>
  );
}

const BoardListItem = ({ contents }) => {
  const perPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * perPage;
  const contentsSort = contents.sort((a, b) => {
    return new Date(a.time).getTime() - new Date(b.time).getTime();
  });
  const pagedContents = contentsSort.slice(offset, offset + perPage);

  return (
    <>
      {contents.length === 0 ? (
        <span>글이 없어요</span>
      ) : (
        <>
          <div>
            {pagedContents.map((item, index) => (
              <BoardItem key={index} title={item.writer} content={item.title} id={item.id} contents={contents} like={item.like} />
            ))}
          </div>
          <ReactPaginate previousLabel={"<"} nextLabel={">"} pageCount={Math.ceil(contents.length / perPage)} onPageChange={handlePageClick} containerClassName={"pagination"} activeClassName={"active"} />
        </>
      )}
    </>
  );
};

export default BoardListItem;
