"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import {
  useCreateModelMutation,
  useGetSingleModelQuery,
  useUpdateModelMutation,
} from "@/redux/api/model/modelApi";
import { Button, Col, Row, message } from "antd";
import Loader from "../Utlis/Loader";

const AddUpdateModel = ({ id, brands }: { id?: string; brands?: any }) => {
  //Get
  const { data, isLoading: getLoad } = useGetSingleModelQuery(id ? id : "");

  //Update
  const [updateModel, { isLoading: updateLoad }] = useUpdateModelMutation();

  //Create
  const [createModel, { isLoading: createLoad }] = useCreateModelMutation();

  const onSubmit = async (values: any) => {
    message.loading(id ? "Updating...." : "Adding....");
    try {
      const res = id
        ? await updateModel({ id, data: values }).unwrap()
        : await createModel({ ...values }).unwrap();
      if (res.id) {
        message.success(`Model ${id ? "updated" : "added"} successfully!`);
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
        {id ? "Update Model" : "Add Model"}
      </h1>
      {/*  */}
      <div>
        <Form submitHandler={onSubmit} defaultValues={id ? { ...data } : {}}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "20px",
              marginBottom: "10px",
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="brandId"
                  options={brands.map((b: any) => ({
                    label: b.label,
                    value: b.id,
                  }))}
                  label="Brand Name"
                  // placeholder="Select"
                  required={true}
                />
              </Col>
              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="label"
                  size="large"
                  label="Model name"
                  required={true}
                  placeholder="Please enter model name"
                />
              </Col>
            </Row>
            <div className="flex justify-end items-center mt-[5px]">
              <Button
                htmlType="submit"
                type="primary"
                disabled={createLoad || updateLoad}
              >
                {id ? "Update" : "Add"}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddUpdateModel;
