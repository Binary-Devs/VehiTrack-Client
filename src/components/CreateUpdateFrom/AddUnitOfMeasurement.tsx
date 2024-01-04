import {
  useCreateUomMutation,
  useGetSingleUomQuery,
  useUpdateUomMutation,
} from "@/redux/api/uom/uomApi";
import { Button, Col, Row, message } from "antd";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import Loader from "../Utlis/Loader";

const AddUnitOfMeasurement = ({ id }: { id?: string }) => {
  //Get
  const { data, isLoading: getLoad } = useGetSingleUomQuery(id ? id : "");

  //Update
  const [updateUom, { isLoading: updateLoad }] = useUpdateUomMutation();

  //Create
  const [createUom, { isLoading: createLoad }] = useCreateUomMutation();
  const onSubmit = async (data: any) => {
    message.loading(id ? "Updating...." : "Adding....");
    try {
      const res = id
        ? await updateUom({ id, data }).unwrap()
        : await createUom({ ...data }).unwrap();
      if (res.id) {
        message.success(`Unit ${id ? "updated" : "added"} successfully!`);
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
        {id ? "Update Unit" : "Add Unit"}
      </h1>
      {/*  */}
      <div>
        <Form submitHandler={onSubmit} defaultValues={data}>
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

export default AddUnitOfMeasurement;
