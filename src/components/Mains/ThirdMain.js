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
    <div className="test2 w-screen relative bg-main-color h-screen snap-center">
      <img className="absolute" src="/main_shape_1.png" />
      <div className="h-screen flex flex-col justify-center items-center text-center">
        <img className="test3 opacity-0 absolute w-[80%] min-w-[280px] max-w-[550px] lg:w-[60%] lg:min-w-[59%] right-0" src="/main_shape_2.png" />
        <img className="test3 opacity-0 absolute w-[80%] min-w-[280px] max-w-[550px] lg:w-[60%] lg:min-w-[59%] right-0" src="/main2.svg" />
      </div>
      <img className="test3 opacity-0 absolute w-[15vw] max-w-[100px] lg:w-[10vw] lg:max-w-[150px] animate-bounce right-[20%] bottom-[63%] max-sm:bottom-[75%] lg:bottom-[57%] lg:right-[25%]" src="/main_join_bird.png" />
      <div className="absolute top-36 top-36 lg:top-52 text-left  max-sm:px-5 max-sm:top-24 max-sm:-translate-x-[100px]">
        <h2 className="test3 opacity-0 font-bold max-sm:text-2xl text-3xl lg:text-4xl leading-loose">우동집은 이런 기능이 있어요!</h2>
        <div className="test3 opacity-0">우동집의 다양한 기능들을 알려드립니다.</div>
      </div>
      <section className="box-border max-sm:w-full absolute w-screen mx-auto max-sm:top-52 top-1/3 lg:top-[40%] sm:flex justify-center -translate-x-[100px] flex-wrap">
        <div className="test3 opacity-0 w-[25vw] min-w-[300px] cursor-pointer max-sm:w-[40vw] max-sm:min-w-[230px] max-sm:mx-auto bg-btn-green-color rounded-2xl hover:text-xl hover:drop-shadow-2xl m-5">
          <img src="/notification1.png" alt="" />
          <div className="bg-white h-8 rounded-b-2xl">우리 아이가 다닐 어린이집을 찾아봐요!</div>
        </div>
        <div className="test3 opacity-0 w-[25vw] min-w-[300px] cursor-pointer max-sm:w-[40vw] max-sm:min-w-[230px] max-sm:mx-auto bg-pink-color rounded-2xl hover:text-xl hover:drop-shadow-2xl m-5">
          <img src="/notification2.png" alt="" />
          <div className="bg-white h-8 rounded-b-2xl">함께 이야기 나눠봐요!</div>
        </div>
        <div className="test3 opacity-0 w-[25vw] min-w-[300px] cursor-pointer max-sm:w-[40vw] max-sm:min-w-[230px] max-sm:mx-auto bg-blue-color rounded-2xl hover:text-xl hover:drop-shadow-2xl m-5">
          <img src="/notification3.png" alt="" />
          <div className="bg-white h-8 rounded-b-2xl">어린이집에 신청해요! (추가예정)</div>
        </div>
      </section>
    </div>
  );
};

export default ThirdMain;
