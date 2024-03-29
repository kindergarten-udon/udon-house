import React, { useEffect } from "react";
import FirstMain from "components/Mains/FirstMain";
import SecondMain from "components/Mains/SecondMain";
import ThirdMain from "components/Mains/ThirdMain";
import { FullPage, Slide } from "react-full-page/lib";
import "components/utilCss/main.css";
import MainFooter from "components/Footer/MainFooter";

const Main = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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
        <Slide>
          <MainFooter />
        </Slide>
      </FullPage>
    </>
  );
};

export default Main;
