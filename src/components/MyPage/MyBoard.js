import React from "react";
import { userData } from "Atom/atom";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { BsHandThumbsUpFill } from "react-icons/bs";

const MyBoard = ({ setActive, userId }) => {
  const content = useRecoilState(userData);
  const myBoard = content[0].filter((el) => {
    return el.creatorId === userId.uid;
  });

  return (
    <div className="mt-10 mb-20">
      {myBoard.map((el) => {
        console.log(el);
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
      })}
    </div>
  );
};

export default MyBoard;
