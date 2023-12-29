import CreateHelper from "@/components/CreateUpdateFrom/HelperCreate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Helper",
  description: "...",
};
const HelperCreatePage = () => {
  return (
    <>
      <CreateHelper />
    </>
  );
};

export default HelperCreatePage;
