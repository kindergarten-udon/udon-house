import AddPhoto from "components/MyPage/AddPhoto";
import Favorite from "components/MyPage/Favorite";
import MyBoard from "components/MyPage/MyBoard";
import React, { useState, useEffect } from "react";

const MyPage = ({ userId, userProfile, setUserProfile }) => {
  console.log(userId);
  const [active, setActive] = useState(false);

  //모달창
  const [showImagePopup, setShowImagePopup] = useState(false);

  const handleImage = () => {
    setShowImagePopup(true);
  };

  const closeImagePopup = () => {
    setShowImagePopup(false);
  };

  return (
    <div className="lg:pt-[120px] pt-[72px]">
      {showImagePopup && <AddPhoto userId={userId} onClose={closeImagePopup} setUserProfile={setUserProfile} />}
      <section className="relative mb-10 text-center">
        <div className="bg-main-color h-[50px] lg:h-[70px] z-10"></div>
        <div className="bg-subMain-color h-[150px] lg:h-[250px]">
          <img src="/characters.png" alt="배경" className="w-screen max-sm:h-0 h-[150px] lg:h-[250px]" />
          <img src="/gom.png" alt="곰" className="max-sm:w-40 max-sm:-translate-y-4 w-0 -z-1" />
        </div>
        <div className="absolute top-2 max-sm:top-1 left-1/2 -translate-x-[50%] mx-auto w-32 lg:w-52 text-sm lg:text-base">
          {userProfile ? <img src={userProfile} alt="사용자 프로필 이미지" className="aboutImgae px-2 py-1 border-gray-700" /> : <img src="/pink.svg" alt="사용자 프로필 기본 이미지" className="aboutImgae px-2 py-1 border-gray-700" />}
          <button className="border border-gray-700 rounded-2xl bg-white px-2 py-1 my-3 " onClick={handleImage}>
            프로필 사진 편집
          </button>
          <br />
          {userId && userId.email}
        </div>
      </section>
      <button></button>
      <Favorite setActive={setActive} />
      <MyBoard setActive={setActive} userId={userId} />
    </div>
  );
};

export default MyPage;
