"use client";

import { totalSum } from "@/components/Utlis/needyFunction";
import MainCard from "@/components/ui/MainCard";
import UMTable from "@/components/ui/Table";
import { useSummaryReportQuery } from "@/redux/api/report/reportApi";
import { useGetAllVehicleQuery } from "@/redux/api/vehicle/vehicleApi";
import { Col, DatePicker, Row, Select } from "antd";
import { useState } from "react";
import {
  totalAnnualExpense,
  totalAnnualProfit,
} from "./annualReportCalculation";

const { RangePicker } = DatePicker;

const AnnualReport = () => {
  const [vehicle, setVehicle] = useState<any>(null);
  const [year, setYear] = useState<any>(null);

  // library
  const { data: vehiclesData } = useGetAllVehicleQuery({ limit: 100 });
  const allVehicles = vehiclesData?.vehicles || [];

  // end library

  // fetching data
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  if (vehicle) {
    query["vehicleId"] = vehicle;
  }

  if (year) {
    query["startDate"] = `${year}-01-01`;
    query["endDate"] = `${year}-12-31`;
  }

  const { data, isLoading } = useSummaryReportQuery({ ...query });

  const allSummaries = data?.summaries || [];
  const meta = data?.meta;

  const columns = [
    {
      title: "SN",
      align: "center",
      render: (data: any, item: any, index: any) => (page - 1) * 10 + index + 1,
    },
    {
      title: "Vehicle",
      dataIndex: "regNo",
    },
    {
      title: "Annual Earning",
      dataIndex: "trips",
      render: (el: any) => totalSum(el || [], "amount"),
      align: "right",
    },
    {
      title: "Annual Expense",
      render: (el: any) => totalAnnualExpense(el),
      align: "right",
    },
    {
      title: "Annual Profit",
      render: (el: any) => totalAnnualProfit(el),
      align: "right",
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

  return (
    <MainCard title="Annual Report">
      {/* filter area */}
      <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
        <Col xs={24} md={8}>
          <Select
            showSearch
            optionFilterProp="children"
            filterOption={(
              input: string,
              option?: { label: string; value: string }
            ) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            onChange={(value) => setVehicle(value)}
            size="large"
            options={allVehicles?.map((el: any) => ({
              label: el.regNo,
              value: el.id,
            }))}
            value={vehicle}
            style={{ width: "100%" }}
            placeholder="Select Vehicle"
          />
        </Col>
        <Col xs={24} md={8}>
          <DatePicker
            style={{ width: "100%" }}
            picker="year"
            size="large"
            onChange={(_, dateString) => setYear(dateString)}
          />
        </Col>
      </Row>
      {/* end filter area */}

      <UMTable
        columns={columns}
        loading={isLoading}
        dataSource={allSummaries}
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

export default AnnualReport;
