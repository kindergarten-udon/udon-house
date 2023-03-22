import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const KindergartemModal = ({ kinderList, index, qualifiedList, setModalClose }) => {
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

  const item = qualifiedList === null ? kinderList[index] : qualifiedList[index];
  const { CRNAME, CRTELNO, CRTYPENAME, NRTRROOMCNT, CHCRTESCNT, CRCAPAT, CRCHCNT, CRCARGBNAME, CCTVINSTLCNT, CRADDR, ZIPCODE, CRHOME } = item;

  return (
    <div className="fixed w-screen h-screen top-0 bottom-0 bg-black bg-opacity-30 z-30" ref={modalRef}>
      <div className="relative max-w-[35rem] h-[35rem] modalPosition text-lg text-left p-4 rounded-xl border-4 border-main-color bg-white z-50 lg:max-w-[45rem] lg:h-[40rem] lg:text-xl">
        <div className="flex flex-row h-[20%] items-center border-b-2 border-main-color py-2 gap-3">
          <button type="button" className="absolute top-1 right-1 p-3" onClick={modalClose}>
            <GrClose className="w-5 h-5" />
          </button>
          <img src="/bird.svg" className="w-14 h-14" />
          <div>
            <h2 className="text-2xl font-extrabold mb-2 text-orange-400 truncate lg:text-3xl">{CRNAME}</h2>
            <p className="text-lg lg:text-xl truncate">{`전화) ${CRTELNO || "제공되지 않습니다."}`}</p>
          </div>
        </div>
        <div className="text-lg leading-10 lg:text-xl lg:leading-10">
          <ul className=" text-gray-600 py-3 ">
            <li className="listStyles">{`유형 : ${CRTYPENAME}`}</li>
            <li className="listStyles">{`보육실수 : ${NRTRROOMCNT}`}</li>
            <li className="listStyles">{`교직원수 : ${CHCRTESCNT}명`}</li>
            <li className="listStyles">{`정원/현원 : ${CRCAPAT}명 / ${CRCHCNT}명`}</li>
            <li className="listStyles">{`통학차량 : ${CRCARGBNAME === "운영" ? CRCARGBNAME : "미운영"}`}</li>
            <li className="listStyles">{`CCTV 설치수 : ${CCTVINSTLCNT}`}</li>
            <li className="border border-transparent border-b-gray-300" key={index}>{`주소 : ${CRADDR} (${ZIPCODE})`}</li>
            <li className="truncate">
              홈페이지 :
              <Link
                to={CRHOME}
                onClick={(event) => {
                  if (CRHOME.length <= 0) event.preventDefault();
                }}
                className="text-orange-400 hover:text-2xl"
                target="_blank"
              >
                {` ${CRHOME || "제공되지 않습니다."}`}
              </Link>
            </li>
          </ul>
        </div>
        <img src="/characters.svg" className="absolute bottom-0 right-0" />
      </div>
    </div>
  );
};

export default KindergartemModal;
