import gsap from "gsap";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { auth } from "util/fbase";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
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

  //유효성 검사 함수
  const handleEmailChange = useCallback((event) => {
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = event.target.value;
    setInputs((inputs) => ({
      ...inputs,
      email: emailCurrent,
    }));

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸습니다. 다시 확인해주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다 :)");
      setIsEmail(true);
    }
  }, []);

  const handlePassWordChange = useCallback((event) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,25}$/;
    const passwordCurrent = event.target.value;
    setInputs((inputs) => ({
      ...inputs,
      password: passwordCurrent,
    }));

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("숫자/문자/특수문자 조합으로 6자 이상 설정해주세요.");
      setIsPassword(false);
    } else {
      setPasswordMessage("올바른 비밀번호 형식 입니다:)");
      setIsPassword(true);
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

  //로그인 상태 알아보기
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  //로그아웃
  const logout = async () => {
    await signOut(auth);
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

  return (
    <div className="w-full bg-main-color h-[1080px] p-0 m-0">
      <h2 className="overflow-hidden whitespace-normal w-px m--px">로그인</h2>
      <img className="w-[547px] h-[367.08px] absolute left-0 top-0 opacity-50" src="/mainShape1.svg" alt="배경 이미지1" />
      <img className="lg:w-[800px] lg:h-[846px] w-0 h-0 absolute right-0 top-[260px] bottom-0 opacity-50" src="/mainShape2.svg" alt="배경 이미지2" />
      <img ref={backgroundImageRef} className="w-0 h-0 lg:w-[500px] lg:h-[600px] absolute inline-blcok p-0 m-0 top-[400px] right-[-73px]" src="/BackgroundImage.svg" alt="곰과 악어가 있는 이미지" />
      <img ref={gomImageRef} className="w-0 h-0 lg:w-[200px] lg:h-[300px] relative lg:left-[400px] top-[300px] opacity-0" src="/gomImage.svg" alt="빼꼼 곰 이미지" />
      <img ref={birdRef} className="animate-bounce w-[100px] h-[100px] relative inline-block bottom-[180px] right-[200px] opacity-0" src="/bird2.svg" alt="새 이미지" />
      <img ref={udonHouseLogoRef} className="relative m-auto block w-[212px] h-[72px] lg:bottom-[350px] opacity-0" src="/udonHouseLogo.svg" alt="우리 동네 어린이집 로고" />
      <div className="lg:w-full lg:h-full  lg:justify-center lg:items-center lg:flex inline-block">
        <form ref={formRef} className="mt-[100px] md:w-[500px] bottom-[600px] lg:w-[580px] lg:relative border-solid border-[1px] rounded-[10px] drop-shadow-lg bg-[#FFFFF3] opacity-0" onSubmit={handleSubmit}>
          <div className=" w-[450px] h-[80px] relative m-auto block pt-[40px] pb-[100px]">
            <span className="flex right-[200px]">이메일</span>
            <input className="w-[450px] h-[45px] rounded-[10px] pl-[10px] border-solid border-[1px] " name="email" placeholder="이메일" onChange={handleEmailChange} />
            {email.length > 0 && <span className={`message ${isEmail ? "success" : "error"}`}>{emailMessage}</span>}
          </div>
          <div className=" w-[450px] h-[80px] relative m-auto block ">
            <span className="flex right-[200px]">
              비밀번호{" "}
              <button className="pl-[10px]" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </span>

            <input className="w-[450px] h-[45px] rounded-[10px] pl-[10px] border-solid border-[1px]" type={showPassword ? "text" : "password"} name="password" placeholder="비밀번호" onChange={handlePassWordChange} />
            {password.length > 0 && <span className={`message ${isPassword ? "success" : "error"}`}>{passwordMessage}</span>}
          </div>

          <div className="w-[450px] h-[80px] pt-[20px] pb-[25px]relative m-auto inline-block ">
            <button className="w-[450px] h-[45px] rounded-[10px] bg-gray-400  border-solid " onClick={login} disabled={!isFormValid} type="submit">
              로그인
            </button>
          </div>
          <div className="w-[450px] h-[80px] pt-[20px] relative m-auto block">
            <button className="w-[450px] h-[45px] rounded-[10px]  bg-gray-400  hover:bg-btn-green-color border-solid " onClick={handleSignUp}>
              회원가입
            </button>
          </div>
          <div className=" pt-[50px] pb-[40px]">
            <button className="pr-[70px]" onClick={signInWithGoogle} name="google" value="google" type="button">
              <FcGoogle className="w-[50px] h-[50px] rounded-[30px] opacity-1" />
            </button>
            <button onClick={signInWithGithub} name="github" value="github" type="button">
              <AiFillGithub className="w-[50px] h-[50px] rounded-[30px]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
