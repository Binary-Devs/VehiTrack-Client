"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useCreateAdminMutation } from "@/redux/api/user/userApi";
import { Button, Col, Row, message } from "antd";
import FormTextArea from "../Forms/FormTextArea";

const CreateManager = () => {
  const [createAdmin] = useCreateAdminMutation();

  const onSubmit = async (values: any) => {
    message.loading("Creating Manager!");
    // console.log(values);
    try {
      const res = await createAdmin(values);
      console.log(res);
      message.success("Manager created successfully!");
    } catch (err: any) {
      console.error(err.message);
    }
  };
  //   if(isLoading){
  //     return message.loading("Loading...")
  //   }
  return (
    <div className="rounded-xl bg-white p-3">
      <h1 className="text-center my-2 font-bold text-lg lg:text-2xl">
        Create Manager
      </h1>

      <div>
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
            className="my-4"
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="userName"
                  size="large"
                  label="User Id"
                  required={true}
                  placeholder="Please enter User ID"
                />
              </Col>

              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="admin.fullName"
                  size="large"
                  label="Name"
                  required={true}
                  placeholder="Please enter manager name"
                />
              </Col>
              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                  required={true}
                  placeholder="Please enter a password"
                />
              </Col>
              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="admin.mobile"
                  size="large"
                  label="Mobile"
                  required={true}
                  placeholder="Please enter a mobile number"
                />
              </Col>
              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={24}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormTextArea
                  name="admin.address"
                  label="Address"
                  rows={3}
                  placeholder="Enter manager address"
                />
              </Col>

              {/* <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <UploadImage name="image" />
              </Col> */}
            </Row>
          </div>

          <div className="flex justify-center items-center">
            <Button htmlType="submit" type="primary">
              Create
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateManager;
