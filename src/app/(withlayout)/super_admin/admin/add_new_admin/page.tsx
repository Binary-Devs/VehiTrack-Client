import CreateAdmin from "@/components/CreateUpdateFrom/AdminCreate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Create",
  description: "...",
};
const AdminCreatePage = () => {
  return (
    <div className="rounded-xl bg-white p-5 shadow-xl">
      <CreateAdmin />
    </div>
  );
};

export default AdminCreatePage;
