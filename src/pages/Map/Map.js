import React, { useState, useEffect, useRef, useCallback } from "react";
import KindergartenList from "components/MapInfo/KindergartenList";
import KindergartenMap from "components/MapInfo/KindergartenMap";
import KindergartenModal from "components/MapInfo/KindergartenModal";
import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
const { kakao } = window;

const Map = () => {
  const [modalClose, setModalClose] = useState(false);
  const [kinderList, setKinderList] = useState(null);
  const [qualifiedList, setQualifiedList] = useState(kinderList);
  const [index, setIndex] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_KINDERINFO_KEY}/json/ChildCareInfo/1/1000/`;
        const response = await axios.get(url);
        let arr = response.data.ChildCareInfo.row;
        let filtered = arr.filter((elem) => elem.CRSTATUSNAME !== "폐지" && elem.STCODE !== "11545000341" && elem.STCODE !== "11380000668");
        setKinderList(filtered);
      } catch (error) {
        alert("데이터를 불러오는 과정에서 에러가 발생했습니다!!");
      }
    };
    getData();
  }, []);

  const modalShow = (e) => {
    if (!(e.target.tagName === "svg" || e.target.tagName === "path")) {
      setIndex(e.currentTarget.id);
      setModalClose(true);
    }
  };

  return (
    <section className="flex flex-row h-screen lg:pt-[120px] pt-[72px]">
      {modalClose && kinderList && index && <KindergartenModal kinderList={kinderList} index={index} qualifiedList={qualifiedList} setModalClose={setModalClose} />}
      {kinderList && <KindergartenMap kinderList={kinderList} setMap={setMap} />}
      {kinderList && map && <KindergartenList kinderList={kinderList} setQualifiedList={setQualifiedList} map={map} modalShow={modalShow} />}
    </section>
  );
};

export default Map;
