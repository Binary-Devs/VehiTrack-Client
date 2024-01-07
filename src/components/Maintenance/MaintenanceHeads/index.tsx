"use client";

import MainCard from "@/components/ui/MainCard";
import UMTable from "@/components/ui/Table";
import { useGetAllMaintenanceHeadQuery } from "@/redux/api/maintenanceHead/maintenanceHeadApi";
import { useDebounced } from "@/redux/hooks";
import { ReloadOutlined } from "@ant-design/icons";
import { Button, Input, Row } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import CreateMaintenanceHead from "./CreateMaintenanceHead";
import MaintenanceHeadAction from "./MaintenanceHeadAction";

const MaintenanceHeads = () => {
  const [open, setOpen] = useState(false);

  // fetching data
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
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

  const { data, isLoading } = useGetAllMaintenanceHeadQuery({ ...query });

  const allMaintenanceHeads = data?.maintenanceHeads || [];
  const meta = data?.meta;

  const columns = [
    {
      title: "SN",
      align: "center",
      render: (data: any, item: any, index: any) => (page - 1) * 10 + index + 1,
    },
    {
      title: "Maintenance Head",
      dataIndex: "label",
      sorter: true,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (data: string) => dayjs(data).format("DD/MM/YYYY"),
      sorter: true,
    },
    {
      title: "Action",
      align: "center",
      render: (data: any) => <MaintenanceHeadAction data={data} />,
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };
  return (
    <MainCard
      title="Maintenance Heads"
      extra={
        <Button type="primary" onClick={() => setOpen(true)}>
          Create
        </Button>
      }
    >
      {/* popup items */}
      <CreateMaintenanceHead open={open} handleClose={() => setOpen(false)} />
      {/* end popup items */}

      {/* filter area */}
      <Row align="middle" justify="space-between" style={{ marginBottom: 20 }}>
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            maxWidth: 250,
          }}
        />
        <div>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </Row>
      {/* end filter area */}

      <UMTable
        columns={columns}
        loading={isLoading}
        dataSource={allMaintenanceHeads}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </MainCard>
  );
};

export default MaintenanceHeads;
