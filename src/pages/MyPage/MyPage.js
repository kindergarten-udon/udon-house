import Favorite from "components/MyPage/Favorite";
import MyBoard from "components/MyPage/MyBoard";
import React, { useState } from "react";

const MyPage = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="p-[200px]">
      <div>프로필 영역</div>
      <Favorite setActive={setActive} />
      <MyBoard setActive={setActive} />
    </div>
  );
};

export default MyPage;
