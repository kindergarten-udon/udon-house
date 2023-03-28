import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "components/Nav/Nav";
const Footer = () => {
  const location = useLocation();
  const path = location.pathname;
  const arr = ["/aboutus", "/community", "/writeCommunity", "/mypage"];

  return (
    <>
      <footer className={`${arr.includes(path) ? "lg:h-[clamp(350px,30vw,476px)] h-[535px]" : "hidden h-0"} w-full lg:text-[clamp(12px,1.3vw,16px)] text-sm bg-bg-gray-color box-border`}>
        <div className="w-full h-full lg:p-[clamp(32px,4.5%,80px)] px-[32px] py-[48px] box-border">
          <div className="flex lg:flex-row lg:justify-between flex-col">
            <Nav className="text-left leading-[30px] font-medium" />
            <div className="flex gap-3">
              <span className="mt-[5px]">디자인출처 : </span>
              <Link to="https://i-nara.co.kr/" target="_blank">
                <img src="/util/iNaraLogo.svg" alt="아이들나라 로고" className="h-[30px]" />
              </Link>
            </div>
          </div>
          <div className="footer-info__wrapper lg:mt-[clamp(15px,5%,80px)] mt-[55px]">
            <div className="footer-info text-left">
              <div className="flex gap-5">
                <Link to="https://www.i-nara.co.kr/terms" target="_blank">
                  <span>이용약관</span>
                </Link>
                <Link to="https://www.i-nara.co.kr/terms/privacy" target="_blank">
                  <b>개인정보처리방침</b>
                </Link>
              </div>
              <div className="lg:flex lg:gap-3 lg:mt-[clamp(35px,4%,64px)] mt-[20px]">
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
