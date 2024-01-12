"use client";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo } from "@/services/auth.service";
import AdminDashboard from "./AdminDashboard";
import DriverDashboard from "./DriverDashboad";

const Dashboard = () => {
  const user = getUserInfo() as any;

  if (user.role === USER_ROLE.ADMIN || user.role === USER_ROLE.SUPER_ADMIN) {
    return <AdminDashboard />;
  } else if (user.role === USER_ROLE.DRIVER || user.role === USER_ROLE.HELPER) {
    return <DriverDashboard />;
  }
};

export default Dashboard;
