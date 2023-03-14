import { useEffect, useRef, React } from "react";
import { Link, useNavigate } from "react-router-dom";

const WriteButton = ({ WriteModalOpen, setWriteModalOpen }) => {
  const node = useRef();

  const closeModal = ({ target }) => {
    if (WriteModalOpen && node.current && !node.current.contains(target)) {
      setWriteModalOpen(false);
    }
  };

  useEffect(() => {
    if (WriteModalOpen) {
      window.addEventListener("click", closeModal);
    }

    return () => {
      window.removeEventListener("click", closeModal);
    };
  }, [WriteModalOpen]);

  const writeCloseModal = () => {
    setWriteModalOpen(false);
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30">
        <section ref={node} className="absolute w-[70vw] max-w-[350px] lg:w-[450px] cancel border rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-50 shadow-slate-300 bg-white">
          <div className="text-lg lg:text-xl font-bold text-gray-700 my-8 px-4">글을 작성하시겠습니까?</div>
          <div className="my-5">
            <button className="mr-2 lg:mr-3 px-8 lg:px-10 py-1 lg:py2 text-sm lg:text-base border rounded-2xl" onClick={writeCloseModal}>
              취소
            </button>
            <button className="ml-2 lg:ml-3 text-white font-bold px-8 lg:px-10 py-1 lg:py2 text-sm lg:text-base bg-btn-green-color border rounded-2xl">확인</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default WriteButton;