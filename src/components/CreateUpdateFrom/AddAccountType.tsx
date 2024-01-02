"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useCreateAccountTypeMutation } from "@/redux/api/accountType/accountTypeApi";
import { Button, Col, Row, message } from "antd";

const AddAccountType = () => {
  const [createAccountType, { isLoading }] = useCreateAccountTypeMutation();
  const onSubmit = async (data: any) => {
    message.loading("Adding.............");
    try {
      const res = await createAccountType({ ...data }).unwrap();
      if (res.id) {
        message.success(" Account Type add in successfully");
      } else {
        message.error(res.message);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">Add Account Type</h1>
      <div>
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p className="text-base lg:text-lg font-normal">
              Account Type Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                xs={24}
                md={24}
                lg={24}
                style={{ margin: "10px 0" }}
              >
                <FormInput
                  type="text"
                  name="label"
                  label="Label"
                  size="large"
                  required={true}
                  placeholder="Please enter account type name"
                />
              </Col>
            </Row>
          </div>
          <div className="flex justify-center items-center">
            <Button htmlType="submit" type="primary" disabled={isLoading}>
              Create
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddAccountType;
