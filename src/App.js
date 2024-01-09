import React, { lazy, Suspense } from "react";
import "./App.css";
import { auth } from "util/fbase";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { uid, userData } from "Atom/atom";
import { RecoilLogger } from "recoil-devtools-logger";

const Main = lazy(() => import("pages/Main/Main"));
const Map = lazy(() => import("pages/Map/Map"));
const AboutUs = lazy(() => import("pages/AboutUs/AboutUs"));
const Community = lazy(() => import("pages/Community/Community"));
const WriteCommunity = lazy(() => import("pages/Community/WriteCommunity"));
const SignIn = lazy(() => import("pages/SignIn/SignIn"));
const SignUp = lazy(() => import("pages/SignUp/SignUp"));
const MyPage = lazy(() => import("pages/MyPage/MyPage"));
const NotFound = lazy(() => import("pages/NotFound/NotFound"));

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
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
