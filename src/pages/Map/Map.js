import React, { useState, useEffect, useRef } from "react";
import KindergartenList from "components/MapInfo/KindergartenList";
import KindergartenMap from "components/MapInfo/KindergartenMap";
import KindergartenModal from "components/MapInfo/KindergartenModal";
import axios from "axios";
import { throttle } from "lodash";
import { createUserWithEmailAndPassword } from "firebase/auth";
const { kakao } = window;

const Map = () => {
  const [modalClose, setModalClose] = useState(false);
  const [kinderList, setKinderList] = useState(null);
  const [index, setIndex] = useState(null);
  const target = useRef(1);

  //!!!!!!!!!!!!
  const [dataList, setDataList] = useState([]);
  const [item, setItem] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(`http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_KINDERINFO_KEY}/json/ChildCareInfo/1/100/`);
      let data = response.data.ChildCareInfo.row;
      let dataSlice = data.slice(0, 20);
      setDataList([...dataList, ...dataSlice]);
      data = data.slice(20);
    } catch (error) {
      alert("데이터를 불러오는 과정에서 에러가 발생했습니다!!");
    }
  };

  useState(() => {
    getData();
  }, []);

  // @@@@@@@@@@@@@@@@@@@@@@
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const url = `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_KINDERINFO_KEY}/json/ChildCareInfo/1/50/`;
  //       const response = await axios.get(url);
  //       setKinderList(response.data.ChildCareInfo.row);
  //     } catch (error) {
  //       alert("데이터를 불러오는 과정에서 에러가 발생했습니다!!");
  //     }
  //   };
  //   getData();
  // }, []);
  // @@@@@@@@@@@@@@@@@@@@@@

  const modalShow = (e) => {
    if (!(e.target.tagName === "svg" || e.target.tagName === "path")) {
      setIndex(e.currentTarget.id);
      setModalClose(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-row h-screen lg:pt-[120px] pt-[72px]">
      {modalClose && dataList && index && <KindergartenModal kinderList={dataList} index={index} setModalClose={setModalClose} />}
      {dataList && <KindergartenMap kinderList={dataList} />}
      {dataList && <KindergartenList kinderList={dataList} modalShow={modalShow} target={target} />}
    </section>
  );
};

export default Map;
