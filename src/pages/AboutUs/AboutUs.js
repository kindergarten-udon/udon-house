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
      <div className="wrapper lg:py-[150px] py-[100px] w-full bg-">
        <span className="text-[40px] px-8 py-2 font-bold pt-16 inline-block border-b-4 border-black">About Us</span>
        <div className="w-80% py-[80px] px-[5vw] gap-[4vw] lg:flex lg:gap-[4.5vw] lg:justify-center md:grid md:grid-cols-2 md:gap-x-10 grid grid-cols-1 place-items-center">
          <div className="">
            <figure className="px-[5vw] lg:px-0 relative">
              <div className="flex flex-col">
                <img src="/iNaraChar.png" alt="곰돌이" className="aboutBearImg" />
                <img src="/JuHyeong.jpg" alt="주형사진" className="aboutImgae" />
                <figcaption className="mt-5 text-lg block">
                  이주형
                  <a href="mailto:test@google.co.kr" className="block">
                    test@google.co.kr
                  </a>
                </figcaption>
              </div>
            </figure>
          </div>
          <div className="">
            <figure className="px-[5vw] lg:px-0 relative">
              <div className="flex flex-col">
                <img src="/noticeImage.png" alt="핑크캐릭터" className="aboutPinkImg" />
                <img src="/hari.jpeg" alt="하리사진" className="aboutImgae" />
                <figcaption className="mt-5 text-lg ">
                  유하리
                  <a href="mailto:" className="block">
                    hariyu93@gmail.com
                  </a>
                </figcaption>
              </div>
            </figure>
          </div>
          <div className="">
            <figure className="px-[5vw] lg:px-0 relative">
              <div className="flex flex-col">
                <img src="/iNaraChar.png" alt="곰돌이" className="aboutBearImg" />
                <img src="/JaeWoo.jpeg" alt="재우사진" className="aboutImgae" />
                <figcaption className="mt-5 text-lg">
                  장재우
                  <a href="mailto:" className="block">
                    oweaj1113@gmail.com
                  </a>
                </figcaption>
              </div>
            </figure>
          </div>
          <div>
            <figure className="px-[5vw] lg:px-0 relative">
              <div className="flex flex-col">
                <img src="/iNaraChar.png" alt="곰돌이" className="aboutBearImg" />
                <img src="/YoonHo.jpg" alt="윤호사진" className="aboutImgae" />
                <figcaption className="mt-5 text-lg">
                  조윤호
                  <a href="mailto:" className="block">
                    dydgh179@gmail.com
                  </a>
                </figcaption>
              </div>
            </figure>
          </div>
          <div>
            <figure className="px-[5vw] lg:px-0 relative">
              <div className="flex flex-col">
                <img src="/noticeImage.png" alt="핑크캐릭터" className="aboutPinkImg" />
                <img src="/SuMin.png" alt="수민사진" className="aboutImgae" />
                <figcaption className="mt-5 text-lg">
                  김수민
                  <a href="mailto:" className="block">
                    ksm6399@gmail.com
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
