import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { BiSearch, BiMap } from "react-icons/bi";
import KindergartenModal from "components/MapInfo/KindergartenModal";
import axios from "axios";
import { async } from "@firebase/util";
const { kakao } = window;

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

const typeOptions = [
  { value: "전체", label: "전체" },
  { value: "국공립", label: "국공립" },
  { value: "사회복지법인", label: "사회복지법인" },
  { value: "법인・단체", label: "법인・단체" },
  { value: "민간", label: "민간" },
  { value: "가정", label: "가정" },
  { value: "협동", label: "협동" },
  { value: "직장", label: "직장" },
];

const KindergartenList = ({ kinderList, modalShow }) => {
  const [localArr, setLocalArr] = useState(kinderList);
  const [typeArr, setTypeArr] = useState(kinderList);
  const [qualifiedArr, setQualifiedArr] = useState(kinderList);
  const inputName = useRef(null);

  const handleLocationChange = (selectedOption) => {
    if (selectedOption.value === "전체") {
      setLocalArr(kinderList);
      return;
    }
    setLocalArr(kinderList.filter((elem) => elem.SIGUNNAME === selectedOption.value));
  };

  const handleTypeChange = (selectedOption) => {
    if (selectedOption.value === "전체") {
      setTypeArr(kinderList);
      return;
    }

    setTypeArr(kinderList.filter((elem) => elem.CRTYPENAME === selectedOption.value));
  };

  const onSubmitSearchEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const inputValue = inputName.current.value;

    const arr = localArr.filter((elem) => typeArr.includes(elem));
    setQualifiedArr(arr.filter((elem) => elem.CRNAME.includes(inputValue)));
  };

  const handleMapClick = (e) => {
    e.preventDefault();
    let index = e.currentTarget.id;
    const item = qualifiedArr[index];
    const { CRNAME, LA, LO } = item;

    if (LA.length <= 0) {
      alert("해당 어린이집은 위치 정보가 없습니다");
      return;
    }

    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(LA, LO),
      level: 2,
    };
    let map = new kakao.maps.Map(container, options);

    let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    let imageSize = new kakao.maps.Size(24, 35);
    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    let infoContent = `<div style="margin:5px 35px; white-space: nowrap; color:orange">${CRNAME}</div>`;
    let infoPosition = new kakao.maps.LatLng(LA, LO);
    let iwRemoveable = true;

    let infowindow = new kakao.maps.InfoWindow({
      position: infoPosition,
      content: infoContent,
      removable: iwRemoveable,
    });

    let marker = new kakao.maps.Marker({
      map: map,
      position: infoPosition,
      // title: CRNAME,
      image: markerImage,
    });

    kakao.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  };

  return (
    <div className="min-w-[27rem] lg:w-2/5 overflow-scroll">
      <div className="py-7 bg-main-color">
        <img src="/kindergarten.svg" className="mx-auto" />
        <div className="flex flex-row items-center justify-center whitespace-nowrap text-sm px-2 gap-2 lg:gap-4">
          <Select className="min-w-[5rem] lg:w-32 lg:text-base" maxMenuHeight={220} options={locationOptions} onChange={handleLocationChange} placeholder="자치구" />
          <Select className="min-w-[7rem] lg:w-40 lg:text-base" maxMenuHeight={220} options={typeOptions} onChange={handleTypeChange} placeholder="어린이집유형" />
          <input type="text" placeholder="어린이집을 입력해주세요." className="w-44 h-9 rounded-md px-2 lg:w-48" ref={inputName} onKeyPress={onSubmitSearchEnter}></input>
          <BiSearch className="lg:w-5 lg:h-5 cursor-pointer" onClick={handleSearch} />
        </div>
      </div>
      <div className="text-left">
        <ul className="lists">
          {qualifiedArr.map(({ CRNAME, CRADDR, CRTELNO }, index) => (
            <li className="kinList relative flex flex-row items-center justify-between pt-[10px] hover:bg-gray-100 cursor-pointer" onClick={modalShow} id={index} key={index}>
              <div className="flex flex-row items-center">
                <img src="/kindergarten.svg" className="w-20 mx-2 lg:w-24" />
                <div className="text-xs truncate">
                  <h2 className="truncate text-base font-bold lg:text-xl">{CRNAME}</h2>
                  <p className="truncate text-gray-500 lg:text-base">{CRADDR}</p>
                  <p className="text-gray-500 lg:text-base">{`전화) : ${CRTELNO ? CRTELNO : "제공되지 않습니다"}`}</p>
                </div>
              </div>
              <button type="button" className="mx-3 ">
                <BiMap className="w-5 h-5 lg:w-8 lg:h-8" id={index} onClick={handleMapClick} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KindergartenList;
