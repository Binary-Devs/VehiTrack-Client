"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useGetAllAccountHeadQuery } from "@/redux/api/accountHead/accountHeadApi";
import { useGetAllDriverQuery } from "@/redux/api/driver/driverApi";
import { useGetAllHelperQuery } from "@/redux/api/helper/helperApi";
import { useGetAllPartiesQuery } from "@/redux/api/party/partyApi";
import {
  useCreateTripMutation,
  useGetSingleTripQuery,
  useUpdateTripMutation,
} from "@/redux/api/trip/tripApi";
import { useGetAllVehicleQuery } from "@/redux/api/vehicle/vehicleApi";
import { Button, Col, Row, message } from "antd";
import FormDatePicker from "../Forms/FormDatePicker";
import FormSelectField from "../Forms/FormSelectField";
import Loader from "../Utlis/Loader";

const AddUpdateTrip = ({ id }: { id?: string }) => {
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

  // console.log(id);

  const vehicleOptions = vehicles?.map((vehicle: any) => {
    return {
      label: vehicle?.regNo,
      value: vehicle?.id,
    };
  });
  const helperOptions = helpers?.map((helper: any) => {
    return {
      label: helper?.fullName,
      value: helper?.id,
    };
  });
  const driverOptions = drivers?.map((driver: any) => {
    return {
      label: driver?.fullName,
      value: driver?.id,
    };
  });
  const partiOptions = parties?.map((party: any) => {
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

  //Get
  const { data, isLoading: getLoad } = useGetSingleTripQuery(id ? id : "");

  //Update
  const [updateTrip, { isLoading: updateLoad }] = useUpdateTripMutation();

  //Create
  const [createTrip, { isLoading: createLoad }] = useCreateTripMutation();

  const onSubmit = async (values: any) => {
    message.loading(id ? "Updating...." : "Adding....");
    try {
      const res = id
        ? await updateTrip({
            id,
            data: {
              label: values.label,
            },
          }).unwrap()
        : await createTrip(values).unwrap();
      if (res.id) {
        message.success(`Trip ${id ? "updated" : "added"} successfully!`);
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
        {id ? "Update Trip" : "Add Trip"}
      </h1>
      <div>
        <Form submitHandler={onSubmit} defaultValues={id ? { ...data } : {}}>
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
            <Col className="my-auto" xs={24} md={12} lg={8}>
              <FormDatePicker name="startDate" label="startDate" />
            </Col>
            <Col className="my-auto" xs={24} md={12} lg={8}>
              <FormDatePicker name="endDate" label="endDate" />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput name="from" label="from" />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput name="to" label="to" />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput name="distance" label="distance" type="number" />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput name="amount" label="Amount" type="number" />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput name="remarks" label="Remarks" />
            </Col>
          </Row>
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
    </div>
  );
};

export default AddUpdateTrip;
