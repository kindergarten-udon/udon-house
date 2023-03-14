import React, { useEffect } from "react";
const { kakao } = window;

const KindergartenMap = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    let map = new kakao.maps.Map(container, options);

    let markerPoint = new kakao.maps.LatLng(33.450701, 126.570667);
    let marker = new kakao.maps.Marker({
      position: markerPoint,
    });
    marker.setMap(map);

    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);

  return <div id="map" className="flex-1 lg:flex-[1.5]"></div>;
};

export default KindergartenMap;
