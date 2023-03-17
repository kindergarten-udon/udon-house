import { React, useEffect, useReducer, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const CancelButton = ({ cancelModalOpen, setcancelModalOpen, props, ref }) => {
  const navigate = useNavigate();
  const cancelCloseModal = () => {
    setcancelModalOpen(false);
  };
  let wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  });

  const clickOutside = (e) => {
    if (wrapperRef.current === e.target) {
      cancelCloseModal();
    }
  };
  const checkBtn = () => {
    navigate(-1);
  };

  return (
    <>
      <section ref={wrapperRef} className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30">
        <div className="absolute w-[70vw] max-w-[350px] lg:w-[450px] cancel border rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-50 shadow-slate-300 bg-white">
          <div className="text-lg lg:text-xl font-bold text-gray-700 my-8 px-4 lg:px-0">작성된 글이 저장되지 않습니다.</div>
          <div className="my-5">
            <button className="mr-2 lg:mr-3 px-8 lg:px-10 py-1 lg:py2 text-sm lg:text-base border rounded-2xl" onClick={cancelCloseModal}>
              취소
            </button>
            <button onClick={checkBtn} className="ml-2 lg:ml-3 text-white font-bold px-8 lg:px-10 py-1 lg:py2 text-sm lg:text-base bg-btn-green-color border rounded-2xl">
              확인
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default CancelButton;
