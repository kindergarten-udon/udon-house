import gsap from "gsap";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { auth } from "util/fbase";
import { signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  //유효성 검사
  const [isPassword, setIsPassword] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  //오류 메세지
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  //input
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  //비밀번호 타입 text or password
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));

    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,25}$/;

    if (name === "email") {
      if (!emailRegex.test(value)) {
        setEmailMessage("이메일 형식이 아닙니다.");
        setIsEmail(false);
      } else {
        setEmailMessage("올바른 이메일 형식입니다 :)");
        setIsEmail(true);
      }
    } else if (name === "password") {
      if (!passwordRegex.test(value)) {
        setPasswordMessage("숫자/문자/특수문자 조합으로 6자 이상 설정해주세요.");
        setIsPassword(false);
      } else {
        setPasswordMessage("올바른 비밀번호 형식입니다 :)");
        setIsPassword(true);
      }
    }
  }, []);

  //input 요소의 유효성 검사 결과에 따라 ifFormValid 업데이트 -> disabled 처리 하기 위해서
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (isPassword && isEmail) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isEmail, isPassword]);

  //로그인 버튼 -> 로그인 되었을때 메인페이지, 실패시 alert창
  const navigate = useNavigate("");
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      alert("로그인 되었습니다");
      navigate("/");
    } catch (error) {
      console.log(error.message);
      alert("로그인 실패했습니다");
    }
  };

  //submit 버튼 함수
  async function handleSubmit(e) {
    e.preventDefault();
  }

  //회원가입페이지로 이동 하는 버튼
  const handleSignUp = () => {
    navigate("/signup");
  };

  //소셜 로그인
  const signInWithProvider = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      alert("로그인 되었습니다.");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("로그인에 실패했습니다.");
    }
  };

  const signInWithGoogle = () => {
    signInWithProvider(new GoogleAuthProvider());
  };

  const signInWithGithub = () => {
    signInWithProvider(new GithubAuthProvider());
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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="w-full h-screen bg-main-color">
      <h2 className="sr-only">로그인</h2>
      <img className="lg:w-[31rem] h-2/5 left-0 top-0 opacity-50 md:w-80 sm:w-80 " src="/mainShape1.svg" alt="배경 이미지1" />
      <img ref={udonHouseLogoRef} className=" center h-20 bottom-52 opacity-0" src="/main3Logo.svg" alt="우리 동네 어린이집 로고" />
      <img ref={birdRef} className="animate-bounce birdSize lnline-block relative bottom-56 left-[38rem] " src="/bird2.svg" alt="새 이미지" />
      {/* <img ref={gomImageRef} className="lg:w-36 w-0 relative bottom-30 right-[500px] pr-2.5 z-[1000] inline-block" src="/gomImage.svg" alt="빼꼼 곰 이미지" /> */}
      <img ref={backgroundImageRef} className=" bgSize inline-block absolute p-0 m-0 bottom-0 right-[-1rem] z-[10]" src="/BackgroundImage.svg" alt="곰과 악어가 있는 이미지" />
      <img className=" shapeSize absolute right-0  bottom-0 opacity-50 z-0" src="/mainShape2.svg" alt="배경 이미지2" />
      <form className="formBottom center w-[32rem] formBorder bg-[#FFFFF3] px-2.5 z-[10]" onSubmit={handleSubmit}>
        <div className=" w-[28rem] h-20  inline-block pt-10 pb-24">
          <span className="spanStyle">이메일</span>
          <input className="inputStyle" name="email" placeholder="이메일" onChange={handleChange} />
          {email.length > 0 && <span className={`message ${isEmail ? "success successFont" : "error errorFont"}`}>{emailMessage}</span>}
        </div>
        <div className="loginDivStyle ">
          <span className="spanStyle">비밀번호</span>

          <input className="inputStyle" type={showPassword ? "text" : "password"} name="password" placeholder="비밀번호" onChange={handleChange} />
          <button className="eyeButton bottom-7" onClick={toggleShowPassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          {password.length > 0 && <span className={`message ${isPassword ? "success successFont" : "error errorFont"}`}>{passwordMessage}</span>}
        </div>

        <div className="loginDivStyle pt-10 pb-6 ">
          <button className={"loginButtonStyle  " + (!isFormValid ? "bg-gray-400" : "bg-btn-green-color")} onClick={login} disabled={!isFormValid} type="submit">
            로그인
          </button>
        </div>
        <div className="loginDivStyle pt-10">
          <button className="loginButtonStyle  bg-gray-400  hover:bg-btn-green-color border-solid " onClick={handleSignUp}>
            회원가입
          </button>
        </div>
        <div className="pt-7 pb-3.5">
          <button className="mr-16" onClick={signInWithGoogle} name="google" value="google" type="button">
            <FcGoogle className="socialIcon" />
          </button>
          <button onClick={signInWithGithub} name="github" value="github" type="button">
            <AiFillGithub className="socialIcon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
