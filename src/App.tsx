import "./styles/globals.css";

import {
  Admin,
  CustomRoutes,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import { Datagrid, EmailField, List, TextField } from "react-admin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Administrator from "./components/Administrator";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import BookIcon from "@mui/icons-material/Book";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Dashboard from "./components/Dashboard";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import EssayList from "./components/Essay/EssayList";
import EssayShow from "./components/Essay/EssayShow";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GeulroquisList from "./components/Geulroquis/GeulroquisList";
import HelpIcon from "@mui/icons-material/Help";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import Layout from "./components/GNB";
import ManagerList from "./components/Manager/ManagerList";
import ManagerShow from "./components/Manager/ManagerShow";
import MyPage from "./components/MyPage";
import { NoticeList } from "./components/Notice/NoticeList";
import NoticeShow from "./components/Notice/NoticeShow";
import PersonIcon from "@mui/icons-material/Person";
import QnaList from "./components/QnA/QnaList";
import QnaShow from "./components/QnA/QnaShow";
import ReleaseList from "./components/Releases/ReleaseList";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ThemeList from "./components/Theme/ThemeList";
import ThemeShow from "./components/Theme/ThemeShow";
import UserList from "./components/User/UserList";
import UserShow from "./components/User/UserShow";
import Version from "./components/Version";
import authProvider from "./auth/authProvider";
import customDataProvider from "./services/dataProvider";

const queryClient = new QueryClient();

const theme = {
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "Pretendard",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
};
export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Admin
      theme={theme}
      layout={Layout}
      dataProvider={customDataProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
    >
      <Resource
        name="users"
        list={UserList}
        show={UserShow}
        icon={PersonIcon}
        options={{ label: "사용자 목록" }}
      />
      <Resource
        name="essays"
        list={EssayList}
        show={EssayShow}
        icon={BookIcon}
        options={{ label: "에세이 목록" }}
      />
      <Resource
        name="releases"
        list={ReleaseList}
        icon={FolderOpenIcon}
        options={{ label: "릴리즈 목록" }}
      />
      <Resource
        name="notices"
        list={NoticeList}
        icon={AnnouncementIcon}
        show={NoticeShow}
        options={{ label: "공지사항" }}
      />
      <Resource
        name="inquiries"
        list={QnaList}
        show={QnaShow}
        icon={HelpIcon}
        options={{ label: "문의사항" }}
      />
      <Resource
        name="managers"
        list={ManagerList}
        show={ManagerShow}
        icon={SupervisorAccountIcon}
        options={{ label: "관리자 목록" }}
      />
      <Resource
        name="geulroquis"
        list={GeulroquisList}
        show={ManagerShow}
        icon={CardGiftcardIcon}
        options={{ label: "글로키 목록" }}
      />
      <Resource
        name="themes"
        list={ThemeList}
        show={ThemeShow}
        icon={EmojiEmotionsIcon}
        options={{ label: "테마 목록" }}
      />

      <Resource
        name="version"
        list={Version}
        icon={HourglassFullIcon}
        options={{ label: "버전관리" }}
      />
      <Resource
        name="my-page"
        list={MyPage}
        icon={PersonIcon}
        options={{ label: "마이 페이지" }}
      />
      <Resource
        name="Administrator"
        list={Administrator}
        icon={AdminPanelSettingsIcon}
        options={{ label: "최고 관리자" }}
      />
    </Admin>
  </QueryClientProvider>
);
