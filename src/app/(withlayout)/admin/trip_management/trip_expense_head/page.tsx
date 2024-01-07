"use client";

import AddUpdateParty from "@/components/CreateUpdateFrom/AddUpdateParty";
import ActionBar from "@/components/ui/ActionBar";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { useDebounced } from "@/redux/hooks";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Tag } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

const TripExpenseHeadPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
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

  // const { data, isLoading } = useGetAllPartiesQuery({ ...query });

  // const parties = data?.parties;
  // const meta = data?.meta;
  // const parties = [];
  const meta = null;

  const columns = [
    {
      title: "Name",
      dataIndex: "fullName",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Active",
      dataIndex: "isActive",
      render: (isActive: boolean) =>
        isActive ? (
          <Tag color="green">Active</Tag>
        ) : (
          <Tag color="red">Not Active</Tag>
        ),
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
              href={`/super_admin/trip_management/party_list/edit/${data?.id}`}
            >
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => {
                  // console.log(data);
                }}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => {
                // console.log(data?.id);
              }}
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
    // console.log("Page:", page, "PageSize:", pageSize);
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
      <ActionBar title="Party List">
        <Input
          type="text"
          size="large"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          style={{
            width: "100%",
            maxWidth: "200px",
          }}
        />
        <ModalComponent buttonText="Add Party">
          <AddUpdateParty />
        </ModalComponent>
      </ActionBar>

      <UMTable
        columns={columns}
        dataSource={[]}
        pageSize={size}
        // totalPages={meta?.total}
        totalPages={5}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        // loading={isLoading}
      />
    </div>
  );
};

export default TripExpenseHeadPage;
