import { authKey } from "@/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { useRouter } from "next/navigation";
const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();

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
        position: "sticky",
        top: "0px",
        zIndex: 40,
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

        <p className="font-bold cursor-pointer "></p>

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
