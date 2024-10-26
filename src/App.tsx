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
import Dashboard from "./components/Dashboard";
import EssayList from "./components/Essay/EssayList";
import EssayShow from "./components/Essay/EssayShow";
import HelpIcon from "@mui/icons-material/Help";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import Layout from "./components/GNB";
import ManagerList from "./components/Manager/ManagerList";
import ManagerShow from "./components/Manager/ManagerShow";
import MyPage from "./components/MyPage";
import { NoticeList } from "./components/Notice/NoticeList";
import PersonIcon from "@mui/icons-material/Person";
import QnaList from "./components/QnA/QnaList";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import UserList from "./components/User/UserList";
import UserShow from "./components/User/UserShow";
import Version from "./components/Version";
import authProvider from "./auth/authProvider";
import customDataProvider from "./services/dataProvider";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Admin
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
        name="notices"
        list={NoticeList}
        icon={AnnouncementIcon}
        options={{ label: "공지사항" }}
      />
      <Resource
        name="inquiries"
        list={QnaList}
        icon={HelpIcon}
        options={{ label: "QnA" }}
      />
      <Resource
        name="managers"
        list={ManagerList}
        show={ManagerShow}
        icon={SupervisorAccountIcon}
        options={{ label: "관리자 목록" }}
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
