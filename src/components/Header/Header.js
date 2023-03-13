import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 z-50 sm:text-pink-color md:text-blue-400 lg:text-orange-400 bg-bg-blue-color animate-bounce">
        <Link to="/main">헤더페이지</Link>
      </div>
    </>
  );
};

export default Header;
