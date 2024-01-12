"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { bloodGroupOptions } from "@/constants/global";
import { useUpdateHelperMutation } from "@/redux/api/helper/helperApi";
import { useCreateHelperMutation } from "@/redux/api/user/userApi";
import { Button, Col, Row, message } from "antd";
import { useState } from "react";
import FormSelectField from "../Forms/FormSelectField";
import UploadImage from "../ui/uploadImage";

const AddUpdateHelper = ({ updateData }: { updateData?: any }) => {
  const [image, setimage] = useState(updateData ? updateData.imageUrl : "");

  console.log(updateData);

  //Update
  const [updateHelper, { isLoading: updateLoad }] = useUpdateHelperMutation();

  //Create
  const [createHelper, { isLoading: createLoad }] = useCreateHelperMutation();

  // console.log(updateData, data);

  const onSubmit = async (values: any) => {
    message.loading(updateData ? "Updating...." : "Adding....");
    console.log(values);
    values.imageUrl = image;
    try {
      const res = updateData
        ? await updateHelper({
            id: updateData,
            data: {
              fullName: values.fullName,
              mobile: values.mobile,
              bloodGroup: values.bloodGroup,
              address: values.address,
              profileImg: image,
            },
          }).unwrap()
        : await createHelper({
            userName: values.userName,
            password: values.password,
            helper: {
              fullName: values.fullName,
              mobile: values.mobile,
              bloodGroup: values.bloodGroup,
              address: values.address,
              profileImg: image,
            },
          }).unwrap();
      if (res.id) {
        message.success(
          `Helper ${updateData ? "updated" : "added"} successfully`
        );
      } else {
        message.error(res.message);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">
        {updateData ? "Update Helper" : "Add Helper"}
      </h1>
      <div>
        <Form
          submitHandler={onSubmit}
          defaultValues={updateData ? { ...updateData } : {}}
        >
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
                sm={6}
                md={6}
                lg={4}
                // style={{
                //   marginBottom: "10px",
                // }}
              >
                <UploadImage
                  setImageStatus={setimage}
                  name="imageUrl"
                  defaultImage={image}
                />
              </Col>

              <Col
                className="gutter-row"
                xs={14}
                sm={18}
                md={18}
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
                    {!updateData && (
                      <FormInput
                        type="text"
                        name="userName"
                        size="large"
                        label="Unique UserId"
                        required={true}
                        placeholder="Please enter helper user name"
                      />
                    )}
                  </Col>
                  <Col
                    style={{
                      padding: "0px",
                    }}
                  >
                    {!updateData && (
                      <FormInput
                        type="password"
                        name="password"
                        size="large"
                        label="Password"
                        required={true}
                        placeholder="Please enter helper password"
                      />
                    )}
                  </Col>
                </div>
              </Col>

              <Col
                className="gutter-row"
                xs={24}
                md={8}
                lg={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="fullName"
                  size="large"
                  label="Full Name"
                  required={true}
                  placeholder="Please enter helper full name"
                />
              </Col>

              <Col
                className="gutter-row"
                xs={24}
                md={8}
                lg={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="tel"
                  name="mobile"
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
                md={8}
                lg={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="bloodGroup"
                  options={bloodGroupOptions}
                  label="Blood Group"
                  placeholder="Select helper blood group"
                  // required={true}
                />
              </Col>

              <Col
                className="gutter-row"
                xs={24}
                md={24}
                lg={24}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormTextArea
                  name="address"
                  size="large"
                  label="Address"
                  rows={2}
                  placeholder="Enter helper address"
                  // required
                />
              </Col>
            </Row>
            <div className="flex justify-end items-center mt-[5px]">
              <Button
                htmlType="submit"
                type="primary"
                disabled={createLoad || updateLoad}
                style={{ width: "100%" }}
              >
                {updateData ? "Update" : "Add"}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddUpdateHelper;
