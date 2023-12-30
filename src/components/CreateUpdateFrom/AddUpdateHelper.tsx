"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { bloodGroupOptions } from "@/constants/global";
import { useCreateHelperMutation } from "@/redux/api/user/userApi";
import { Button, Col, Row, message } from "antd";
import FormSelectField from "../Forms/FormSelectField";
import UploadImage from "../ui/uploadImage";

const AddUpdateHelper = () => {
  const [createHelper, { isLoading }] = useCreateHelperMutation();

  const onSubmit = async (values: any) => {
    message.loading("Adding helper....");
    console.log(values);
    try {
      const res = await createHelper(values).unwrap();
      if (res.id) {
        message.success("Helper added successfully");
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
      <h1 className="text-center my-1 font-bold text-2xl">Add Helper</h1>
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
            <Row
              style={{
                display: "flex",
                alignItems: "center",
              }}
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            >
              <Col
                className="gutter-row"
                xs={10}
                md={4}
                lg={4}
                // style={{
                //   marginBottom: "10px",
                // }}
              >
                <UploadImage />
              </Col>

              <Col
                className="gutter-row"
                xs={14}
                md={20}
                lg={20}
                style={{
                  marginBottom: "10px",
                }}
              >
                <div className="space-y-[10px]">
                  <Col
                    style={{
                      padding: "0px",
                    }}
                  >
                    <FormInput
                      type="text"
                      name="userName"
                      size="large"
                      label="User Name"
                      required={true}
                      placeholder="Please enter helper user name"
                    />
                  </Col>
                  <Col
                    style={{
                      padding: "0px",
                    }}
                  >
                    <FormInput
                      type="password"
                      name="password"
                      size="large"
                      label="Password"
                      required={true}
                      placeholder="Please enter helper password"
                    />
                  </Col>
                </div>
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
                  name="helper.fullName"
                  size="large"
                  label="Full Name"
                  required={true}
                  placeholder="Please enter helper full name"
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
                  type="tel"
                  name="helper.mobile"
                  size="large"
                  label="Mobile"
                  required={true}
                  placeholder="Please enter helper mobile number"
                />
              </Col>
              {/* <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="number"
                  name="helper.licenseNo"
                  size="large"
                  label="License No"
                  required={true}
                  placeholder="Please enter helper license number"
                />
              </Col> */}
              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="helper.bloodGroup"
                  options={bloodGroupOptions}
                  // defaultValue={priceTypeOptions[0]}
                  label="Blood Group"
                  placeholder="Select helper blood group"
                  // required={true}
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
                <FormTextArea
                  name="helper.address"
                  size="large"
                  label="Address"
                  rows={1}
                  placeholder="Enter helper address"
                  required
                />
              </Col>
            </Row>
            <div className="flex justify-end items-center mt-[5px]">
              <Button htmlType="submit" type="primary" disabled={isLoading}>
                Add
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddUpdateHelper;
