"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { paperTypeTaxToken } from "@/constants/global";
import { useGetAllAccountHeadQuery } from "@/redux/api/accountHead/accountHeadApi";
import {
  useCreatePaperWorkMutation,
  useGetSinglePaperWorkQuery,
  useUpdatePaperWorkMutation,
} from "@/redux/api/paperWork/paperWorkApi";
import { useGetAllVehicleQuery } from "@/redux/api/vehicle/vehicleApi";
import { Button, Col, Row, message } from "antd";
import Loader from "../Utlis/Loader";

const AddTaxToken = ({ id }: { id?: string }) => {
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
  //Get
  const { data, isLoading: getLoad } = useGetSinglePaperWorkQuery(id ? id : "");

  //Update
  const [updatePaperWork, { isLoading: updateLoad }] =
    useUpdatePaperWorkMutation();

  //Create
  const [createPaperWork, { isLoading: createLoad }] =
    useCreatePaperWorkMutation();
  const onSubmit = async (values: any) => {
    message.loading(id ? "Updating...." : "Adding....");
    try {
      const res = id
        ? await updatePaperWork({ id: id, body: data }).unwrap()
        : await createPaperWork({ ...values }).unwrap();
      if (res.id) {
        message.success(`PaperWork ${id ? "updated" : "added"} successfully!`);
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
        {id ? "Update Tax/Token" : "Add Tax/Token"}
      </h1>
      {/*  */}
      <Form submitHandler={onSubmit} defaultValues={id ? { ...data } : {}}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p className="text-base lg:text-lg font-normal">
            Tax/Token Information
          </p>
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
                  required={true}
                />
              </div>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <div style={{ margin: "10px 0px" }}>
                <FormSelectField
                  size="large"
                  name="paperType"
                  options={paperTypeTaxToken as any}
                  label="Paper Type"
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
                  required={true}
                />
              </div>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput
                name="certificateNo"
                label="Certificate No"
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
                name="fee"
                label="Fee"
                type="number"
                size="large"
                required={true}
              />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput
                name="daysToRemind"
                label="daysToRemind"
                type="number"
                size="large"
                required={true}
              />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput
                name="otherAmount"
                label="Other Amount"
                type="number"
                size="large"
                required={true}
              />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput
                name="totalAmount"
                label="Total Amount"
                type="number"
                size="large"
                required={true}
              />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput
                name="remarks"
                label="Remarks"
                type="text"
                size="large"
                required={true}
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

export default AddTaxToken;
