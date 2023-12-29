"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { useCreateDriverMutation } from "@/redux/api/user/userApi";
import { Button, Col, Row, message } from "antd";
import UploadImage from "../ui/uploadImage";

const AddUpdateDriver = () => {
  const [createDriver, { isLoading }] = useCreateDriverMutation();

  const onSubmit = async (values: any) => {
    message.loading("Adding driver....");
    console.log(values);
    try {
      const res = await createDriver(values).unwrap();
      if (res.id) {
        message.success("Driver added successfully!");
      } else {
        message.error(res.message);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  //   if(isLoading){
  //     return message.loading("Loading...")
  //   }
  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">Add Driver</h1>
      <div>
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "8px",
              padding: "20px",
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
                  label="User Name"
                  required={true}
                  placeholder="Please enter driver user name"
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
                  name="driver.fullName"
                  size="large"
                  label="Full Name"
                  required={true}
                  placeholder="Please enter driver full name"
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
                  name="driver.mobile"
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
                  name="driver.address"
                  label="Address"
                  rows={3}
                  placeholder="Enter manager address"
                />
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
                <UploadImage />
              </Col>
            </Row>
          </div>

          <div className="flex justify-center items-center">
            <Button htmlType="submit" type="primary" disabled={isLoading}>
              Add
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddUpdateDriver;
