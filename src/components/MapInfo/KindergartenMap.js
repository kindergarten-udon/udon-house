import React, { useState, useEffect, useRef } from "react";
const { kakao } = window;
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { dbService } from "util/fbase";
import { deleteDoc, doc } from "@firebase/firestore";
import { useRecoilState } from "recoil";
import { uid } from "Atom/atom";

const KindergartenMap = ({ kinderList, setMap, setFavoriteData }) => {
  const [testUid, setTestUid] = useRecoilState(uid);
  // const [favoriteData, setFavoriteData] = useState([]);

  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.566824, 126.978652),
      level: 5,
    };
    let map = new kakao.maps.Map(container, options);
    setMap(map);

    kinderList.map(({ CRNAME, LA, LO }) => {
      let imageSrc = "/markerEllipse3.svg";
      let imageSize = new kakao.maps.Size(18, 18);
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      let infoContent = `<div style="margin:5px 35px; white-space:nowrap; color:orange">${CRNAME}</div>`;
      let infoPosition = new kakao.maps.LatLng(LA, LO);
      let iwRemoveable = true;

      let infowindow = new kakao.maps.InfoWindow({
        content: infoContent,
        removable: iwRemoveable,
      });

      let marker = new kakao.maps.Marker({
        map: map,
        position: infoPosition,
        image: markerImage,
      });

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    });

    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // useEffect(() => {
    // console.log("onSnapshot");
    onSnapshot(collection(dbService, "favorite"), (snapshot) => {
      const contentArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      let myFavorite = contentArray.filter((elem) => {
        return elem.creatorId === testUid;
      });
      if (myFavorite.length === 0) myFavorite = [];
      setFavoriteData(myFavorite);
    });
    // }, []);
  }, []);

  return <div id="map" className="w-[65%] hidden md:block"></div>;
};

export default KindergartenMap;
