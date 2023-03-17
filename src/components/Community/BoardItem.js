import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { deleteDoc, doc, getDocs, updateDoc } from "@firebase/firestore";
import { collection } from "firebase/firestore";
import { dbService } from "util/fbase";

const BoardItemDetail = ({ userId }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [contents, setContents] = useState([]);
  const [selectContent, setSelectContent] = useState([]);
  // 수정 content
  const [newContent, setNewContent] = useState(selectContent && selectContent.content);
  console.log(newContent);
  // 수정 Title
  const [newTitle, setNewTitle] = useState(selectContent && selectContent.title);
  // 수정중
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const data = async () => {
      const dbContent = await getDocs(collection(dbService, "content"));
      const contentArray = dbContent.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContents(contentArray);
    };
    data();
  }, []);

  // 삭제하기
  const onDeleteClick = async () => {
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      try {
        const conRef = doc(collection(dbService, "content"), selectContent.id);
        await deleteDoc(conRef);
        navigate(-1);
      } catch (error) {
        console.error("삭제 실패: ", error);
      }
    }
  };
  //수정하기
  // const editingOnClick = async () => {
  //   const conEdit = doc(collection(dbService, "content"), selectContent.id);
  //   await updateDoc(conEdit, {
  //     content: newContent,
  //     title: newTitle,
  //   });
  // };
  // 수정
  const editOnClick = () => {
    setEditing(true);
  };
  const editCancelOnClick = () => {
    setEditing(false);
  };

  // 수정값
  const editOnChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "title") {
      setNewTitle(value);
    } else if (name === "content") {
      setNewContent(value);
    }
  };
  useEffect(() => {
    if (contents) {
      const targetContent = contents.find((el) => el.id === id);
      setSelectContent(targetContent);
    }
  }, [contents, id]);

  const [isChecked, setChecked] = useState(false);
  const toggleMenu = () => {
    setChecked((isChecked) => !isChecked);
  };
  return (
    <>
      <section className=" py-[3%] lg:py-[5%] mx-auto w-[70vw] min-w-[280px] lg:min-w-[500px] text-gray-700">
        {selectContent && editing ? (
          <div className="flex flex-col">
            <input onChange={editOnChange} value={selectContent.title} name="title" className="px-6 py-2 text-left border border-gray-500 rounded-3xl mb-5" required />
            <input onChange={editOnChange} value={selectContent.content} name="content" className="h-[300px] px-6 py-2 text-left border border-gray-500 rounded-3xl" />
            <div className="flex">
              <button className="mr-4" onClick={editCancelOnClick}>
                수정하기
              </button>
              <button onClick={editCancelOnClick}>취소하기</button>
            </div>
          </div>
        ) : (
          <>
            {selectContent && (
              <>
                <div className="px-6 py-2 text-left border border-gray-500 rounded-3xl mb-5">{selectContent.title}</div>
                <div className="h-[300px] px-6 py-2 text-left border border-gray-500 rounded-3xl">{selectContent.content}</div>
              </>
            )}
          </>
        )}
        <div className="text-sm lg:text-base my-4 mx-4 flex justify-between">
          <div className="">
            {!editing && userId && selectContent && selectContent.creatorId === userId.uid && (
              <>
                <button onClick={editOnClick} className="mr-4">
                  수정하기
                </button>
                <button onClick={onDeleteClick}>삭제하기</button>
              </>
            )}
          </div>
          <div className="flex">
            <button onClick={toggleMenu}>{isChecked ? <BsHandThumbsUpFill /> : <BsHandThumbsUp />}</button>
            <Link className="ml-4 flex " to="/community">
              <GiHamburgerMenu className="block h-5"></GiHamburgerMenu> 목록
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const BoardItem = ({ userId }) => {
  return (
    <>
      <BoardItemDetail userId={userId} title={"타이틀"} content={"콘텐츠"} />
    </>
  );
};

export default BoardItem;
