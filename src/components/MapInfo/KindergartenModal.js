import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const testModalData = [
  {
    crname: "우동어린이집",
    crtelno: "02-123-4567",
    crtypename: "국공립",
    nrtrroomcnt: "4",
    chcrtescnt: 7,
    crcapat: 49,
    crchcnt: 10,
    crcargbname: false,
    cctvinstlcnt: 8,
    craddr: "서울특별시 강남구 영동대로 416 케이티앤지타워 1층",
    zipcode: "06176",
    crhome: "http://hansol-fastfive.kidsnote.ac",
  },
];

const KindergartemModal = ({ setModalClose }) => {
  const modalRef = useRef(null);

  const modalClose = () => {
    setModalClose(false);
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  });

  const clickOutside = (e) => {
    if (modalRef.current === e.target) {
      modalClose();
    }
  };

  return (
    <div className="fixed w-screen h-screen bg-black bg-opacity-30 z-[999]" ref={modalRef}>
      {testModalData.map(({ crname, crtelno, crtypename, nrtrroomcnt, chcrtescnt, crcapat, crchcnt, crcargbname, cctvinstlcnt, craddr, zipcode, crhome }, index) => (
        <div className="relative max-w-[35rem] h-[35rem] translateCenter text-lg text-left p-4 rounded-xl border-4 border-main-color bg-white lg:max-w-[45rem] lg:h-[40rem] lg:text-xl" key={index}>
          <div className="flex flex-row h-[20%] items-center border-b-2 border-main-color py-2 gap-2">
            <button className="absolute top-1 right-1 p-3" onClick={modalClose}>
              <GrClose className="w-5 h-5" />
            </button>
            <img src="/bird.svg" />
            <h2 className="text-3xl font-extrabold mr-2 text-orange-400 truncate lg:text-4xl">{crname}</h2>
            <span className="truncate">{`전화) ${crtelno}`}</span>
          </div>
          <div className="text-lg leading-10 lg:text-xl lg:leading-10">
            <ul className=" text-gray-600 py-3 ">
              <li className="listStyles">{`유형 : ${crtypename}`}</li>
              <li className="listStyles">{`보육실수 : ${nrtrroomcnt}`}</li>
              <li className="listStyles">{`교직원수 : ${chcrtescnt}명`}</li>
              <li className="listStyles">{`정원/현원 : ${crcapat}명 / ${crchcnt}명`}</li>
              <li className="listStyles">{`통학차량 : ${crcargbname ? "운영" : "미운영"}`}</li>
              <li className="listStyles">{`CCTV 설치수 : ${cctvinstlcnt}`}</li>
              <li className="listStyles">{`주소 :  ${craddr} (${zipcode})`}</li>
              <li className="truncate">
                홈페이지 :{" "}
                <Link to={crhome} className="text-green-500 hover:text-gray-600" target="_blank">
                  {crhome}
                </Link>
              </li>
            </ul>
          </div>
          <img src="/characters.svg" className="absolute bottom-0 right-0" />
        </div>
      ))}
    </div>
  );
};

export default KindergartemModal;
