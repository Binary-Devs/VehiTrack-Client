
import React from "react";

const ExpenseSourcesEdit = ({ params }: { params: { id: string } }) => {

  return (
    <div>
      <h1> ExpenseSources {params.id}</h1>
    </div>
  );
};

export default ExpenseSourcesEdit;