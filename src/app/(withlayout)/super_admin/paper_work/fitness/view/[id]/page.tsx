import React from "react";

const FitnessView = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default FitnessView;
