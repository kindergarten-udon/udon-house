import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { BiSearch, BiMap } from "react-icons/bi";
import KindergartenMap from "components/MapInfo/KindergartenMap";
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

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

function createMarkerImage(markerSrc, markerSize) {
  // let markerSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  let markerImage = new kakao.maps.MarkerImage(markerSrc, markerSize);

  return markerImage;
}

/* -------------------------------------------------------------------------- */
/*                         KindergartenList Component                         */
/* -------------------------------------------------------------------------- */
const KindergartenList = ({ kinderList, setQualifiedList, modalShow, map }) => {
  const [localArr, setLocalArr] = useState(kinderList);
  const [typeArr, setTypeArr] = useState(kinderList);
  const [qualifiedArr, setQualifiedArr] = useState(kinderList);
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [info, setInfo] = useState(null);
  const textArea = useRef(false);
  const inputName = useRef(null);

  // 마커를 생성하고 지도 위에 표시하고, 마커에 mouseover, mouseout, click 이벤트를 등록하는 함수입니다
  let selectedMarker = null; // 클릭한 마커를 담을 변수
  function addMarker(position) {
    let markerSize = new kakao.maps.Size(20, 20);
    let clickarkerSize = new kakao.maps.Size(34, 45);
    let normalSrc = "/markerEllipse2.svg";
    let markerSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    // 기본 마커이미지, 오버 마커이미지, 클릭 마커이미지를 생성합니다
    var normalImage = createMarkerImage(normalSrc, markerSize),
      overImage = createMarkerImage(markerSrc, clickarkerSize),
      clickImage = createMarkerImage(markerSrc, markerSize);

    // 마커를 생성하고 이미지는 기본 마커 이미지를 사용합니다
    var marker = new kakao.maps.Marker({
      map: map,
      position: position,
      image: normalImage,
    });

    // 마커 객체에 마커아이디와 마커의 기본 이미지를 추가합니다
    marker.normalImage = normalImage;

    // 마커에 click 이벤트를 등록합니다
    // 클릭된 마커가 없고, click 마커가 클릭된 마커가 아니면
    // 마커의 이미지를 클릭 이미지로 변경합니다
    if (!selectedMarker || selectedMarker !== marker) {
      // 클릭된 마커 객체가 null이 아니면
      // 클릭된 마커의 이미지를 기본 이미지로 변경하고
      !!selectedMarker && selectedMarker.setImage(selectedMarker.normalImage);

      // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
      marker.setImage(clickImage);
    }

    // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
    selectedMarker = marker;
    // setSelected(marker);
    return marker;
    // });
  }

  /* -------------------------------------------------------------------------- */
  /*                                   Handler                                  */
  /* -------------------------------------------------------------------------- */

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

  const handleSearch = (e) => {
    const inputValue = inputName.current.value;
    console.log(inputValue);
    const arr = localArr.filter((elem) => typeArr.includes(elem));
    setQualifiedArr(arr.filter((elem) => elem.CRNAME.includes(inputValue)));
    setQualifiedList(arr.filter((elem) => elem.CRNAME.includes(inputValue)));
    // e.preventDefault();
    // let index = e.currentTarget.id;
    // const item = qualifiedArr[index];
    // const { CRNAME, LA, LO } = item;
    // console.log("CRNAME", CRNAME);
  };

  useDidMountEffect(() => {
    let points = [];
    qualifiedArr.map(({ CRNAME, LA, LO }) => {
      if (LA !== "37.566470" && LO !== "126.977963" && LA.length !== 0 && CRNAME !== "구립 내일어린이집") points.push(new kakao.maps.LatLng(LA, LO));
      setInfo(`<div style="margin:5px 35px; white-space: nowrap; color:orange">${CRNAME}</div>`);
    });
    // console.log(points);
    if (points.length === 0) {
      return;
    }

    var bounds = new kakao.maps.LatLngBounds();
    // var i, marker;
    setMarkers([]);
    const handleMarker = (marker) => {
      setMarkers((prevList) => [...prevList, marker]);
    };
    // console.log(points[10]);

    for (let i = 0; i < points.length; i++) {
      // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
      let marker = addMarker(points[i]);
      // marker.setMap(map);
      handleMarker(marker);
      // LatLngBounds 객체에 좌표를 추가합니다
      // kakao.maps.event.addListener(marker, "click", function () {
      //   infowindow.open(map, marker);
      // });
      bounds.extend(points[i]);
    }

    console.log(markers[0]);

    map.setBounds(bounds);

    let iwRemoveable = true;

    // let infowindow = new kakao.maps.InfoWindow({
    //   content: infoContent,
    //   removable: iwRemoveable,
    // });
  }, [qualifiedArr]);

  function initMarkers(map) {
    // console.log("마커 길이 =  ", markers.length);
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  useEffect(() => {
    console.log("마커스 = ", markers);
    initMarkers(map);
    // if (markers !== null || markers.length !== 0) initMarkers(null);
    if (markers.length !== 0) {
      console.log("여기는 실행이 안되니?");
      // setMarkers([]);
      // initMarkers(null);
    }
    // } else {
    //   console.log("이번엔 너가?");
    //   initMarkers(map);
    // }
  }, [markers]);
  // setMarkers([]);

  initMarkers(null);

  /* -------------------------------------------------------------------------- */
  /*                               handleMapClick                               */
  /* -------------------------------------------------------------------------- */
  const handleMapClick = (e) => {
    e.preventDefault();
    let index = e.currentTarget.id;
    const item = qualifiedArr[index];
    const { CRNAME, LA, LO } = item;
    console.log("이부분 실행");
    initMarkers(null);
    // console.log(e.currentTarget);
    // let target = e.currentTarget;

    if (LA.length <= 0) {
      alert("해당 어린이집은 위치 정보가 없습니다");
      return;
    }

    var points = [new kakao.maps.LatLng(LA, LO)];
    // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
    var bounds = new kakao.maps.LatLngBounds();

    // var i, marker;
    for (let i = 0; i < points.length; i++) {
      // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다

      // // let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
      // let imageSize = new kakao.maps.Size(30, 45);
      // // let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // marker = new kakao.maps.Marker({ position: points[i], image: markerImage });
      let marker = addMarker(points[i]);
      // marker.setMap(map);

      // LatLngBounds 객체에 좌표를 추가합니다
      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
      bounds.extend(points[i]);
    }

    // function setBounds() {
    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
    map.setBounds(bounds);
    // }

    let infoContent = `<div style="margin:5px 35px; white-space: nowrap; color:orange">${CRNAME}</div>`;
    let iwRemoveable = true;

    let infowindow = new kakao.maps.InfoWindow({
      content: infoContent,
      removable: iwRemoveable,
    });
  };

  return (
    <div className="flex-1 min-w-[27rem] lg:w-2/5 overflow-scroll">
      <div className="py-7 bg-main-color">
        <img src="/kindergarten.svg" className="mx-auto" />
        <div className="flex flex-row items-center justify-center whitespace-nowrap mx-2 text-sm gap-2 lg:gap-3">
          <Select className="min-w-[5rem] lg:w-32 lg:text-base" maxMenuHeight={220} options={locationOptions} onChange={handleLocationChange} placeholder="자치구" />
          <Select className="min-w-[7rem] lg:w-40 lg:text-base" maxMenuHeight={220} options={typeOptions} onChange={handleTypeChange} placeholder="어린이집유형" />
          <input type="text" placeholder="어린이집을 입력해주세요." className="w-44 h-9 rounded-md px-2 lg:w-48" ref={inputName} onKeyPress={onSubmitSearchEnter}></input>
          <button type="button">
            <BiSearch className="lg:w-5 lg:h-5 cursor-pointer" onClick={handleSearch} />
          </button>
        </div>
      </div>
      <div className="text-left" ref={textArea}>
        {qualifiedArr.length <= 0 && (
          <div className="flex flex-col items-center text-lg mt-[80px]">
            <img src="/bird.svg" className="animate-bounce w-10 h-10" />
            검색 결과가 없습니다
          </div>
        )}
        <ul className="lists">
          {qualifiedArr.map(({ CRNAME, CRADDR, CRTELNO }, index) => (
            <li className="kinList relative flex flex-row items-center justify-between pt-[10px] hover:bg-gray-100 cursor-pointer" onClick={modalShow} id={index} key={index}>
              <div className="min-w-[24rem] flex flex-row items-center justify-center">
                <img src="/kindergarten.svg" className="w-20 mx-2 lg:w-24" />
                <div className="w-96 lg:w-[27rem] text-xs truncate">
                  <h2 className="truncate text-base font-bold xl:text-xl">{CRNAME}</h2>
                  <p className="truncate text-gray-500 xl:text-base">{CRADDR}</p>
                  <p className="text-gray-500 xl:text-base">{`전화) : ${CRTELNO ? CRTELNO : "제공되지 않습니다"}`}</p>
                </div>
              </div>
              <button type="button" className="p-2 hidden md:block hover:text-orange-400">
                <BiMap className="w-6 h-6 lg:w-8 lg:h-8" id={index} onClick={handleMapClick} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KindergartenList;
