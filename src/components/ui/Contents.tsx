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
      }}
    >
      <Header />
      <div className="p-2">{children}</div>
    </Content>
  );
};

export default Contents;
