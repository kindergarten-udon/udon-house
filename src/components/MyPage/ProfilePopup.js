import { signOut } from "firebase/auth";
import React from "react";
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
      auth.signOut();
    } else {
      alert("로그인 유지");
    }
  };

  const handleClick = () => {
    navigate("/mypage");
  };

  return (
    <div className="popup">
      <div className="relative">
        <h2 className="sr-only">프로필 팝업창</h2>
        <img className="w-[40px] h-[40px] lg:ml-10 ml-3 top-7 border border-gray-400 rounded-full relative " src="pink.svg" alt="프로필 기본 사진" />
        <p className="text-sm">{auth.currentUser.email}</p>
        <div className="m-auto relative top-6">
          <button className="popupButton" onClick={handleClick}>
            <BsBookmarkHeart className="popupIcon left-[68px]" />
            <span className="popupSpan lg:top-[-10px] top-[-6px]">마이페이지</span>
          </button>
          <button className="popupButton flex " onClick={logout}>
            <RiLogoutBoxRLine className="popupIcon left-[68px]" />
            <span className="popupSpan lg:top-[9px] top-[10px] left-[75px] ">로그아웃</span>
          </button>
          <button className="popupButton" onClick={onClose}>
            <AiOutlineCloseSquare className="popupIcon left-[86px]" />
            <span className="popupSpan lg:top-[-11px] top-[-6px]">닫기</span>
          </button>
        </div>
      </div>
    </div>
  );
};
