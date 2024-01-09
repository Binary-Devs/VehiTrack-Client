import Dashboard from "@/components/Dashboard/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VehiTrack | Dashboard",
};

const DashboardPage = () => {
  return <Dashboard />;
};

export default DashboardPage;
