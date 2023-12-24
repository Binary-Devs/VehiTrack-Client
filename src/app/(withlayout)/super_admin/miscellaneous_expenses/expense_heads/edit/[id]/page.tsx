
import React from "react";

const ExpenseHeadsEdit = ({ params }: { params: { id: string } }) => {

  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default ExpenseHeadsEdit;
