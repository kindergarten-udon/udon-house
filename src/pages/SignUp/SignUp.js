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

  const handlePasswordConfirm = useCallback(
    (event) => {
      const passwordConfirmCurrent = event.target.value;
      setInputs((inputs) => ({
        ...inputs,
        passwordConfirm: passwordConfirmCurrent,
      }));

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호를 똑같이 입력했어요 : )");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호를 다시 입력해주세요.");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

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
    <div className="w-full bg-main-color h-[1080px] p-0 m-0">
      <h2 className="overflow-hidden whitespace-normal w-px m--px">회원가입</h2>
      <img className="w-[547px] h-[367.08px] absolute left-0 top-0 opacity-50" src="/mainShape1.svg" alt="배경 이미지1" />
      <img className="lg:w-[800px] lg:h-[846px] w-0 h-0 absolute right-0 top-[260px] bottom-0 opacity-50" src="/mainShape2.svg" alt="배경 이미지2" />
      <img ref={backgroundImageRef} className="w-0 h-0 lg:w-[500px] lg:h-[600px] absolute inline-blcok p-0 m-0 top-[400px] right-[-73px]" src="/BackgroundImage.svg" alt="곰과 악어가 있는 이미지" />
      <img ref={gomImageRef} className="w-0 h-0 lg:w-[200px] lg:h-[300px] relative lg:left-[400px] top-[300px] lg:opacity-0" src="/gomImage.svg" alt="빼꼼 곰 이미지" />
      <img ref={birdRef} className="animate-bounce w-[100px] h-[100px] relative inline-block bottom-[180px] right-[200px] md:opacity-0" src="/bird2.svg" alt="새 이미지" />
      <img ref={udonHouseLogoRef} className="relative m-auto block w-[212px] h-[72px] lg:bottom-[350px] opacity-0" src="/udonHouseLogo.svg" alt="우리 동네 어린이집 로고" />
      <div className="lg:w-full lg:h-full  lg:justify-center lg:items-center lg:flex inline-block">
        <form ref={formRef} className="mt-[100px] md:w-[500px] bottom-[610px] lg:w-[580px] lg:relative border-solid border-[1px] rounded-[10px] drop-shadow-lg bg-[#FFFFF3] opacity-0  pl-[10px] pr-[10px] pb-[100px] z-[1000]" onSubmit={handleSubmit}>
          <div className=" w-[450px] h-[80px] relative m-auto block pt-[50px]">
            <span className="flex right-[200px]">이메일</span>
            <input className="w-[450px] h-[45px] rounded-[10px] pl-[10px] border-solid border-[1px]" name="email" placeholder="이메일" onChange={handleEmailChange} />
            {email.length > 0 && <span className={`message ${isEmail ? "success" : "error"}`}>{emailMessage}</span>}
          </div>
          <div className="w-[100px] h-[45px] relative m-auto block">
            <button className="w-[100px] h-[45px] rounded-r bg-gray-400  border-solid absolute bottom-[6px] left-[175px] " type="button" onClick={checkEmailExists} disabled={!email}>
              중복확인
            </button>
            <span className="block absolute bottom-[50px]">{emailCheck ? "중복확인 완료!" : "중복확인 필수!"}</span>
          </div>

          <div className=" w-[450px] h-[80px] relative m-auto block pt-[20px]">
            <span className="flex right-[200px]">
              비밀번호{" "}
              <button className="pl-[10px]" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </span>
            <input className="w-[450px] h-[45px] rounded-[10px] pl-[10px] border-solid border-[1px]" type={showPassword ? "text" : "password"} name="password" placeholder="비밀번호" onChange={handlePassWordChange} />
            {password.length > 0 && <span className={`message ${isPassword ? "success" : "error"}`}>{passwordMessage}</span>}
          </div>
          <div className=" w-[450px] h-[80px] relative m-auto block pt-[30px]">
            <span className="flex right-[200px]">비밀번호 확인</span>
            <input className="w-[450px] h-[45px] rounded-[10px] pl-[10px] border-solid border-[1px]" type={showPassword ? "text" : "password"} name="passwordConfirm" placeholder="비밀번호 확인" onChange={handlePasswordConfirm} />
            {passwordConfirm.length > 0 && <span className={`message ${isPasswordConfirm ? "success" : "error"}`}>{passwordConfirmMessage}</span>}
          </div>
          <div className="w-[450px] h-[80px] pt-[60px] relative m-auto block ">
            <button className="w-[450px] h-[45px] rounded-[10px] bg-gray-400 border-solidr" onClick={signupButton} type="submit" disabled={!isFormValid}>
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
