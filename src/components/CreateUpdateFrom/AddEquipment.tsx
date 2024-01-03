import { useCreateEquipmentMutation } from "@/redux/api/equipment/equipmentApi";
import { useGetAllUomQuery } from "@/redux/api/uom/uomApi";
import { Button, Col, Row, message } from "antd";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";

const AddEquipment = () => {
  const [createEquipment, { isLoading }] = useCreateEquipmentMutation();
  const { data } = useGetAllUomQuery({
    limit: 100,
  });

  const uoms = data?.uom;

  const uomOptions = uoms?.map((uom) => {
    return {
      label: uom?.label,
      value: uom?.id,
    };
  });
  const onSubmit = async (data: any) => {
    message.loading("Adding.............");
    try {
      const res = await createEquipment({ ...data }).unwrap();
      if (res.id) {
        message.success(" Equipment add in successfully");
      } else {
        message.error(res.message);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">Add Equipment</h1>
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
            <Row>
              <Col
                className="gutter-row"
                xs={24}
                md={24}
                lg={24}
                style={{ margin: "10px 0" }}
              >
                <FormInput
                  type="text"
                  name="label"
                  size="large"
                  label="Label"
                  required={true}
                />
              </Col>
              <Col
                className="gutter-row"
                xs={24}
                md={24}
                lg={24}
                style={{ margin: "10px 0" }}
              >
                <FormSelectField
                  size="large"
                  name="uomId"
                  options={uomOptions as any}
                  label="Unit of measurement"
                  required={true}
                  placeholder="Select"
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

export default AddEquipment;
