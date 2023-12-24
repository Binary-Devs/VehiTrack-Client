"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { Button, Col, Row } from "antd";

const CreateExpense = () => {
  const vehicles = [
    {
      id: 1,
      vehicleId: "VEH1001",
      regNo: "ABC123",
      brandId: 1,
      modelId: 1,
      vehicleValue: 25000.0,
      driverId: 1,
      helperId: 2,
      isActive: true,
      createdAt: "2023-01-01",
      updatedAt: "2023-01-01",
    },
    {
      id: 2,
      vehicleId: "VEH1002",
      regNo: "XYZ456",
      brandId: 2,
      modelId: 2,
      vehicleValue: 30000.0,
      driverId: 2,
      helperId: 3,
      isActive: true,
      createdAt: "2023-01-02",
      updatedAt: "2023-01-02",
    },
    {
      id: 3,
      vehicleId: "VEH1003",
      regNo: "LMN789",
      brandId: 3,
      modelId: 3,
      vehicleValue: 20000.0,
      driverId: 3,
      helperId: 4,
      isActive: true,
      createdAt: "2023-01-03",
      updatedAt: "2023-01-03",
    },
    {
      id: 4,
      vehicleId: "VEH1004",
      regNo: "PQR321",
      brandId: 1,
      modelId: 2,
      vehicleValue: 28000.0,
      driverId: 4,
      helperId: 5,
      isActive: false,
      createdAt: "2023-01-04",
      updatedAt: "2023-01-04",
    },
    {
      id: 5,
      vehicleId: "VEH1005",
      regNo: "JKL987",
      brandId: 2,
      modelId: 1,
      vehicleValue: 32000.0,
      driverId: 5,
      helperId: 1,
      isActive: true,
      createdAt: "2023-01-05",
      updatedAt: "2023-01-05",
    },
  ];
  const expenseHeads = [
    {
      id: 1,
      accountHeadId: 1,
      label: "Fuel Expenses",
      createdAt: "2023-10-01",
      updatedAt: "2023-10-01",
    },
    {
      id: 2,
      accountHeadId: 2,
      label: "Maintenance Costs",
      createdAt: "2023-10-02",
      updatedAt: "2023-10-02",
    },
    {
      id: 3,
      accountHeadId: 3,
      label: "Insurance Premiums",
      createdAt: "2023-10-03",
      updatedAt: "2023-10-03",
    },
    {
      id: 4,
      accountHeadId: 4,
      label: "Driver Salaries",
      createdAt: "2023-10-04",
      updatedAt: "2023-10-04",
    },
    {
      id: 5,
      accountHeadId: 5,
      label: "Vehicle Depreciation",
      createdAt: "2023-10-05",
      updatedAt: "2023-10-05",
    },
  ];
  const accountHeads = [
    {
      id: 1,
      accountTypeId: 1,
      label: "Primary Savings",
      createdAt: "2023-01-01",
      updatedAt: "2023-01-01",
    },
    {
      id: 2,
      accountTypeId: 2,
      label: "Main Checking",
      createdAt: "2023-01-02",
      updatedAt: "2023-01-02",
    },
    {
      id: 3,
      accountTypeId: 3,
      label: "Visa Credit Card",
      createdAt: "2023-01-03",
      updatedAt: "2023-01-03",
    },
    {
      id: 4,
      accountTypeId: 4,
      label: "Investment Portfolio",
      createdAt: "2023-01-04",
      updatedAt: "2023-01-04",
    },
    {
      id: 5,
      accountTypeId: 5,
      label: "Business Operating Account",
      createdAt: "2023-01-05",
      updatedAt: "2023-01-05",
    },
    {
      id: 6,
      accountTypeId: 6,
      label: "Personal Loan - John",
      createdAt: "2023-01-06",
      updatedAt: "2023-01-06",
    },
    {
      id: 7,
      accountTypeId: 7,
      label: "Mortgage - Home",
      createdAt: "2023-01-07",
      updatedAt: "2023-01-07",
    },
    {
      id: 8,
      accountTypeId: 8,
      label: "Auto Loan - Car",
      createdAt: "2023-01-08",
      updatedAt: "2023-01-08",
    },
    {
      id: 9,
      accountTypeId: 9,
      label: "Fixed Deposit - Term 1",
      createdAt: "2023-01-09",
      updatedAt: "2023-01-09",
    },
    {
      id: 10,
      accountTypeId: 10,
      label: "Emergency Fund - Savings",
      createdAt: "2023-01-10",
      updatedAt: "2023-01-10",
    },
  ];
  const trips = [
    {
      id: 1,
      tripNo: "TRP1001",
      startDate: "2023-12-01",
      endDate: "2023-12-05",
      from: "Cityville",
      to: "Townsville",
      distance: 200,
      amount: 800.0,
      accountHeadId: 1,
      vehicleId: 1,
      driverId: 1,
      helperId: 2,
      partyId: 1,
      status: "Completed",
      createdAt: "2023-12-01",
      updatedAt: "2023-12-05",
    },
    {
      id: 2,
      tripNo: "TRP1002",
      startDate: "2023-12-05",
      endDate: "2023-12-10",
      from: "Townsville",
      to: "Villagetown",
      distance: 150,
      amount: 600.0,
      accountHeadId: 2,
      vehicleId: 2,
      driverId: 2,
      helperId: 3,
      partyId: 2,
      status: "In Progress",
      createdAt: "2023-12-05",
      updatedAt: "2023-12-08",
    },
    {
      id: 3,
      tripNo: "TRP1003",
      startDate: "2023-12-10",
      endDate: "2023-12-15",
      from: "Villagetown",
      to: "Hamletville",
      distance: 180,
      amount: 720.0,
      accountHeadId: 3,
      vehicleId: 3,
      driverId: 3,
      helperId: 4,
      partyId: 3,
      status: "Pending",
      createdAt: "2023-12-10",
      updatedAt: "2023-12-12",
    },
    {
      id: 4,
      tripNo: "TRP1004",
      startDate: "2023-12-15",
      endDate: "2023-12-20",
      from: "Hamletville",
      to: "Cityville",
      distance: 220,
      amount: 880.0,
      accountHeadId: 4,
      vehicleId: 4,
      driverId: 4,
      helperId: 5,
      partyId: 4,
      status: "In Progress",
      createdAt: "2023-12-15",
      updatedAt: "2023-12-18",
    },
    {
      id: 5,
      tripNo: "TRP1005",
      startDate: "2023-12-20",
      endDate: "2023-12-25",
      from: "Cityville",
      to: "Townsville",
      distance: 200,
      amount: 800.0,
      accountHeadId: 5,
      vehicleId: 5,
      driverId: 5,
      helperId: 1,
      partyId: 5,
      status: "Pending",
      createdAt: "2023-12-20",
      updatedAt: "2023-12-22",
    },
  ];

  const vehicleOptions = vehicles?.map((vehicle) => {
    return {
      label: vehicle?.regNo,
      value: vehicle?.id,
    };
  });
  const expenseHeadOptions = expenseHeads?.map((expenseHead) => {
    return {
      label: expenseHead?.label,
      value: expenseHead?.id,
    };
  });

  const accountHeadOptions = accountHeads?.map((accountHead) => {
    return {
      label: accountHead?.label,
      value: accountHead?.id,
    };
  });
  const tripOptions = trips?.map((trip) => {
    return {
      label: trip?.tripNo,
      value: trip?.id,
    };
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Create Expense</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8}>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                size="large"
                name="vehicleId "
                options={vehicleOptions as any}
                label="Vehicle"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col span={8}>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                size="large"
                name="expenseHeadId "
                options={expenseHeadOptions as any}
                label="Expense Head"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col span={8}>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                size="large"
                name="AccountHeadId "
                options={accountHeadOptions as any}
                label="Account Head"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col span={8}>
            <div>
              <FormSelectField
                size="large"
                name="tripId"
                options={tripOptions as any}
                label="Trip"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col
            className="gutter-row"
            xs={24}
            md={12}
            lg={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormDatePicker
              name="date"
              label="Date"
              size="large"
              disablePrevious={false}
            />
          </Col>
          <Col span={8}>
            <FormInput name="amount" label="Amount" />
          </Col>
          <Col span={8}>
            <FormInput name="remarks" label="Remarks" />
          </Col>
          <Col span={8}>
            <FormInput name="isMisc" label="isMisc" />
          </Col>
        </Row>
        <Button style={{ margin: "10px 0px" }} type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateExpense;
