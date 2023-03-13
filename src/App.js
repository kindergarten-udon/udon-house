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
          <Link className="text-orange-500" to="/map">
            어린이정보
          </Link>
        </div>
        <Header />
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
      </>
    </div>
  );
}

export default App;
