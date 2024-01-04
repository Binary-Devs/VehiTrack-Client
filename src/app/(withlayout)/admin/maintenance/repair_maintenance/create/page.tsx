"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormDynamicFields from "@/components/ui/FormDynamicFields";
import { maintenanceType, workshopType } from "@/constants/global";

import { Button, Col, Row } from "antd";

const CreateRepairMaintenance = () => {
  const vehicles = [
    {
      id: 1,
      vehicleId: "VEH1001",
      regNo: "ABC123",
      brandId: 1,
      modelId: 1,
      vehicleValue: 25000.0,
      driverId: 1,
      helperId: 2,
      isActive: true,
      createdAt: "2023-01-01",
      updatedAt: "2023-01-01",
    },
    {
      id: 2,
      vehicleId: "VEH1002",
      regNo: "XYZ456",
      brandId: 2,
      modelId: 2,
      vehicleValue: 30000.0,
      driverId: 2,
      helperId: 3,
      isActive: true,
      createdAt: "2023-01-02",
      updatedAt: "2023-01-02",
    },
    {
      id: 3,
      vehicleId: "VEH1003",
      regNo: "LMN789",
      brandId: 3,
      modelId: 3,
      vehicleValue: 20000.0,
      driverId: 3,
      helperId: 4,
      isActive: true,
      createdAt: "2023-01-03",
      updatedAt: "2023-01-03",
    },
    {
      id: 4,
      vehicleId: "VEH1004",
      regNo: "PQR321",
      brandId: 1,
      modelId: 2,
      vehicleValue: 28000.0,
      driverId: 4,
      helperId: 5,
      isActive: false,
      createdAt: "2023-01-04",
      updatedAt: "2023-01-04",
    },
    {
      id: 5,
      vehicleId: "VEH1005",
      regNo: "JKL987",
      brandId: 2,
      modelId: 1,
      vehicleValue: 32000.0,
      driverId: 5,
      helperId: 1,
      isActive: true,
      createdAt: "2023-01-05",
      updatedAt: "2023-01-05",
    },
  ];

  const vehicleOptions = vehicles?.map((vehicle) => {
    return {
      label: vehicle?.regNo,
      value: vehicle?.id,
    };
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Create Repair Maintenance</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col style={{ margin: "10px 0" }}>
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
            >
              <FormDatePicker
                name="date"
                label="Date"
                size="large"
                disablePrevious={false}
              />
            </Col>
            <Col>
              <div>
                <FormSelectField
                  size="large"
                  name="vehicleId "
                  options={vehicleOptions as any}
                  label="Vehicle"
                  placeholder="Select"
                />
              </div>
            </Col>
            <Col>
              <div>
                <FormSelectField
                  size="large"
                  name="workshopType "
                  options={workshopType as any}
                  label="Workshop Type"
                  placeholder="Select"
                />
              </div>
            </Col>
            <Col>
              <div>
                <FormSelectField
                  size="large"
                  name="maintenanceType "
                  options={maintenanceType as any}
                  label="Maintenance Type"
                  placeholder="Select"
                />
              </div>
            </Col>
            <Col>
              <FormInput name="odometer" label="Odometer" />
            </Col>
            <Col>
              <FormInput name="serviceCharge" label="Service Charge" />
            </Col>
            <Col>
              <FormInput name="remarks" label="Remarks" />
            </Col>
            <Button
              style={{ margin: "10px 0" }}
              type="primary"
              htmlType="submit"
            >
              add
            </Button>
          </Col>
          <Col span={12} style={{ margin: "10px 0" }}>
            <FormDynamicFields />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CreateRepairMaintenance;
