import React, { useState } from "react";
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

const KindergartenList = ({ setModal }) => {
  return (
    <div className="flex-1">
      <div className="py-7 bg-main-color">
        <img src="/kindergarten.svg" className="mx-auto" />
        <select name="city" defaultValue="selected" className="w-24 h-8 rounded-md px-1">
          <option value="selected">자치구</option>
          <option value="1">전체</option>
          {/* option 요소들 api 자치구정보 받고 map으로 뿌려주기  */}
        </select>
        <select name="type" defaultValue="selected" className="w-32 h-8 rounded-md px-1 mx-7">
          <option value="selected">어린이집 유형</option>
          <option value="1">전체</option>
          {/* option 요소들 api 어린이집 유형별로 받고 map으로 뿌려주기  */}
        </select>
        <input type="text" placeholder="어린이집 이름을 입력해주세요." className="w-48 h-8 leading-8 placeholder:text-sm rounded-md px-2 mr-1"></input>
        <BiSearch className="inline-block cursor-pointer" />
      </div>
      <div className="text-left">
        <ul>
          {testData.map(({ name, address, tel }, index) => (
            <li className="relative flex flex-row items-center pt-[10px] hover:bg-gray-100 cursor-pointer" onClick={() => setModal(true)} key={index}>
              <img src="/kindergarten.svg" className="mx-2.5" />
              <div>
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-500">{address}</p>
                <p className="text-gray-500">{`전화) : ${tel}`}</p>
                <div className="flex flex-row absolute top-1/2 translate-y-[-50%] right-8 gap-2">
                  <BiMap className="w-7 h-7" />
                  <BiInfoCircle className="w-7 h-7" />
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
