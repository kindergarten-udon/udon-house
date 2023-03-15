import React, { useState, useEffect } from "react";
import { BiSearch, BiMap, BiInfoCircle } from "react-icons/bi";
import KindergartenModal from "components/MapInfo/KindergartenModal";
import axios from "axios";
import { async } from "@firebase/util";

const KindergartenList = ({ kinderList, modalShow }) => {
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
        <div className="whitespace-nowrap text-sm">
          <select name="city" defaultValue="selected" className="w-[4.5rem] h-8 rounded-md px-1 lg:w-24 lg:text-base">
            <option value="selected">자치구</option>
            <option value="1">전체</option>
            {/* option 요소들 api 자치구정보 받고 map으로 뿌려주기  */}
          </select>
          <select name="type" defaultValue="selected" className="w-[6.5rem] h-8 rounded-md px-1 mx-2 lg:w-32 lg:text-base lg:mx-7">
            <option value="selected">어린이집 유형</option>
            <option value="1">전체</option>
            {/* option 요소들 api 어린이집 유형별로 받고 map으로 뿌려주기  */}
          </select>
          <input type="text" placeholder="어린이집 이름을 입력해주세요." className="w-40 h-8 placeholder:text-xs rounded-md px-2 mr-1 lg:w-48 lg:placeholder:text-sm"></input>
          <BiSearch className="inline-block cursor-pointer" />
        </div>
      </div>
      <div className="text-left">
        <ul className="">
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
