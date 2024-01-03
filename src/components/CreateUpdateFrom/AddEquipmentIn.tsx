import { useGetAllEquipmentQuery } from "@/redux/api/equipment/equipmentApi";
import { useCreateEquipmentInMutation } from "@/redux/api/equipmentIn/equipmentInApi";
import { Button, Col, Row, message } from "antd";
import Form from "../Forms/Form";
import FormDatePicker from "../Forms/FormDatePicker";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";

const AddEquipmentIn = () => {
  const [createEquipmentIn, { isLoading }] = useCreateEquipmentInMutation();
  const { data } = useGetAllEquipmentQuery({
    limit: 100,
  });

  const equipments = data?.equipments;

  const equipmentsOptions = equipments?.map((equipment) => {
    return {
      label: equipment?.label,
      value: equipment?.id,
    };
  });
  const onSubmit = async (data: any) => {
    message.loading("Adding.............");
    try {
      const res = await createEquipmentIn({ ...data }).unwrap();
      if (res.id) {
        message.success(" EquipmentIn add in successfully");
      } else {
        message.error(res.message);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">Add EquipmentIn</h1>
      <div>
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  name="equipmentId"
                  size="large"
                  label="Equipment"
                  required={true}
                  options={equipmentsOptions as any}
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
                <FormInput
                  type="number"
                  name="quantity"
                  size="large"
                  label="Quantity"
                  required={true}
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
                <FormInput
                  type="number"
                  name="unitPrice"
                  size="large"
                  label="Unit price"
                  required={true}
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
                <FormInput
                  type="number"
                  name="totalPrice"
                  size="large"
                  label="Total price"
                  required={true}
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
                <FormInput
                  type="text"
                  name="remarks"
                  size="large"
                  label="Remarks"
                  required={true}
                />
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
    </div>
  );
};

export default AddEquipmentIn;
