"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import UploadImage from "@/components/ui/uploadImage";
import {
  useCreateVehicleMutation,
  useUpdateVehicleMutation,
} from "@/redux/api/vehicle/vehicleApi";
import { Button, Col, Row, message } from "antd";
import { useState } from "react";

const AddUpdateVehicle = ({
  updateData,
  brands,
  models,
  drivers,
  helpers,
}: {
  updateData?: any;
  brands?: any;
  models?: any;
  drivers?: any;
  helpers?: any;
}) => {
  const [image, setimage] = useState(updateData ? updateData.imageUrl : "");

  //Update
  const [updateVehicle, { isLoading: updateLoad }] = useUpdateVehicleMutation();

  //Create
  const [createVehicle, { isLoading: createLoad }] = useCreateVehicleMutation();

  const onSubmit = async (values: any) => {
    values.imageUrl = image;

    message.loading(updateData ? "Updating...." : "Adding....");
    try {
      const res = updateData
        ? await updateVehicle({
            id: updateData.id,
            data: {
              brandId: values.brandId,
              modelId: values.modelId,
              regNo: values.regNo,
              vehicleValue: values.vehicleValue,
              driverId: values.driverId,
              helperId: values.helperId,
              isActive: values.isActive,
              imageUrl: image,
            },
          }).unwrap()
        : await createVehicle(values).unwrap();
      if (res.id) {
        message.success(
          `Vehicle ${updateData ? "updated" : "added"} successfully!`
        );
      } else {
        message.error(res.message);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">
        {updateData ? "Update Vehicle" : "Add Vehicle"}
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
                  defaultImage={updateData ? updateData.imageUrl : ""}
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
                    <FormSelectField
                      size="large"
                      name="brandId"
                      options={brands.map((b: any) => ({
                        label: b.label,
                        value: b.id,
                      }))}
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
                  label="Vehicle Status"
                  placeholder="Select vehicle status"
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

export default AddUpdateVehicle;
