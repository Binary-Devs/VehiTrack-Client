"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { paperTypeRegistration } from "@/constants/global";
import { useGetAllAccountHeadQuery } from "@/redux/api/accountHead/accountHeadApi";
import { useCreatePaperWorkMutation } from "@/redux/api/paperWork/paperWorkApi";
import { useGetAllVehicleQuery } from "@/redux/api/vehicle/vehicleApi";
import { Button, Col, Row, message } from "antd";

const AddRegistration = () => {
  const { data: vehiclesData } = useGetAllVehicleQuery({ limit: 100 });
  const { data: accountHeadsData } = useGetAllAccountHeadQuery({ limit: 100 });
  const vehicles = vehiclesData?.vehicles;
  const vehicleOptions = vehicles?.map((vehicle) => {
    return {
      label: vehicle?.regNo,
      value: vehicle?.id,
    };
  });
  const accountHead = accountHeadsData?.accountHeads;
  const accountHeadOptions = accountHead?.map((accountHead) => {
    return {
      label: accountHead?.label,
      value: accountHead?.id,
    };
  });

  const [createPaperWork] = useCreatePaperWorkMutation();
  const onSubmit = async (data: any) => {
    message.loading("creating.............");
    try {
      data.daysToRemind = parseFloat(data.daysToRemind);
      data.fee = parseInt(data.fee);
      data.odoMeter = parseInt(data.odoMeter);
      data.otherAmount = parseInt(data.otherAmount);
      data.totalAmount = parseInt(data.totalAmount);
      const res = await createPaperWork({ ...data }).unwrap();
      if (res.id) {
        message.success("create in successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <div>
      <h1>Create Registration</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col
            className="gutter-row"
            xs={24}
            md={12}
            lg={8}
            style={{ margin: "10px 0px" }}
          >
            <FormDatePicker
              name="date"
              label="Date"
              size="large"
              disablePrevious={false}
            />
          </Col>
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
                name="paperType"
                options={paperTypeRegistration as any}
                label="Paper Type"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col
            className="gutter-row"
            xs={24}
            md={12}
            lg={8}
            style={{ margin: "10px 0px" }}
          >
            <FormDatePicker
              name="effectiveDate"
              label="Effective Date"
              size="large"
              disablePrevious={false}
            />
          </Col>
          <Col
            className="gutter-row"
            xs={24}
            md={12}
            lg={8}
            style={{ margin: "10px 0px" }}
          >
            <FormDatePicker
              name="expiryDate"
              label="Expiry Date"
              size="large"
              disablePrevious={false}
            />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                size="large"
                name="accountHeadId"
                options={accountHeadOptions as any}
                label="Account Head"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="certificateNo" label="Certificate No" />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="odoMeter" label="Odometer" />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="fee" label="Fee" />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="daysToRemind" label="daysToRemind" />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="otherAmount" label="Other Amount" />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="totalAmount" label="Total Amount" />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <FormInput name="remarks" label="Remarks" />
          </Col>
        </Row>
        <Button style={{ margin: "10px 0px" }} type="primary" htmlType="submit">
          registration
        </Button>
      </Form>
    </div>
  );
};

export default AddRegistration;
