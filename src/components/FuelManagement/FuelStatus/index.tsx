'use client';
import { totalSum } from '@/components/Utlis/needyFunction';
import StatusCard from '@/components/ui/StatusCard';
import { useFuelStatusQuery } from '@/redux/api/report/reportApi';
import { useGetAllVehicleQuery } from '@/redux/api/vehicle/vehicleApi';
import { Card, Col, Row, Select } from 'antd';
import { useState } from 'react';

const FuelStatus = () => {
  const [vehicle, setVehicle] = useState<string | null | undefined>(null);

  // library
  const { data: vehicleData, isLoading: vehicleDataLoading } =
    useGetAllVehicleQuery({ limit: 100 }, { refetchOnMountOrArgChange: true });

  const allVehicles = vehicleData?.vehicles || [];

  // end library

  const { data, isLoading } = useFuelStatusQuery('', {
    refetchOnMountOrArgChange: true,
  });
  const allFuelStatus = data?.fuelStatus || [];

  // filter
  const filterFuelStatus = allFuelStatus?.filter((el) =>
    vehicle ? el.id === vehicle : true
  );

  // mapping
  const mapFuelStatus = filterFuelStatus.map((el) => ({
    fuelAmount: totalSum(el.fuels || [], 'amount'),
    expenseAmount: totalSum(el.expenses || [], 'amount'),
  }));

  // calculation
  const totalFuel = totalSum(mapFuelStatus || [], 'fuelAmount');
  const totalExpense = totalSum(mapFuelStatus || [], 'expenseAmount');

  const available = totalFuel - totalExpense;

  return (
    <Card
      title="Fuel Status"
      extra={
        <Select
          loading={vehicleDataLoading}
          allowClear
          style={{ width: 200 }}
          placeholder="Select a Vehicle"
          fieldNames={{ label: 'regNo', value: 'id' }}
          value={vehicle}
          onChange={(value) => setVehicle(value)}
          options={allVehicles}
        />
      }
    >
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} lg={8}>
          <StatusCard
            title="Total Refueling"
            value={totalFuel}
            base="Amount in BDT"
            loading={isLoading}
          />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <StatusCard
            title="Fuel Expenditure"
            value={totalExpense}
            base="Amount in BDT"
            loading={isLoading}
          />
        </Col>
        <Col xs={24} lg={8}>
          <StatusCard
            title="Available Fuel"
            value={available}
            base="Amount in BDT"
            loading={isLoading}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default FuelStatus;
