"use client";
import AddFitness from "@/components/CreateUpdateFrom/AddFitness";
import Loader from "@/components/Utlis/Loader";
import ActionBar from "@/components/ui/ActionBar";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { useGetAllPaperWorksQuery } from "@/redux/api/paperWork/paperWorkApi";
import { useDebounced } from "@/redux/hooks";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const FitnessPage = () => {
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

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetAllPaperWorksQuery({ ...query });
  if (isLoading) {
    return <Loader className="h-[50vh] flex items-end justify-center" />;
  }
  const paperworkRecords = data?.paperWorks;
  console.log(paperworkRecords);
  const meta = data?.meta;

  const columns = [
    {
      title: "Vehicle",
      dataIndex: "vehicle",
      render: (vehicle: any) => <span>{vehicle && vehicle.regNo}</span>,
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
          <div className="flex">
            <div
              style={{
                margin: "0px 5px",
              }}
              onClick={() => {}}
            >
              <ModalComponent icon={<EditOutlined />}>
                <AddFitness id={data?.id} />
              </ModalComponent>
            </div>
            <Button onClick={() => console.log(data?.id)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </div>
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
    <div className="bg-white border border-blue-200 rounded-lg shadow-md shadow-blue-200 p-5 space-y-3">
      <ActionBar inline title="Fitness List">
        <div className="flex items-center gap-2">
          <Input
            // size="large"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            // style={{
            //   minWidth: "150px",
            //   maxWidth: "300px",
            // }}
          />

          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              // style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
          <ModalComponent buttonText="Add Fitness">
            <AddFitness />
          </ModalComponent>
        </div>
      </ActionBar>

      <UMTable
        columns={columns}
        loading={false}
        dataSource={paperworkRecords}
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

export default FitnessPage;
