"use client";
import AddUpdateTrip from "@/components/CreateUpdateFrom/AddUpdateTrip";
import ActionBar from "@/components/ui/ActionBar";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { useGetAllTripQuery } from "@/redux/api/trip/tripApi";
import { useDebounced } from "@/redux/hooks";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const TripListPage = () => {
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

  const { data, isLoading } = useGetAllTripQuery({ ...query });

  const trips = data?.trips;
  const meta = data?.meta;

  const columns = [
    {
      title: "Trip No",
      dataIndex: "tripNo",
      eclipse: true,
    },

    {
      title: "Start Date",
      dataIndex: "startDate",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
    },
    {
      title: "From",
      dataIndex: "from",
    },
    {
      title: "To",
      dataIndex: "to",
    },
    {
      title: "Distance",
      dataIndex: "distance",
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
      dataIndex: "id",
      render: function (data: any) {
        return (
          <div className="flex items-center gap-1">
            <ModalComponent icon={<EditOutlined />}>
              <AddUpdateTrip id={data} />
            </ModalComponent>
            <Button
              onClick={() => {
                // console.log(data?.id);
              }}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
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
      <ActionBar title="Trip List">
        <Input
          type="text"
          size="large"
          placeholder="Search..."
          style={{
            width: "100%",
            maxWidth: "200px",
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <ModalComponent buttonText="Add Trip" icon={<IoMdAdd />}>
          <AddUpdateTrip />
        </ModalComponent>
      </ActionBar>

      <UMTable
        columns={columns}
        dataSource={trips}
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

export default TripListPage;
