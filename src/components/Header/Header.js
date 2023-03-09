import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="text-bg-pink-color bg-bg-blue-color">
        <Link to="/main">헤더페이지</Link>
      </div>
    </>
  );
};

export default Header;
