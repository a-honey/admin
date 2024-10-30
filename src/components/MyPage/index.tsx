import Editing from "./Editing";
import getMyInfo from "../../services/auth/getMyInfo";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const MyPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { data } = useQuery({
    queryFn: () => {
      return getMyInfo();
    },
    queryKey: ["my"],
  });

  if (!data) return null;

  const { profileImage, name, email, info } = data;

  if (isEditing) return <Editing {...data} />;

  return (
    <div style={{ margin: "30px" }}>
      <button
        onClick={() => {
          setIsEditing(true);
        }}
      >
        편집하기
      </button>
      <div>{profileImage && <img src={profileImage} width={200} />}</div>
      <input type="file" />
      <div>{name}</div>
      <div>{email}</div>
      <div>{info}</div>
    </div>
  );
};

export default MyPage;
