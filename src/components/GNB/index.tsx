import CustomAppBar from "./CustomAppBar";
import CustomMenu from "./CustomMenu";
import { Layout as RALayout } from "react-admin";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => (
  <RALayout appBar={CustomAppBar} menu={CustomMenu}>
    {children}
  </RALayout>
);

export default Layout;
