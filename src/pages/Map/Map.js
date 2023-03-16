import React, { useState, useEffect } from "react";
import KindergartenList from "components/MapInfo/KindergartenList";
import KindergartenMap from "components/MapInfo/KindergartenMap";
import KindergartenModal from "components/MapInfo/KindergartenModal";
import axios from "axios";

const Map = () => {
  const [modalClose, setModalClose] = useState(false);
  const [kinderList, setKinderList] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `http://openapi.seoul.go.kr:8088/4e7269425a6c656534354f51426a71/json/ChildCareInfo/1/10/`;
        const response = await axios.get(url);
        setKinderList(response.data.ChildCareInfo.row);
      } catch (error) {
        alert("데이터를 불러오는 과정에서 에러가 발생했습니다!!");
      }
    };
    getData();
  }, []);

  const modalShow = () => {
    setModalClose(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-row h-screen lg:pt-[120px] pt-[72px]">
      <KindergartenMap />
      {kinderList && <KindergartenList kinderList={kinderList} modalShow={modalShow} />}
      {modalClose && <KindergartenModal kinderList={kinderList} setModalClose={setModalClose} />}
    </section>
  );
};

export default Map;
