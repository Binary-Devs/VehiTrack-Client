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
import { Error_model_hook, Success_model } from "@/utils/modalHook";
type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin, { isLoading }] = useUserLoginMutation();

  const router = useRouter();
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const userId = e.target.userid.value;
    const password = e.target.password.value;

    // rtk-query method by bayajid
     userLogin({ userId, password })
          .then((result:any) => {
            // Handle success, update UI, etc.
             Success_model('login success');
             localStorage.setItem(
              "accessToken",
              JSON.stringify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXBvZG5hdGhAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAyNzU3OTQ1LCJleHAiOjE3MzQyOTM5NDV9.0qZqsFgfe36B8XwAtJ2BkzatWr5REzwlyHvSp4nY80E")
            );
            router.push("/dashboard");
            console.log("Post created:", result);

          })
          .catch((err) => {
            localStorage.setItem(
              "accessToken",
              JSON.stringify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXBvZG5hdGhAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAyNzU3OTQ1LCJleHAiOjE3MzQyOTM5NDV9.0qZqsFgfe36B8XwAtJ2BkzatWr5REzwlyHvSp4nY80E")
            );
            router.push("/dashboard");
            // Handle error
            // Error_model_hook("login failed");
            console.error("Error creating post:", err);
          });
    // Success_model("login success");
    // localStorage.setItem(
    //   "accessToken",
    //   JSON.stringify(
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXBvZG5hdGhAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAyNzU3OTQ1LCJleHAiOjE3MzQyOTM5NDV9.0qZqsFgfe36B8XwAtJ2BkzatWr5REzwlyHvSp4nY80E"
    //   )
    // );
    // router.push("/dashboard");
  };
  // if (isLoading) {
  //   return <LoadingForDataFetch />;
  // }
  return (
    <div className="relative ">
      <img
        src="https://media.giphy.com/media/21QEGwILf5SGDRRHMn/giphy.gif"
        className="absolute inset-0 object-cover w-full h-screen"
        alt=""
      />
      <div className="relative bg-transparent bg-opacity-75 h-screen ">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className="flex flex-col items-center justify-center mt-[15%]">

            <div className="w-full max-w-xl xl:px-8 xl:w-5/12 ">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Login Dashboard
                </h3>
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      User Id
                    </label>
                    <input
                      placeholder="Please enter a valid email address"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="userid"
                      name="userid"
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
                      className="inline-flex items-center justify-center bg-blue-600 text-white w-full h-12 px-6 font-medium tracking-wide  
                       rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 border-2 focus:shadow-outline focus:outline-none  hover:transition-all transition ease-in-out delay-150 
                        hover:-translate-y-1 hover:scale-110 
                         duration-300"
                    >
                      {isLoading ? (
                        <Spin />
                      ) : (
                        "Login"
                      )}
                    </button>
                  </div>
                  <div className="flex justify-end">
                    <a href="" className="text-xs text-blue-500 underline">
                      forget password
                    </a>
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
