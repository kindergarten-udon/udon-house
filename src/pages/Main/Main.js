import React, { useRef, useState, useEffect } from "react";
import FirstMain from "components/Mains/FirstMain";
import SecondMain from "components/Mains/SecondMain";
import ThirdMain from "components/Mains/ThirdMain";
import { FullPage, Slide } from "react-full-page/lib";
import "./main.css";

const Main = () => {
  return (
    <>
      <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide>
          <FirstMain />
        </Slide>
        <Slide>
          <SecondMain />
        </Slide>
        <Slide>
          <ThirdMain />
        </Slide>
      </FullPage>
      <div>누구세요 ?</div>
    </>
  );
};

export default Main;
