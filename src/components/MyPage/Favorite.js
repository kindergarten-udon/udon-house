import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbService } from "util/fbase";
import ReactPaginate from "react-paginate";
import "components/Community/boardListItem.css";

const Favorite = ({ userId }) => {
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    onSnapshot(collection(dbService, "favorite"), (snapshot) => {
      const contentArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFavoriteList(contentArray);
    });
  }, []);

  const fvList = favoriteList.filter((el) => {
    return el.creatorId === userId.uid;
  });

  const perPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * perPage;
  const pagedContents = fvList.slice(offset, offset + perPage);
  return (
    <div className="my-20">
      {fvList.length === 0 ? (
        <span>즐겨찾기 목록이 없습니다</span>
      ) : (
        pagedContents.map((el) => {
          return (
            <section className=" w-[80%] mx-auto" key={el.id}>
              <div className="text-left flex justify-between py-2 lg:py-3 border border-transparent border-b-gray-300 w-full">
                <span className="text-gray-500 text-center max-sm:w-[15vw] truncate w-[25vw] font-medium">{el.title}</span>
                <span>{el.address}</span>
                {el.tel ? <span className="max-sm:w-[clamp(50px,10vw,60px)] w-[clamp(60px,7vw,100px)] flex justify-between pr-1 lg:pr-3">{el.tel}</span> : <span>전화번호가 없습니다</span>}
              </div>
            </section>
          );
        })
      )}
      <ReactPaginate previousLabel={"<"} nextLabel={">"} pageCount={Math.ceil(fvList.length / perPage)} onPageChange={handlePageClick} containerClassName={"pagination"} activeClassName={"active"} />
    </div>
  );
};

export default Favorite;
