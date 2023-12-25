"use client";

import AddUnitOfMeasurement from "@/components/CreateFrom/AddUnitOfMeasurement";
import ActionBar from "@/components/ui/ActionBar";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { Button } from "antd";
import { FaEdit } from "react-icons/fa";

const UnitOfMeasurement = () => {
  const dataSource = [
    {
      id: "123",
      unitOfMeasurement: "Inches",
    },
    {
      id: "456",
      unitOfMeasurement: "KG",
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
      title: "Unit of Measure",
      dataIndex: "unitOfMeasurement",
      key: "unitOfMeasurement",
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
      <ActionBar title="Unit of measurement" inline>
        <ModalComponent buttonText="Add Unit">
          <AddUnitOfMeasurement />
        </ModalComponent>
      </ActionBar>
      <UMTable columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default UnitOfMeasurement;
