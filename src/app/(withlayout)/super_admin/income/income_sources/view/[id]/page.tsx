import React from "react";

const IncomeSourcesView = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>IncomeSources {params.id}</h1>
    </div>
  );
};

export default IncomeSourcesView;
