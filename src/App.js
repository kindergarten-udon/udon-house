import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Main from "pages/Main/Main";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import SignUP from "pages/SignUp/SignUP";
import SignIn from "pages/SignIn/SignIn";
import AboutUs from "pages/AboutUs/AboutUs";
import Community from "pages/Community/Community";
import Map from "pages/Map/Map";
import NotFound from "pages/NotFound/NotFound";
import { useEffect, useState } from "react";

function App() {
  let [res, setRes] = useState(window.location.href.slice(-10));

  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          <>
            <Route path="/main" element={<Main />} />
            <Route path="/signup" element={<SignUP />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/community" element={<Community />} />
            <Route path="/map" element={<Map />} />
          </>
        </Routes>
        {/* {(() => {
          useEffect(() => {
            setRes(window.location.href.slice(-10));
          }, []);

          // let result = window.location.href.slice(-10);
          if (!res.includes("main")) {
            return <Footer />;
          }
          // if (!window.location.href.includes("main")) {
          //   return <Footer />;
          // }
        })()} */}

        <Footer />
      </>
    </div>
  );
}

export default App;
