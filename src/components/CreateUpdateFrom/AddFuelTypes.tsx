"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useCreateFuelTypeMutation } from "@/redux/api/fuelType/fuelTypeApi";
import { Button, Col, Row, message } from "antd";

const AddFuelTypes = () => {
  const [createFuelType, { isLoading }] = useCreateFuelTypeMutation();
  const onSubmit = async (data: any) => {
    message.loading("Adding.............");
    try {
      const res = await createFuelType({ ...data }).unwrap();
      if (res.id) {
        message.success("add fuel type in successfully");
      } else {
        message.error(res.errorMessage);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">Add Fuel Type</h1>
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
            Fuel Type Information
          </p>
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
        <div className="flex justify-center items-center">
          <Button htmlType="submit" type="primary" disabled={isLoading}>
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddFuelTypes;
