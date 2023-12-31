"use client";
import { Menu } from "antd";

import { homeNavItems } from "@/constants/homeNabItems";
import Image from "next/image";
import Link from "next/link";

const NavbarPublic = () => {
  // const screens = useBreakpoint();

  return (
    <div
      style={{
        borderRadius: "10px",
        // background: "#e0e0e0",
        boxShadow: "20px 20px 60px #bebebe ",
      }}
      className=" my-2 sticky  top-0  z-100"
    >
      <nav
        className=" text-black py-[1em] px-[2em] 
    flex align-center justify-between  gap-2 "
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
            className="rounded-full w-10 h-10"
            src={
              "https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
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
