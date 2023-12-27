"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMTable from "@/components/ui/Table";
import { useDebounced } from "@/redux/hooks";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

const RefuelingPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const fuels = [
    {
      id: 1,
      date: "2023-01-01",
      vehicleId: 1,
      driverId: 1,
      fuelPumpId: 1,
      fuelTypeId: 1,
      odometer: 50000,
      quantity: 30,
      amount: 50.0,
      remarks: "Regular refueling",
      createdAt: "2023-01-01",
      updatedAt: "2023-01-01",
    },
    {
      id: 2,
      date: "2023-01-05",
      vehicleId: 2,
      driverId: 2,
      fuelPumpId: 3,
      fuelTypeId: 2,
      odometer: 60000,
      quantity: 25,
      amount: 45.0,
      remarks: "Long highway drive",
      createdAt: "2023-01-05",
      updatedAt: "2023-01-05",
    },
    {
      id: 3,
      date: "2023-01-10",
      vehicleId: 3,
      driverId: 3,
      fuelPumpId: 2,
      fuelTypeId: 3,
      odometer: 75000,
      quantity: 15,
      amount: 30.0,
      remarks: "Charged electric vehicle",
      createdAt: "2023-01-10",
      updatedAt: "2023-01-10",
    },
    {
      id: 4,
      date: "2023-01-15",
      vehicleId: 4,
      driverId: 4,
      fuelPumpId: 4,
      fuelTypeId: 4,
      odometer: 55000,
      quantity: 20,
      amount: 40.0,
      remarks: "Hybrid mode on",
      createdAt: "2023-01-15",
      updatedAt: "2023-01-15",
    },
    {
      id: 5,
      date: "2023-01-20",
      vehicleId: 5,
      driverId: 5,
      fuelPumpId: 5,
      fuelTypeId: 5,
      odometer: 70000,
      quantity: 18,
      amount: 35.0,
      remarks: "CNG refueling",
      createdAt: "2023-01-20",
      updatedAt: "2023-01-20",
    },
  ];

  const meta = 100;

  const columns = [
    {
      title: "vehicleId",
      dataIndex: "vehicleId",
    },
    {
      title: "driverId",
      dataIndex: "driverId",
    },
    {
      title: "fuelPumpId",
      dataIndex: "fuelPumpId",
    },
    {
      title: "fuelTypeId",
      dataIndex: "fuelTypeId",
    },
    {
      title: "odometer",
      dataIndex: "odometer",
    },
    {
      title: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "amount",
      dataIndex: "amount",
    },
    {
      title: "remarks",
      dataIndex: "remarks",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link
              href={`/super_admin/manage-fuel/refueling/details/${data?.id}`}
            >
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/super_admin/manage-fuel/refueling/edit/${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button onClick={() => console.log(data?.id)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };
  return (
    <div>
      <ActionBar title="Refueling List">
        <Input
          type="text"
          size="large"
          placeholder="Search..."
          style={{
            width: "20%",
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div>
          <Link href="/super_admin/manage-fuel/refueling/create">
            <Button type="primary">Create</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              onClick={resetFilters}
              type="primary"
              style={{ margin: "0px 5px" }}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <UMTable
        columns={columns}
        dataSource={fuels}
        pageSize={size}
        totalPages={meta}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default RefuelingPage;
