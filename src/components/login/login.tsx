"use client";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { Button, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import SVG_Web from "../Svg/SvgWeb";
import ButtonLoading from "../ui/Loader/ButtonLoading";
type FormValues = {
  userName: string;
  password: string;
};

const LoginPage = () => {
  const [login, { isLoading, error }] = useLoginMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await login({ ...data }).unwrap();
      console.log(res);
      if (res.accessToken) {
        router.push("/dashboard");
        message.success("User logged in successfully");
        storeUserInfo({ accessToken: res?.accessToken });
      } else {
        message.error("not valid user");
      }
    } catch (error: any) {
      message.error(error?.message);
      console.log(error);
    }
  };
  if (error) {
    console.log(error);
  }

  return (
    <div className="relative ">
      {/* <img
        src="https://media.giphy.com/media/21QEGwILf5SGDRRHMn/giphy.gif"
       
        alt=""
      /> */}
      <div  className="absolute inset-0 object-cover w-full h-screen">
        <SVG_Web/>
      </div>
      <div className="relative bg-transparent bg-opacity-75 h-screen ">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className="flex flex-col items-center justify-center mt-[15%]">
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12 ">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
   
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Login Dashboard
                </h3>
                <Form submitHandler={onSubmit}>
                  <div>
                    <FormInput
                      name="userName"
                      type="text"
                      size="large"
                      label="User Id"
                      required
                    />
                  </div>
                  <div
                    style={{
                      margin: "15px 0",
                    }}
                  >
                    <FormInput
                      name="password"
                      type="password"
                      size="large"
                      label="User Password"
                      required
                    />
                  </div>
                  {isLoading ? (
                    <ButtonLoading />
                  ) : (
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%" }}
                      size="large"
                    >
                      Login
                    </Button>
                  )}
                  <div
                    className="flex justify-end
                  items-center mt-2"
                  >
                    <Link href={""} className="text-blue-600 underline">
                      Forget password
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
