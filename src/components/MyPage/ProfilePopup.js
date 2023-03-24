import React, { useEffect, useRef } from "react";
import { auth } from "util/fbase";
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsBookmarkHeart } from "react-icons/bs";

export const ProfilePopup = ({ onClose }) => {
  const navigate = useNavigate();

  // 로그아웃
  const logout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃 완료!");
      navigate("/");
      onClose();
      auth.signOut();
    } else {
      alert("로그인 유지");
    }
  };

  const handleClick = () => {
    onClose();
    navigate("/mypage");
  };

  //바깥 영역 클릭시 닫힘 버튼
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef, onClose]);

  return (
    <div ref={popupRef}>
      <div className="popup">
        <div className="relative">
          <h2 className="sr-only">프로필 팝업창</h2>

          {auth.currentUser.photoURL ? (
            <img src={auth.currentUser.photoURL} alt="사용자 프로필 이미지" className="profileImage w-[60px] translate-y-5 translate-x-[-90px] inline-block" />
          ) : (
            <img src="yellow.svg" alt="사용자 기본 프로필 이미지" className="profileImage w-[50px] translate-x-10 translate-y-3" />
          )}
          {auth.currentUser && <p className="text-md translate-x-3 translate-y-[-20px] lg:translate-x-1 lg:pl-12 pl-5">{auth.currentUser.email}</p>}
          <div className="m-auto relative top-6 translate-y-[-15px]">
            <button className="popupButton hover:bg-yellow-300" onClick={handleClick}>
              <BsBookmarkHeart className="popupIcon left-[68px]" />
              <span className="popupSpan lg:top-[-10px] top-[-9px] pl-2.5 lg:pl-0">마이페이지</span>
            </button>
            <button className="popupButton flex  hover:bg-orange-300" onClick={logout}>
              <RiLogoutBoxRLine className="popupIcon left-[68px]" />
              <span className="popupSpan lg:top-[9px] top-[10px] lg:left-[75px] left-[70px]">로그아웃</span>
            </button>
            <button className="popupButton  hover:bg-red-300" onClick={onClose}>
              <AiOutlineCloseSquare className="popupIcon left-[86px]" />
              <span className="popupSpan lg:top-[-11px] top-[-10px] pl-2.5">닫기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
