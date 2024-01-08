import RepairMaintenance from "@/components/Maintenance/RepairMaintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VehiTrack | Maintenance",
};

const MaintenancePage = () => {
  return <RepairMaintenance />;
};

export default MaintenancePage;
