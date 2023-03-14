import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "components/Nav/Nav";
const Footer = () => {
  return (
    <>
      <footer className="w-full lg:h-[clamp(350px,30vw,476px)] h-[535px] lg:text-[clamp(12px,1.3vw,16px)] text-base bg-bg-gray-color">
        {/* <div className="lg:h-[7%] h-[32px] bg-white rounded-b-[30px]"></div> */}
        <div className="w-full h-[93%] lg:p-[clamp(32px,4%,60px)] px-[32px] py-[48px]">
          <div className="flex lg:flex-row lg:justify-between flex-col">
            <Nav className="text-left leading-[30px] font-medium" />
            <div className="flex gap-3">
              <span className="mt-[5px]">디자인출처 : </span>
              <Link to="https://i-nara.co.kr/" target="_blank">
                <img src="/iNaraLogo.svg" alt="아이들나라 로고" className="h-[30px]" />
              </Link>
            </div>
          </div>
          <div className="footer-info__wrapper lg:mt-[clamp(45px,4vw,64px)] mt-[55px]">
            <div className="footer-info text-left">
              <div className="flex gap-5">
                <span>이용약관</span>
                <b>개인정보처리방침</b>
              </div>
              <div className="lg:flex lg:gap-3 lg:mt-[clamp(35px,3.5vw,64px)] mt-[20px]">
                <p>(주)우동집</p>
                <span className="lg:inline-block hidden">|</span>
                <p>대표이사 우동</p>
                <span className="lg:inline-block hidden">|</span>
                <p>주소 : 서울특별시</p>
                <span className="lg:inline-block hidden">|</span>
                <p>사업자등록번호 : 123-12-12345</p>
              </div>
              <div className="flex lg:flex-row lg:justify-between flex-col lg:mt-3 mt-[30px]">
                <a href="tel:1234-1234">고객센터 1234-1234</a>
                <span>Copyright &copy; Udon House. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
