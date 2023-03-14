import React, { useRef, useState, useEffect } from "react";
import FirstMain from "components/Mains/FirstMain";
import SecondMain from "components/Mains/SecondMain";
import ThirdMain from "components/Mains/ThirdMain";
import { FullPage, Slide } from "react-full-page/lib";
import "./main.css";
import MainFooter from "components/Footer/MainFooter";

const Main = () => {
  return (
    <>
      <FullPage controls controlsProps={{ className: "slide-navigation overflow-scroll h-auto" }}>
        <Slide>
          <FirstMain />
        </Slide>
        <Slide>
          <SecondMain />
        </Slide>
        <Slide>
          <ThirdMain />
        </Slide>
        <Slide>
          <MainFooter />
        </Slide>
      </FullPage>
    </>
  );
};

export default Main;
