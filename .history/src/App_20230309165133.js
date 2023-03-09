import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Main from "pages/Main/Main";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import SignUP from "./pages/SignUp/SignUP";
import SignIn from "pages/SignIn/SignIn";
import AboutUs from "pages/AboutUs/AboutUs";
import Community from "pages/Community/Community";
import Map from "pages/Map/Map";
import NotFound from "pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <>
        <div className="flex flex-col">
          <Link className="text-red-500" to="/">
            홈
          </Link>
          <Link className="text-balck" to="/main">
            메인가기
          </Link>
          <Link className="text-blue-500" to="/signup">
            회원가입
          </Link>
          <Link className="text-green-500" to="/signin">
            로그인
          </Link>
          <Link className="text-gray-500" to="/aboutus">
            어바웃어스
          </Link>
          <Link className="text-violet-500" to="/community">
            커뮤니티
          </Link>
          <Link className="text-orange-500" to="/map">
            어린이정보
          </Link>
        </div>
        <Header/>
        <Routes>
          <>
            <Route path="/main" element={<Main />} />
            <Route path="/signup" element={<SignUP />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/community" element={<Community />} />
            <Route path="/map" element={<Map />} />
            <Route path="*" element={<NotFound />} />
          </>
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
