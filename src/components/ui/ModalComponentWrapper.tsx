import React from "react";

const ModalComponentWrapper = ({
  modalText,
  children,
}: {
  modalText: string;
  children: React.ReactElement;
}) => {
  // You can do something with the state here if needed
  // For example, you can pass it down as a prop to the children
  return <div>{React.cloneElement(children, { modalText })}</div>;
};

export default ModalComponentWrapper;
