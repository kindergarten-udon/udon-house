import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Main from "pages/Main/Main";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import SignUp from "pages/SignUp/SignUp";
import SignIn from "pages/SignIn/SignIn";
import AboutUs from "pages/AboutUs/AboutUs";
import Community from "pages/Community/Community"; //게시판 페이지
import WriteCommunity from "pages/Community/WriteCommunity"; //게시판 글쓰기페이지
import BoardItem from "components/Community/BoardItem";
import Map from "pages/Map/Map";
import NotFound from "pages/NotFound/NotFound";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          <>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/:index" element={<Community />} />
            <Route path="/writeCommunity" element={<WriteCommunity />} />
            <Route path="/map" element={<Map />} />
          </>
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
