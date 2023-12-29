'use client';
import StatusCard from '@/components/ui/StatusCard';
import { Card, Col, Row } from 'antd';

const FuelStatus = () => {
  return (
    <Card title="Fuel Status">
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} lg={8}>
          <StatusCard
            title="Total Refueling"
            value={1200}
            base="Quantity in Litre"
          />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <StatusCard
            title="Fuel Expenditure"
            value={800}
            base="Quantity in Litre"
          />
        </Col>
        <Col xs={24} lg={8}>
          <StatusCard
            title="Available Fuel"
            value={400}
            base="Quantity in Litre"
          />
        </Col>
      </Row>
    </Card>
  );
};

export default FuelStatus;
