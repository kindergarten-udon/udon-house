import Favorite from "components/MyPage/Favorite";
import MyBoard from "components/MyPage/MyBoard";
import React, { useState } from "react";
import { uuidv4 } from "@firebase/util";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storageService } from "util/fbase";

const MyPage = ({ userId }) => {
  const uuid = uuidv4();
  const [active, setActive] = useState(false);
  const [profile, setProfile] = useState("");

  const onProfileSend = async () => {
    if (userId) {
      const fileRef = ref(storageService, `${userId.uid}/${uuid}`);
      const res = await uploadString(fileRef, profile, "data_url");
      const fileUrl = await getDownloadURL(res.ref);
      return;
    }
  };

  // 사진 추가될 때 실행시킬 함수
  const imgOnchange = (e) => {
    const {
      target: { files },
    } = e;
    const file = files[0];
    const reader = new FileReader();
    // onloadend를 사용해줌으로써 인자에 사진의 고유 url을 담을 수 있다.
    reader.onloadend = (finishE) => {
      const {
        currentTarget: { result },
      } = finishE;
      setProfile(result);
    };
    reader.readAsDataURL(file);
  };
  const onCancelClick = () => setProfile(null);
  return (
    <div className="p-[200px]">
      <div>프로필 영역</div>
      <input onChange={imgOnchange} type="file" accept="image/*" />
      {profile && (
        <div>
          <img src={profile} alt="" />
          <button onClick={onCancelClick}>취소</button>
        </div>
      )}
      <button onClick={onProfileSend}>테스트</button>
      <Favorite setActive={setActive} />
      <MyBoard setActive={setActive} />
    </div>
  );
};

export default MyPage;
