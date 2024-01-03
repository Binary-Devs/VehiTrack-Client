"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import { accidentPaymentStatus } from "@/constants/global";
import {
  useCreateAccidentHistoryMutation
} from "@/redux/api/accidentHistory/accidentHistoryApi";
import { useGetAllAccountHeadQuery } from "@/redux/api/accountHead/accountHeadApi";
import { useGetAllDriverQuery } from "@/redux/api/driver/driverApi";
import { useGetAllVehicleQuery } from "@/redux/api/vehicle/vehicleApi";
import { Button, Col, Row, message } from "antd";

const AddAccidentHistory = () => {


  const { data: vehiclesData } = useGetAllVehicleQuery({ limit: 100 });
  const { data: driversData } = useGetAllDriverQuery({ limit: 100 });
  const { data: accountHeadsData } = useGetAllAccountHeadQuery({ limit: 100 });
  const vehicles = vehiclesData?.vehicles;
  const vehicleOptions = vehicles?.map((vehicle:any) => {
    return {
      label: vehicle?.regNo,
      value: vehicle?.id,
    };
  });
  const driver = driversData?.drivers;
  const driverOptions = driver?.map((driver) => {
    return {
      label: driver?.fullName,
      value: driver?.id,
    };
  });
  const accountHead = accountHeadsData?.accountHeads;
  const accountHeadOptions = accountHead?.map((accountHead) => {
    return {
      label: accountHead?.label,
      value: accountHead?.id,
    };
  });

  const [createAccidentHistory, { isLoading }] =
    useCreateAccidentHistoryMutation();
  const onSubmit = async (data: any) => {
    message.loading("creating.............");
    try {
      data.odoMeter = parseInt(data.odoMeter);
      data.amount = parseInt(data.amount);
      const res = await createAccidentHistory({ ...data }).unwrap();
      if (res.id) {
        message.success("add in successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">
        Add Accident History
      </h1>
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
            Accident History Information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col xs={24} md={12} lg={8}>
              <div>
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
              <div>
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
              <div>
                <FormSelectField
                  size="large"
                  name="accountHeadId"
                  options={accountHeadOptions as any}
                  label="Account Head"
                  placeholder="Select"
                  required={true}
                />
              </div>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <div>
                <FormSelectField
                  size="large"
                  name="paymentStatus"
                  options={accidentPaymentStatus as any}
                  label="Payment Status"
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
                name="location"
                label="Location"
                type="text"
                size="large"
                required={true}
              />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput
                name="odoMeter"
                label="Odometer"
                type="number"
                size="large"
                required={true}
              />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput
                name="amount"
                label="Amount"
                type="number"
                size="large"
                required={true}
              />
            </Col>
            <Col xs={24} md={24} lg={24}>
              <FormTextArea name="details" label="Details" />
            </Col>
          </Row>
        </div>
        <div className="flex justify-end items-center">
          <Button htmlType="submit" type="primary" disabled={isLoading}>
            Add
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddAccidentHistory;
