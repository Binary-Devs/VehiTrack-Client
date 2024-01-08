'use client';

import { totalSum } from '@/components/Utlis/needyFunction';
import { useBalanceSheetQuery } from '@/redux/api/report/reportApi';
import { Card, Col, Row, Typography } from 'antd';
import CardItem from './CardItem';
import SheetCard from './SheetCard';

const { Title } = Typography;

const BalanceSheet = () => {
  const { data, isLoading } = useBalanceSheetQuery('', {
    refetchOnMountOrArgChange: true,
  });

  const allBalanceData = data?.balanceSheet || [];

  // console.log(data);
  // calculation

  // fixed asset
  const fixedAsset = allBalanceData?.find(
    (el: any) => el.label === 'Fixed Asset'
  );
  const fixedAssetAmount = totalSum(fixedAsset?.vehicles || [], 'vehicleValue');

  // trip income
  const tripIncome = allBalanceData?.find(
    (el: any) => el.label === 'Trip Income'
  );
  const tripIncomeAmount = totalSum(tripIncome?.trips || [], 'amount');

  // accidental income expense
  const accidental = allBalanceData?.find(
    (el: any) => el.label === 'Accidental Income'
  );
  const accidentalIncomeAmount = totalSum(
    accidental?.accidentHistories?.filter(
      (el: any) => el.paymentStatus === 'Received'
    ) || [],
    'amount'
  );
  const accidentalExpenseAmount = totalSum(
    accidental?.accidentHistories?.filter(
      (el: any) => el.paymentStatus === 'Paid'
    ) || [],
    'amount'
  );

  // cash and equivalent
  const cashAndEquivalent = tripIncomeAmount + accidentalIncomeAmount;

  // total asset
  const totalAsset = fixedAssetAmount + cashAndEquivalent;

  // total income
  const totalIncome = tripIncomeAmount + accidentalIncomeAmount;

  // trip expense
  const tripExpense = allBalanceData?.find(
    (el: any) => el.label === 'Trip Expense'
  );
  const tripExpenseAmount = totalSum(tripExpense?.expenses || [], 'amount');

  // maintenance expense
  const maintenanceExpense = allBalanceData?.find(
    (el: any) => el.label === 'Maintenance Expense'
  );
  const maintenanceExpenseAmount = totalSum(
    maintenanceExpense?.maintenances || [],
    'serviceCharge'
  );

  // equipment expense
  const equipmentExpense = allBalanceData?.find(
    (el: any) => el.label === 'Equipment Expense'
  );
  const equipmentExpenseAmount = totalSum(
    equipmentExpense?.equipmentUses || [],
    'totalPrice'
  );

  // miscellaneous expense
  const miscellaneousExpense = allBalanceData?.find(
    (el: any) => el.label === 'Miscellaneous Expense'
  );
  const miscellaneousExpenseAmount = totalSum(
    miscellaneousExpense?.expenses || [],
    'amount'
  );

  // paper expense
  const paperExpense = allBalanceData?.find(
    (el: any) => el.label === 'Paper Expense'
  );
  const paperExpenseAmount = totalSum(
    paperExpense?.paperWorks || [],
    'totalAmount'
  );

  // total expenses
  const totalExpenses =
    tripExpenseAmount +
    maintenanceExpenseAmount +
    equipmentExpenseAmount +
    miscellaneousExpenseAmount +
    paperExpenseAmount +
    accidentalExpenseAmount;

  // net income
  const netIncome = totalIncome - totalExpenses;

  // equity
  const totalEquity = totalAsset - (netIncome > 0 ? 0 : Math.abs(netIncome));

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
              <SheetCard loading={isLoading} title="Assets" value={totalAsset}>
                <CardItem title="Fixed Asset" value={fixedAssetAmount} />
                <CardItem
                  title="Cash and Equivalent"
                  value={cashAndEquivalent}
                />
                <CardItem title="Account Receivable" value={0} />
              </SheetCard>
            </Col>
            <Col xs={24}>
              <SheetCard loading={isLoading} title="Liabilities" value={0}>
                <CardItem
                  title="Account Payable"
                  value={netIncome > 0 ? 0 : Math.abs(netIncome)}
                />
                <CardItem title="Loans" value={0} />
                <CardItem title="Interest Payable" value={0} />
              </SheetCard>
            </Col>
            <Col xs={24}>
              <SheetCard loading={isLoading} title="Equity" value={totalEquity}>
                <CardItem title="Capital" value={totalAsset} />
                <CardItem
                  title="Retained Earnings"
                  value={totalEquity - totalAsset}
                />
              </SheetCard>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <Row gutter={[32, 36]}>
            <Col xs={24}>
              <SheetCard loading={isLoading} title="Income" value={totalIncome}>
                <CardItem title="Trip Income" value={tripIncomeAmount} />
                <CardItem title="Interest Income" value={0} />
                <CardItem
                  title="Additional Income"
                  value={accidentalIncomeAmount}
                />
              </SheetCard>
            </Col>
            <Col xs={24}>
              <SheetCard
                loading={isLoading}
                title="Expense"
                value={totalExpenses}
              >
                <CardItem title="Trip Expense" value={tripExpenseAmount} />
                <CardItem
                  title="Maintenance Expense"
                  value={maintenanceExpenseAmount}
                />
                <CardItem
                  title="Equipment Expense"
                  value={equipmentExpenseAmount}
                />
                <CardItem
                  title="Miscellaneous Expense"
                  value={miscellaneousExpenseAmount}
                />
                <CardItem title="Fixed Asset Deprecation" value={0} />
                <CardItem
                  title="Additional Expense"
                  value={accidentalExpenseAmount}
                />
                <CardItem title="Legal Expense" value={paperExpenseAmount} />
              </SheetCard>
            </Col>
            <Col xs={24}>
              <SheetCard
                loading={isLoading}
                title="Profit/Loss"
                value={Math.abs(netIncome)}
              >
                <CardItem
                  title={netIncome > 0 ? 'Net Profit' : 'Net Loss'}
                  value={Math.abs(netIncome)}
                />
              </SheetCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default BalanceSheet;
