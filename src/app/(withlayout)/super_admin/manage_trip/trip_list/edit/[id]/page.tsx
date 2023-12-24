
import React from "react";

const TripListEdit = ({ params }: { params: { id: string } }) => {

  return (
    <div>
      <h1>TripList {params.id}</h1>
    </div>
  );
};

export default TripListEdit;
