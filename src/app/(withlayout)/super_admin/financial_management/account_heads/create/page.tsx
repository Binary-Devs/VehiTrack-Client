"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { Button, Col, Row } from "antd";

const CreateAccountHeads = () => {
  const accountTypes = [
    {
      id: 1,
      label: "Savings",
      createdAt: "2023-01-01",
      updatedAt: "2023-01-01",
    },
    {
      id: 2,
      label: "Checking",
      createdAt: "2023-01-02",
      updatedAt: "2023-01-02",
    },
    {
      id: 3,
      label: "Credit Card",
      createdAt: "2023-01-03",
      updatedAt: "2023-01-03",
    },
    {
      id: 4,
      label: "Investment",
      createdAt: "2023-01-04",
      updatedAt: "2023-01-04",
    },
    {
      id: 5,
      label: "Business",
      createdAt: "2023-01-05",
      updatedAt: "2023-01-05",
    },
    {
      id: 6,
      label: "Personal Loan",
      createdAt: "2023-01-06",
      updatedAt: "2023-01-06",
    },
    {
      id: 7,
      label: "Mortgage",
      createdAt: "2023-01-07",
      updatedAt: "2023-01-07",
    },
    {
      id: 8,
      label: "Auto Loan",
      createdAt: "2023-01-08",
      updatedAt: "2023-01-08",
    },
    {
      id: 9,
      label: "Fixed Deposit",
      createdAt: "2023-01-09",
      updatedAt: "2023-01-09",
    },
  ];
  const accountTypeOptions = accountTypes?.map((accountType) => {
    return {
      label: accountType?.label,
      value: accountType?.id,
    };
  });
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Create Room</h1>
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
                options={accountTypeOptions as any}
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

export default CreateAccountHeads;
