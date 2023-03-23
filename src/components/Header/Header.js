import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "util/fbase";
import { Nav } from "components/Nav/Nav";
import { onAuthStateChanged } from "firebase/auth";

const Header = ({ isLogin, userId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const arr = ["/", "/map"];

  const [modal, setModal] = useState(false);
  // 로그아웃
  const logout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃 완료!");
      navigate("/");
      auth.signOut();
    } else {
      alert("로그인 유지");
    }
  };
  // const showModal = () => {
  //   if (modal === true) {
  //     setModal(false);
  //   } else {
  //     setModal(true);
  //   }
  // };

  const loginBtn = () => {
    navigate("/signin");
  };
  // Modal setModal 로 넘겨준 모달 상태를 통한 값으로 모달 열고닫기 가능하면 될듯
  return (
    <>
      <header className={`${arr.includes(path) ? "bg-transparent" : "bg-white"} z-20 w-full lg:h-[120px]  h-[72px] flex justify-between fixed items-center lg:px-[60px] lg:py-[24px] p-[16px]`}>
        {/* {showModal && <Modal setModal={setModal} />} */}
        <Link to="/">
          <img src="/udonHouseLogo.svg" alt="우동집 로고" className="lg:h-[72px] h-[40px]" />
        </Link>
        <div className="flex items-center gap-5 lg:text-[17px] text-[14px] font-bold">
          <Nav className="flex gap-5" />
          {isLogin === true ? (
            <button onClick={logout} type="button">
              <img src="/JuHyeong.jpg" alt="주형사진" className="aboutImgae w-[35px] lg:w-[45px] border-gray-700" />
            </button>
          ) : (
            <button onClick={loginBtn} type="button" className="border-2 border-solid border-gray-300 rounded-full px-2">
              로그인
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
