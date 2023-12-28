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

const ExpenseHeadsPage = () => {
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

  const expenseHeads = [
    {
      id: 1,
      accountHeadId: 1,
      label: "Fuel Expenses",
      createdAt: "2023-10-01",
      updatedAt: "2023-10-01",
    },
    {
      id: 2,
      accountHeadId: 2,
      label: "Maintenance Costs",
      createdAt: "2023-10-02",
      updatedAt: "2023-10-02",
    },
    {
      id: 3,
      accountHeadId: 3,
      label: "Insurance Premiums",
      createdAt: "2023-10-03",
      updatedAt: "2023-10-03",
    },
    {
      id: 4,
      accountHeadId: 4,
      label: "Driver Salaries",
      createdAt: "2023-10-04",
      updatedAt: "2023-10-04",
    },
    {
      id: 5,
      accountHeadId: 5,
      label: "Vehicle Depreciation",
      createdAt: "2023-10-05",
      updatedAt: "2023-10-05",
    },
  ];

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
      title: "AccountHead",
      dataIndex: "accountHeadId",
      sorter: true,
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
              href={`/super_admin/miscellaneous-expenses/expense-heads/details/${data?.id}`}
            >
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link
              href={`/super_admin/miscellaneous-expenses/expense-heads/edit/${data?.id}`}
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
      <ActionBar title="Expense Heads List">
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
          <Link href="/super_admin/miscellaneous-expenses/expense-heads/create">
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
        dataSource={expenseHeads}
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

export default ExpenseHeadsPage;
