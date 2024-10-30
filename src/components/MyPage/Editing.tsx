import { ManagerType } from "../Manager";
import updateProfileImage from "../../services/auth/updateProfileImage";
import updateProfileInfo from "../../services/auth/updateProfileInfo";
import { useState } from "react";

const Editing = ({ profileImage, name, email, info }: ManagerType) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(profileImage);
  const [body, setBody] = useState({
    name,
    email,
    info: info ?? "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBody((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (file && profileImage !== preview) {
        updateProfileImage(file);
      }
      updateProfileInfo(body);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "30px" }}>
      <button type="submit">편집하기</button>
      <label>프로필 변경</label>
      {preview && (
        <img
          src={preview}
          alt="Profile Preview"
          style={{ width: "100px", height: "100px", marginTop: "10px" }}
        />
      )}
      <button
        type="button"
        onClick={() => {
          setFile(null);
          setPreview(profileImage);
        }}
      >
        기존 프로필 불러오기
      </button>
      <input type="file" onChange={handleFileChange} />
      <div>
        <label>이름</label>
        <input
          name="name"
          value={body.name}
          onChange={handleInputChange}
          placeholder="name"
        />
      </div>
      <div>
        <label>이메일</label>
        <input
          name="email"
          value={body.email}
          onChange={handleInputChange}
          placeholder="email"
        />
      </div>
      <div>
        <label>소개</label>
        <input
          name="info"
          value={body.info}
          onChange={handleInputChange}
          placeholder="info"
        />
      </div>
      <div>
        <label>비밀번호 변경</label>
        <input
          name="password"
          type="password"
          value={body.password}
          onChange={handleInputChange}
          placeholder="새로운 비밀번호를 입력해주세요."
        />
      </div>
    </form>
  );
};

export default Editing;
