import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsHandThumbsUp } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const BoardItem = () => {
  return (
    <>
      <section className="mx-auto w-[70vw] min-w-[280px] lg:min-w-[500px] text-gray-700">
        <div className="px-6 py-2 text-left border border-gray-500 rounded-3xl mb-5">제목이 들어오는 영역</div>
        <div className="h-[300px] px-6 py-2 text-left border border-gray-500 rounded-3xl">내용이 들어오는 영역</div>
        <div className="text-sm lg:text-base mt-4 mx-4 flex justify-between">
          <div className="">
            <button className="mr-4">수정하기</button>
            <button>삭제하기</button>
          </div>
          <div className="flex">
            <button>
              <BsHandThumbsUp></BsHandThumbsUp>
            </button>
            <Link className="ml-4 flex " to="/Community">
              <GiHamburgerMenu className="block h-5"></GiHamburgerMenu> 목록
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoardItem;
