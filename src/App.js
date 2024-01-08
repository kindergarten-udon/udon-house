import React, { lazy, Suspense } from "react";
import "./App.css";
import { auth, dbService } from "util/fbase";
import SignUp from "pages/SignUp/SignUp";
import SignIn from "pages/SignIn/SignIn";
import MyPage from "pages/MyPage/MyPage";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import NotFound from "pages/NotFound/NotFound";
import { useEffect, useState } from "react";
import WriteCommunity from "pages/Community/WriteCommunity";
import { Routes, Route, Navigate } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useSetRecoilState } from "recoil";
import { uid, userData } from "Atom/atom";
import { RecoilLogger } from "recoil-devtools-logger";
const Main = lazy(() => import("pages/Main/Main"));
const Map = lazy(() => import("pages/Map/Map"));
const AboutUs = lazy(() => import("pages/AboutUs/AboutUs"));
const Community = lazy(() => import("pages/Community/Community"));

function App() {
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

  const PrivateRoute = ({ userId, component: Component }) => {
    return !userId ? Component : <Navigate to="/" {...alert("로그인 상태입니다.")}></Navigate>;
  };

  return (
    <div className="App font-sans">
      <RecoilLogger values={[uid, userData]} />
      <Header isLogin={isLogin} userId={userId} userProfile={userProfile} setUserProfile={setUserProfile} />
      <Suspense fallback={<div>Loding...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/map" element={<Map userId={userId} />} />
          <Route path="/signup" element={<PrivateRoute component={<SignUp />} userId={userId} />} />
          <Route path="/signin" element={<PrivateRoute component={<SignIn />} userId={userId} />} />
          <Route path="/mypage" element={<MyPage userId={userId} userProfile={userProfile} setUserProfile={setUserProfile} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/community" element={<Community isLogin={isLogin} />} />
          <Route path="/community/:id" element={<Community userId={userId} />} />
          <Route path="/writeCommunity" element={<WriteCommunity userId={userId} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
