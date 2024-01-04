import { authKey } from "@/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, MenuProps, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "../../../../../public/logo.jpg";

// Define NavbarPublic component
const NavbarPublic = () => {
  const router = useRouter();
  const { role } = getUserInfo() as any;

  // Function to handle logout
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  // Dropdown menu items
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href={"/dashboard"}>
          <Button type="text">Dashboard</Button>
        </Link>
      ),
    },
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <header className="text-gray-600 body-font">
      <div className="mx-auto flex flex-wrap p-3 flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image className="rounded-xl" height={50} src={logo} alt="Logo" />
        </div>

        {/* Navigation and User Info */}
        <div className="flex justify-between items-center mt-4 md:mt-0">
          {role && (
            <span className="hidden md:block" style={{ margin: "0px 20px" }}>
              {role === "super_admin"
                ? "Super Admin"
                : role === "admin"
                ? "Admin"
                : role === "driver"
                ? "Driver"
                : "Helper"}
            </span>
          )}

          {/* User Avatar and Dropdown */}
          <Dropdown menu={{ items }}>
            <a>
              <Space wrap size={16}>
                <Avatar size="large" icon={<UserOutlined />} />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default NavbarPublic;
