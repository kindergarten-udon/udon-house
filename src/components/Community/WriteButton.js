import { useEffect, useRef, React } from "react";
import { useNavigate } from "react-router-dom";
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
      like: 0,
    });
    navigate("/community");
  };

  return (
    <>
      <section ref={wrapperRef} className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black bg-opacity-30">
        <div className="absolute modalPosition w-[70vw] max-w-[350px] lg:w-[450px] cancel border rounded-xl z-50 shadow-slate-300 bg-white">
          <div className="text-lg lg:text-xl font-bold text-gray-700 my-8 px-4">글을 작성하시겠습니까?</div>
          <div className="my-5">
            <button className="mr-2 lg:mr-3 modalButtonStyle lg:py2 lg:px-10 lg:text-base" onClick={writeCloseModal}>
              취소
            </button>
            <button onClick={writeClick} className="ml-2 lg:ml-3 text-white bg-btn-green-color font-bold modalButtonStyle lg:py2 lg:px-10 lg:text-base">
              확인
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WriteButton;
