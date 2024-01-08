"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import ButtonLoading from "@/components/ui/Loader/ButtonLoading";
import {
  useGetSingleAdminQuery,
  useUpdateAdminMutation,
} from "@/redux/api/admin/adminApi";
import { Button, Col, Row, message } from "antd";
import LoadingSkeleton from "../ui/Loader/LoadingSkeleton";

const ManagerUpdate = ({ id }: { id: string }) => {

  const [updateManager, { isLoading, error }] = useUpdateAdminMutation();
  const { data, isLoading: getAdminLoading } = useGetSingleAdminQuery(id);
  // console.log(data);
  const onSubmit = async (values: any) => {
    message.loading("Updating Manager!");
    // console.log(values);
    try {
      const res = await updateManager({ id: id, data: values }).unwrap();

      //   console.log(res);
      //@ts-ignore
      if (res?.id) {
        message.success("Manager update successfully!");
      } else {
        message.error("Manager update successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error("Manager update successfully!");
    }
  };
  //   if(isLoading){
  //     return message.loading("Loading...")
  //   }

  return (
    <>
      {getAdminLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="rounded-xl bg-white p-3">
          <h1 className="text-center my-2 font-bold text-lg lg:text-2xl">
            Update Manager
          </h1>

          <div>
            <Form
              submitHandler={onSubmit}
              defaultValues={id ? { ...data } : {}}
            >
              <div
                style={{
                  border: "1px solid #d9d9d9",
                  borderRadius: "5px",
                  padding: "15px",
                  marginBottom: "10px",
                }}
                className="my-4"
              >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  {/* <Col
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
                  name="userId"
                  size="large"
                  label="User Id"
                  required={true}
                  placeholder="Please enter User ID"
                />
              </Col> */}

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
                      name="fullName"
                      size="large"
                      label="Name"
                      //   required={true}
                      placeholder="Please enter manager name"
                    />
                  </Col>
                  {/* <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                  required={true}
                  placeholder="Please enter a password"
                />
              </Col> */}
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
                      name="mobile"
                      size="large"
                      label="Mobile"
                      //   required={true}
                      placeholder="Please enter a mobile number"
                    />
                  </Col>
                  <Col
                    className="gutter-row"
                    xs={24}
                    md={12}
                    lg={24}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <FormTextArea
                      name="address"
                      label="Address"
                      rows={3}
                      placeholder="Enter manager address"
                    />
                  </Col>

                  {/* <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <UploadImage name="image" />
              </Col> */}
                </Row>
              </div>

              <div className="flex justify-center items-center">
                {isLoading ? (
                  <Button type="default">
                    <ButtonLoading />
                  </Button>
                ) : (
                  <Button htmlType="submit" type="primary">
                    Update
                  </Button>
                )}
              </div>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default ManagerUpdate;
