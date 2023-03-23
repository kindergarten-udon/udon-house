import "./App.css";
import Map from "pages/Map/Map";
import { auth, dbService } from "util/fbase";
import Main from "pages/Main/Main";
import SignUp from "pages/SignUp/SignUp";
import SignIn from "pages/SignIn/SignIn";
import MyPage from "pages/MyPage/MyPage";
import AboutUs from "pages/AboutUs/AboutUs";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import NotFound from "pages/NotFound/NotFound";
import Community from "pages/Community/Community";
import { useEffect, useRef, useState } from "react";
import WriteCommunity from "pages/Community/WriteCommunity";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useSetRecoilState } from "recoil";
import { uid, userData } from "Atom/atom";
import { RecoilLogger } from "recoil-devtools-logger";

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const setContents = useSetRecoilState(userData);
  const setUid = useSetRecoilState(uid);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
        setUserId(user);
        setUserProfile(user.photoURL);
        setUid(user.uid);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  useEffect(() => {
    onSnapshot(collection(dbService, "content"), (snapshot) => {
      const contentArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContents(contentArray);
    });
  }, []);

  return (
    <div className="App font-sans">
      <RecoilLogger values={[uid, userData]} />
      <>
        <Header isLogin={isLogin} userId={userId} userProfile={userProfile} setUserProfile={setUserProfile} />
        <Routes>
          <>
            <Route path="/" element={<Main />} />
            <Route path="/map" element={<Map userId={userId} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/mypage" element={<MyPage userId={userId} userProfile={userProfile} setUserProfile={setUserProfile} />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/community" element={<Community isLogin={isLogin} />} />
            <Route path="/community/:id" element={<Community userId={userId} />} />
            <Route path="/writeCommunity" element={<WriteCommunity userId={userId} />} />
          </>
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
