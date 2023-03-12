import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CancelButton = () => {
  return (
    <>
      <section className="w-[70vw] max-w-[300px] lg:w-[450px] cancel border rounded-xl">
        <div className="text-lg lg:text-xl font-bold text-gray-700 my-8 px-4 lg:px-0">작성된 글이 저장되지 않습니다.</div>
        <div className="my-5">
          <button className="mr-2 lg:mr-3 px-8 lg:px-10 py-1 lg:py2 text-sm lg:text-base border rounded-2xl">취소</button>
          <button className="ml-2 lg:ml-3 text-white font-bold px-8 lg:px-10 py-1 lg:py2 text-sm lg:text-base bg-btn-green-color border rounded-2xl">확인</button>
        </div>
      </section>
    </>
  );
};

export default CancelButton;
