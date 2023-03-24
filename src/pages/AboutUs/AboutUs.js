import React, { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="wrapper lg:py-[150px] py-[100px] w-full ">
        <span className="text-[40px] px-8 py-2 font-bold pt-16 inline-block border-b-4 border-black">About Us</span>
        <div className="w-80% py-[80px] px-[5vw] gap-[4vw] lg:flex lg:gap-[4.5vw] lg:justify-center md:grid md:grid-cols-2 md:gap-x-10 grid grid-cols-1 place-items-center">
          <div>
            <figure className="px-[5vw] lg:px-0 relative">
              <div className="flex flex-col ">
                <img src="/iNaraChar.png" alt="곰돌이" className="aboutBearImg" />
                <img src="/JuHyeong.jpg" alt="주형사진" className="aboutImgae" />
                <figcaption className="mt-5 text-lg block bg-[#282A35]">
                  <span className="text-2xl text-white">이주형</span>
                  <p>
                    <span className="text-[#F97AA9]">const</span> <span className="text-[#57F984]">MBTI</span> <span className="text-[#F97AA9]">=</span> <span className="text-[#F1F881]">INFP;</span>
                    <a target="_blank" href="https://github.com/leejh4197" className="block">
                      <span className="text-white">{"<"}</span>
                      <span className="text-teal-300">Link </span>
                      <span className="text-[#57F984]">to</span>
                      <span className="text-[#F97AA9]">=</span>
                      <span className="text-teal-300">{"{"}</span>
                      <span className="text-white">github</span>
                      <span className="text-teal-300">{"}"}</span>
                      <span className="text-white">{"/>"}</span>
                    </a>
                  </p>
                </figcaption>
              </div>
            </figure>
          </div>
          <div>
            <figure className="px-[5vw] lg:px-0 relative">
              <div className="flex flex-col">
                <img src="/noticeImage.png" alt="핑크캐릭터" className="aboutPinkImg" />
                <img src="/hari.jpeg" alt="하리사진" className="aboutImgae" />
                <figcaption className="mt-5 text-lg bg-[#282A35]">
                  <span className="text-2xl text-white">유하리</span>
                  <p>
                    <span className="text-[#F97AA9]">let</span> <span className="text-[#57F984]">MBTI</span> <span className="text-[#F97AA9]">=</span> <span className="text-[#F1F881]"> INFP || INFJ;</span>
                    <a target="_blank" href="https://github.com/leejh4197" className="block">
                      <span className="text-white">{"<"}</span>
                      <span className="text-teal-300">Link </span>
                      <span className="text-[#57F984]">to</span>
                      <span className="text-[#F97AA9]">=</span>
                      <span className="text-teal-300">{"{"}</span>
                      <span className="text-white">github</span>
                      <span className="text-teal-300">{"}"}</span>
                      <span className="text-white">{"/>"}</span>
                    </a>
                  </p>
                </figcaption>
              </div>
            </figure>
          </div>
          <div>
            <figure className="px-[5vw] lg:px-0 relative">
              <div className="flex flex-col">
                <img src="/iNaraChar.png" alt="곰돌이" className="aboutBearImg" />
                <img src="/JaeWoo.jpeg" alt="재우사진" className="aboutImgae" />
                <figcaption className="mt-5 text-lg bg-[#282A35]">
                  <span className="text-2xl text-white">장재우</span>
                  <p>
                    <span className="text-[#F97AA9]">const</span> <span className="text-[#57F984]">MBTI</span> <span className="text-[#F97AA9]">=</span> <span className="text-[#F1F881]">ISFJ;</span>
                    <a target="_blank" href="https://github.com/leejh4197" className="block">
                      <span className="text-white">{"<"}</span>
                      <span className="text-teal-300">Link </span>
                      <span className="text-[#57F984]">to</span>
                      <span className="text-[#F97AA9]">=</span>
                      <span className="text-teal-300">{"{"}</span>
                      <span className="text-white">github</span>
                      <span className="text-teal-300">{"}"}</span>
                      <span className="text-white">{"/>"}</span>
                    </a>
                  </p>
                </figcaption>
              </div>
            </figure>
          </div>
          <div>
            <figure className="px-[5vw] lg:px-0 relative">
              <div className="flex flex-col">
                <img src="/iNaraChar.png" alt="곰돌이" className="aboutBearImg" />
                <img src="/YoonHo.jpg" alt="윤호사진" className="aboutImgae" />
                <figcaption className="mt-5 text-lg bg-[#282A35]">
                  <span className="text-2xl text-white">조윤호</span>
                  <p>
                    <span className="text-[#F97AA9]">let</span> <span className="text-[#57F984]">MBTI</span> <span className="text-[#F97AA9]">=</span> <span className="text-[#F1F881]">INFJ || INTJ;</span>
                    <a target="_blank" href="https://github.com/leejh4197" className="block">
                      <span className="text-white">{"<"}</span>
                      <span className="text-teal-300">Link </span>
                      <span className="text-[#57F984]">to</span>
                      <span className="text-[#F97AA9]">=</span>
                      <span className="text-teal-300">{"{"}</span>
                      <span className="text-white">github</span>
                      <span className="text-teal-300">{"}"}</span>
                      <span className="text-white">{"/>"}</span>
                    </a>
                  </p>
                </figcaption>
              </div>
            </figure>
          </div>
          <div>
            <figure className="px-[5vw] lg:px-0 relative">
              <div className="flex flex-col">
                <img src="/noticeImage.png" alt="핑크캐릭터" className="aboutPinkImg" />
                <img src="/SuMin.png" alt="수민사진" className="aboutImgae" />
                <figcaption className="mt-5 text-lg bg-[#282A35]">
                  <span className="text-2xl text-white">김수민</span>

                  <p>
                    <span className="text-[#F97AA9]">let</span> <span className="text-[#57F984]">MBTI</span> <span className="text-[#F97AA9]">=</span> <span className="text-[#F1F881]">ENFP || ESFP;</span>
                    <a target="_blank" href="https://github.com/leejh4197" className="block">
                      <span className="text-white">{"<"}</span>
                      <span className="text-teal-300">Link </span>
                      <span className="text-[#57F984]">to</span>
                      <span className="text-[#F97AA9]">=</span>
                      <span className="text-teal-300">{"{"}</span>
                      <span className="text-white">github</span>
                      <span className="text-teal-300">{"}"}</span>
                      <span className="text-white">{"/>"}</span>
                    </a>
                  </p>
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
