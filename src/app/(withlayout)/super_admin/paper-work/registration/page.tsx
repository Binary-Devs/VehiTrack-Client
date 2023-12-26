"use client";
import AddRegistration from "@/components/CreateFrom/AddRegistration";
import ActionBar from "@/components/ui/ActionBar";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { useDebounced } from "@/redux/hooks";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

const RegistrationPage = () => {
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

  const paperworkRecords = [
    {
      id: 1,
      date: "2023-09-01",
      vehicleId: 1,
      certificateNo: "REG12345",
      effectiveDate: "2023-09-01",
      expiryDate: "2024-09-01",
      daysToRemind: 30,
      odometer: 52000,
      paperType: "Registration",
      fee: 150.0,
      otherAmount: 20.0,
      totalAmount: 170.0,
      remarks: "Renewal of vehicle registration",
      createdAt: "2023-09-01",
      updatedAt: "2023-09-01",
    },
    {
      id: 2,
      date: "2023-09-10",
      vehicleId: 2,
      certificateNo: "TAX56789",
      effectiveDate: "2023-09-10",
      expiryDate: "2024-09-10",
      daysToRemind: 15,
      odometer: 62000,
      paperType: "Tax/Token",
      fee: 80.0,
      otherAmount: 10.0,
      totalAmount: 90.0,
      remarks: "Payment of annual road tax",
      createdAt: "2023-09-10",
      updatedAt: "2023-09-10",
    },
    {
      id: 3,
      date: "2023-09-15",
      vehicleId: 3,
      certificateNo: "RPX45678",
      effectiveDate: "2023-09-15",
      expiryDate: "2024-09-15",
      daysToRemind: 30,
      odometer: 77000,
      paperType: "Route Permit",
      fee: 200.0,
      otherAmount: 30.0,
      totalAmount: 230.0,
      remarks: "Renewal of route permit",
      createdAt: "2023-09-15",
      updatedAt: "2023-09-15",
    },
    {
      id: 4,
      date: "2023-09-20",
      vehicleId: 4,
      certificateNo: "FIT90123",
      effectiveDate: "2023-09-20",
      expiryDate: "2024-09-20",
      daysToRemind: 15,
      odometer: 57000,
      paperType: "Fitness",
      fee: 120.0,
      otherAmount: 15.0,
      totalAmount: 135.0,
      remarks: "Fitness certification renewal",
      createdAt: "2023-09-20",
      updatedAt: "2023-09-20",
    },
    {
      id: 5,
      date: "2023-09-25",
      vehicleId: 5,
      certificateNo: "REG67890",
      effectiveDate: "2023-09-25",
      expiryDate: "2024-09-25",
      daysToRemind: 30,
      odometer: 72000,
      paperType: "Registration",
      fee: 180.0,
      otherAmount: 25.0,
      totalAmount: 205.0,
      remarks: "Registration renewal and modification",
      createdAt: "2023-09-25",
      updatedAt: "2023-09-25",
    },
  ];

  // You can now use this array of `paperworkRecords`

  const meta = 100;

  const columns = [
    {
      title: "vehicle",
      dataIndex: "vehicleId",
    },
    {
      title: "effectiveDate",
      dataIndex: "effectiveDate",
    },
    {
      title: "expiryDate",
      dataIndex: "expiryDate",
    },
    {
      title: "daysToRemind",
      dataIndex: "daysToRemind",
    },
    {
      title: "paperType",
      dataIndex: "paperType",
    },
    {
      title: "fee",
      dataIndex: "fee",
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
              href={`super_admin/paper-work/paper-work-list/details/${data?.id}`}
            >
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link
              href={`super_admin/paper-work/paper-work-list/edit/${data?.id}`}
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
      <ActionBar title="Registration List">
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
        {/* <div>
          <Link href="super_admin/paper-work/paper-work-list/create">
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
        </div> */}
        <ModalComponent buttonText="Add Registration">
          <AddRegistration />
        </ModalComponent>
      </ActionBar>

      <UMTable
        columns={columns}
        dataSource={paperworkRecords}
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

export default RegistrationPage;
