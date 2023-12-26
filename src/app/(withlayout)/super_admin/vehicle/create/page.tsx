import CreateVehicle from "@/components/CreateFrom/VehicleCreate";
import React from "react";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Create Vehicle',
  description: '...',
}
const VehicleCreatePage = () => {
  return (
    <div className="rounded-xl bg-white p-5 shadow-xl">
      <CreateVehicle />
    </div>
  );
};

export default VehicleCreatePage;
