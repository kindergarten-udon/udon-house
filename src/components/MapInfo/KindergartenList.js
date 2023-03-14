import React, { useState } from "react";
import Select from "react-select";
import { BiSearch, BiMap, BiInfoCircle } from "react-icons/bi";
import KindergartenModal from "components/MapInfo/KindergartenModal";

const testData = [
  {
    name: "우동어린이집",
    address: "서울특별시 강남구 영동대로 416 케이티앤지타워 1층",
    tel: "02-123-4567",
  },
  {
    name: "우동어린이집",
    address: "서울특별시 강남구 영동대로 416 케이티앤지타워 1층",
    tel: "02-123-4567",
  },
  {
    name: "우동어린이집",
    address: "서울특별시 강남구 영동대로 416 케이티앤지타워 1층",
    tel: "02-123-4567",
  },
  {
    name: "우동어린이집",
    address: "서울특별시 강남구 영동대로 416 케이티앤지타워 1층",
    tel: "02-123-4567",
  },
  {
    name: "우동어린이집",
    address: "서울특별시 강남구 영동대로 416 케이티앤지타워 1층",
    tel: "02-123-4567",
  },
  {
    name: "우동어린이집",
    address: "서울특별시 강남구 영동대로 416 케이티앤지타워 1층",
    tel: "02-123-4567",
  },
];

const KindergartenList = ({ modalShow }) => {
  return (
    <div className="flex-0.5 lg:flex-1">
      <div className="py-7 bg-main-color">
        <img src="/kindergarten.svg" className="mx-auto" />
        <div className="flex flex-row items-center justify-center whitespace-nowrap text-sm px-2 gap-2 lg:gap-4">
          <Select className="w-24 lg:w-28 lg:text-base" placeholder="자치구" />
          {/* option 요소들 api 자치구정보 받고 map으로 뿌려주기  */}

          <Select className="w-32 lg:w-44 lg:text-base" placeholder="어린이집유형" />
          {/* option 요소들 api 어린이집 유형별로 받고 map으로 뿌려주기  */}

          <input type="text" placeholder="어린이집을 입력해주세요." className="w-44 h-9 rounded-md px-2 lg:w-48"></input>
          <BiSearch className="lg:w-5 lg:h-5 inline-block cursor-pointer" />
        </div>
      </div>
      <div className="text-left">
        <ul>
          {testData.map(({ name, address, tel }, index) => (
            <li className="relative flex flex-row items-center pt-[10px] hover:bg-gray-100 cursor-pointer" onClick={modalShow} key={index}>
              <img src="/kindergarten.svg" className="w-20 mx-2.5 lg:w-24" />
              <div>
                <div className="text-xs">
                  <h2 className="text-base font-bold lg:text-xl">{name}</h2>
                  <p className="text-gray-500 lg:text-base">{address}</p>
                  <p className="text-gray-500 lg:text-base">{`전화) : ${tel}`}</p>
                </div>
                <div className="hidden flex-row absolute top-1/2 translate-y-[-50%] right-8 gap-2 xl:flex">
                  <BiMap className="w-5 h-5 lg:w-7 lg:h-7" />
                  <BiInfoCircle className="w-5 h-5 lg:w-7 lg:h-7" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KindergartenList;
