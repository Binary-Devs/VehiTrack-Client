import CreateVehicle from "@/components/CreateFrom/VehicleCreate";
import React from "react";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Create Vehicle',
  description: '...',
}
const VehicleCreatePage = () => {
  return (
    <>
      <CreateVehicle />
    </>
  );
};

export default VehicleCreatePage;
