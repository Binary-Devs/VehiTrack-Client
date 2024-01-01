"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import UploadImage from "@/components/ui/uploadImage";
import { useCreateVehicleMutation } from "@/redux/api/vehicle/vehicleApi";
import { Button, Col, Row, message } from "antd";

const AddUpdateVehicle = ({
  brands,
  setBrandId,
  models,
  drivers,
  helpers,
}: {
  brands: any;
  setBrandId: any;
  models: any;
  drivers: any;
  helpers: any;
}) => {
  const [createVehicle, { isLoading }] = useCreateVehicleMutation();
  const onSubmit = async (values: any) => {
    console.log(values);
    message.loading("Adding vehicle....");
    // try {
    //   const res = await createVehicle(values).unwrap();
    //   if (res.id) {
    //     message.success("Vehicle added successfully!");
    //   } else {
    //     message.error(res.message);
    //   }
    // } catch (err: any) {
    //   message.error(err.message);
    // }
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
                sm={6}
                md={6}
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
                    <FormSelectField
                      size="large"
                      name="brandId"
                      options={brands.map((b: any) => ({
                        label: b.label,
                        value: b.id,
                      }))}
                      // defaultValue={priceTypeOptions[0]}
                      label="Brand"
                      placeholder="Select vehicle brand"
                      required={true}
                    />
                  </Col>
                  <Col
                    style={{
                      padding: "0px",
                    }}
                  >
                    <FormSelectField
                      size="large"
                      name="modelId"
                      options={models.map((m: any) => ({
                        label: m.label,
                        value: m.id,
                      }))}
                      // defaultValue={priceTypeOptions[0]}
                      label="Model"
                      placeholder="Select vehicle model"
                      required={true}
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
                  name="regNo"
                  size="large"
                  // value=""
                  label="Registration No"
                  required={true}
                  placeholder="Please enter vehicle registration no"
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
                  type="number"
                  name="vehicleValue"
                  size="large"
                  // value=""
                  label="Vehicle Value"
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
                  name="driverId"
                  options={drivers.map((d: any) => ({
                    label: d.fullName,
                    value: d.id,
                  }))}
                  // defaultValue={priceTypeOptions[0]}
                  label="Driver"
                  placeholder="Select vehicle driver"
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
                  name="helperId"
                  options={helpers.map((h: any) => ({
                    label: h.fullName,
                    value: h.id,
                  }))}
                  // defaultValue={priceTypeOptions[0]}
                  label="Helper"
                  placeholder="Select vehicle helper"
                  // required={true}
                />
              </Col>

              <Col
                className="gutter-row"
                xs={24}
                md={24}
                lg={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="isActive"
                  options={[
                    {
                      label: "Active",
                      value: true,
                    },
                    {
                      label: "Inactive",
                      value: false,
                    },
                  ]}
                  // defaultValue={priceTypeOptions[0]}
                  label="Vehicle Status"
                  placeholder="Select vehicle status"
                  // required={true}
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

export default AddUpdateVehicle;
