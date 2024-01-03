import { useCreateUomMutation } from "@/redux/api/uom/uomApi";
import { Button, Col, Row, message } from "antd";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";

const AddUnitOfMeasurement = () => {
  const [createUom, { isLoading }] = useCreateUomMutation();
  const onSubmit = async (data: any) => {
    message.loading("Adding.............");
    try {
      const res = await createUom({ ...data }).unwrap();
      if (res.id) {
        message.success(" UOM add in successfully");
      } else {
        message.error(res.message);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">Add UOM</h1>
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
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="label"
                  size="large"
                  label="Label"
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

export default AddUnitOfMeasurement;
