"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMTable from "@/components/ui/Table";
import { useDebounced } from "@/redux/hooks";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

const AccountHeadsPage = () => {
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

  const accountHeads = [
    {
      id: 1,
      accountTypeId: 1,
      label: "Primary Savings",
      createdAt: "2023-01-01",
      updatedAt: "2023-01-01",
    },
    {
      id: 2,
      accountTypeId: 2,
      label: "Main Checking",
      createdAt: "2023-01-02",
      updatedAt: "2023-01-02",
    },
    {
      id: 3,
      accountTypeId: 3,
      label: "Visa Credit Card",
      createdAt: "2023-01-03",
      updatedAt: "2023-01-03",
    },
    {
      id: 4,
      accountTypeId: 4,
      label: "Investment Portfolio",
      createdAt: "2023-01-04",
      updatedAt: "2023-01-04",
    },
    {
      id: 5,
      accountTypeId: 5,
      label: "Business Operating Account",
      createdAt: "2023-01-05",
      updatedAt: "2023-01-05",
    },
    {
      id: 6,
      accountTypeId: 6,
      label: "Personal Loan - John",
      createdAt: "2023-01-06",
      updatedAt: "2023-01-06",
    },
    {
      id: 7,
      accountTypeId: 7,
      label: "Mortgage - Home",
      createdAt: "2023-01-07",
      updatedAt: "2023-01-07",
    },
    {
      id: 8,
      accountTypeId: 8,
      label: "Auto Loan - Car",
      createdAt: "2023-01-08",
      updatedAt: "2023-01-08",
    },
    {
      id: 9,
      accountTypeId: 9,
      label: "Fixed Deposit - Term 1",
      createdAt: "2023-01-09",
      updatedAt: "2023-01-09",
    },
    {
      id: 10,
      accountTypeId: 10,
      label: "Emergency Fund - Savings",
      createdAt: "2023-01-10",
      updatedAt: "2023-01-10",
    },
  ];

  // You can now use this array of `accountHeads`

  const meta = 100;

  const deleteHandler = async (id: string) => {
    console.log(id);
  };

  const columns = [
    {
      title: "Label",
      dataIndex: "label",
      sorter: true,
    },
    {
      title: "Account Type",
      dataIndex: "accountTypeId",
      render: function (data: any) {
        return <>{data?.label}</>;
      },
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
              href={`/super_admin/manage-financial/account-heads/edit/${data?.id}`}
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
            <Button
              onClick={() => deleteHandler(data?.id)}
              type="primary"
              danger
            >
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
      <ActionBar title="Account Heads List">
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
          <Link href="/super_admin/manage-financial/account-heads/create">
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
        dataSource={accountHeads}
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

export default AccountHeadsPage;
