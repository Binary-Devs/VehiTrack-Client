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

const ExpenseList = () => {
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

  const expenses = [
    {
      id: 1,
      date: "2023-11-01",
      vehicleId: 1,
      tripId: 1,
      accountHeadId: 1,
      expenseHeadId: 1,
      amount: 100.0,
      remarks: "Fuel refill for the trip",
      isMisc: false,
      createdAt: "2023-11-01",
      updatedAt: "2023-11-01",
    },
    {
      id: 2,
      date: "2023-11-05",
      vehicleId: 2,
      tripId: 2,
      accountHeadId: 2,
      expenseHeadId: 2,
      amount: 250.0,
      remarks: "Repair costs after a breakdown",
      isMisc: false,
      createdAt: "2023-11-05",
      updatedAt: "2023-11-05",
    },
    {
      id: 3,
      date: "2023-11-10",
      vehicleId: 3,
      tripId: 3,
      accountHeadId: 3,
      expenseHeadId: 3,
      amount: 120.0,
      remarks: "Annual insurance premium",
      isMisc: false,
      createdAt: "2023-11-10",
      updatedAt: "2023-11-10",
    },
    {
      id: 4,
      date: "2023-11-15",
      vehicleId: 4,
      tripId: 4,
      accountHeadId: 4,
      expenseHeadId: 4,
      amount: 500.0,
      remarks: "Driver's monthly salary",
      isMisc: false,
      createdAt: "2023-11-15",
      updatedAt: "2023-11-15",
    },
    {
      id: 5,
      date: "2023-11-20",
      vehicleId: 5,
      tripId: 5,
      accountHeadId: 5,
      expenseHeadId: 5,
      amount: 300.0,
      remarks: "Depreciation expense for the month",
      isMisc: false,
      createdAt: "2023-11-20",
      updatedAt: "2023-11-20",
    },
  ];

  // You can now use this array of `expenses`

  const meta = 100;

  const columns = [
    {
      title: "date",
      dataIndex: "date",
    },
    {
      title: "vehicleId",
      dataIndex: "vehicleId",
    },
    {
      title: "tripId",
      dataIndex: "tripId",
    },
    {
      title: "accountHeadId",
      dataIndex: "accountHeadId",
    },
    {
      title: "expenseHeadId",
      dataIndex: "expenseHeadId",
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
      title: "isMisc",
      dataIndex: "isMisc",
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
              href={`super_admin/miscellaneous-expenses/expense-list/details/${data?.id}`}
            >
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link
              href={`super_admin/miscellaneous-expenses/expense-list/edit/${data?.id}`}
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
      <ActionBar title="Expense List">
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
          <Link href="/super_admin/miscellaneous-expenses/expense-list/create">
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
        dataSource={expenses}
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

export default ExpenseList;
