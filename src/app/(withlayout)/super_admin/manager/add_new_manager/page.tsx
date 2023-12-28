import CreateManager from "@/components/CreateUpdateFrom/ManagerCreate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Create",
  description: "...",
};
const ManagerCreatePage = () => {
  return (
    <div className="rounded-xl bg-white p-5 shadow-xl">
      <CreateManager />
    </div>
  );
};

export default ManagerCreatePage;
