import gsap from "gsap";
import { auth } from "util/fbase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  //GSAP
  const gomImageRef = useRef(null);
  const backgroundImageRef = useRef(null);
  const udonHouseLogoRef = useRef(null);
  const birdRef = useRef(null);
  const formRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const [emailExist, setEmailExist] = useState(false);

  // 정규식
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

  // 중복검사
  const checkEmailExists = async () => {
    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length == 1) {
        alert("이미 사용중인 이메일 입니다");
        setEmailExist(false);
      } else {
        alert("사용가능한 이메일 입니다.");
        setEmailExist(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPW") {
      setConfirmPW(value);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(gomImageRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(backgroundImageRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5")
      .fromTo(udonHouseLogoRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5")
      .fromTo(birdRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.5")
      .fromTo(formRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.5");
  }, []);

  // 회원가입
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  // 회원가입시 로그인화면으로이동
  const signupBtn = () => {
    register();
    alert("회원가입 완료!");
    navigate("/signin");
  };
  return (
    <div className="w-full bg-main-color h-[1080px] p-0 m-0">
      <h2 className="overflow-hidden whitespace-normal w-px m--px">회원가입</h2>
      <img className="w-[547px] h-[367.08px] absolute left-0 top-0 opacity-50" src="/mainShape1.svg" alt="배경 이미지1" />
      <img className="lg:w-[800px] lg:h-[846px] w-0 h-0 absolute right-0 top-[260px] bottom-0 opacity-50" src="/mainShape2.svg" alt="배경 이미지2" />
      <img ref={backgroundImageRef} className="w-0 h-0 lg:w-[500px] lg:h-[600px] absolute inline-blcok p-0 m-0 top-[400px] right-[-73px]" src="/BackgroundImage.svg" alt="곰과 악어가 있는 이미지" />
      <img ref={gomImageRef} className="w-0 h-0 lg:w-[200px] lg:h-[300px] relative lg:left-[400px] top-[300px] lg:opacity-0" src="/gomImage.svg" alt="빼꼼 곰 이미지" />
      <img ref={birdRef} className="w-[100px] h-[100px] relative inline-block bottom-[180px] right-[200px] md:opacity-0" src="/bird2.svg" alt="새 이미지" />
      <img ref={udonHouseLogoRef} className="relative m-auto block w-[212px] h-[72px] lg:bottom-[350px] opacity-0" src="/udonHouseLogo.svg" alt="우리 동네 어린이집 로고" />
      <div className="lg:w-full lg:h-full  lg:justify-center lg:items-center lg:flex inline-block">
        <form onSubmit={handleOnSubmit} ref={formRef} className="mt-[100px] md:w-[500px] bottom-[610px] lg:w-[580px] lg:relative border-solid border-[1px] rounded-[10px] drop-shadow-lg bg-[#FFFFF3] opacity-0  pl-[10px] pr-[10px] pb-[100px]">
          <div className=" w-[450px] h-[80px] relative m-auto block pt-[50px]">
            <span className="relative right-[200px] pl-[10px]">이메일</span>
            <input onChange={onChange} className="w-[450px] h-[45px] rounded-[10px] pl-[10px] border-solid border-[1px]" name="email" type="email" label="이메일" placeholder="아이디" />
          </div>
          <div className="w-[100px] h-[45px] relative m-auto block">
            <button type="button" disabled={emailRegex == false} onClick={checkEmailExists} className="w-[100px] h-[45px] rounded-r disabled:bg-gray-400  border-solid absolute bottom-[6px] left-[175px] bg-btn-green-color">
              중복확인
            </button>
          </div>
          {email !== "" && emailRegex === false && <span>email@text.com형태로 입력해주세요</span>}
          <div className="w-[450px] h-[80px] relative m-auto block pt-[20px]">
            <span className="relative right-[200px] pl-[15px]">비밀번호</span>
            <input onChange={onChange} className="font-black w-[450px] h-[45px] rounded-[10px] pl-[10px] border-solid border-[1px]" name="password" label="패스워드" placeholder="비밀번호" />
            {password !== "" && pwRegex === false && <span>@$!%*#?&를 포함하여 7글자 이상 비밀번호를 입력주세요.</span>}
          </div>
          <div className="w-[450px] h-[80px] relative m-auto block pt-[30px]">
            <span className="relative right-[200px] pl-[43px]">비밀번호 확인</span>
            <input onChange={onChange} className="w-[450px] h-[45px] rounded-[10px] pl-[10px] border-solid border-[1px]" name="confirmPW" label="패스워드" placeholder="비밀번호 확인" />
            {confirmPW !== "" && password !== confirmPW && <span>위에 입력한 비밀번호와 다릅니다</span>}
          </div>
          <div className="w-[450px] h-[80px] pt-[60px] m-auto block">
            <button
              onClick={signupBtn}
              type="submit"
              disabled={(email, password, confirmPW) == "" || emailExist == false || (emailRegex, pwRegex) === false || password !== confirmPW}
              className="w-[450px] h-[45px]rounded-[10px] border-solid bg-btn-green-color disabled:bg-gray-400"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
