import getEssays from "./essays/getEssays";
import getManagers from "./managers/getManagers";
import getNotices from "./notices/getNotices";
import getOneEssay from "./essays/getOneEssay";
import getOneManager from "./managers/getOneManager";
import getOneUser from "./users/getOneUser";
import getQuestions from "./questions/getQuestions";
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
    return dataProvider.getList(resource, params);
  },

  getOne: (resource: any, params: any) => {
    if (resource === "essays") return getOneEssay(params);
    if (resource === "users") return getOneUser(params);
    if (resource === "managers") return getOneManager(params);

    const url = `/${resource}/${params.id}`;
    return httpClient(url).then(({ json }) => ({
      data: json.data,
    }));
  },
};

export default customDataProvider;
