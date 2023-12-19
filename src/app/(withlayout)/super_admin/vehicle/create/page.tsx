"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UploadImage from "@/components/ui/uploadImage";
import { genderOption, isActive } from "@/constants/global";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";
import React from "react";

const CreateVehicle = () => {
  const onSubmit = async (values: any) => {
    console.log(values);
    try {
      // message.success("Admin created successfully!");
    } catch (err: any) {
      console.error(err.message);
    }
  };
  //   if(isLoading){
  //     return message.loading("Loading...")
  //   }
  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">Create Vehicle</h1>
      {/*  */}
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
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Vehicle Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="name"
                  size="large"
                  label="Fast name"
                  required={true}
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
                <FormInput
                  type="text"
                  name="name"
                  size="large"
                  label="Band name"
                  required={true}
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
                <FormInput
                  type="text"
                  name="regNo"
                  size="large"
                  label="Registration Number"
                  required={true}
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
                <FormInput
                  type="number"
                  name="vehicleValue"
                  size="large"
                  label="Value"
                  required={true}
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
                <FormSelectField
                  size="large"
                  name="activityType"
                  options={isActive}
                  // defaultValue={priceTypeOptions[0]}
                  label="Is active"
                  // placeholder="Select"
                  required={true}
                />
                {/* //! price type 8 */}
              </Col>
              <Col
                className="gutter-row"
                xs={24}
                // md={12}
                // lg={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <UploadImage /* name="image" */ />
              </Col>

              
            </Row>
          </div>

          {/* basic info */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Basic Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
             
           
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea name="address" label="Address" rows={4} />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea name="description" label="Description" rows={4} />
              </Col>
            </Row>
          </div>
          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateVehicle;
