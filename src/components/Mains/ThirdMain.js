import React from "react";

const ThirdMain = () => {
  return (
    <div className="w-full relative bg-main-color h-screen snap-center ">
      <img className="absolute" src="/main_shape_1.png" />
      <img className="absolute right-0 bottom-0 w-[86%] lg:w-1/2" src="/main_shape_2.png" />
      <img className=" absolute w-[86%] lg:w-1/2 right-0 bottom-0" src="/main2.svg" />
      <img className="absolute animate-bounce right-[233px] bottom-[600px] lg:right-[270px] lg:bottom-[539px]" src="/main_join_bird.png" />
      <div className="absolute top-40 flex flex-col text-start px-[160px]">
        <h1 className="font-bold lg:leading-loose lg:text-4xl leading-loose text-3xl">공지사항</h1>
        <span>우동집의 업데이트 정보 등 다양한 소식을 알려드립니다.</span>
      </div>
      <div className="flex w-full absolute top-1/3 justify-between px-[160px] ">
        <div className="flex flex-col bg-btn-green-color rounded-2xl">
          <img src="/notification1.png" alt="" />
          <div className="h-20 bg-white rounded-b-2xl">조윤호</div>
        </div>
        <div className="bg-pink-color rounded-2xl">
          <img src="/notification2.png" alt="" />
          <div className="h-20 bg-white rounded-b-2xl">김수민</div>
        </div>
        <div className="bg-blue-color rounded-2xl">
          <img src="/notification3.png" alt="" />
          <div className="h-20 bg-white rounded-b-2xl">유하리</div>
        </div>
      </div>
    </div>
  );
};

export default ThirdMain;
