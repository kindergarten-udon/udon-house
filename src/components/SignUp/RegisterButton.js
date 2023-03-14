export const RegisterButton = () => {
  return (
    <div className="w-[450px] h-[80px] pt-[60px] relative m-auto block">
      <button className="w-[450px] h-[45px] rounded-[10px] bg-gray-400 border-solid hover:bg-btn-green-color" type="button">
        회원가입
      </button>
    </div>
  );
};

export const VerificationButton = () => {
  return (
    <div className="w-[100px] h-[45px] relative m-auto block">
      <button className="w-[100px] h-[45px] rounded-r bg-gray-400  border-solid absolute bottom-[6px] left-[175px]  hover:bg-btn-green-color" type="button">
        중복확인
      </button>
    </div>
  );
};
