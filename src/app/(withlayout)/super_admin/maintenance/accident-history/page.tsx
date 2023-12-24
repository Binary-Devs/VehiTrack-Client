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

const AccidentHistoryPage = () => {
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

  const accidentHistories = [
    {
      id: 1,
      date: "2023-02-01",
      vehicleId: 1,
      driverId: 1,
      details: "Minor collision with another vehicle",
      location: "Intersection of Oak Street and Elm Avenue",
      odometer: 50500,
      paymentStatus: "Given",
      amount: 1000.0,
      createdAt: "2023-02-01",
      updatedAt: "2023-02-01",
    },
    {
      id: 2,
      date: "2023-03-10",
      vehicleId: 2,
      driverId: 2,
      details: "Hit by a falling tree branch during a storm",
      location: "123 Main Street, Cityville",
      odometer: 60500,
      paymentStatus: "Nothing",
      amount: 0.0,
      createdAt: "2023-03-10",
      updatedAt: "2023-03-10",
    },
    {
      id: 3,
      date: "2023-04-15",
      vehicleId: 3,
      driverId: 3,
      details: "Rear-end collision at a traffic signal",
      location: "456 Elm Avenue, Townsville",
      odometer: 75500,
      paymentStatus: "Taken",
      amount: 2500.0,
      createdAt: "2023-04-15",
      updatedAt: "2023-04-15",
    },
    {
      id: 4,
      date: "2023-05-20",
      vehicleId: 4,
      driverId: 4,
      details: "Side collision while changing lanes",
      location: "789 Oak Lane, Villagetown",
      odometer: 55500,
      paymentStatus: "Given",
      amount: 1500.0,
      createdAt: "2023-05-20",
      updatedAt: "2023-05-20",
    },
    {
      id: 5,
      date: "2023-06-25",
      vehicleId: 5,
      driverId: 5,
      details: "Parking lot fender bender",
      location: "101 Pine Street, Hamletville",
      odometer: 70500,
      paymentStatus: "Taken",
      amount: 2000.0,
      createdAt: "2023-06-25",
      updatedAt: "2023-06-25",
    },
  ];

  const meta = 100;

  const columns = [
    {
      title: "Vehicle",
      dataIndex: "vehicleId",
    },
    {
      title: "Driver",
      dataIndex: "driverId",
    },
    {
      title: "Details",
      dataIndex: "details",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Odometer",
      dataIndex: "odometer",
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
    },
    {
      title: "Amount",
      dataIndex: "amount",
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
              href={`/super_admin/maintenance/accident-history/details/${data?.id}`}
            >
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link
              href={`/super_admin/maintenance/accident-history/edit/${data?.id}`}
            >
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
      <ActionBar title="Accident History List">
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
          <Link href="/super_admin/maintenance/accident-history/create">
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
        dataSource={accidentHistories}
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

export default AccidentHistoryPage;
