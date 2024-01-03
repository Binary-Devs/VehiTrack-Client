"use client";
import Loader from "@/components/Utlis/Loader";
// import LoadingForDataFetch from "@/components/Utlis/LoadingForDataFetch";
import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading, userLoggedIn]);

  if (!isLoading) {
    return (
      <>
        {/* <LoadingForDataFetch /> */}
        <Loader
          className="h-[50vh] flex items-end justify-center"
          size="large"
        />
      </>
    );
  }

  return (

      <Layout hasSider>
        <SideBar />
        <Contents>{children}</Contents>
      </Layout>

  );
};

export default DashboardLayout;
