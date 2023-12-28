"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UploadImage from "@/components/ui/uploadImage";
import { genderOption, isActive } from "@/constants/global";
import { useCreateModelMutation } from "@/redux/api/model/modelApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import React from "react";

const AddUpdateModel = () => {
  const [createModel] = useCreateModelMutation();
  const onSubmit = async (values: any) => {
    message.loading("Adding....");
    try {
      const res = await createModel({ ...values }).unwrap();
      if (res.id) {
        message.success("Model added successfully!");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  //   if(isLoading){
  //     return message.loading("Loading...")
  //   }

  const driverlist = [
    {
      label: "Md korim (D-25141)",
      value: "dffd",
    },
    {
      label: "Md hasan (D-25414)",
      value: "ddfsdf",
    },
    {
      label: "Md Mondi (D-74118)",
      value: "ddsdf",
    },
    {
      label: "Mukbos (D-17411)",
      value: "dsfd",
    },
  ];
  const helperList = [
    {
      label: "Aomie (H-2511)",
      value: "ddafds",
    },
    {
      label: "Sampod (H-5414)",
      value: "ddsadf",
    },
    {
      label: "Md timil (H-85118)",
      value: "ddafd",
    },
    {
      label: "alind (H-1411)",
      value: "ddasdf",
    },
  ];

  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">Add Model</h1>
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
            <p className="text-base lg:text-lg font-normal">
              Model Information
            </p>
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
                  name="label"
                  size="large"
                  label="Band name"
                  required={true}
                  placeholder="Please enter band name"
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
                  name="brandId"
                  options={driverlist}
                  // defaultValue={priceTypeOptions[0]}
                  label="Brand Id"
                  // placeholder="Select"
                  required={true}
                />
                {/* //! price type 8 */}
              </Col>
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

export default AddUpdateModel;
