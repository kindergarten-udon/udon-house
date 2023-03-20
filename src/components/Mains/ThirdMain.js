import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ThirdMain = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".start3",
      start: "top center",
      end: "bottom center",
      animation: gsap.to(".gsap3", { x: 100, opacity: 1, duration: 1, stagger: 0.2 }),
      toggleActions: "restart reverse restart reverse",
    });
  }, []);
  return (
    <div className="start3 w-screen relative bg-main-color h-screen snap-center">
      <img className="absolute" src="/main_shape_1.png" />
      <div className="h-screen flex flex-col justify-center items-center text-center">
        <img className="gsap3 opacity-0 thirdBackImage" src="/main_shape_2.png" />
        <img className="gsap3 opacity-0 thirdBackImage" src="/main2.svg" />
      </div>
      <img className="absolute gsap3 opacity-0 animate-bounce thirdBounce" src="/main_join_bird.png" />
      <div className="absolute top-36 lg:top-52 text-left  max-sm:px-5 max-sm:top-24 max-sm:transLeft">
        <h2 className="gsap3 opacity-0 font-bold max-sm:text-2xl text-3xl lg:text-4xl leading-loose">우동집은 이런 기능이 있어요!</h2>
        <div className="gsap3 opacity-0">우동집의 다양한 기능들을 알려드립니다.</div>
      </div>
      <section className="absolute transLeft thirdLinkSection">
        <div className="gsap3 opacity-0 bg-btn-green-color thirdLink">
          <Link to={"/map"}>
            <img src="/notification1.png" alt="" />
            <div className="thirdLinkText">우리 아이가 다닐 어린이집을 찾아봐요!</div>
          </Link>
        </div>
        <div className="gsap3 opacity-0  bg-pink-color thirdLink">
          <Link to={"/community"}>
            <img src="/notification2.png" alt="" />
            <div className="thirdLinkText">함께 이야기 나눠봐요!</div>
          </Link>
        </div>
        <div className="gsap3 opacity-0 bg-blue-color thirdLink">
          <Link to={"/aboutus"}>
            <img src="/notification3.png" alt="" />
            <div className="thirdLinkText">about us</div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ThirdMain;
