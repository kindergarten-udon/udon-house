import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Main from "pages/Main/Main";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import SignUp from "pages/SignUp/SignUp";
import SignIn from "pages/SignIn/SignIn";
import AboutUs from "pages/AboutUs/AboutUs";
import Community from "pages/Community/Community";
import WriteCommunity from "pages/Community/WriteCommunity";
import Map from "pages/Map/Map";
import NotFound from "pages/NotFound/NotFound";
import { useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "util/fbase";

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
        <Header isLogin={isLogin} />
        <Routes>
          <>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/community" element={<Community isLogin={isLogin} />} />
            <Route path="/community/:id" element={<Community userId={userId} />} />
            <Route path="/map/:id" element={<Map />} />
            <Route path="/map" element={<Map />} />
            <Route path="/writeCommunity" element={<WriteCommunity userId={userId} />} />
          </>
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
