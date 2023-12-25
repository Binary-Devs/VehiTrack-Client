"use client";

import AddEquipment from "@/components/CreateFrom/AddEquipment";
import ActionBar from "@/components/ui/ActionBar";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { Button } from "antd";
import { FaEdit } from "react-icons/fa";

const EquipmentList = () => {
  const dataSource = [
    {
      id: "123",
      label: "Tire",
    },
    {
      id: "456",
      label: "looking Glass",
    },
  ];

  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
      width: "20%",
      render: (text: any, record: any, index: number) => {
        return index + 1;
      },
    },
    {
      title: "Label",
      dataIndex: "label",
      key: "label",
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
      render: (data: any) => {
        return <Button type="dashed" shape="circle" icon={<FaEdit />} />;
      },
    },
  ];

  return (
    <div>
      <ActionBar title="Equipment" inline>
        <ModalComponent buttonText="Add Equipment">
          <AddEquipment />
        </ModalComponent>
      </ActionBar>
      <UMTable columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default EquipmentList;
