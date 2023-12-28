"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { useGetAllAccountHeadQuery } from "@/redux/api/accountHead/accountHeadApi";
import { useGetAllDriverQuery } from "@/redux/api/driver/driverApi";
import { useGetAllHelperQuery } from "@/redux/api/helper/helperApi";
import { useGetAllPartiesQuery } from "@/redux/api/party/partyApi";
import { useCreateTripMutation } from "@/redux/api/trip/tripApi";
import { useGetAllVehicleQuery } from "@/redux/api/vehicle/vehicleApi";
import { Button, Col, Row, message } from "antd";

const AddTrip = () => {
  const { data: driversData } = useGetAllDriverQuery({ limit: 100 });
  const { data: helpersData } = useGetAllHelperQuery({ limit: 100 });
  const { data: vehiclesData } = useGetAllVehicleQuery({ limit: 100 });
  const { data: partiesData } = useGetAllPartiesQuery({ limit: 100 });
  const { data: accountHeadsData } = useGetAllAccountHeadQuery({ limit: 100 });
  const drivers = driversData?.drivers;
  const helpers = helpersData?.helpers;
  const vehicles = vehiclesData?.vehicles;
  const parties = partiesData?.parties;
  const accountHead = accountHeadsData?.accountHeads;

  const vehicleOptions = vehicles?.map((vehicle) => {
    return {
      label: vehicle?.regNo,
      value: vehicle?.id,
    };
  });
  const helperOptions = helpers?.map((helper) => {
    return {
      label: helper?.fullName,
      value: helper?.id,
    };
  });
  const driverOptions = drivers?.map((driver) => {
    return {
      label: driver?.fullName,
      value: driver?.id,
    };
  });
  const partiOptions = parties?.map((party) => {
    return {
      label: party?.fullName,
      value: party?.id,
    };
  });

  const accountHeadOptions = accountHead?.map((accountHead) => {
    return {
      label: accountHead?.label,
      value: accountHead?.id,
    };
  });
  const [createTrip] = useCreateTripMutation();
  const onSubmit = async (data: any) => {
    message.loading("creating.............");
    try {
      data.odometerStart = parseFloat(data.odometerStart);
      data.odometerEnd = parseFloat(data.odometerEnd);
      data.distance = parseFloat(data.distance);
      data.amount = parseInt(data.amount);
      const res = await createTrip({ ...data }).unwrap();
      if (res.id) {
        message.success(" create fuel in successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <div>
      <h1>Create Trip</h1>
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
                name="helperId"
                options={helperOptions as any}
                label="Helper"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                size="large"
                name="partyId"
                options={partiOptions as any}
                label="Party"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div>
              <FormSelectField
                size="large"
                name="accountHeadId"
                options={accountHeadOptions as any}
                label="Account Head"
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
              name="startDate"
              label="startDate"
              size="large"
              disablePrevious={false}
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
            <FormDatePicker
              name="endDate"
              label="endDate"
              size="large"
              disablePrevious={false}
            />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="from" label="from" />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="to" label="to" />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="odometerStart" label="odometerStart" />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="odometerEnd" label="odometerEnd" />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="distance" label="distance" />
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

export default AddTrip;
