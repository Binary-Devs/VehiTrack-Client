"use client";
import { USER_ROLE } from "@/constants/role";
import { sidebarItem } from "@/constants/sidebarItem";
import { Layout, Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const role = USER_ROLE.SUPER_ADMIN;
  // const { role } = getUserInfo() as any;

  return (
    <section className="hidden sm:block">
      <Sider
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        onCollapse={(value) => setCollapsed(value)}
        width={270}
        style={{
          // overflow: "auto",
          height: "100vh",
          position: "sticky",
          backgroundColor: "white",
          //  boxShadow: "10px 0 5px -2px #D1D5DB",
          // left: 0,
          top: 0,
          bottom: 0,
          padding: "0px",
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
          onClick={() => router.push("/dashboard")}
          style={{
            color: "Black",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            margin: "8px 0",
            cursor: "pointer",
          }}
        >
          {collapsed ? "VT" : "VehiTrack"}
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={[`${pathName}`]}
          selectedKeys={[`${pathName}`]}
          mode="inline"
          items={sidebarItem(role)}
          style={{
            overflow: "auto",
            height: "calc(100vh - 112px)",
            position: "sticky",
            // backgroundColor: "white",
            //  boxShadow: "10px 0 5px -2px #D1D5DB",
            // left: 0,
            // top: 48,
            top: collapsed ? 64 : 48,
            bottom: 48,
          }}
        />
      </Sider>
    </section>
  );
};

export default Sidebar;
