"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { paperTypeRoutePermit } from "@/constants/global";
import { useGetAllAccountHeadQuery } from "@/redux/api/accountHead/accountHeadApi";
import {
  useCreatePaperWorkMutation,
  useGetSinglePaperWorkQuery,
  useUpdatePaperWorkMutation,
} from "@/redux/api/paperWork/paperWorkApi";
import { useGetAllVehicleQuery } from "@/redux/api/vehicle/vehicleApi";
import { Button, Col, Row, message } from "antd";
import Loader from "../Utlis/Loader";

const AddRoutePermit = ({ id }: { id?: string }) => {
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

  const newAccountHeadOptions = accountHeadOptions?.filter(
    (item) => item.label === "Paper Expense"
  );

  //Get
  const { data, isLoading: getLoad } = useGetSinglePaperWorkQuery(id ? id : "");

  //Update
  const [updatePaperWork, { isLoading: updateLoad }] =
    useUpdatePaperWorkMutation();

  //Create
  const [createPaperWork, { isLoading: createLoad }] =
    useCreatePaperWorkMutation();
  const onSubmit = async (data: any) => {
    message.loading(id ? "Updating...." : "Adding....");
    try {
      const res = id
        ? await updatePaperWork({
            id,
            data: {
              date: data.date,
              certificateNo: data.certificateNo,
              vehicleId: data.vehicleId,
              effectiveDate: data.effectiveDate,
              expiryDate: data.expiryDate ? data.expiryDate : undefined,
              odoMeter: data.odoMeter ? data.odoMeter : undefined,
              daysToRemind: data.daysToRemind ? data.daysToRemind : undefined,
              paperType: data.paperType,
              fee: data.fee,
              otherAmount: data.otherAmount ? data.otherAmount : undefined,
              totalAmount: data.totalAmount,
              remarks: data.remarks ? data.remarks : undefined,
              accountHeadId: data.accountHeadId,
            },
          }).unwrap()
        : await createPaperWork({ ...data }).unwrap();
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
        {id ? "Update Route Permit" : "Add Route Permit"}
      </h1>
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
            Registration Information
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
                required
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
                  options={paperTypeRoutePermit as any}
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
                required
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
                  options={newAccountHeadOptions as any}
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
                required
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
              />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput
                name="otherAmount"
                label="Other Amount"
                type="number"
                size="large"
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

export default AddRoutePermit;
