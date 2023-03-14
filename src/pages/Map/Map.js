import React, { useState, useEffect } from "react";
import KindergartenList from "components/MapInfo/KindergartenList";
import KindergartenMap from "components/MapInfo/KindergartenMap";
import KindergartenModal from "components/MapInfo/KindergartenModal";

const Map = () => {
  const [modalClose, setModalClose] = useState(false);

  const modalShow = () => {
    setModalClose(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-row h-screen">
      {modalClose && <KindergartenModal setModalClose={setModalClose} />}
      <KindergartenMap />
      <KindergartenList modalShow={modalShow} />
    </section>
  );
};

export default Map;
