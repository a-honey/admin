import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import { Datagrid, EmailField, List, TextField } from "react-admin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import BookIcon from "@mui/icons-material/Book";
import EssayList from "./components/Essay/EssayList";
import HelpIcon from "@mui/icons-material/Help";
import Layout from "./components/GNB";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import UserList from "./components/User/UserList";
import authProvider from "./auth/authProvider";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Admin layout={Layout} authProvider={authProvider}>
      <Resource
        name="User"
        list={UserList}
        icon={PersonIcon}
        options={{ label: "사용자 목록" }}
      />
      <Resource
        name="Essay"
        list={EssayList}
        icon={BookIcon}
        options={{ label: "에세이 목록" }}
      />
      <Resource
        name="Notice"
        list={NoticeList}
        icon={AnnouncementIcon}
        options={{ label: "공지사항" }}
      />
      <Resource
        name="Questions"
        list={QuestionsList}
        icon={HelpIcon}
        options={{ label: "QnA" }}
      />
      <Resource
        name="Manager"
        list={ManagerList}
        icon={SupervisorAccountIcon}
        options={{ label: "관리자 목록" }}
      />
      <Resource
        name="Administrator"
        list={ManagerList}
        icon={AdminPanelSettingsIcon}
        options={{ label: "최고 관리자" }}
      />
    </Admin>
  </QueryClientProvider>
);

export const NoticeList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
    </Datagrid>
  </List>
);

export const QuestionsList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="question" />
      <TextField source="answer" />
    </Datagrid>
  </List>
);

const ManagerList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
