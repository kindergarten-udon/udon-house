import "./App.css";
import Map from "pages/Map/Map";
import { auth } from "util/fbase";
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

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
        setUserId(user);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  return (
    <div className="App font-sans">
      <>
        {userId && <img src={userId.photoURL} />}
        <Header isLogin={isLogin} />
        <Routes>
          <>
            <Route path="/" element={<Main />} />
            <Route path="/map" element={<Map />} />
            <Route path="/map/:id" element={<Map />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/mypage" element={<MyPage userId={userId} />} />
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
