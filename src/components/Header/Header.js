import React, { useState } from "react";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import { cls } from "util/util";
import { Nav } from "components/Nav/Nav";

const Header = () => {
  const [active, setActive] = useState(true);
  const location = useLocation();
  const path = location.pathname;
  const arr = ["/", "/map"];

  return (
    <>
      <header className={`${arr.includes(path) ? "bg-transparent" : "bg-white"} z-20 w-full lg:h-[120px]  h-[72px] flex justify-between fixed items-center lg:px-[60px] lg:py-[24px] p-[16px]`}>
        <Link to="/">
          <img src="/udonHouseLogo.svg" alt="우동집 로고" className="lg:h-[72px] h-[40px]" />
        </Link>
        <div className="flex items-center gap-5 lg:text-[17px] text-[14px] font-bold">
          <Nav className="flex gap-5" />
          <Link to="/signin">
            <button type="button" className="border-2 border-solid border-gray-300 rounded-full px-2">
              {active ? "로그인" : "로그아웃"}
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
