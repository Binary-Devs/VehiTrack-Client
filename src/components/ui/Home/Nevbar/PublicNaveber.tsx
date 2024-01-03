"use client";
import { Menu } from "antd";

import { homeNavItems } from "@/constants/homeNabItems";
import Image from "next/image";
import Link from "next/link";
import logo from "/assets/logo.jpg";
const NavbarPublic = () => {
  // const screens = useBreakpoint();

  return (
    <div
      style={{
        // background: "#e0e0e0",
        boxShadow: "20px 20px 60px #bebebe ",
      }}
      className="top-0  z-100"
    >
      <nav
        className=" text-black py-2
    flex align-center justify-between  gap-2 container mx-auto"
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            fontWeight: "700",
            color: "black",
            fontSize: "1.3rem",
            fontFamily: "sans-serif",
            // background:"white",
            // paddingBlock:"0.2rem",
            // borderRadius:"5px"
          }}
        >
          <Image
            className="w-20 rounded-xl"
            src={logo}
            height={120}
            width={200}
            alt="Logo"
          />
        </Link>

        <Menu
          mode="horizontal"
          className="hidden lg:flex"
          style={{
            // color:"#5371FF"
            fontWeight: "700",
            fontSize: "15px",
            fontFamily: "fantasy",
            // display:`${screens.sm ? "flex":"none"}`
          }}
          disabledOverflow
          // items={sidebarItems("homeNav")}
          items={homeNavItems}
        />
      </nav>
    </div>
  );
};

export default NavbarPublic;
