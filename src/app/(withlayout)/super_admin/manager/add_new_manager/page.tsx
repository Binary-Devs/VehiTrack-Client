import CreateAndUpdateManager from "@/components/CreateUpdateFrom/ManagerCreate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Create",
  description: "...",
};

const ManagerCreatePage = () => {
  return (
    <div className="bg-white border border-blue-200 rounded-lg shadow-md shadow-blue-200 p-5 space-y-3">
      <CreateAndUpdateManager />
    </div>
  );
};

export default ManagerCreatePage;
