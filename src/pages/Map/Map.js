import React, { useState } from "react";
import KindergartenList from "components/MapInfo/KindergartenList";
import KindergartenMap from "components/MapInfo/KindergartenMap";
import KindergartenModal from "components/MapInfo/KindergartenModal";

const Map = () => {
  const [modal, setModal] = useState(false);

  return (
    <section className="flex flex-row h-screen">
      {modal && <KindergartenModal setModal={setModal} />}
      <KindergartenMap />
      <KindergartenList setModal={setModal} />
    </section>
  );
};

export default Map;
