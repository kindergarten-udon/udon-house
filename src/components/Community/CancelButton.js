import { React, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const CancelButton = ({ setcancelModalOpen }) => {
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
      <section ref={wrapperRef} className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black bg-opacity-30">
        <div className="absolute modalPosition w-[70vw] max-w-[350px] lg:w-[450px] cancel border rounded-xl z-50 shadow-slate-300 bg-white">
          <div className="text-lg lg:text-xl font-bold text-gray-700 my-8 px-4 lg:px-0">작성된 글이 저장되지 않습니다.</div>
          <div className="my-5">
            <button className="mr-2 lg:mr-3 modalButtonStyle lg:py2 lg:px-10 lg:text-base" onClick={cancelCloseModal}>
              취소
            </button>
            <button onClick={checkBtn} className="ml-2 lg:ml-3 text-white bg-btn-green-color font-bold modalButtonStyle lg:py2 lg:px-10 lg:text-base">
              확인
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default CancelButton;
