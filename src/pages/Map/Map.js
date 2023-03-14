import React, { useState } from "react";
import KindergartenList from "components/MapInfo/KindergartenList";
import KindergartenMap from "components/MapInfo/KindergartenMap";
import KindergartenModal from "components/MapInfo/KindergartenModal";

const Map = () => {
  const [modalClose, setModalClose] = useState(false);

  const modalShow = () => {
    setModalClose(true);
  };

  return (
    <section className="flex flex-row h-screen lg:pt-[120px] pt-[72px]">
      {modalClose && <KindergartenModal setModalClose={setModalClose} />}
      <KindergartenMap />
      <KindergartenList modalShow={modalShow} />
    </section>
  );
};

export default Map;
