"use client";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";

const ModalComponent = ({
  children,
  buttonText,
  loading,
  setSetModel,
  showModel,
}: {
  children: React.ReactElement;
  buttonText?: string;
  loading?: boolean;
  showModel?: any;
  setSetModel?: any;
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
      <div>
        <div className="lg:hidden">
          <Button onClick={showModal} type="primary">
            <PlusOutlined />
          </Button>
        </div>
        <div className="hidden lg:block">
          <Button type="primary" onClick={showModal}>
            {buttonText || "Open Modal"}
          </Button>
        </div>
      </div>
      <Modal
        // title="Title"
        open={open}
        confirmLoading={loading ? loading : false}
        onCancel={handleCancel}
        //! when i went hidden ok and cancel button then it use
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            {/* <Button>Custom Button</Button>
            <CancelBtn />
            <OkBtn /> */}
          </>
        )}
        // width="max-content"
        width={900}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalComponent;
