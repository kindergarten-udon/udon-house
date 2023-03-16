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
    <div className="test2 w-screen relative bg-main-color h-screen snap-center ">
      <img className="absolute" src="/main_shape_1.png" />
      <div className="h-screen flex flex-col justify-center items-center text-center">
        <img className="absolute w-[80%] min-w-[280px] max-w-[550px] lg:w-[60%] lg:min-w-[59%] right-0" src="/main_shape_2.png" />
        <img className="absolute w-[80%] min-w-[280px] max-w-[550px] lg:w-[60%] lg:min-w-[59%] right-0" src="/main2.svg" />
      </div>
      <img className="absolute w-[15vw] max-w-[100px] lg:w-[10vw] lg:max-w-[150px] animate-bounce right-[20%] bottom-[62%] max-sm:bottom-[78%] lg:right-[25%]" src="/main_join_bird.png" />
      <div className="absolute top-20 sm:top-40 text-left ml-[10%]">
        <h2 className="font-bold text-3xl lg:text-4xl leading-loose">공지사항</h2>
        <span>우동집의 업데이트 정보등 다양한 소식을 알려드립니다.</span>
      </div>
      <section className="box-border max-sm:w-full max-sm:mx-auto absolute max-sm:top-44 top-1/3 sm:flex mx-[5%]">
        <div className="cursor-pointer max-sm:w-[40vw] max-sm:min-w-[230px] max-sm:mx-auto bg-btn-green-color rounded-2xl hover:text-xl hover:drop-shadow-2xl m-5">
          <img src="/notification1.png" alt="" />
          <div className="bg-white h-8 rounded-b-2xl">공지사항</div>
        </div>
        <div className="cursor-pointer max-sm:w-[40vw] max-sm:min-w-[230px] max-sm:mx-auto bg-pink-color rounded-2xl hover:text-xl hover:drop-shadow-2xl m-5">
          <img src="/notification2.png" alt="" />
          <div className="bg-white h-8 rounded-b-2xl">공지사항</div>
        </div>
        <div className="cursor-pointer max-sm:w-[40vw] max-sm:min-w-[230px] max-sm:mx-auto bg-blue-color rounded-2xl hover:text-xl hover:drop-shadow-2xl m-5">
          <img src="/notification3.png" alt="" />
          <div className="bg-white h-8 rounded-b-2xl">공지사항</div>
        </div>
      </section>
    </div>
  );
};

export default ThirdMain;
