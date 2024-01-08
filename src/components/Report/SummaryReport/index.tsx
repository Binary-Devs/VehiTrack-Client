'use client';

import { totalSum } from '@/components/Utlis/needyFunction';
import MainCard from '@/components/ui/MainCard';
import UMTable from '@/components/ui/Table';
import { useSummaryReportQuery } from '@/redux/api/report/reportApi';
import { useGetAllVehicleQuery } from '@/redux/api/vehicle/vehicleApi';
import { Col, DatePicker, Row, Select } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

const { RangePicker } = DatePicker;

const SummaryReport = () => {
  const [vehicle, setVehicle] = useState<any>(null);
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);

  const handleDate = (values: any) => {
    if (values) {
      setStartDate(values[0]);
      setEndDate(values[1]);
    } else {
      setStartDate(null);
      setEndDate(null);
    }
  };

  // library
  const { data: vehiclesData } = useGetAllVehicleQuery({ limit: 100 });
  const allVehicles = vehiclesData?.vehicles || [];

  // end library

  // fetching data
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');

  query['limit'] = size;
  query['page'] = page;
  query['sortBy'] = sortBy;
  query['sortOrder'] = sortOrder;

  if (vehicle) {
    query['vehicleId'] = vehicle;
  }

  if (startDate) {
    query['startDate'] = dayjs(startDate).format('YYYY-MM-DD');
  }

  if (endDate) {
    query['endDate'] = dayjs(endDate).format('YYYY-MM-DD');
  }

  const { data, isLoading } = useSummaryReportQuery({ ...query });

  const allSummaries = data?.summaries || [];
  const meta = data?.meta;

  const columns = [
    {
      title: 'SN',
      align: 'center',
      render: (data: any, item: any, index: any) => (page - 1) * 10 + index + 1,
    },
    {
      title: 'Vehicle',
      dataIndex: 'regNo',
    },
    {
      title: 'Total Trip',
      dataIndex: 'trips',
      render: (el: any) => el.length || 0,
      align: 'right',
    },
    {
      title: 'Income',
      dataIndex: 'trips',
      render: (el: any) => totalSum(el || [], 'amount'),
      align: 'right',
    },
    {
      title: 'Trip Expense',
      dataIndex: 'expenses',
      render: (el: any) =>
        totalSum(el?.filter((ex: any) => !ex.isMisc) || [], 'amount'),
      align: 'right',
    },
    {
      title: 'Maintain',
      dataIndex: 'maintenances',
      render: (el: any) => totalSum(el || [], 'serviceCharge'),
      align: 'right',
    },
    {
      title: 'Mis. Expense',
      dataIndex: 'expenses',
      render: (el: any) =>
        totalSum(el?.filter((ex: any) => ex.isMisc) || [], 'amount'),
      align: 'right',
    },
    {
      title: 'Legal Expense',
      dataIndex: 'paperWorks',
      render: (el: any) => totalSum(el || [], 'totalAmount'),
      align: 'right',
    },
    {
      title: 'Equip. Expense',
      dataIndex: 'equipmentUses',
      render: (el: any) => totalSum(el || [], 'totalPrice'),
      align: 'right',
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === 'ascend' ? 'asc' : 'desc');
  };

  return (
    <MainCard title="Summary">
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
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            onChange={(value) => setVehicle(value)}
            size="large"
            options={allVehicles?.map((el: any) => ({
              label: el.regNo,
              value: el.id,
            }))}
            value={vehicle}
            style={{ width: '100%' }}
            placeholder="Select Vehicle"
          />
        </Col>
        <Col xs={24} md={8}>
          <RangePicker
            size="large"
            onChange={(values) => handleDate(values)}
            style={{ width: '100%' }}
            placeholder={['Start Date', 'End Date']}
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

export default SummaryReport;
