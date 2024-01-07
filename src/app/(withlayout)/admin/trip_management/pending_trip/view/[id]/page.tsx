import React from "react";

const PendingTripView = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>PendingTrip {params.id}</h1>
    </div>
  );
};

export default PendingTripView;
