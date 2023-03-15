import React, { useState, useEffect } from "react";
import Select from "react-select";
import { BiSearch, BiMap, BiInfoCircle } from "react-icons/bi";
import KindergartenModal from "components/MapInfo/KindergartenModal";
import axios from "axios";
import { async } from "@firebase/util";

const KindergartenList = ({ kinderList, modalShow }) => {
  const locationOptions = [
    { value: "전체", label: "전체" },
    { value: "강남구", label: "강남구" },
    { value: "강동구", label: "강동구" },
    { value: "강북구", label: "강북구" },
    { value: "강서구", label: "강서구" },
    { value: "관악구", label: "관악구" },
    { value: "광진구", label: "광진구" },
    { value: "구로구", label: "구로구" },
    { value: "금천구", label: "금천구" },
    { value: "노원구", label: "노원구" },
    { value: "도봉구", label: "도봉구" },
    { value: "동대문구", label: "동대문구" },
    { value: "동작구", label: "동작구" },
    { value: "마포구", label: "마포구" },
    { value: "서대문구", label: "서대문구" },
    { value: "서초구", label: "서초구" },
    { value: "성동구", label: "성동구" },
    { value: "성북구", label: "성북구" },
    { value: "송파구", label: "송파구" },
    { value: "양천구", label: "양천구" },
    { value: "영등포구", label: "영등포구" },
    { value: "용산구", label: "용산구" },
    { value: "은평구", label: "은평구" },
    { value: "종로구", label: "종로구" },
    { value: "중구", label: "중구" },
    { value: "중랑구", label: "중랑구" },
  ];
  const tyepOptions = [
    { value: "전체", label: "전체" },
    { value: "국공립", label: "국공립" },
    { value: "사회복지법인", label: "사회복지법인" },
    { value: "법인・단체", label: "법인・단체" },
    { value: "민간", label: "민간" },
    { value: "가정", label: "가정" },
    { value: "협동", label: "협동" },
    { value: "직장", label: "직장" },
  ];

  // const [kinderList, setKinderList] = useState([]);

  // const getData = async () => {
  //   const url = `http://openapi.seoul.go.kr:8088/4e7269425a6c656534354f51426a71/json/ChildCareInfo/1/10/`;
  //   const response = await axios.get(url);
  //   setKinderList(response.data.ChildCareInfo.row);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  console.log("data = ", kinderList[0]);
  return (
    <div className="flex-0.5 lg:flex-1  overflow-scroll">
      <div className="py-7 bg-main-color">
        <img src="/kindergarten.svg" className="mx-auto" />
        <div className="flex flex-row items-center justify-center whitespace-nowrap text-sm px-2 gap-2 lg:gap-4">
          <Select className="w-[7.2rem] lg:w-32 lg:text-base" maxMenuHeight={220} options={locationOptions} placeholder="자치구" />
          <Select className="w-36 lg:w-40 lg:text-base" maxMenuHeight={220} options={tyepOptions} placeholder="어린이집유형" />
          <input type="text" placeholder="어린이집을 입력해주세요." className="w-44 h-9 rounded-md px-2 lg:w-48"></input>
          <BiSearch className="lg:w-5 lg:h-5 inline-block cursor-pointer" />
        </div>
      </div>
      <div className="text-left">
        <ul>
          {kinderList.map(({ CRNAME, CRADDR, CRTELNO }, index) => (
            <li className="relative flex flex-row items-center pt-[10px] hover:bg-gray-100 cursor-pointer" onClick={modalShow} key={index}>
              <img src="/kindergarten.svg" className="w-20 mx-2.5 lg:w-24" />
              <div>
                <div className="text-xs">
                  <h2 className="text-base font-bold lg:text-xl">{CRNAME}</h2>
                  <p className="text-gray-500 lg:text-base">{CRADDR}</p>
                  <p className="text-gray-500 lg:text-base">{`전화) : ${CRTELNO}`}</p>
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
