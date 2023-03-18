import React, { useState, useEffect } from "react";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import { cls } from "util/util";
import { Nav } from "components/Nav/Nav";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "util/fbase";

const Header = () => {
  // const [active, setActive] = useState(true);
  const location = useLocation();
  const path = location.pathname;
  const arr = ["/", "/map"];

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const navigate = useNavigate("");
  const goSigninButton = () => {
    if (location.pathname !== "/signin") {
      navigate("/signin");
      alert("이동!");
    }
  };

  return (
    <>
      <header className={`${arr.includes(path) ? "bg-transparent" : "bg-white"} z-20 w-full lg:h-[120px]  h-[72px] flex justify-between fixed items-center lg:px-[60px] lg:py-[24px] p-[16px]`}>
        <Link to="/">
          <img src="/udonHouseLogo.svg" alt="우동집 로고" className="lg:h-[72px] h-[40px]" />
        </Link>
        <div className="flex items-center gap-5 lg:text-[17px] text-[14px] font-bold">
          <Nav className="flex gap-5" />
          <Link to="/signin">
            {/* <button type="button" className="border-2 border-solid border-gray-300 rounded-full px-2" onClick={toggleButton}>
              {active ? "로그인" : "로그아웃"}
            </button> */}
            <div>
              {user ? (
                <div className="flex-clo pt-[25px]">
                  <button className="text-base border-2 border-solid border-gray-300 rounded-full px-2" onClick={handleLogout}>
                    로그아웃
                  </button>
                  <p className="text-sm">{user.email}</p>
                </div>
              ) : (
                <div>
                  <button className="border-2 border-solid border-gray-300 rounded-full px-2" onClick={goSigninButton}>
                    로그인
                  </button>
                </div>
              )}
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
