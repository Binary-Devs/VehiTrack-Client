'use client';

import { Card, Col, Row, Typography } from 'antd';
import CardItem from './CardItem';
import SheetCard from './SheetCard';

const { Title } = Typography;

const BalanceSheet = () => {
  return (
    <Card style={{ paddingBottom: 40 }}>
      <Title
        style={{
          fontSize: 30,
          textTransform: 'uppercase',
          textAlign: 'center',
          paddingBottom: 20,
        }}
      >
        Balance Sheet
      </Title>
      <Row gutter={[36, 36]} style={{ maxWidth: 1100, margin: 'auto' }}>
        <Col xs={24} md={12}>
          <Row gutter={[32, 36]}>
            <Col xs={24}>
              <SheetCard title="Assets" value={120000}>
                <CardItem title="Fixed Asset" value={100000} />
                <CardItem title="Cash and Equivalent" value={50000} />
                <CardItem title="Account Receivable" value={5000} />
                <CardItem title="Investment" value={15000} />
              </SheetCard>
            </Col>
            <Col xs={24}>
              <SheetCard title="Liabilities" value={7500}>
                <CardItem title="Account Payable" value={4000} />
                <CardItem title="Loans" value={3000} />
                <CardItem title="Interest Payable" value={500} />
              </SheetCard>
            </Col>
            <Col xs={24}>
              <SheetCard title="Equity" value={162500}>
                <CardItem title="Capital" value={112500} />
                <CardItem title="Retained Earnings" value={50000} />
              </SheetCard>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <Row gutter={[32, 36]}>
            <Col xs={24}>
              <SheetCard title="Income" value={80000}>
                <CardItem title="Trip Income" value={75000} />
                <CardItem title="Interest Income" value={5000} />
              </SheetCard>
            </Col>
            <Col xs={24}>
              <SheetCard title="Expense" value={30000}>
                <CardItem title="Trip Expense" value={20000} />
                <CardItem title="Maintenance Expense" value={3000} />
                <CardItem title="Miscellaneous Expense" value={5000} />
                <CardItem title="Fixed Asset Deprecation" value={2000} />
              </SheetCard>
            </Col>
            <Col xs={24}>
              <SheetCard title="Profit" value={50000}>
                <CardItem title="Net Profit" value={50000} />
              </SheetCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default BalanceSheet;
