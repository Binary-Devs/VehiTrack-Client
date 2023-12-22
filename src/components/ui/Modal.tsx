"use client";
import React, { ReactElement, useState } from "react";
import { Button, Modal } from "antd";
import ModalComponentWrapper from "./ModalComponentWrapper";

const ModalComponent = ({
  children,
  buttonText,
  loading = false,
  setSetModel,
  showModel
  
}: {
  children: React.ReactElement ;
  buttonText?: string;
  loading?: boolean;
  showModel?:any,
  setSetModel?:any
}) => {
  const [open, setOpen] = useState(false);
  //   const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    // setModalText("The modal will be closed after two seconds");
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {buttonText || "Open Modal"}
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={loading}
        onCancel={handleCancel}
        width={1000}
      >
        <ModalComponentWrapper modalText={modalText}>

        {children}
        </ModalComponentWrapper>
        
      </Modal>
    </>
  );
};

export default ModalComponent;
