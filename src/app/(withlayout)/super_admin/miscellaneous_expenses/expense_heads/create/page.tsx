"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { Button, Col, Row } from "antd";

const CreateExpenseHeads = () => {
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
  const accountHeadOptions = accountHeads?.map((accountHead) => {
    return {
      label: accountHead?.label,
      value: accountHead?.id,
    };
  });
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Create ExpenseHeads</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FormInput name="Label" label="Label" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                size="large"
                name="accountTypeId "
                options={accountHeadOptions as any}
                label="Account Type"
                placeholder="Select"
              />
            </div>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateExpenseHeads;
