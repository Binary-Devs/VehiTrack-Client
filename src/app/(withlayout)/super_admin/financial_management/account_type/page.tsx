"use client";
import AddAccountType from "@/components/CreateUpdateFrom/AddAccountType";
import ActionBar from "@/components/ui/ActionBar";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { useGetAllAccountTypeQuery } from "@/redux/api/accountType/accountTypeApi";
import { useDebounced } from "@/redux/hooks";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

const AccountTypePage = () => {
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

  const { data } = useGetAllAccountTypeQuery({ ...query });

  //   {
  //     id: 1,
  //     label: "Savings",
  //     createdAt: "2023-01-01",
  //     updatedAt: "2023-01-01",
  //   },
  //   {
  //     id: 2,
  //     label: "Checking",
  //     createdAt: "2023-01-02",
  //     updatedAt: "2023-01-02",
  //   },
  //   {
  //     id: 3,
  //     label: "Credit Card",
  //     createdAt: "2023-01-03",
  //     updatedAt: "2023-01-03",
  //   },
  //   {
  //     id: 4,
  //     label: "Investment",
  //     createdAt: "2023-01-04",
  //     updatedAt: "2023-01-04",
  //   },
  //   {
  //     id: 5,
  //     label: "Business",
  //     createdAt: "2023-01-05",
  //     updatedAt: "2023-01-05",
  //   },
  //   {
  //     id: 6,
  //     label: "Personal Loan",
  //     createdAt: "2023-01-06",
  //     updatedAt: "2023-01-06",
  //   },
  //   {
  //     id: 7,
  //     label: "Mortgage",
  //     createdAt: "2023-01-07",
  //     updatedAt: "2023-01-07",
  //   },
  //   {
  //     id: 8,
  //     label: "Auto Loan",
  //     createdAt: "2023-01-08",
  //     updatedAt: "2023-01-08",
  //   },
  //   {
  //     id: 9,
  //     label: "Fixed Deposit",
  //     createdAt: "2023-01-09",
  //     updatedAt: "2023-01-09",
  //   },
  // ];

  // const buildings = data?.buildings;
  const accountTypes = data?.accountTypes;
  const meta = data?.meta;

  const columns = [
    {
      title: "label",
      dataIndex: "label",
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
              href={`/super_admin/manage-financial/account-type/details/${data?.id}`}
            >
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link
              href={`/super_admin/manage-financial/account-type/edit/${data?.id}`}
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
      <ActionBar title="AccountTypes List">
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
        <ModalComponent buttonText="Add Account Type">
          <AddAccountType />
        </ModalComponent>
      </ActionBar>

      <UMTable
        columns={columns}
        dataSource={accountTypes}
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

export default AccountTypePage;
