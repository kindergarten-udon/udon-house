import React, { useEffect, useRef } from "react";
const { kakao } = window;

const testPosition = [
  {
    title: "사랑별어린이집",
    latlng: new kakao.maps.LatLng(33.450705, 126.570677),
  },
  {
    title: "현대캐피탈 도담어린이집",
    latlng: new kakao.maps.LatLng(33.450936, 126.569477),
  },
  {
    title: "멋쟁이사자처럼 어린이집",
    latlng: new kakao.maps.LatLng(33.450879, 126.56994),
  },
  {
    title: "서울어린이집",
    latlng: new kakao.maps.LatLng(33.451393, 126.570738),
  },
];

const KindergartenMap = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(33.450705, 126.570677),
      level: 3,
    };
    let map = new kakao.maps.Map(container, options);

    testPosition.map(({ title, latlng }) => {
      let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
      let imageSize = new kakao.maps.Size(24, 35);
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      let infoContent = `<div style="margin:5px 35px; white-space: nowrap; color:orange">${title}</div>`;
      let infoPosition = new kakao.maps.LatLng(33.450705, 126.570677);
      let iwRemoveable = true;

      let infowindow = new kakao.maps.InfoWindow({
        position: infoPosition,
        content: infoContent,
        removable: iwRemoveable,
      });

      let marker = new kakao.maps.Marker({
        map: map,
        position: latlng,
        title: title,
        image: markerImage,
      });

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    });

    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);

  return <div id="map" className="w-3/5"></div>;
};

export default KindergartenMap;
