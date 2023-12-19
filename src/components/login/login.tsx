"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row, Space, Spin, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../assets/login-image.png";
import LoadingForDataFetch from "../Utlis/LoadingForDataFetch";
import Typewriter from "typewriter-effect";
type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin, { isLoading }] = useUserLoginMutation();

  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("not", data);
    try {
      const res = await userLogin({ ...data }).unwrap();
      console.log(res);
      if (res.accessToken) {
        router.push("/dashboard");
        message.success("User logged in successfully");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error) {}
  };
  if (isLoading) {
    return <LoadingForDataFetch />;
  }
  return (
    <div className="relative">
      <img
        src="https://plus.unsplash.com/premium_photo-1685214580428-7eae1a78e7bc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 object-cover w-full h-screen"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 h-screen">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 text-5xl text-white">
              <Typewriter
                options={{
                  strings: ["Please Login validate person", "Do not attempt to login by fraudulent means as it is a punishable offence"],
                  autoStart: true,
                  loop: true,
                }}
              />
            
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Login Dashboard
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                     Email
                    </label>
                    <input
                      placeholder="Please enter a valid email address"
                      required
                      type="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      placeholder="Enter your password"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
                
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:bg-blue-600 hover:transition-all hover:text-white"
                    >
                      Login
                    </button>
                  </div>
                  <div className="flex justify-end">
                <a href="" className="text-xs text-blue-500 underline">forget password</a>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
