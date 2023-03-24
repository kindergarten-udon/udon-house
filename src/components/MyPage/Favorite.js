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
        <span>즐겨찾기 항목이 없습니다.</span>
      ) : (
        <>
          {pagedContents.map((el, index) => {
            return (
              <section className=" w-[80%] mx-auto text-gray-500 text-sm lg:text-lg" key={el.id}>
                <div className="flex justify-between py-2 lg:py-3 border border-transparent border-b-gray-300 w-full">
                  <div className="flex items-center max-sm:mr-2">
                    <img src="/childrens.svg" alt="어린이 캐릭터" className="max-sm:w-0 h-[80px]" />
                    <span tabIndex={0} className="text-center max-sm:w-[25vw] w-[30vw] font-medium whitespace-normal">
                      {el.title}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span tabIndex={0} className="whitespace-normal text-black text-center max-sm:w-[35vw] w-[30vw]">
                      {el.address}
                    </span>
                    {el.tel ? (
                      <span tabIndex={0} className="flex justify-between pl-1 lg:pl-3 whitespace-normal  text-center">
                        {el.tel}
                      </span>
                    ) : (
                      <span tabIndex={0}>전화번호가 없습니다</span>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
          <ReactPaginate previousLabel={"<"} nextLabel={">"} pageCount={Math.ceil(fvList.length / perPage)} onPageChange={handlePageClick} containerClassName={"pagination"} activeClassName={"active"} />
        </>
      )}
    </div>
  );
};

export default Favorite;
