import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ThirdMain = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".test2",
      start: "top center",
      end: "bottom center",
      animation: gsap.to(".test3", { x: 100, opacity: 1, duration: 1, stagger: 0.2 }),
      toggleActions: "restart reverse restart reverse",
    });
  }, []);
  return (
    <div className="test2 w-full relative bg-main-color h-screen snap-center ">
      <img className="absolute" src="/main_shape_1.png" />
      <img className="absolute right-0 bottom-0 w-[86%] lg:w-1/2" src="/main_shape_2.png" />
      <img className=" absolute w-[86%] lg:w-1/2 right-0 bottom-0" src="/main2.svg" />
      <img className="absolute animate-bounce right-[233px] bottom-[600px] lg:right-[270px] lg:bottom-[539px]" src="/main_join_bird.png" />
      <div className="absolute top-40 -left-[100px] flex flex-col text-start px-[160px]">
        <h1 className="test3 opacity-0 font-bold lg:leading-loose lg:text-4xl leading-loose text-3xl">공지사항</h1>
        <span className="test3 opacity-0">우동집의 업데이트 정보 등 다양한 소식을 알려드립니다.</span>
      </div>
      <div className="flex w-full -left-[100px] flex-col items-center absolute top-1/3 lg:flex-row px-[160px] ">
        <div className="test3 opacity-0 w-full flex flex-col  bg-btn-green-color rounded-2xl cursor-pointer lg:w-full hover:text-xl hover:drop-shadow-2xl ">
          <img src="/notification1.png" alt="" />
          <div className="bg-white h-8 rounded-b-2xl">공지사항</div>
        </div>
        <div className="test3 opacity-0 hidden w-full bg-pink-color rounded-2xl my-10 lg:mx-10 cursor-pointer lg:w-full lg:block  hover:text-xl hover:drop-shadow-2xl">
          <img src="/notification2.png" alt="" />
          <div className="bg-white h-8 rounded-b-2xl">공지사항</div>
        </div>
        <div className="test3 opacity-0 hidden  w-1/2 bg-blue-color rounded-2xl cursor-pointer lg:w-full lg:block hover:text-xl hover:drop-shadow-2xl">
          <img src="/notification3.png" alt="" />
          <div className="bg-white h-8 rounded-b-2xl">공지사항</div>
        </div>
      </div>
    </div>
  );
};

export default ThirdMain;
