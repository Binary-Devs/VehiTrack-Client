import {
  useCreateEquipmentMutation,
  useGetSingleEquipmentQuery,
  useUpdateEquipmentMutation,
} from "@/redux/api/equipment/equipmentApi";
import { useGetAllUomQuery } from "@/redux/api/uom/uomApi";
import { Button, Col, Row, message } from "antd";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import Loader from "../Utlis/Loader";

const AddEquipment = ({ id }: { id?: string }) => {
  //Get
  const { data, isLoading: getLoad } = useGetSingleEquipmentQuery(id ? id : "");

  //Update
  const [updateEquipment, { isLoading: updateLoad }] =
    useUpdateEquipmentMutation();

  //Create
  const [createEquipment, { isLoading: createLoad }] =
    useCreateEquipmentMutation();
  const { data: uom } = useGetAllUomQuery({
    limit: 100,
  });

  const uoms = uom?.uom;

  const uomOptions = uoms?.map((uom) => {
    return {
      label: uom?.label,
      value: uom?.id,
    };
  });
  const onSubmit = async (data: any) => {
    message.loading(id ? "Updating...." : "Adding....");
    try {
      const res = id
        ? await updateEquipment({ id: id, body: data }).unwrap()
        : await createEquipment({ ...data }).unwrap();
      if (res.id) {
        message.success(`Equipment ${id ? "updated" : "added"} successfully!`);
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
        {id ? "Update Equipment" : "Add Equipment"}
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

export default AddEquipment;
