import React, { useState, useEffect } from "react";
import KindergartenList from "components/MapInfo/KindergartenList";
import KindergartenMap from "components/MapInfo/KindergartenMap";
import KindergartenModal from "components/MapInfo/KindergartenModal";
import axios from "axios";

const Map = () => {
  const [kinderList, setKinderList] = useState(null);

  const getData = async () => {
    const url = `http://openapi.seoul.go.kr:8088/4e7269425a6c656534354f51426a71/json/ChildCareInfo/1/10/`;
    const response = await axios.get(url);
    setKinderList(response.data.ChildCareInfo.row);
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(kinderList);

  const [modalClose, setModalClose] = useState(false);
  const [index, setIndex] = useState(null);

  const modalShow = (e) => {
    setIndex(e.target.id);
    setModalClose(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-row h-screen lg:pt-[120px] pt-[72px]">
      {modalClose && kinderList && <KindergartenModal kinderList={kinderList} index={index} setModalClose={setModalClose} />}
      <KindergartenMap />
      {kinderList && <KindergartenList kinderList={kinderList} modalShow={modalShow} />}
    </section>
  );
};

export default Map;
