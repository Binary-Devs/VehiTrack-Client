"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {
  useCreateBrandMutation,
  useGetSingleBrandQuery,
  useUpdateBrandMutation,
} from "@/redux/api/brand/brandApi";
import { Button, Col, Row, message } from "antd";
import Loader from "../Utlis/Loader";

const AddUpdateBrand = ({ id }: { id?: string }) => {
  //Get
  const { data, isLoading: getLoad } = useGetSingleBrandQuery(id ? id : "");

  //Update
  const [updateBrand, { isLoading: updateLoad }] = useUpdateBrandMutation();

  //Create
  const [createBrand, { isLoading: createLoad }] = useCreateBrandMutation();

  console.log(id, data);

  const onSubmit = async (values: any) => {
    message.loading(id ? "Updating...." : "Adding....");
    try {
      const res = id
        ? await updateBrand({ id, data: values }).unwrap()
        : await createBrand({ ...values }).unwrap();
      if (res.id) {
        message.success(`Brand ${id ? "updated" : "added"} successfully!`);
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
        {id ? "Update Brand" : "Add Brand"}
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
                md={24}
                lg={24}
                style={{
                  marginBottom: "15px",
                }}
              >
                <FormInput
                  type="text"
                  name="label"
                  size="large"
                  label="Brand name"
                  // defaultValue={data && data.label}
                  required={true}
                  placeholder="Please enter brand name"
                />
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
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddUpdateBrand;
