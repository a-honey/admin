import AuthLayout from "../AuthLayout";
import postRegister from "../../../services/auth/postRegister";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [body, setBody] = useState({ email: "", password: "", name: "" });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await postRegister(body);
      alert("관리자 계정 요청이 완료되었습니다.");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthLayout>
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          value={body.email}
          onChange={(e) =>
            setBody((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          name="name"
          type="name"
          placeholder="이름을 입력해주세요"
          value={body.name}
          onChange={(e) => {
            setBody((prev) => ({ ...prev, name: e.target.value }));
          }}
        />

        <input
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={body.password}
          onChange={(e) => {
            setBody((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
        <button className="bg-[#181F47] hover:bg-[#747474] text-white p-[10px] rounded-[8px]">
          로그인
        </button>
      </form>
      <div
        className="underline text-center"
        onClick={() => {
          navigate("/login");
        }}
      >
        관리자 계정이 있으신가요?
      </div>
    </AuthLayout>
  );
};
export default Register;
