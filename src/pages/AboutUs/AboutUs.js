import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="wrapper py-[120px] w-full">
        <span className="text-[40px] px-8 py-2 font-bold pt-16 inline-block border-b-4 border-black">About Us</span>
        <div className="py-[80px] flex gap-12 justify-center ">
          <div>
            <figure className="w-[180px] h-[180px] relative">
              <img src="/iNaraChar.png" alt="" className="absolute w-10 h-20 left-[-5px] top-[-18px] rotate-45 -z-50" />
              <div className="flex flex-col">
                <img src="/JuHyeong.jpg" alt="주형사진" className="rounded-full w-full h-full object-cover -z-10" />
                <figcaption className="mt-5 text-lg -z-10">
                  이주형
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
              <div className="flex flex-col">
                <img src="/JuHyeong.jpg" alt="주형사진" className="rounded-full w-full h-full object-cover -z-10" />
                <figcaption className="mt-5 text-lg -z-10">
                  유하리
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
                <img src="/JaeWoo.jpeg" alt="재우사진" className="rounded-full w-full h-full object-cover object-top -z-10" />
                <figcaption className="mt-5 text-lg -z-10">
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
                <figcaption className="mt-5 text-lg -z-10">
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
                <figcaption className="mt-5 text-lg -z-10">
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
