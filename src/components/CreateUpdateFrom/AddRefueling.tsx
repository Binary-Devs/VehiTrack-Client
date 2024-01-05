"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { useGetAllDriverQuery } from "@/redux/api/driver/driverApi";
import {
  useCreateFuelMutation,
  useGetSingleFuelQuery,
  useUpdateFuelMutation,
} from "@/redux/api/fuel/fuelApi";
import { useGetAllFuelStationQuery } from "@/redux/api/fuelStation/fuelStationApi";
import { useGetAllFuelTypeQuery } from "@/redux/api/fuelType/fuelTypeApi";
import { useGetAllHelperQuery } from "@/redux/api/helper/helperApi";
import { useGetAllVehicleQuery } from "@/redux/api/vehicle/vehicleApi";
import { Button, Col, Row, message } from "antd";
import Loader from "../Utlis/Loader";

const AddRefueling = ({ id }: { id?: string }) => {
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

  console.log(id);

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
  //Get
  const { data, isLoading: getLoad } = useGetSingleFuelQuery(id ? id : "");

  //Update
  const [updateFuel, { isLoading: updateLoad }] = useUpdateFuelMutation();

  //Create
  const [createFuel, { isLoading: createLoad }] = useCreateFuelMutation();
  const onSubmit = async (values: any) => {
    console.log(values);
    values.odometer = data.amount !== undefined ? parseInt(values.odometer) : 0;
    values.quantity = data.amount !== undefined ? parseInt(values.quantity) : 0;
    values.amount = data.amount !== undefined ? parseInt(data.amount) : 0;
    message.loading(id ? "Updating...." : "Adding....");
    try {
      const res = id
        ? await updateFuel({ id: id, body: data }).unwrap()
        : await createFuel({ ...values }).unwrap();
      if (res.id) {
        message.success(`Refueling ${id ? "updated" : "added"} successfully!`);
      } else {
        message.error(res.message);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  if (id && getLoad) {
    return <Loader className="h-[40vh] flex items-center justify-center" />;
  }

  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">
        {id ? "Update Refueling" : "Add Refueling"}
      </h1>
      {/*  */}
      <Form submitHandler={onSubmit} defaultValues={data}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col xs={24} md={12} lg={8}>
              <div style={{ margin: "10px 0px" }}>
                <FormSelectField
                  size="large"
                  name="vehicleId"
                  options={vehicleOptions as any}
                  label="Vehicle"
                  placeholder="Select"
                  required={true}
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
                  required={true}
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
                  required={true}
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
                  required={true}
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
              <FormInput
                name="odometer"
                label="Odometer"
                size="large"
                required={true}
                placeholder="enter odometer"
              />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput
                name="quantity"
                label="Quantity"
                size="large"
                required={true}
                placeholder="enter quantity"
              />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput
                name="amount"
                label="Amount"
                size="large"
                required={true}
                placeholder="enter amount"
              />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput
                name="remarks"
                label="Remarks"
                type="text"
                size="large"
                required={true}
                placeholder="enter odometer"
              />
            </Col>
          </Row>
        </div>
        <div className="flex justify-end items-center">
          <Button
            htmlType="submit"
            type="primary"
            disabled={createLoad || updateLoad}
          >
            {id ? "Update" : "Add"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddRefueling;
