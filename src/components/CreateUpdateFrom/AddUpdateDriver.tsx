"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import { bloodGroupOptions } from "@/constants/global";
import {
  useGetSingleDriverQuery,
  useUpdateDriverMutation,
} from "@/redux/api/driver/driverApi";
import { useCreateDriverMutation } from "@/redux/api/user/userApi";
import { Button, Col, Row, message } from "antd";
import { useState } from "react";
import FormSelectField from "../Forms/FormSelectField";
import Loader from "../Utlis/Loader";
import UploadImage from "../ui/uploadImage";

const AddUpdateDriver = ({ id }: { id?: string }) => {
  const [image, setimage] = useState("");
  //Get
  const { data, isLoading: getLoad } = useGetSingleDriverQuery(id ? id : "");

  //Update
  const [updateDriver, { isLoading: updateLoad }] = useUpdateDriverMutation();

  //Create
  const [createDriver, { isLoading: createLoad }] = useCreateDriverMutation();

  const onSubmit = async (values: any) => {
    message.loading(id ? "Updating...." : "Adding....");
    id ? values.profileImg : (values.driver.profileImg = image);
    try {
      const res = id
        ? await updateDriver({
            id,
            data: {
              fullName: values.driver.fullName,
              mobile: values.driver.mobile,
              licenseNo: values.driver.licenseNo,
              bloodGroup: values.driver.bloodGroup,
              address: values.driver.address,
            },
          }).unwrap()
        : await createDriver(values).unwrap();
      if (res.id) {
        message.success(`Driver ${id ? "updated" : "added"} successfully`);
      } else {
        message.error(res.message);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  if (id && getLoad) {
    return <Loader className="h-[40vh] flex items-center justify-center" />;
  }

  // console.log(data);

  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">
        {id ? "Update Driver" : "Add Driver"}
      </h1>
      <div>
        <Form submitHandler={onSubmit} defaultValues={id ? { ...data } : {}}>
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
                <UploadImage setImageStatus={setimage} name="profileImg" />
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
                    {!id && (
                      <FormInput
                        type="text"
                        name="userName"
                        size="large"
                        label="User Name"
                        required={true}
                        placeholder="Please enter driver user name"
                      />
                    )}
                  </Col>
                  <Col
                    style={{
                      padding: "0px",
                    }}
                  >
                    {!id && (
                      <FormInput
                        type="password"
                        name="password"
                        size="large"
                        label="Password"
                        required={true}
                        placeholder="Please enter driver password"
                      />
                    )}
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
                  name={id ? "fullName" : "driver.fullName"}
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
                  type="tel"
                  name={id ? "mobile" : "driver.mobile"}
                  size="large"
                  label="Mobile"
                  required={true}
                  placeholder="Please enter driver mobile number"
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
                  name={id ? "licenseNo" : "driver.licenseNo"}
                  size="large"
                  label="License No"
                  // required={true}
                  placeholder="Please enter driver license number"
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
                <FormSelectField
                  size="large"
                  name={id ? "bloodGroup" : "driver.bloodGroup"}
                  options={bloodGroupOptions}
                  label="Blood Group"
                  placeholder="Select driver blood group"
                  // required={true}
                />
              </Col>

              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={24}
                style={{
                  marginBottom: "15px",
                }}
              >
                <FormTextArea
                  name={id ? "address" : "driver.address"}
                  label="Address"
                  rows={3}
                  placeholder="Enter driver address"
                  // required
                />
              </Col>
            </Row>
            <div className="flex justify-end items-center">
              <Button
                htmlType="submit"
                type="primary"
                disabled={createLoad || updateLoad}
              >
                {id ? "Update" : "Add"}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddUpdateDriver;
