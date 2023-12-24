import React from "react";
import type { Metadata } from "next";
import CreateHelper from "@/components/CreateFrom/HelperCreate";

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
