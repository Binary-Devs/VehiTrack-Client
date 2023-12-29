"use client";
import AddRefueling from "@/components/CreateUpdateFrom/AddRefueling";
import ActionBar from "@/components/ui/ActionBar";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { useGetAllFuelQuery } from "@/redux/api/fuel/fuelApi";
import { useDebounced } from "@/redux/hooks";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
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

  // query["limit"] = size;
  // query["page"] = page;
  // query["sortBy"] = sortBy;
  // query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data } = useGetAllFuelQuery({ ...query });

  const fuels = data?.fuels;
  console.log(fuels);
  const meta = data?.meta;

  const columns = [
    {
      title: "vehicle",
      dataIndex: "vehicle",
      render: (vehicle: any) => <span>{vehicle && vehicle.regNo}</span>,
    },
    {
      title: "driver",
      dataIndex: "driver",
      render: (driver: any) => <span>{driver && driver.fullName}</span>,
    },
    {
      title: "fuel Station",
      dataIndex: "fuelStation",
      render: (fuelStation: any) => (
        <span>{fuelStation && fuelStation.label}</span>
      ),
    },
    {
      title: "fuelType",
      dataIndex: "fuelType",
      render: (fuelType: any) => <span>{fuelType && fuelType.label}</span>,
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
        <ModalComponent buttonText="Add Refueling">
          <AddRefueling />
        </ModalComponent>
      </ActionBar>

      <UMTable
        columns={columns}
        dataSource={fuels}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default RefuelingPage;
