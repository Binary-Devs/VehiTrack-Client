"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UploadImage from "@/components/ui/uploadImage";
import { isActive } from "@/constants/global";
import { useCreateVehicleMutation } from "@/redux/api/vehicle/vehicleApi";
import { Button, Col, Row, message } from "antd";

const AddUpdateVehicle = () => {
  const [createVehicle, { isLoading }] = useCreateVehicleMutation();
  const onSubmit = async (values: any) => {
    message.loading("Adding....");
    try {
      const res = await createVehicle(values).unwrap();
      if (res.id) {
        message.success("Vehicle added successfully!");
      } else {
        message.error(res.message);
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
      <h1 className="text-center my-1 font-bold text-2xl">Add Vehicle</h1>
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
                  label="Band name"
                  required={true}
                  placeholder="Please enter band name"
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
                  placeholder="Please enter a valid registration number"
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
                  placeholder="Please enter vehicle value"
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
                  name="Driver"
                  options={driverlist}
                  // defaultValue={priceTypeOptions[0]}
                  label="Driver"
                  // placeholder="Select"
                  required={true}
                />
                {/* //! price type 8 */}
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
                  name="Driver"
                  options={helperList}
                  // defaultValue={priceTypeOptions[0]}
                  label="Helper"
                  // placeholder="Select"
                  required={true}
                />
                {/* //! price type 8 */}
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
                  label="Status"
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
              <Col xs={24} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="description"
                  label="Description"
                  rows={10}
                />
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

export default AddUpdateVehicle;
