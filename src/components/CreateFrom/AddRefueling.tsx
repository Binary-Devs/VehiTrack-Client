"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { useGetAllDriverQuery } from "@/redux/api/driver/driverApi";
import { useCreateFuelMutation } from "@/redux/api/fuel/fuelApi";
import { useGetAllFuelStationQuery } from "@/redux/api/fuelStation/fuelStationApi";
import { useGetAllFuelTypeQuery } from "@/redux/api/fuelType/fuelTypeApi";
import { useGetAllHelperQuery } from "@/redux/api/helper/helperApi";
import { useGetAllVehicleQuery } from "@/redux/api/vehicle/vehicleApi";
import { Button, Col, Row, message } from "antd";

const AddRefueling = () => {
  const { data: driversData } = useGetAllDriverQuery({ limit: 100 });
  const { data: helpersData } = useGetAllHelperQuery({ limit: 100 });
  const { data: vehiclesData } = useGetAllVehicleQuery({ limit: 100 });
  const { data: fuelTypesData } = useGetAllFuelTypeQuery({ limit: 100 });
  const { data: fuelStationData } = useGetAllFuelStationQuery({ limit: 100 });
  const drivers = driversData?.drivers;
  const helpers = helpersData?.helpers;
  const vehicles = vehiclesData?.vehicles;
  const fuelTypes = fuelTypesData?.fuelTypes;
  const fuelPumps = fuelStationData?.fuelStations;

  //     {
  //       id: 1,
  //       vehicleId: "VEH1001",
  //       regNo: "ABC123",
  //       brandId: 1,
  //       modelId: 1,
  //       vehicleValue: 25000.0,
  //       driverId: 1,
  //       helperId: 2,
  //       isActive: true,
  //       createdAt: "2023-01-01",
  //       updatedAt: "2023-01-01",
  //     },
  //     {
  //       id: 2,
  //       vehicleId: "VEH1002",
  //       regNo: "XYZ456",
  //       brandId: 2,
  //       modelId: 2,
  //       vehicleValue: 30000.0,
  //       driverId: 2,
  //       helperId: 3,
  //       isActive: true,
  //       createdAt: "2023-01-02",
  //       updatedAt: "2023-01-02",
  //     },
  //     {
  //       id: 3,
  //       vehicleId: "VEH1003",
  //       regNo: "LMN789",
  //       brandId: 3,
  //       modelId: 3,
  //       vehicleValue: 20000.0,
  //       driverId: 3,
  //       helperId: 4,
  //       isActive: true,
  //       createdAt: "2023-01-03",
  //       updatedAt: "2023-01-03",
  //     },
  //     {
  //       id: 4,
  //       vehicleId: "VEH1004",
  //       regNo: "PQR321",
  //       brandId: 1,
  //       modelId: 2,
  //       vehicleValue: 28000.0,
  //       driverId: 4,
  //       helperId: 5,
  //       isActive: false,
  //       createdAt: "2023-01-04",
  //       updatedAt: "2023-01-04",
  //     },
  //     {
  //       id: 5,
  //       vehicleId: "VEH1005",
  //       regNo: "JKL987",
  //       brandId: 2,
  //       modelId: 1,
  //       vehicleValue: 32000.0,
  //       driverId: 5,
  //       helperId: 1,
  //       isActive: true,
  //       createdAt: "2023-01-05",
  //       updatedAt: "2023-01-05",
  //     },
  //   ];
  //   const drivers = [
  //     {
  //       id: 1,
  //       fullName: "John Doe",
  //       mobile: "123-456-7890",
  //       address: "123 Main Street, Cityville",
  //       userId: 101,
  //       isActive: true,
  //       createdAt: "2023-01-01",
  //       updatedAt: "2023-01-01",
  //     },
  //     {
  //       id: 2,
  //       fullName: "Alice Johnson",
  //       mobile: "987-654-3210",
  //       address: "456 Elm Avenue, Townsville",
  //       userId: 102,
  //       isActive: true,
  //       createdAt: "2023-01-02",
  //       updatedAt: "2023-01-02",
  //     },
  //     {
  //       id: 3,
  //       fullName: "Bob Smith",
  //       mobile: "555-123-4567",
  //       address: "789 Oak Lane, Villagetown",
  //       userId: 103,
  //       isActive: true,
  //       createdAt: "2023-01-03",
  //       updatedAt: "2023-01-03",
  //     },
  //     {
  //       id: 4,
  //       fullName: "Eva Martinez",
  //       mobile: "777-888-9999",
  //       address: "101 Pine Street, Hamletville",
  //       userId: 104,
  //       isActive: false,
  //       createdAt: "2023-01-04",
  //       updatedAt: "2023-01-04",
  //     },
  //     {
  //       id: 5,
  //       fullName: "Mike Williams",
  //       mobile: "222-333-4444",
  //       address: "222 Maple Avenue, Countryside",
  //       userId: 105,
  //       isActive: true,
  //       createdAt: "2023-01-05",
  //       updatedAt: "2023-01-05",
  //     },
  //   ];
  //   const fuelPumps = [
  //     {
  //       id: 1,
  //       label: "City Fuel Station",
  //       address: "123 Main Street, Cityville",
  //       createdAt: "2023-01-01",
  //       updatedAt: "2023-01-01",
  //     },
  //     {
  //       id: 2,
  //       label: "Highway Fuel Stop",
  //       address: "456 Interstate Avenue, Highway Town",
  //       createdAt: "2023-01-02",
  //       updatedAt: "2023-01-02",
  //     },
  //     {
  //       id: 3,
  //       label: "Green Energy Hub",
  //       address: "789 Eco Lane, Sustainaville",
  //       createdAt: "2023-01-03",
  //       updatedAt: "2023-01-03",
  //     },
  //     {
  //       id: 4,
  //       label: "Urban Gas & Go",
  //       address: "101 Downtown Plaza, Metro City",
  //       createdAt: "2023-01-04",
  //       updatedAt: "2023-01-04",
  //     },
  //     {
  //       id: 5,
  //       label: "Suburban Fuels",
  //       address: "222 Suburb Street, Tranquil Town",
  //       createdAt: "2023-01-05",
  //       updatedAt: "2023-01-05",
  //     },
  //   ];

  //   const fuelTypes = [
  //     {
  //       id: 1,
  //       label: "Petrol",
  //       createdAt: "2023-01-01",
  //       updatedAt: "2023-01-01",
  //     },
  //     {
  //       id: 2,
  //       label: "Diesel",
  //       createdAt: "2023-01-02",
  //       updatedAt: "2023-01-02",
  //     },
  //     {
  //       id: 3,
  //       label: "Electric",
  //       createdAt: "2023-01-03",
  //       updatedAt: "2023-01-03",
  //     },
  //     {
  //       id: 4,
  //       label: "Hybrid",
  //       createdAt: "2023-01-04",
  //       updatedAt: "2023-01-04",
  //     },
  //     {
  //       id: 5,
  //       label: "CNG (Compressed Natural Gas)",
  //       createdAt: "2023-01-05",
  //       updatedAt: "2023-01-05",
  //     },
  //   ];

  const vehicleOptions = vehicles?.map((vehicle) => {
    return {
      label: vehicle?.regNo,
      value: vehicle?.id,
    };
  });
  const helperOptions = helpers?.map((helper) => {
    return {
      label: helper?.regNo,
      value: helper?.id,
    };
  });
  const driverOptions = drivers?.map((driver) => {
    return {
      label: driver?.fullName,
      value: driver?.id,
    };
  });
  const pumpOptions = fuelPumps?.map((pump) => {
    return {
      label: pump?.label,
      value: pump?.id,
    };
  });
  const fuelTypeOptions = fuelTypes?.map((fuelType) => {
    return {
      label: fuelType?.label,
      value: fuelType?.id,
    };
  });
  const [createFuel] = useCreateFuelMutation();
  const onSubmit = async (data: any) => {
    message.loading("creating.............");
    try {
      data.quantity = parseFloat(data.quantity);
      data.amount = parseInt(data.amount);
      data.odometer = parseInt(data.odometer);
      const res = await createFuel({ ...data }).unwrap();
      if (res.id) {
        message.success(" create fuel in successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <div>
      <h1>Create Pump Station</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col xs={24} md={12} lg={8}>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                size="large"
                name="vehicleId"
                options={vehicleOptions as any}
                label="Vehicle"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                size="large"
                name="driverId"
                options={driverOptions as any}
                label="Driver"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                size="large"
                name="fuelTypeId"
                options={fuelTypeOptions as any}
                label="Fuel Type"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div>
              <FormSelectField
                size="large"
                name="fuelStationId"
                options={pumpOptions as any}
                label="Fuel Pump"
                placeholder="Select"
              />
            </div>
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
            <FormDatePicker
              name="date"
              label="Date"
              size="large"
              disablePrevious={false}
            />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="odometer" label="Odometer" />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="quantity" label="Quantity" />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="amount" label="Amount" />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="remarks" label="Remarks" />
          </Col>
        </Row>
        <Button style={{ margin: "10px 0px" }} type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default AddRefueling;
