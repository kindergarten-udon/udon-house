import "./Community.css";
import { React, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BoardList from "components/Community/BoardList";
import BoardItem from "components/Community/BoardItem";
import BestBoard from "components/Community/BestBoard";
import { onSnapshot, collection } from "firebase/firestore";
import { dbService } from "util/fbase";

const Community = ({ isLogin }) => {
  // 게시물 뿌려주기
  const [contents, setContents] = useState([]);

  // onSnapshot으로 실시간 상태관리 하기
  useEffect(() => {
    onSnapshot(collection(dbService, "content"), (snapshot) => {
      const contentArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContents(contentArray);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" lg:pt-[120px] pt-[72px] container w-screen min-w-full text-gray-700 ">
      <h2 className="text-2xl lg:text-5xl font-bold text-left lg:px-[10vw] px-7 mt-7 text-gray-800 bg-">커뮤니티</h2>
      <div className="text-sm lg:text-base text-left lg:px-[10vw] px-7 mt-3 lg:mt-6 mb-2 lg:mb-5 text-gray-800">우리아이 자랑 커뮤니티</div>
      <BestBoard />
      <div>{window.location.href.includes("community/") ? <BoardItem /> : <BoardList isLogin={isLogin} contents={contents} />}</div>
    </div>
  );
};

// const Community = () => {
//   return (
//     <>
//       <div>
//         {/* 추후 best 게시물 id 값을 찾아와서 넣어주는 형식으로 작성하면 될것 같습니다. */}
//         <CommunityList first={getContentByNumber(0)} second={getContentByNumber(1)} third={getContentByNumber(2)} />
//       </div>
//     </>
//   );
// };

export default Community;
