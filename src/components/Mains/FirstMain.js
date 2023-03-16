import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FirstMain = () => {
  return (
    <div className="relative w-full h-screen snap-center">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="https://cdn-web-management.i-nara.co.kr/common/main/main_intro_2.mp4" type="video/mp4" />
      </video>
      <h1 className="absolute  left-1/2 top-1/3 lg:text-4xl leading-loose max-sm:w-[100vw] max-sm:px-2 text-3xl font-bold text-white -translate-x-1/2 -translate-y-1/2 ">
        우리동네어린이집 <br /> 우리 아이 안전한 어린이집 찾기
      </h1>
      <span className="absolute left-1/2 top-1/2 lg:text-base leading-loose max-sm:w-[100vw] text-sm  text-white -translate-x-1/2 -translate-y-1/2 ">
        우리 동네 다양한 어린이집을 찾아보세요
        <br />
        위치 기반 서비스로 쉽게 찾아볼 수 있는
        <br />
        우동집 입니다!
      </span>
      <Link
        to="/map"
        type="button"
        className="box-border absolute max-sm:w-[160px] max-sm:h-[32px] max-sm:py-[6px] max-sm:px-0 py-4 px-20   bottom-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-sm lg:text-base bg-white rounded-xl font-bold"
      >
        어린이집 정보 찾기
      </Link>
      <div className="absolute text-white bottom-20 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <IoIosArrowDown className="animate-bounce  h-8 w-8" />
      </div>
    </div>
  );
};

export default FirstMain;
