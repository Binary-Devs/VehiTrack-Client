"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {
  useCreateAccountTypeMutation,
  useGetSingleAccountTypeQuery,
  useUpdateAccountTypeMutation,
} from "@/redux/api/accountType/accountTypeApi";
import { Button, Col, Row, message } from "antd";
import Loader from "../Utlis/Loader";

const AddAccountType = ({ id }: { id?: string }) => {
  //Get
  const { data, isLoading: getLoad } = useGetSingleAccountTypeQuery(
    id ? id : ""
  );

  //Update
  const [updateAccountType, { isLoading: updateLoad }] =
    useUpdateAccountTypeMutation();

  //Create
  const [createAccountType, { isLoading: createLoad }] =
    useCreateAccountTypeMutation();

  const onSubmit = async (data: any) => {
    message.loading(id ? "Updating...." : "Adding....");
    try {
      const res = id
        ? await updateAccountType({ id, data }).unwrap()
        : await createAccountType({ ...data }).unwrap();
      if (res.id) {
        message.success(
          `Account Type ${id ? "updated" : "added"} successfully!`
        );
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
        {id ? "Update Account Type" : "Add Account Type"}
      </h1>
      {/*  */}
      <div>
        <Form submitHandler={onSubmit} defaultValues={id ? { ...data } : {}}>
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
                md={24}
                lg={24}
                style={{ margin: "10px 0" }}
              >
                <FormInput
                  type="text"
                  name="label"
                  label="Label"
                  size="large"
                  required={true}
                  placeholder="Please enter account type name"
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

export default AddAccountType;
