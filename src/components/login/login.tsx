"use client";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { Success_model } from "@/utils/modalHook";
import { useRouter } from "next/navigation";
import Loader from "../Utlis/Loader";
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
      .then((result: any) => {
        // Handle success, update UI, etc.
        Success_model("login success");
        localStorage.setItem(
          "accessToken",
          JSON.stringify(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXBvZG5hdGhAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAyNzU3OTQ1LCJleHAiOjE3MzQyOTM5NDV9.0qZqsFgfe36B8XwAtJ2BkzatWr5REzwlyHvSp4nY80E"
          )
        );
        router.push("/dashboard");
        console.log("Post created:", result);
      })
      .catch((err) => {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXBvZG5hdGhAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAyNzU3OTQ1LCJleHAiOjE3MzQyOTM5NDV9.0qZqsFgfe36B8XwAtJ2BkzatWr5REzwlyHvSp4nY80E"
          )
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
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
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
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-blue-200 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
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
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-blue-200 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>

                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="text-gray-800 font-bold w-full h-12 px-6 bg-blue-100 border border-blue-300 rounded shadow-md shadow-blue-300 hover:shadow-blue-300 hover:shadow-lg transition-all"
                    >
                      {isLoading ? <Loader /> : "Login"}
                    </button>
                  </div>
                  <div className="flex justify-end">
                    <a href="" className="text-xs text-blue-500 underline">
                      Forget password
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
