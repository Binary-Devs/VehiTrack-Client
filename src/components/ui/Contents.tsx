"use client";
import { Layout } from "antd";
import Header from "./Header";

const { Content } = Layout;
const base = "admin";

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
        backgroundColor: ""
      }}
    >
      <Header />
      <div className="p-5">{children}</div>
    </Content>
  );
};

export default Contents;
