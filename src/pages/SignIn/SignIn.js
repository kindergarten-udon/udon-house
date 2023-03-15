import { LoginRegisterButton, SocialButtons } from "components/SignIn/LogInButton";
import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";
import { auth } from "util/fbase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  //firebase
  const [user, setUser] = useState({});
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  function onChange(event) {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  //GSAP
  const gomImageRef = useRef(null);
  const backgroundImageRef = useRef(null);
  const udonHouseLogoRef = useRef(null);
  const birdRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline();

    tl.fromTo(gomImageRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(backgroundImageRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5")
      .fromTo(udonHouseLogoRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5")
      .fromTo(birdRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.5")
      .fromTo(formRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.5");
  }, []);
  return (
    <div className="w-full bg-main-color h-[1080px] p-0 m-0">
      <h2 className="overflow-hidden whitespace-normal w-px m--px">로그인</h2>
      <img className="w-[547px] h-[367.08px] absolute left-0 top-0 opacity-50" src="/mainShape1.svg" alt="배경 이미지1" />
      <img className="lg:w-[800px] lg:h-[846px] w-0 h-0 absolute right-0 top-[260px] bottom-0 opacity-50" src="/mainShape2.svg" alt="배경 이미지2" />
      <img ref={backgroundImageRef} className="w-0 h-0 lg:w-[500px] lg:h-[600px] absolute inline-blcok p-0 m-0 top-[400px] right-[-73px]" src="/BackgroundImage.svg" alt="곰과 악어가 있는 이미지" />
      <img ref={gomImageRef} className="w-0 h-0 lg:w-[200px] lg:h-[300px] relative lg:left-[400px] top-[300px] opacity-0" src="/gomImage.svg" alt="빼꼼 곰 이미지" />
      <img ref={birdRef} className="w-[100px] h-[100px] relative inline-block bottom-[180px] right-[200px] opacity-0" src="/bird2.svg" alt="새 이미지" />
      <img ref={udonHouseLogoRef} className="relative m-auto block w-[212px] h-[72px] lg:bottom-[350px] opacity-0" src="/udonHouseLogo.svg" alt="우리 동네 어린이집 로고" />
      <div className="lg:w-full lg:h-full  lg:justify-center lg:items-center lg:flex inline-block">
        <form ref={formRef} className="mt-[100px] md:w-[500px] bottom-[600px] lg:w-[580px] lg:relative border-solid border-[1px] rounded-[10px] drop-shadow-lg bg-[#FFFFF3] opacity-0">
          <div className=" w-[450px] h-[80px] relative m-auto block pt-[40px] pb-[100px]">
            <span className="flex right-[200px]">이메일</span>
            <input className="w-[450px] h-[45px] rounded-[10px] pl-[10px] border-solid border-[1px] " name="email" placeholder="아이디" onChange={onChange} />
          </div>
          <div className=" w-[450px] h-[80px] relative m-auto block ">
            <span className="flex right-[200px]">비밀번호</span>
            <input className="w-[450px] h-[45px] rounded-[10px] pl-[10px] border-solid border-[1px]" name="password" placeholder="비밀번호" onChange={onChange} />
          </div>

          <div className="w-[450px] h-[80px] pt-[20px] pb-[25px]relative m-auto inline-block ">
            <button className="w-[450px] h-[45px] rounded-[10px] bg-gray-400  hover:bg-btn-green-color border-solid " onClick={login}>
              로그인
            </button>
          </div>
          <button className="w-[10px]" onClick={logout}>
            out
          </button>
          <div className="w-[450px] h-[80px] pt-[20px] relative m-auto block">
            <button className="w-[450px] h-[45px] rounded-[10px] bg-btn-green-color border-solid " onClick={handleSignUp}>
              회원가입
            </button>
          </div>
          <div className=" pt-[50px] pb-[40px]">
            <button className="pr-[70px]">
              <FcGoogle className="w-[50px] h-[50px] rounded-[30px] opacity-1" />
            </button>
            <button>
              <AiFillGithub className="w-[50px] h-[50px] rounded-[30px]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
