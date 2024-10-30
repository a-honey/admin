import deleteNotice from "./notices/deleteNotice";
import getEssays from "./essays/getEssays";
import getGeulroquis from "./geulroquis/getGeulroquis";
import getManagers from "./managers/getManagers";
import getNotices from "./notices/getNotices";
import getOneEssay from "./essays/getOneEssay";
import getOneManager from "./managers/getOneManager";
import getOneNotice from "./notices/getOneNotice";
import getOneReport from "./reports/getOneReport";
import getOneTheme from "./theme/getOneTheme";
import getOneUser from "./users/getOneUser";
import getQuestions from "./questions/getQuestions";
import getReleases from "./release/getReleases";
import getReports from "./reports/getReports";
import getThemes from "./theme/getThemes";
import getUsers from "./users/getUsers";
import httpClient from "./httpClient";
import simpleRestProvider from "ra-data-simple-rest";

const dataProvider = simpleRestProvider("", httpClient);

const customDataProvider = {
  ...dataProvider,
  getList: (resource: string, params: any) => {
    if (resource === "users") return getUsers(params);
    if (resource === "essays") return getEssays(params);
    if (resource === "notices") return getNotices(params);
    if (resource === "managers") return getManagers(params);
    if (resource === "inquiries") return getQuestions(params);
    if (resource === "releases") return getReleases(params);
    if (resource === "geulroquis") return getGeulroquis(params);
    if (resource === "themes") return getThemes(params);
    if (resource === "reports") return getReports(params);
    return dataProvider.getList(resource, params);
  },

  getOne: (resource: any, params: any) => {
    if (resource === "essays") return getOneEssay(params);
    if (resource === "users") return getOneUser(params);
    if (resource === "managers") return getOneManager(params);
    if (resource === "notices") return getOneNotice(params);
    if (resource === "themes") return getOneTheme(params);
    if (resource === "reports") return getOneReport(params);

    const url = `/${resource}/${params.id}`;
    return httpClient(url).then(({ json }) => ({
      data: json.data,
    }));
  },
  delete: (resource: any, params: any) => {
    const confirmed = window.confirm("정말 삭제하시겠습니까?");

    if (confirmed) {
      if (resource === "notices") return deleteNotice(params);
      const url = `/${resource}/${params.id}`;
      return httpClient(url).then(({ json }) => ({
        data: json.data,
      }));
    } else {
      return Promise.reject();
    }
  },

  deleteMany: (resource: any, params: any) => {
    const confirmed = window.confirm("정말 삭제하시겠습니까?");
    if (confirmed) {
      if (resource === "notices") return deleteNotice(params);
      const url = `/${resource}/${params.id}`;
      return httpClient(url).then(({ json }) => ({
        data: json.data,
      }));
    } else {
      return Promise.reject();
    }
  },
};

export default customDataProvider;
