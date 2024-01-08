"use client";

import AddUpdateTripExpenseHead from "@/components/CreateUpdateFrom/AddUpdateTripExpenseHead";
import ActionBar from "@/components/ui/ActionBar";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { useGetAllTripExpenseHeadQuery } from "@/redux/api/trip/tripApi";
import { IoMdAdd } from "react-icons/io";

import { useDebounced } from "@/redux/hooks";
import { EditOutlined } from "@ant-design/icons";
import { Input } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const TripExpenseHeadPage = () => {
  const query: Record<string, any> = {};
  const [showModel, setShowModel] = useState(false);

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetAllTripExpenseHeadQuery({ ...query });

  const tripExpenseHeads = data?.tripExpenseHeads;
  const meta = data?.meta;

  const columns = [
    {
      title: "SN",
      dataIndex: "",
      render: (data: any, text: any, index: number) => index + 1,
    },
    {
      title: "Label",
      dataIndex: "label",
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <div className="">
            <div
              style={{
                margin: "0px 5px",
              }}
            >
              <ModalComponent
                showModel={showModel}
                setShowModel={setShowModel}
                icon={<EditOutlined />}
              >
                <AddUpdateTripExpenseHead id={data} />
              </ModalComponent>
            </div>
          </div>
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
      <ActionBar title="Trip Expense Head List">
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
        <ModalComponent
          showModel={showModel}
          setShowModel={setShowModel}
          buttonText="Add Expense Head"
          icon={<IoMdAdd />}
        >
          <AddUpdateTripExpenseHead />
        </ModalComponent>
      </ActionBar>

      <UMTable
        columns={columns}
        dataSource={tripExpenseHeads}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        loading={isLoading}
      />
    </div>
  );
};

export default TripExpenseHeadPage;
