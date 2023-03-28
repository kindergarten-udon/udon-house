import React, { useState, useEffect, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { deleteDoc, doc, getDocs, updateDoc } from "@firebase/firestore";
import { collection } from "firebase/firestore";
import { dbService } from "util/fbase";

const BoardItemDetail = ({ userId }) => {
  const navigate = useNavigate();
  const editRef = useRef(null);
  const { id } = useParams();
  const [contents, setContents] = useState([]);
  const [selectContent, setSelectContent] = useState(null);
  const [newContent, setNewContent] = useState("");
  const [newTitle, setNewTitle] = useState("");
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

  const editingOnClick = async () => {
    const ok = confirm("수정하시겠습니까?");
    if (ok) {
      const conEdit = doc(collection(dbService, "content"), selectContent.id);
      await updateDoc(conEdit, {
        content: newContent,
        title: newTitle,
      });
      setSelectContent((prevContent) => ({
        ...prevContent,
        content: newContent,
        title: newTitle,
      }));
      setEditing(false);
    }
  };

  const editOnClick = () => {
    setEditing(true);
  };
  const editCancelOnClick = () => {
    setEditing(false);
  };

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

  const likeOnClick = async () => {
    const conEdit = doc(collection(dbService, "content"), selectContent.id);
    await updateDoc(conEdit, {
      like: (selectContent.like += 1),
    });
    const likeBtn = document.querySelector(".likeBtn");
    likeBtn.classList.add("jello-vertical");
    likeBtn.classList.add("text-amber-500");
    setTimeout(() => {
      likeBtn.classList.remove("jello-vertical");
      likeBtn.classList.remove("text-amber-500");
    }, 500);
  };

  useEffect(() => {
    if (!contents) return;
    const targetContent = contents.find((el) => el.id === id);
    setSelectContent(targetContent);
    setNewContent(targetContent?.content);
    setNewTitle(targetContent?.title);
  }, [contents, id]);

  return (
    <>
      <section className=" py-[3%] lg:py-[5%] mx-auto w-[70vw] min-w-[280px] lg:min-w-[500px] text-gray-700">
        {selectContent && editing ? (
          <div className="flex flex-col">
            <input ref={editRef} onChange={editOnChange} defaultValue={selectContent.title} name="title" className="px-6 py-2 text-left border border-gray-500 rounded-3xl mb-5" />
            <textarea onChange={editOnChange} defaultValue={selectContent.content} name="content" className="h-[300px] px-6 py-2 text-left border border-gray-500 rounded-3xl" />
            <div className="flex my-7 align-center justify-center">
              <button className="mr-3 lg:mr-5 bg-white px-9 lg:px-12 py-2 border border-slate-700 rounded-3xl" onClick={editCancelOnClick}>
                취소하기
              </button>
              <button className="ml-3 lg:ml-5 text-white font-bold bg-btn-green-color px-9 lg:px-12 py-2 border rounded-3xl" onClick={editingOnClick}>
                수정하기
              </button>
            </div>
          </div>
        ) : (
          <>
            {selectContent && (
              <>
                <div className="px-6 py-2 text-left border border-gray-500 rounded-3xl mb-5">{selectContent.title}</div>
                <div className="whitespace-pre h-[300px] px-6 py-2 text-left border border-gray-500 rounded-3xl">{selectContent.content}</div>
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
                <button onClick={likeOnClick} className="likeBtn flex align-center justify-center gap-1 lg:gap-2 text-gray-700 font-bold ">
                  <BsHandThumbsUpFill className="mt-[1px]" />
                  {selectContent && selectContent.like}
                </button>
                <Link className="ml-4 flex " to="/community">
                  <GiHamburgerMenu className="block h-5"></GiHamburgerMenu> 목록
                </Link>
              </div>
            </div>
          </>
        )}
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
