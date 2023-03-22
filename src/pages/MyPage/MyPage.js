import Favorite from "components/MyPage/Favorite";
import MyBoard from "components/MyPage/MyBoard";
import React, { useState, useEffect } from "react";

const MyPage = ({ userId }) => {
  const [active, setActive] = useState(false);

  const handleOptionChange = (event) => {
    setActive(event.target.id);
  };

  const testClick = (e) => {
    const {
      target: { name },
    } = e;
    if (name === "myboard") {
      setActive(false);
      return;
    } else if (name === "favorite") {
      setActive(true);
      return;
    }
  };

  return (
    <div className="lg:pt-[120px] pt-[72px]">
      <section className="relative mb-10 text-center">
        <div className="bg-main-color h-[50px] lg:h-[70px] z-10"></div>
        <div className="bg-subMain-color h-[150px] lg:h-[250px]">
          <img src="/characters.png" alt="배경" className="w-screen max-sm:h-0 h-[150px] lg:h-[250px]" />
          <img src="/gom.png" alt="곰" className="max-sm:w-40 max-sm:-translate-y-4 w-0 -z-1" />
        </div>
        <div className="absolute top-2 max-sm:top-1 left-1/2 -translate-x-[50%] mx-auto w-32 lg:w-52 text-sm lg:text-base">
          {/* userId의 사진이 들어와야함.  */}
          <img src="/JuHyeong.jpg" alt="주형사진" className="aboutImgae px-2 py-1 border-gray-700" />
          <button className="border border-gray-700 rounded-2xl bg-white px-2 lg:py-1 my-3 ">프로필 사진 편집</button>
          <br />
          {userId && userId.email}
        </div>
      </section>
      <div className="max-sm:text-xl text-2xl lg:text-3xl max-sm:translate-x-1 translate-x-5">
        <button name="myboard" onClick={testClick} className={!active ? "mypageChecked max-sm:mr-[10%] mr-20 " : "mypage max-sm:mr-[10%] mr-20"}>
          내가 작성한글
        </button>
        <button name="favorite" onClick={testClick} className={active ? "mypageChecked " : "mypage "}>
          어린이집 즐겨찾기
        </button>
      </div>

      {active ? <Favorite setActive={setActive} /> : <MyBoard setActive={setActive} userId={userId} />}
    </div>
  );
};

export default MyPage;
