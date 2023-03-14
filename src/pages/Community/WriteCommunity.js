import "./Community.css";
import { React, useState } from "react";
import { Link } from "react-router-dom";
// import Header from "components/Header/Header";
// import Footer from "components/Footer/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CancelButton from "components/Community/CancelButton";
import WriteButton from "components/Community/WriteButton";

const WriteCommunity = () => {
  const [cancelModalOpen, setcancelModalOpen] = useState(false);
  const [WriteModalOpen, setWriteModalOpen] = useState(false);

  const showCancelModal = () => {
    if (setcancelModalOpen === true) {
      setcancelModalOpen(false);
    } else {
      setcancelModalOpen(true);
    }
  };
  const showWriteModal = () => {
    setWriteModalOpen(true);
  };

  return (
    <>
      <div className="container w-screen min-w-full text-center lg:px-[7vw] px-[10vw] pt-5 mt-5 bg-gray-100 absolute">
        {cancelModalOpen && <CancelButton setcancelModalOpen={setcancelModalOpen} />}
        {WriteModalOpen && <WriteButton setWriteModalOpen={setWriteModalOpen} />}
        <div className="back-wrapper">
          <Link className="flex text-xl text-gray-700 lg:text-2xl font-bold" to={"/Community"}>
            <AiOutlineArrowLeft className="w-8 mt-1"></AiOutlineArrowLeft>뒤로가기
          </Link>
        </div>
        <h2 className="font-bold  text-gray-700 text-xl lg:text-2xl mt-8 mb-8">우리 아이들의 궁금한점을 질문해보세요</h2>
        <div className="title-wrapper items-center  flex justify-center">
          <h3 className="w-[10vw] text-center font-bold text-xl lg:text-2xl">제목</h3>
          <input form="text" placeholder="제목을 적어주세요." className="text-sm lg:text-base w-[50vw] lg:w-[45vw] p-4 border rounded-2xl border-slate-700" />
        </div>
        <textarea placeholder="내용을 적어주세요." className="text-sm lg:text-base mt-4 w-[60vw] lg:w-[55vw] h-[40vh] p-4 border rounded-2xl border-slate-700 mb-10" />
        <div>
          <button className="mr-3 lg:mr-5 text-sm lg:text-base bg-white px-9 lg:px-12 py-2 border border-slate-700 rounded-3xl" onClick={showCancelModal}>
            취소
          </button>
          <button className="ml-3 lg:ml-5 text-sm lg:text-base text-white font-bold bg-btn-green-color px-9 lg:px-12 py-2 border rounded-3xl mb-10" onClick={showWriteModal}>
            작성
          </button>
        </div>
      </div>
    </>
  );
};

export default WriteCommunity;