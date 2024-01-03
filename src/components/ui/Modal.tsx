"use client";
import { Button, Modal } from "antd";
import React, { useState } from "react";

const ModalComponent = ({
  children,
  icon,
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
  icon?: any;
}) => {
  const [open, setOpen] = useState(false);
  //   const [confirmLoading, setConfirmLoading] = useState(false);


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
      <div style={{ display: "inline-block" }}>
        <div className="lg:hidden">
          <Button onClick={showModal} type="primary">
            {icon}
          </Button>
        </div>
        <div className="hidden lg:block">
          <Button
            type="primary"
            onClick={showModal}
            className="!flex !items-center !gap-2 "
          >
            {icon &&<span className="m-1">{ icon}</span>}{buttonText && buttonText}
          </Button>
        </div>
      </div>
      <Modal
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
