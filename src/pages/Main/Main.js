import React, { useRef, useState } from "react";
import FirstMain from "components/Mains/FirstMain";
import SecondMain from "components/Mains/SecondMain";
import ThirdMain from "components/Mains/ThirdMain";
import { cls } from "util/util";

const Main = () => {
  const [dots, setDots] = useState(null);
  const mainRef = useRef(null);
  const handleScroll = (e, button) => {
    const fdot = e.target.className.includes("fdot");
    const sdot = e.target.className.includes("sdot");
    const tdot = e.target.className.includes("tdot");
    const first = mainRef.current.children[0].offsetTop;
    const second = mainRef.current.children[1].offsetTop;
    const third = mainRef.current.children[2].offsetTop;

    if (fdot) {
      mainRef.current.scrollTo({ top: first, behavior: "smooth" });
    } else if (sdot) {
      mainRef.current.scrollTo({ top: second, behavior: "smooth" });
    } else if (tdot) {
      mainRef.current.scrollTo({ top: third, behavior: "smooth" });
    }
  };
  return (
    <>
      <main ref={mainRef} className=" snap-y snap-mandatory h-screen scrollbar-hide overflow-auto">
        <FirstMain />
        <SecondMain />
        <ThirdMain />
      </main>
      <div className="flex flex-col fixed top-1/2 right-0 mr-5">
        <button onClick={handleScroll} className={cls("fdot", "w-3", "h-3", "rounded-full", "mb-5", "cursor-pointer", dots ? "bg-black" : "bg-gray-300")}></button>
        <button onClick={handleScroll} className={cls("fdot", "w-3", "h-3", "rounded-full", "mb-5", "cursor-pointer", dots ? "bg-black" : "bg-gray-300")}></button>
        <button onClick={handleScroll} className={cls("fdot", "w-3", "h-3", "rounded-full", "mb-5", "cursor-pointer", dots ? "bg-black" : "bg-gray-300")}></button>
      </div>
    </>
  );
};

export default Main;
