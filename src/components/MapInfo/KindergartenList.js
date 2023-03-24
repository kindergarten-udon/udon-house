import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { BiSearch, BiMap } from "react-icons/bi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import KindergartenMap from "components/MapInfo/KindergartenMap";
import axios from "axios";
import { async } from "@firebase/util";
import ReactPaginate from "react-paginate";
import "components/Community/boardListItem.css";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { dbService } from "util/fbase";
import { uid } from "Atom/atom";
import { useRecoilState } from "recoil";
import { deleteDoc, doc } from "@firebase/firestore";

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
  let markerImage = new kakao.maps.MarkerImage(markerSrc, markerSize);

  return markerImage;
}

/* -------------------------------------------------------------------------- */
/*                         KindergartenList Component                         */
/* -------------------------------------------------------------------------- */
const KindergartenList = ({ kinderList, setQualifiedList, modalShow, map, userId, favoriteData }) => {
  const [localArr, setLocalArr] = useState(kinderList);
  const [typeArr, setTypeArr] = useState(kinderList);
  const [qualifiedArr, setQualifiedArr] = useState(kinderList);
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [info, setInfo] = useState(null);
  // const [favoriteData, setFavoriteData] = useState([]);
  const inputName = useRef(null);
  const starName = useRef(null);
  const [testUid, setTestUid] = useRecoilState(uid);
  const [isActive, setIsActive] = useState(null);
  const pageScrollInit = useRef(null);

  const perPage = 100;
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * perPage;
  const pagedContents = qualifiedArr.slice(offset, offset + perPage);

  useEffect(() => {
    setQualifiedList(pagedContents);
  }, [pagedContents]);

  let newStarArr = Array(pagedContents.length).fill(false);
  const [starClickedArr, setStarClickedArr] = useState(newStarArr);

  let selectedMarker = null;

  function addMarker(position, normalSrc) {
    let markerSize = "";
    if (normalSrc === "/markerEllipse3.svg") markerSize = new kakao.maps.Size(18, 18);
    else markerSize = new kakao.maps.Size(28, 43);
    let clickmarkerSize = new kakao.maps.Size(28, 43);
    let markerSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    let normalImage = createMarkerImage(normalSrc, markerSize),
      overImage = createMarkerImage(markerSrc, clickmarkerSize),
      clickImage = createMarkerImage(markerSrc, clickmarkerSize);

    let marker = new kakao.maps.Marker({
      map: map,
      position: position,
      image: normalImage,
    });

    marker.normalImage = normalImage;

    if (!selectedMarker || selectedMarker !== marker) {
      !!selectedMarker && selectedMarker.setImage(selectedMarker.normalImage);

      marker.setImage(clickImage);
    }

    selectedMarker = marker;
    setSelected(marker);

    return marker;
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
    if (selected !== null) {
      selected.setMap(null);
      setPaged(pagedArr);
    }
    setStarClickedArr(newStarArr);

    const inputValue = inputName.current.value;
    const arr = localArr.filter((elem) => typeArr.includes(elem));
    setQualifiedArr(arr.filter((elem) => elem.CRNAME.includes(inputValue)));
    setQualifiedList(arr.filter((elem) => elem.CRNAME.includes(inputValue)));
  };

  useDidMountEffect(() => {
    let points = [];
    let nameArr = [];
    qualifiedArr.map(({ CRNAME, LA, LO, STCODE }) => {
      if (LA !== "37.566470" && LO !== "126.977963" && LA.length !== 0) {
        points.push(new kakao.maps.LatLng(LA, LO));
        nameArr.push(CRNAME);
      }
      setInfo(`<div style="margin:5px 35px; white-space: nowrap; color:orange">${CRNAME}</div>`);
    });
    if (points.length === 0) {
      return;
    }
    let bounds = new kakao.maps.LatLngBounds();

    setMarkers([]);

    const handleMarker = (marker) => {
      setMarkers((prevList) => [...prevList, marker]);
    };

    for (let i = 0; i < points.length; i++) {
      let marker = addMarker(points[i], "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png");
      handleMarker(marker);
      bounds.extend(points[i]);

      let infoContent = `<div style="margin:5px 35px; white-space: nowrap; color:orange">${nameArr[i]}</div>`;
      let iwRemoveable = true;
      let infowindow = new kakao.maps.InfoWindow({
        content: infoContent,
        removable: iwRemoveable,
      });
      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    }

    map.setBounds(bounds);
  }, [qualifiedArr]);

  function initMarkers(map) {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  useEffect(() => {
    initMarkers(map);
  }, [markers]);

  initMarkers(null);

  /* -------------------------------------------------------------------------- */
  /*                               handleMapClick                               */
  /* -------------------------------------------------------------------------- */
  const handleMapClick = (e) => {
    if (selected !== null) {
      selected.setMap(null);
    }
    e.preventDefault();

    let li = e.currentTarget.parentNode.parentNode;
    let id = li.id;
    const newPagedArr = Array(pagedContents.length).fill(false);
    newPagedArr[id] = true;
    setPaged(newPagedArr);

    let index = e.currentTarget.id;
    const item = qualifiedArr[index];
    const { CRNAME, LA, LO } = item;
    initMarkers(null);

    if (LA.length <= 0) {
      alert("해당 어린이집은 위치 정보가 없습니다");
      return;
    }

    let points = [new kakao.maps.LatLng(LA, LO)];
    let bounds = new kakao.maps.LatLngBounds();

    for (let i = 0; i < points.length; i++) {
      let marker = addMarker(points[i], "/markerEllipse3.svg");

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
      bounds.extend(points[i]);
    }

    map.setBounds(bounds);

    let infoContent = `<div style="margin:5px 35px; white-space:nowrap; color:orange">${CRNAME}</div>`;
    let iwRemoveable = true;

    let infowindow = new kakao.maps.InfoWindow({
      content: infoContent,
      removable: iwRemoveable,
    });
  };

  const handleStar = (e) => {
    let li = e.currentTarget.parentNode.parentNode;
    let id = li.id;

    starClickedArr[id] = !starClickedArr[id];
    setStarClickedArr([...starClickedArr]);

    const { CRNAME, CRTELNO, CRADDR, STCODE } = pagedContents[id];

    let favoriteDataId = "";
    let favoriteDataActive = null;

    //forEach, find, filter
    favoriteData.map(({ id, title }) => {
      if (title === CRNAME) favoriteDataId = id;
    });

    const contentRef = collection(dbService, "favorite");
    if (starClickedArr[id] === true) {
      addDoc(contentRef, {
        active: true,
        kindergartenCode: STCODE,
        title: CRNAME,
        tel: CRTELNO,
        address: CRADDR,
        creatorId: testUid,
      });
    } else {
      const removeDoc = doc(collection(dbService, "favorite"), favoriteDataId);
      deleteDoc(removeDoc);
    }
  };

  // console.log(favoriteData);
  // useEffect(() => {
  //   // console.log("onSnapshot");
  //   onSnapshot(collection(dbService, "favorite"), (snapshot) => {
  //     const contentArray = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     const myFavorite = contentArray.filter((elem) => {
  //       return elem.creatorId === testUid;
  //     });
  //     setFavoriteData(myFavorite);
  //   });
  // }, []);

  // console.log(qualifiedArr);
  useEffect(() => {
    // console.log("paged");
    pagedContents.map(({ STCODE }, index) => {
      favoriteData.map(({ id, kindergartenCode }) => {
        if (kindergartenCode === STCODE) {
          starClickedArr[index] = !starClickedArr[index];
          setStarClickedArr([...starClickedArr]);
        }
      });
    });
    // console.log("qualifiedArr = ", qualifiedArr);
    // console.log("pagedContents = ", pagedContents);
  }, [currentPage, qualifiedArr]);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
    setPaged(pagedArr);
    setStarClickedArr(newStarArr);
  };

  useEffect(() => {
    pageScrollInit.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  let pagedArr = Array(pagedContents.length).fill(false);
  const [paged, setPaged] = useState(pagedArr);

  return (
    <div className="relative flex flex-col flex-1 min-w-[27rem]">
      <div className="py-5 bg-main-color">
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
      <div className="text-left overflow-x-hidden mb-16" ref={pageScrollInit}>
        {pagedContents.length <= 0 && (
          <div className="flex flex-col items-center text-lg mt-[80px]">
            <img src="/bird.svg" className="animate-bounce w-10 h-10" />
            검색 결과가 없습니다
          </div>
        )}
        <ul>
          {pagedContents.map(({ CRNAME, CRADDR, CRTELNO }, index) => (
            <li className={`${paged[index] === true ? "bg-light-yellow-color" : "hover:bg-gray-100"} relative flex flex-row items-center justify-between pt-[10px] cursor-pointer`} onClick={modalShow} id={index} key={index}>
              <div className="min-w-[21rem] flex flex-row items-center justify-center">
                <img src="/childrens.svg" className="w-20 mx-2 lg:w-24" />
                <div className="w-96 lg:w-[27rem] text-xs truncate">
                  <h2 className="truncate text-base font-bold lg:text-xl" ref={starName}>
                    {CRNAME}
                  </h2>
                  <p className="truncate text-gray-500 lg:text-base">{CRADDR}</p>
                  <p className="text-gray-500 lg:text-base">{`전화) : ${CRTELNO || "제공되지 않습니다"}`}</p>
                </div>
              </div>
              <button type="button" className="mr-2 p-2 md:p-1 hover:text-yellow-400">
                {starClickedArr[index] === true ? <AiFillStar className="iconStyle text-yellow-400" id={index} onClick={handleStar} /> : <AiOutlineStar className="iconStyle" id={index} onClick={handleStar} />}
              </button>
              <button type="button" className="pr-1 hidden md:block hover:text-orange-400">
                <BiMap className="iconStyle" id={index} onClick={handleMapClick} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ReactPaginate previousLabel={""} nextLabel={""} pageRangeDisplayed={10} pageCount={Math.ceil(qualifiedArr.length / perPage)} onPageChange={handlePageClick} containerClassName={"pagination mapPagi"} activeClassName={"active"} />
    </div>
  );
};

export default KindergartenList;
