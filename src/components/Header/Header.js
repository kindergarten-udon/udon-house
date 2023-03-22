import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "util/fbase";
import { Nav } from "components/Nav/Nav";
import { ProfilePopup } from "components/MyPage/ProfilePopup";

const Header = ({ isLogin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const arr = ["/", "/map"];

  const loginBtn = () => {
    navigate("/signin");
  };

  // // 로그아웃
  // const logout = () => {
  //   if (window.confirm("로그아웃 하시겠습니까?")) {
  //     alert("로그아웃 완료!");
  //     navigate("/");
  //     auth.signOut();
  //   } else {
  //     alert("로그인 유지");
  //   }
  // };

  //모달창
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const handleProfile = () => {
    setShowProfilePopup(true);
  };

  const closeProfilePopup = () => {
    setShowProfilePopup(false);
  };

  return (
    <>
      <div className="relative h-[120px]">
        <header className={`${arr.includes(path) ? "bg-transparent" : "bg-white"} z-20 w-full lg:h-[120px]  h-[72px] flex justify-between fixed items-center lg:px-[60px] lg:py-[24px] p-[16px]`}>
          <Link to="/">
            <img src="/udonHouseLogo.svg" alt="우동집 로고" className="lg:h-[72px] h-[40px]" />
          </Link>
          <div className=" flex items-center gap-5 lg:text-[17px] text-[14px] font-bold ">
            <Nav className="flex gap-5" />
            {isLogin === true ? (
              <>
                <button className="myPageButton" onClick={handleProfile}>
                  <img className="object-fill w-[40px] m-auto" src="/pink.svg" alt="사용자 프로필 사진" />
                </button>
              </>
            ) : (
              <button onClick={loginBtn} type="button" className="border-2 border-solid border-gray-300 rounded-full px-2">
                로그인
              </button>
            )}
          </div>
        </header>
        {showProfilePopup && <ProfilePopup onClose={closeProfilePopup} />}
      </div>
    </>
  );
};

export default Header;
