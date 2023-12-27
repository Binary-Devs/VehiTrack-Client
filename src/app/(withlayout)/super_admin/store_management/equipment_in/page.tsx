"use client";

import AddEquipmentIn from "@/components/CreateFrom/AddEquipmentIn";
import ActionBar from "@/components/ui/ActionBar";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { Button } from "antd";
import { FaEdit } from "react-icons/fa";

const EquipmentInList = () => {
  const dataSource = [
    {
      date: "22-12-2023",
      equipmentId: "123456",
      quantity: "1",
      unitPrice: "500",
      totalPrice: "500",
      remarks: "Black",
    },
    {
      date: "22-12-2023",
      equipmentId: "123456",
      quantity: "1",
      unitPrice: "500",
      totalPrice: "500",
      remarks: "Black",
    },
    {
      date: "22-12-2023",
      equipmentId: "123456",
      quantity: "1",
      unitPrice: "500",
      totalPrice: "500",
      remarks: "Black",
    },
    {
      date: "22-12-2023",
      equipmentId: "123456",
      quantity: "1",
      unitPrice: "500",
      totalPrice: "500",
      remarks: "Black",
    },
  ];

  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
      width: "5%",
      render: (text: any, record: any, index: number) => {
        return index + 1;
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "equipmentId",
      dataIndex: "equipmentId",
      key: "equipmentId",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Unit price",
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
    {
      title: "Total price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "remarks",
    },
    {
      title: "Action",
      key: "action",
      width: "8%",
      render: (data: any) => {
        return <Button type="dashed" shape="circle" icon={<FaEdit />} />;
      },
    },
  ];

  return (
    <div>
      <ActionBar title="Equipment" inline>
        <ModalComponent buttonText="Add Equipment In">
          <AddEquipmentIn />
        </ModalComponent>
      </ActionBar>
      <UMTable columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default EquipmentInList;
