import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const FirstMain = () => {
  const [videoPlay, setVideoPlay] = useState(true);
  const videoRef = useRef(null);
  const mainRef = useRef(null);
  const videoPause = useRef(null);

  useEffect(() => {
    mainRef.current.focus();
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoPlay) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  }, [videoPlay]);
  useEffect(() => {
    const videoEl = videoPause.current;
    console.log(videoEl);
    setTimeout(() => {
      videoEl.classList.add("opacity-0");
    }, 5000);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setVideoPlay(!videoPlay);
    }
  };
  return (
    <div tabIndex={-1} ref={mainRef} onKeyDown={handleKeyDown} className="relative w-full h-screen">
      <div ref={videoPause} className="videoModal transition duration-500 fade-out  absolute top-36 left-1/2  -translate-x-[50%] -translate-y-[50%] text-white ">
        <div className="animate-bounce bg-main-color p-4 rounded-md">
          <p className="text-lg font-bold text-indigo-700">알림</p>
          <p className="text-gray-900">동영상을 정지하려면 esc키를 눌러주세요!</p>
        </div>
      </div>
      <video ref={videoRef} className="w-full h-full object-cover" muted loop>
        <source src="https://cdn-web-management.i-nara.co.kr/common/main/main_intro_2.mp4" type="video/mp4" />
      </video>

      <h1 className="absolute left-1/2 top-1/3 lg:text-4xl leading-loose w-[100vw] max-sm:px-2 text-3xl font-bold text-white firstTranslate ">
        우리동네어린이집 <br /> 우리 아이 안전한 어린이집 찾기
      </h1>
      <span className="absolute left-1/2 top-1/2 lg:text-base leading-loose max-sm:w-[100vw] text-sm  text-white firstTranslate ">
        우리 동네 다양한 어린이집을 찾아보세요
        <br />
        위치 기반 서비스로 쉽게 찾아볼 수 있는
        <br />
        우동집 입니다!
      </span>
      <Link to="/map" type="button" className="box-border absolute max-sm:w-[200px] max-sm:h-[40px] max-sm:py-3 max-sm:px-0 py-4 px-20   bottom-1/3 left-1/2 firstTranslate cursor-pointer text-sm lg:text-base bg-white rounded-xl font-bold">
        어린이집 정보 찾기
      </Link>
      <div className="absolute text-white bottom-20 left-1/2 firstTranslate ">
        <IoIosArrowDown className="animate-bounce  h-8 w-8" />
      </div>
    </div>
  );
};

export default FirstMain;
