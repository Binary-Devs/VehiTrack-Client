"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useCreateAccountTypeMutation } from "@/redux/api/accountType/accountTypeApi";
import { Button, Col, Row, message } from "antd";

const AddAccountType = () => {
  const [createAccountType] = useCreateAccountTypeMutation();
  const onSubmit = async (data: any) => {
    message.loading("creating.............");
    try {
      const res = await createAccountType({ ...data }).unwrap();
      if (res.id) {
        message.success(" create account type in successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div>
      <h1>Create Account Type</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col xs={24} md={12} lg={8} style={{ margin: "10px 0" }}>
            <FormInput name="label" label="Label" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default AddAccountType;
