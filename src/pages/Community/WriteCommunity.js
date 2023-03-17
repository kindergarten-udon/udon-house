import "./Community.css";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CancelButton from "components/Community/CancelButton";
import WriteButton from "components/Community/WriteButton";

const WriteCommunity = ({ userId }) => {
  const [cancelModalOpen, setcancelModalOpen] = useState(false);
  const [WriteModalOpen, setWriteModalOpen] = useState(false);
  // 제목과 글 담는 state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const showCancelModal = () => {
    if (setcancelModalOpen === true) {
      setcancelModalOpen(false);
    } else {
      setcancelModalOpen(true);
    }
  };
  // title,content 값
  const handleValue = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name == "title") {
      setTitle(value);
    } else if (name == "content") setContent(value);
  };

  console.log(title);
  // 글쓰기 모달창
  const showWriteModal = () => {
    if (title.trim() == "" || content.trim() == "") {
      alert("제목과 내용을 입력하세요.");
    } else {
      setWriteModalOpen(true);
    }
  };

  return (
    <div className="lg:pt-[120px] pt-[72px] min-w-full text-center lg:px-[7vw] px-[10vw] pb-10 bg-gray-100">
      {cancelModalOpen && <CancelButton setcancelModalOpen={setcancelModalOpen} />}
      {WriteModalOpen && <WriteButton title={title} content={content} userId={userId} setWriteModalOpen={setWriteModalOpen} />}
      <div className="mt-5 lg:mt-8">
        <Link className="flex text-xl text-gray-700 lg:text-2xl font-bold" to={"/community"}>
          <AiOutlineArrowLeft className="w-8 mt-1"></AiOutlineArrowLeft>뒤로가기
        </Link>
      </div>
      <h2 className="font-bold  text-gray-700 text-xl lg:text-2xl mt-8 mb-8">우리 아이들의 궁금한점을 질문해보세요</h2>
      <div className="title-wrapper items-center  flex justify-center">
        <h3 className="w-[10vw] text-center font-bold text-xl lg:text-2xl">제목</h3>
        <input onChange={handleValue} name="title" form="text" placeholder="제목을 적어주세요." className="text-sm lg:text-base w-[50vw] lg:w-[45vw] p-4 border rounded-2xl border-slate-700" />
      </div>
      <textarea onChange={handleValue} name="content" placeholder="내용을 적어주세요." className="text-sm lg:text-base mt-4 w-[60vw] lg:w-[55vw] h-[40vh] p-4 border rounded-2xl border-slate-700" />
      <div className="mt-6 lg:mt-8 text-sm lg:text-base">
        <button className="mr-3 lg:mr-5 bg-white px-9 lg:px-12 py-2 border border-slate-700 rounded-3xl" onClick={showCancelModal}>
          취소
        </button>
        <button className="ml-3 lg:ml-5 text-white font-bold bg-btn-green-color px-9 lg:px-12 py-2 border rounded-3xl" onClick={showWriteModal}>
          작성
        </button>
      </div>
    </div>
  );
};

export default WriteCommunity;
