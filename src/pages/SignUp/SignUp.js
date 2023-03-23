import gsap from "gsap";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "util/fbase";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  //유효성 검사
  const [isPassword, setIsPassword] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  //오류 메세지
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  //input
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { email, password, passwordConfirm } = inputs;

  //비밀번호 타입 text or password
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setInputs((prevInputs) => ({
        ...prevInputs,
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
          return;
        }
      } else if (name === "passwordConfirm") {
        if (value !== inputs.password) {
          setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
          setIsPasswordConfirm(false);
        } else {
          setPasswordConfirmMessage("비밀번호가 일치합니다 :)");
          setIsPasswordConfirm(true);
        }
      }
    },
    [password]
  );
  useEffect(() => {}, [inputs.password]);

  const [emailCheck, setEmailCheck] = useState("");
  const checkEmailExists = async () => {
    try {
      const result = await fetchSignInMethodsForEmail(auth, email);
      // 사용자가 존재하지 않으면 에러가 발생하므로 에러 핸들링 필요
      if (result.length > 0) {
        // 이미 있는 사용자인 경우 true 반환
        alert("이미 사용중인 이메일 입니다");
        setEmailCheck(false);
      } else {
        alert("사용 가능한 이메일 입니다.");
        setEmailCheck(true); // 없는 사용자인 경우 false 반환
      }
    } catch (error) {
      console.error(error);
    }
  };

  //input 요소의 유효성 검사 결과에 따라 isFormValid 업데이트 -> 버튼 disabled 처리
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (isPassword && isPasswordConfirm && isEmail && emailCheck) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isEmail, isPassword, isPasswordConfirm, emailCheck]);

  //회원가입
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  //회원가입 버튼 함수
  const navigate = useNavigate("");
  const signupButton = () => {
    register();
    alert("회원가입 되었습니다!");
    navigate("/");
  };

  async function handleSubmit(e) {
    e.preventDefault();
  }

  //GSAP
  const gomImageRef = useRef(null);
  const backgroundImageRef = useRef(null);
  const udonHouseLogoRef = useRef(null);
  const birdRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(gomImageRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(backgroundImageRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5")
      .fromTo(udonHouseLogoRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5")
      .fromTo(birdRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.5")
      .fromTo(formRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.5");
  }, []);

  return (
    <div className="w-full h-screen bg-main-color">
      <h2 className="sr-only">회원가입</h2>
      <img className="lg:w-[31rem] h-2/5 left-0 top-0 opacity-50 md:w-80 sm:w-80 " src="/mainShape1.svg" alt="배경 이미지1" />
      <div className="absoulte w-[clamp(300px,80vw,500px)] lg:w-[32rem] -translate-y-[250px] mb-10 lg:mb-20 mx-auto mt-5">
        <img ref={udonHouseLogoRef} className=" center h-20 top-2 opacity-0" src="/main3Logo.svg" alt="우리 동네 어린이집 로고" />
        <img ref={birdRef} className="animate-bounce max-sm:mt-8 max-sm:w-16 w-24 absolute right-5 " src="/bird2.svg" alt="새 이미지" />
      </div>
      <img ref={backgroundImageRef} className=" bgSize inline-block absolute p-0 m-0 bottom-0 right-[-1rem] z-[10]" src="/BackgroundImage.svg" alt="곰과 악어가 있는 이미지" />
      <img className=" shapeSize absolute right-0  bottom-0 opacity-50 z-0" src="/mainShape2.svg" alt="배경 이미지2" />
      <form ref={formRef} className="absoulte formBottom center w-[clamp(300px,80vw,500px)] lg:w-[32rem] formBorder bg-[#FFFFF3] px-6 z-[10]" onSubmit={handleSubmit}>
        <div className=" w-full h-24 center pt-10">
          <span className="flex ml-2">이메일</span>
          <div className="w-full h-10 relative ">
            <input className="inputStyle" name="email" placeholder="이메일" onChange={handleChange} />
            <button
              className={" absolute w-[6.25rem] h-[110%] rounded-r-xl border-2 bottom-[-0.18rem] right-0 text-sm lg:text-base border-solid opacity-1 " + (isEmail ? "bg-btn-green-color " : "bg-gray-400 block ")}
              type="button"
              onClick={checkEmailExists}
              disabled={!email}
            >
              중복확인
            </button>
          </div>
          {email.length > 0 && <span className={`message ${isEmail ? "success successFont" : "error errorFont"}`}>{emailMessage}</span>}
        </div>
        <div className=" loginDivStyle mt-10">
          <span className="flex ml-2">비밀번호 </span>
          <input className="inputStyle" type={showPassword ? "text" : "password"} name="password" placeholder="비밀번호" onChange={handleChange} />
          <div className="absolute right-0 top-9 z-10 text-right">
            <button className=" text-gray-500 mr-2" onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {password.length > 0 && <span className={`message ${isPassword ? "success successFont" : "error errorFont"}`}>{passwordMessage}</span>}
        </div>
        <div className="loginDivStyle">
          <span className="flex ml-2">비밀번호 확인</span>
          <input name="passwordConfirm" className="inputStyle" type={showPassword ? "text" : "password"} placeholder="비밀번호 확인" onChange={handleChange} />
          {passwordConfirm.length > 0 && <span className={`message ${isPasswordConfirm ? "success successFont" : "error errorFont"}`}>{passwordConfirmMessage}</span>}
        </div>
        <div className="loginDivStyle mt-16 mb-24  ">
          <button className={"loginButtonStyle border-solide w-full py-2 " + (!isFormValid ? "bg-gray-400" : "bg-btn-green-color")} onClick={signupButton} type="submit" disabled={!isFormValid}>
            회원가입
          </button>
        </div>
        <div className="absolute max-sm:w-0 top-0 -translate-x-[105%] z-0">
          <img ref={gomImageRef} className=" w-36 z-0" src="/gomImage.svg" alt="빼꼼 곰" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
