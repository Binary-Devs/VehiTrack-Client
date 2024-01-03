"use client";

import { USER_ROLE } from "@/constants/role";
import { sidebarItem } from "@/constants/sidebarItem";
import { authKey } from "@/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Drawer,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Row,
  Space,
} from "antd";
import Sider from "antd/es/layout/Sider";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  // const role = USER_ROLE.SUPER_ADMIN;

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  const { role } = getUserInfo() as any;
  return (
    <AntHeader
      style={{
        background: "#fff",
        //   boxShadow: "0 1px 4px gray",
        //   borderBottomRightRadius: "10px",
        //  borderBottomLeftRadius: "10px",

        // marginLeft: "5px",
        paddingRight: "28px",
        paddingLeft: "0px",
        position: "sticky",
        top: "0px",
        zIndex: 50,
      }}
    >
      <Row
        justify="space-between"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        {/* <section className="flex justify-between items-center mx-1"> */}

        <div className="sm:hidden">
          <Button
            type="text"
            icon={!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={showDrawer}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              borderRadius: "0px",
            }}
          />
        </div>

        <p className="font-bold cursor-pointer "></p>

        <Drawer
          // title="Basic Drawer"
          placement={"left"}
          closable={false}
          onClose={onClose}
          open={open}
          key={"left"}
          width={270}
        >
          <Sider
            // collapsible
            // collapsed={collapsed}
            // breakpoint="lg"
            // onCollapse={(value) => setCollapsed(value)}
            width={270}
            style={{
              // overflow: "auto",
              // height: "100vh",
              // position: "sticky",
              backgroundColor: "white",
              //  boxShadow: "10px 0 5px -2px #D1D5DB",
              // left: 0,
              // top: 0,
              // bottom: 0,
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
              {"VehiTrack"}
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
                // top: 48,
                // bottom: 48,
              }}
            />
          </Sider>
        </Drawer>

        <div className="flex justify-between items-center">
          <p
            style={{
              margin: "0px 5px",
            }}
          >
            {role}
          </p>

          <Dropdown menu={{ items }}>
            <a>
              <Space wrap size={16}>
                <Avatar size="large" icon={<UserOutlined />} />
              </Space>
            </a>
          </Dropdown>
        </div>
        {/* </section> */}
      </Row>
    </AntHeader>
  );
};

export default Header;
