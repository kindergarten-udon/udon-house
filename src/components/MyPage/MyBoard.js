import React from "react";
import { userData } from "atom/atom";
import { useRecoilState } from "recoil";

const MyBoard = ({ setActive, userId }) => {
  const content = useRecoilState(userData);
  const myBoard = content[0].filter((el) => {
    return el.creatorId === userId.uid;
  });
  console.log(myBoard);

  return (
    <div>
      {myBoard.map((el) => {
        return (
          <div key={el.id}>
            <span>{el.title}</span>
            <span>{el.content}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MyBoard;
