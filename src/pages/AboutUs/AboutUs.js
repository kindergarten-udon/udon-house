import React, { useEffect } from "react";

const memberInfo = [
  {
    name: "이주형",
    variable: "const",
    MBTI: "INFP",
    img: "/aboutus/JuHyeong.jpg",
    character: "/aboutus/iNaraChar.png",
    imgClass: "aboutBearImg",
    github: "https://github.com/leejh4197",
  },
  {
    name: "유하리",
    variable: "let",
    MBTI: "INFP || INFJ",
    img: "/aboutus/hari.jpeg",
    character: "/main/noticeImage.png",
    imgClass: "aboutPinkImg",
    github: "https://github.com/YUhari0901",
  },
  {
    name: "장재우",
    variable: "const",
    MBTI: "ISFJ",
    img: "/aboutus/JaeWoo.jpeg",
    character: "/aboutus/iNaraChar.png",
    imgClass: "aboutBearImg",
    github: "https://github.com/oweaj",
  },
  {
    name: "조윤호",
    variable: "let",
    MBTI: "INFJ || INTJ",
    img: "/aboutus/YoonHo.jpg",
    character: "/aboutus/iNaraChar.png",
    imgClass: "aboutBearImg",
    github: "https://github.com/dydgh142",
  },
  {
    name: "김수민",
    variable: "let",
    MBTI: "ENFP || ESFP",
    img: "/aboutus/SuMin.png",
    character: "/main/noticeImage.png",
    imgClass: "aboutPinkImg",
    github: "https://github.com/sumin-Kim-00",
  },
];

const LinkTo = () => {
  return (
    <>
      <span className="text-white " aria-hidden="true">
        {"<"}
      </span>
      <span className="text-teal-300 " aria-hidden="true">
        Link{" "}
      </span>
      <span className="text-[#57F984] " aria-hidden="true">
        to
      </span>
      <span className="text-[#F97AA9] " aria-hidden="true">
        =
      </span>
      <span className="text-teal-300 " aria-hidden="true">
        {"{"}
      </span>
      <span className="text-white " aria-hidden="true">
        github
      </span>
      <span className="text-teal-300 " aria-hidden="true">
        {"}"}
      </span>
      <span className="text-white " aria-hidden="true">
        {"/>"}
      </span>
    </>
  );
};

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="wrapper lg:py-[150px] py-[100px] w-full ">
      <span className="text-[40px] px-8 py-2 font-bold pt-16 inline-block border-b-4 border-black">About Us</span>
      <div className="w-80% py-[80px] px-[5vw] gap-[4vw] lg:flex lg:gap-[4.5vw] lg:justify-center md:grid md:grid-cols-2 md:gap-x-10 grid grid-cols-1 place-items-center">
        {memberInfo.map(({ name, variable, MBTI, img, character, imgClass, github }, index) => (
          <div key={index}>
            <figure className="px-[5vw] lg:px-0 relative">
              <div className="flex flex-col ">
                <img src={character} alt="" className={imgClass} />
                <img src={img} alt={name} className="aboutImgae" />
                <figcaption className="mt-5 text-base lg:text-lg block bg-[#282A35] border-transparent rounded-2xl py-2">
                  <span tabIndex={0} className="text-2xl text-white" aria-hidden="true">
                    {name}
                  </span>
                  <p>
                    <span className="text-[#F97AA9]" aria-hidden="true">
                      {variable}
                    </span>{" "}
                    <span className="text-[#57F984]">MBTI</span>{" "}
                    <span className="text-[#F97AA9]" aria-hidden="true">
                      =
                    </span>{" "}
                    <span className="text-[#F1F881]">{MBTI}</span>
                    <a target="_blank" href={github} className="block">
                      <h3 className="sr-only">{name}의 깃허브로 이동</h3>
                      <LinkTo />
                    </a>
                  </p>
                </figcaption>
              </div>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
