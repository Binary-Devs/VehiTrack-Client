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

const RepairMaintenancePage = () => {
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

  const maintenanceRecords = [
    {
      id: 1,
      date: "2023-08-01",
      vehicleId: 1,
      odometer: 51000,
      workshopType: "InHouse",
      maintenanceType: "Schedule",
      serviceCharge: 200.0,
      remarks: "Routine maintenance check",
      createdAt: "2023-08-01",
      updatedAt: "2023-08-01",
    },
    {
      id: 2,
      date: "2023-08-10",
      vehicleId: 2,
      odometer: 61000,
      workshopType: "Outside",
      maintenanceType: "Unschedule",
      serviceCharge: 350.0,
      remarks: "Engine diagnostics and repair",
      createdAt: "2023-08-10",
      updatedAt: "2023-08-10",
    },
    {
      id: 3,
      date: "2023-08-20",
      vehicleId: 3,
      odometer: 76000,
      workshopType: "Outside",
      maintenanceType: "Accidental",
      serviceCharge: 1200.0,
      remarks: "Body repair after accident",
      createdAt: "2023-08-20",
      updatedAt: "2023-08-20",
    },
    {
      id: 4,
      date: "2023-08-25",
      vehicleId: 4,
      odometer: 56000,
      workshopType: "InHouse",
      maintenanceType: "Schedule",
      serviceCharge: 150.0,
      remarks: "Tire rotation and alignment",
      createdAt: "2023-08-25",
      updatedAt: "2023-08-25",
    },
    {
      id: 5,
      date: "2023-08-30",
      vehicleId: 5,
      odometer: 71000,
      workshopType: "Outside",
      maintenanceType: "Unschedule",
      serviceCharge: 400.0,
      remarks: "Transmission fluid change",
      createdAt: "2023-08-30",
      updatedAt: "2023-08-30",
    },
  ];

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
      title: "odometer",
      dataIndex: "odometer",
    },
    {
      title: "workshopType",
      dataIndex: "workshopType",
    },
    {
      title: "maintenanceType",
      dataIndex: "maintenanceType",
    },
    {
      title: "serviceCharge",
      dataIndex: "serviceCharge",
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
              href={`/super_admin/maintenance/repair-maintenance/details/${data?.id}`}
            >
              <Button
                onClick={() => {
                  // console.log(data);
                }}
                type="primary"
              >
                <EyeOutlined />
              </Button>
            </Link>
            <Link
              href={`/super_admin/maintenance/repair-maintenance/edit/${data?.id}`}
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
      <ActionBar title="Maintenance List">
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
          <Link href="/super_admin/maintenance/repair_maintenance/create">
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
        dataSource={maintenanceRecords}
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

export default RepairMaintenancePage;
