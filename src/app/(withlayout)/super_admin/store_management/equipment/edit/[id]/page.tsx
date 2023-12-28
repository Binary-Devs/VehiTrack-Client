
import React from "react";

const EquipmentEdit = ({ params }: { params: { id: string } }) => {

  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default EquipmentEdit;
