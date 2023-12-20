"use client";
import { USER_ROLE } from "@/constants/role";
import { sidebarItem } from "@/constants/sidebarItem";
import { Layout, Menu } from "antd";
import { useState } from "react";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const role = USER_ROLE.SUPER_ADMIN;
  // const { role } = getUserInfo() as any;
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      onCollapse={(value) => setCollapsed(value)}
      width={230}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        backgroundColor: "white",
        // boxShadow: "10px 0 5px -2px #D1D5DB",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      {/* <div
        className=""
        style={{
          color: "black",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
          marginTop: "1rem",
        }}
      >
        <h1 className="underline">V.T</h1>
        <hr className="" />
      </div> */}
      <div
        style={{
          color: "Black",
          fontSize: collapsed ? "1rem" : "2rem",
          fontWeight: "bold",
          textAlign: "center",
          margin: "1rem 0",
        }}
      >
        VehiTrack
      </div>
      <Menu
        theme="light"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItem(role)}
      />
    </Sider>
  );
};

export default Sidebar;
