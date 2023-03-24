import React, { useState } from "react";
import { userData } from "Atom/atom";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { BsHandThumbsUpFill } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import "components/utilCss/boardListItem.css";

const MyBoard = ({ setActive, userId }) => {
  const content = useRecoilValue(userData);
  const myBoard = content.filter((el) => {
    return el.creatorId === userId.uid;
  });
  const perPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * perPage;
  const pagedContents = myBoard.slice(offset, offset + perPage);

  return (
    <div className="mt-10 mb-20">
      {myBoard.length === 0 ? (
        <p>작성한 글이 없습니다.</p>
      ) : (
        pagedContents.map((el) => {
          return (
            <section className="w-[80%] mx-auto" key={el.id}>
              <div className="text-left flex py-2 lg:py-3 border border-transparent border-b-gray-300 w-full">
                <span className="text-gray-500 text-center max-sm:w-[15vw] truncate w-[25vw] font-medium">{el.title}</span>
                <Link className="w-full px-3 overflow-hidden" to={`/community/${el.id}`}>
                  {el.content}
                </Link>
                <span className="max-sm:w-[clamp(50px,10vw,60px)] w-[clamp(60px,7vw,70px)] flex justify-between pr-1 lg:pr-3">
                  <BsHandThumbsUpFill className="mt-[1px]" />
                  {el.like}
                </span>
              </div>
            </section>
          );
        })
      )}
      <ReactPaginate previousLabel={"<"} nextLabel={">"} pageCount={Math.ceil(myBoard.length / perPage)} onPageChange={handlePageClick} containerClassName={"pagination"} activeClassName={"active"} />
    </div>
  );
};

export default MyBoard;
