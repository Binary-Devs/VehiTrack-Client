"use client";

import { totalSum } from "@/components/Utlis/needyFunction";
import MainCard from "@/components/ui/MainCard";
import UMTable from "@/components/ui/Table";
import { useGetAllEquipmentQuery } from "@/redux/api/equipment/equipmentApi";
import { useStockStatusQuery } from "@/redux/api/report/reportApi";
import { Col, Row, Select } from "antd";
import { useState } from "react";

const StockStatus = () => {
  const [equipment, setEquipment] = useState<string | null | undefined>(null);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  // library
  const { data: equipmentData, isLoading: equipmentDataLoading } =
    useGetAllEquipmentQuery({ limit: 100, sortBy: "label", sortOrder: "asc" });
  const allEquipmentData = equipmentData?.equipments || [];
  // library

  // fetching
  const query: Record<string, any> = {};
  query["limit"] = size;
  query["page"] = page;

  if (equipment) {
    query["id"] = equipment;
  }

  const { data, isLoading } = useStockStatusQuery(
    { ...query },
    { refetchOnMountOrArgChange: true }
  );

  const allStockStatusData = data?.stockStatus || [];
  const meta = data?.meta;

  // pagination
  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const columns = [
    {
      title: "SN",
      render: (el: any, item: any, index: any) => (page - 1) * 10 + index + 1,
    },
    {
      title: "Equipment",
      dataIndex: "label",
    },
    {
      title: "Unit of Measurement",
      dataIndex: "uom",
      render: (el: any) => el?.label,
      align: "center",
    },
    {
      title: "Stock In",
      dataIndex: "equipmentIns",
      render: (el: any) => totalSum(el || [], "quantity"),
      align: "right",
    },
    {
      title: "Stock Out",
      dataIndex: "equipmentUses",
      render: (el: any) => totalSum(el || [], "quantity"),
      align: "right",
    },
    {
      title: "Available",
      render: (el: any) =>
        totalSum(el?.equipmentIns || [], "quantity") -
        totalSum(el?.equipmentUses || [], "quantity"),
      align: "right",
    },
  ];

  return (
    <MainCard title="Stock Status">
      <Row className="mb-4">
        <Col xs={24} sm={12} md={8}>
          <Select
            loading={equipmentDataLoading}
            allowClear
            style={{ width: "100%" }}
            placeholder="Select a Equipment"
            fieldNames={{ label: "label", value: "id" }}
            value={equipment}
            onChange={(value) => setEquipment(value)}
            options={allEquipmentData}
          />
        </Col>
      </Row>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={allStockStatusData}
        pageSize={size}
        totalPages={meta?.totalPage}
        showSizeChanger={true}
        showPagination={true}
        onPaginationChange={onPaginationChange}
      />
    </MainCard>
  );
};

export default StockStatus;
