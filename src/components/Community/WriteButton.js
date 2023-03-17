import { useEffect, useRef, React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { dbService } from "util/fbase";
import { collection, addDoc } from "firebase/firestore";

const WriteButton = ({ content, title, setWriteModalOpen, userId }) => {
  const navigate = useNavigate();
  const writeCloseModal = () => {
    setWriteModalOpen(false);
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
      writeCloseModal();
    }
  };
  const writeClick = () => {
    const contentRef = collection(dbService, "content");
    addDoc(contentRef, {
      title,
      content,
      writer: userId.email,
      creatorId: userId.uid,
    });
    navigate("/community");
  };
  return (
    <>
      <section ref={wrapperRef} className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black bg-opacity-30">
        <div className="absolute w-[70vw] max-w-[350px] lg:w-[450px] cancel border rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-50 shadow-slate-300 bg-white">
          <div className="text-lg lg:text-xl font-bold text-gray-700 my-8 px-4">글을 작성하시겠습니까?</div>
          <div className="my-5">
            <button className="mr-2 lg:mr-3 px-8 lg:px-10 py-1 lg:py2 text-sm lg:text-base border rounded-2xl" onClick={writeCloseModal}>
              취소
            </button>
            <button onClick={writeClick} className="ml-2 lg:ml-3 text-white font-bold px-8 lg:px-10 py-1 lg:py2 text-sm lg:text-base bg-btn-green-color border rounded-2xl">
              확인
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WriteButton;
