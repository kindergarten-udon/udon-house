/* eslint-disable no-undef */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { BsHandThumbsUpFill } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import "./boardListItem.css";

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
  // 한 페이지당 보여줄 갯수
  const perPage = 10;
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(0);

  // selectedPage 현재 페이지의 번호
  // 버튼을 누를때마다 호출됨
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  // 현재 페이지의 시작 인덱스를 계산
  const offset = currentPage * perPage;
  const contentsSort = contents.sort((a, b) => {
    return new Date(a.time).getTime() - new Date(b.time).getTime();
  });
  const pagedContents = contentsSort.slice(offset, offset + perPage);
  // contents에 들어온 리스트를 slice로 잘라서 자르고 싶은 index 갯수 만큼 자르고 pagedContents에 저장함
  // ex) 0번째 인덱스이면 0 * 10 이기 때문에 0번째 인덱스부터 0 + 10 그러니까 0~10까지 자른 배열을 map으로 돌려줌
  // ex) 1번째 인덱스이면 1 * 10 이므로 10번째부터 10+10 까지 10~20까지 자른 배열을 map으로 돌림
  //  pageCount={Math.ceil(contents.length / perPage)}
  // Math.ceil은 소수값이 존재할때 값을 올려준다.
  // contents에 들어와있는 11개의 게시물을 perPage 한페이지당 보여줄 갯수인 10 개로 나누어 몇 개의 페이지가 필요한지 구한 것

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
