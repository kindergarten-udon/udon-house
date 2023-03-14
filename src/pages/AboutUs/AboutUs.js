import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="wrapper lg:py-[150px] py-[100px] w-full">
        <span className="text-[40px] px-8 py-2 font-bold pt-16 inline-block border-b-4 border-black">About Us</span>
        <div className="p-[80px] lg:flex lg:gap-12 lg:justify-center md:grid md:grid-cols-3 md:gap-28 grid grid-cols-1 gap-32 place-items-center">
          <div className="">
            <figure className="w-[180px] h-[180px] relative">
              <img src="/iNaraChar.png" alt="" className="absolute w-10 h-20 left-[-5px] top-[-18px] rotate-45 -z-50" />
              <div className="flex flex-col">
                <img src="/JuHyeong.jpg" alt="주형사진" className="rounded-full w-full h-full object-cover -z-10" />
                <figcaption className="mt-5 text-lg block">
                  이주형
                  <a href="mailto:test@google.co.kr">test@google.co.kr</a>
                </figcaption>
              </div>
            </figure>
          </div>
          <div className="">
            <figure className="w-[180px] h-[180px] relative">
              <img src="/noticeImage.png" alt="" className="absolute w-30 h-20 left-[-25px] top-[-50px] -rotate-12 -z-50" />
              <div className="flex flex-col">
                <img src="/JuHyeong.jpg" alt="주형사진" className="rounded-full w-full h-full object-cover -z-10" />
                <figcaption className="mt-5 text-lg ">
                  유하리
                  <a href="mailto:" className="block">
                    Email
                  </a>
                </figcaption>
              </div>
            </figure>
          </div>
          <div className="">
            <figure className="w-[180px] h-[180px] relative">
              <img src="/iNaraChar.png" alt="" className="absolute w-10 h-20 left-[-5px] top-[-18px] rotate-45 -z-50" />
              <div className="flex flex-col w-[180px] h-[180px]">
                <img src="/JaeWoo.jpeg" alt="재우사진" className="rounded-full w-full h-full object-cover object-top -z-10" />
                <figcaption className="mt-5 text-lg">
                  장재우
                  <a href="mailto:" className="block">
                    Email
                  </a>
                </figcaption>
              </div>
            </figure>
          </div>
          <div>
            <figure className="w-[180px] h-[180px] relative">
              <img src="/iNaraChar.png" alt="" className="absolute w-10 h-20 left-[-5px] top-[-18px] rotate-45 -z-50" />
              <div className="flex flex-col w-[180px] h-[180px]">
                <img src="/YoonHo.jpg" alt="윤호사진" className="rounded-full w-full h-full object-cover -z-10" />
                <figcaption className="mt-5 text-lg">
                  조윤호
                  <a href="mailto:" className="block">
                    Email
                  </a>
                </figcaption>
              </div>
            </figure>
          </div>
          <div>
            <figure className="w-[180px] h-[180px] relative">
              <img src="/noticeImage.png" alt="" className="absolute w-30 h-20 left-[-25px] top-[-50px] -rotate-12 -z-50" />
              <div className="flex flex-col w-[180px] h-[180px]">
                <img src="/SuMin.png" alt="수민사진" className="rounded-full w-full h-full object-cover -z-10" />
                <figcaption className="mt-5 text-lg">
                  김수민
                  <a href="mailto:" className="block">
                    Email
                  </a>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
