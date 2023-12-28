"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useCreatePartyMutation } from "@/redux/api/party/partyApi";
import { Button, Col, Row, message } from "antd";

const AddPartyList = () => {
  const [createParty] = useCreatePartyMutation();
  const onSubmit = async (data: any) => {
    message.loading("creating.............");
    try {
      const res = await createParty({ ...data }).unwrap();
      if (res.id) {
        message.success(" create in successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div>
      <h1>Create Party</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col xs={24} md={12} lg={8} style={{ margin: "10px 0" }}>
            <FormInput name="fullName" label="Full Name" />
          </Col>
          <Col xs={24} md={12} lg={8} style={{ margin: "10px 0" }}>
            <FormInput name="mobile" label="Mobile" />
          </Col>
          <Col xs={24} md={12} lg={8} style={{ margin: "10px 0" }}>
            <FormInput name="address" label="Address" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add party
        </Button>
      </Form>
    </div>
  );
};

export default AddPartyList;
