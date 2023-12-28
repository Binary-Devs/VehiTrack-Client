"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Button, Col, Row } from "antd";

const CreatePumpStation = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Create Pump Station</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col xs={24} md={12} lg={8} style={{ margin: "10px 0" }}>
            <FormInput name="label" label="Label" />
          </Col>
          <Col xs={24} md={12} lg={8} style={{ margin: "10px 0" }}>
            <FormInput name="address" label="Address" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreatePumpStation;
