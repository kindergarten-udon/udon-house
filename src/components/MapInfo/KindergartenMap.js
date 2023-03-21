import React, { useState, useEffect, useRef } from "react";
const { kakao } = window;

const KindergartenMap = ({ kinderList, setMap }) => {
  // const [map, setMap] = useState(null);
  // const [options, setOptions] = useState(null);

  useEffect(() => {
    console.log("map 실행됨");
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.555949, 126.972329),
      level: 5,
    };
    let map = new kakao.maps.Map(container, options);
    setMap(map);

    kinderList.map(({ CRNAME, LA, LO }) => {
      let imageSrc = "/markerEllipse2.svg";
      let imageSize = new kakao.maps.Size(20, 20);
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      let infoContent = `<div style="margin:5px 35px; white-space: nowrap; color:orange">${CRNAME}</div>`;
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
  }, []);

  return <div id="map" className="w-3/5 hidden md:block"></div>;
};

export default KindergartenMap;
