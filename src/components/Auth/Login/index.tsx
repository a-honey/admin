import { useLogin, useNotify } from "react-admin";

import AuthLayout from "../AuthLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, password }).catch(() => notify("Invalid email or password"));
  };

  return (
    <AuthLayout>
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-[#181F47] hover:bg-[#747474] text-white p-[10px] rounded-[8px]">
          로그인
        </button>
      </form>
      <div
        className="underline text-center"
        onClick={() => {
          navigate("/register");
        }}
      >
        관리자 계정이 없으신가요?
      </div>
    </AuthLayout>
  );
};

export default Login;
