import CreateDriver from "@/components/CreateUpdateFrom/DriverCreate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driver create",
  description: "...",
};
const DriveCreate = () => {
  return (
    <div className="rounded-xl bg-white p-5 shadow-xl">
      <CreateDriver />
    </div>
  );
};

export default DriveCreate;
