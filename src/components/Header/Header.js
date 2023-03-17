import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "util/fbase";
import { signOut } from "firebase/auth";
import { Nav } from "components/Nav/Nav";

const Header = ({ isLogin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const loginBtn = () => {
    navigate("/signin");
  };

  // 로그아웃
  const logout = () => {
    alert("로그아웃!");
    auth.signOut();
  };

  return (
    <>
      <header className={`${path === "/" ? "bg-transparent" : "bg-white"} z-20 w-full lg:h-[120px]  h-[72px] flex justify-between fixed items-center lg:px-[60px] lg:py-[24px] p-[16px]`}>
        <Link to="/">
          <img src="/udonHouseLogo.svg" alt="우동집 로고" className="lg:h-[72px] h-[40px]" />
        </Link>
        <div className="flex items-center gap-5 lg:text-[17px] text-[14px] font-bold">
          <Nav className="flex gap-5" />
          {isLogin === true ? (
            <button onClick={logout} type="button" className="border-2 border-solid border-gray-300 rounded-full px-2">
              로그아웃
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
