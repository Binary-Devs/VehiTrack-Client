"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {
  useCreateFuelTypeMutation,
  useGetSingleFuelTypeQuery,
  useUpdateFuelTypeMutation,
} from "@/redux/api/fuelType/fuelTypeApi";
import { Button, Col, Row, message } from "antd";
import Loader from "../Utlis/Loader";

const AddFuelTypes = ({ id }: { id?: string }) => {
  //Get
  const { data, isLoading: getLoad } = useGetSingleFuelTypeQuery(id ? id : "");
  console.log(data);
  //Update
  const [updateFuelType, { isLoading: updateLoad }] =
    useUpdateFuelTypeMutation();

  //Create
  const [createFuelType, { isLoading: createLoad }] =
    useCreateFuelTypeMutation();
  const onSubmit = async (data: any) => {
    message.loading(id ? "Updating...." : "Adding....");
    try {
      const res = id
        ? await updateFuelType({ id, data }).unwrap()
        : await createFuelType({ ...data }).unwrap();
      if (res.id) {
        message.success(`Fuel Type ${id ? "updated" : "added"} successfully!`);
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
        {id ? "Update Fuel Type" : "Add Fuel Type"}
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
            <Col xs={24} md={24} lg={24} style={{ margin: "10px 0" }}>
              <FormInput
                type="text"
                name="label"
                label="Label"
                size="large"
                required={true}
                placeholder="Please enter fuel type label"
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

export default AddFuelTypes;
