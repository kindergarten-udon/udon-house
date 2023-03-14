import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

export const LogInButton = () => {
  return (
    <div className="w-[450px] h-[80px] pt-[75px] relative m-auto inline-block ">
      <button className="w-[450px] h-[45px] rounded-[10px] bg-gray-400  hover:bg-btn-green-color border-solid " type="submit">
        로그인
      </button>
    </div>
  );
};

export const SocialButtons = () => {
  return (
    <div className=" pt-[50px] pb-[40px]">
      <button className="pr-[70px]">
        <FcGoogle className="w-[50px] h-[50px] rounded-[30px] opacity-1" />
      </button>
      <button>
        <AiFillGithub className="w-[50px] h-[50px] rounded-[30px]" />
      </button>
    </div>
  );
};

export const LoginRegisterButton = () => {
  return (
    <div className="w-[450px] h-[80px] pt-[50px] relative m-auto block">
      <button className="w-[450px] h-[45px] rounded-[10px] bg-btn-green-color border-solid  " type="button">
        회원가입
      </button>
    </div>
  );
};
