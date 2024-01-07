"use client";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { Button, Divider, message } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import ButtonLoading from "../ui/Loader/ButtonLoading";

type FormValues = {
  userName: string;
  password: string;
};

const LoginPage = () => {
  const [login, { isLoading, error }] = useLoginMutation();
  const [user, setUser] = useState("");
  const [defaultValue, setDefaultValue] = useState({});
  const router = useRouter();

  const pageVariants = {
    initial: { opacity: 0, y: "-100%" },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "100%" },
  };

  const formVariants = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: 0 },
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await login({ ...data }).unwrap();
      if (res.accessToken) {
        router.push("/dashboard");
        message.success("User logged in successfully");
        storeUserInfo({ accessToken: res?.accessToken });
      } else {
        message.error("Not a valid user");
      }
    } catch (error: any) {
      message.error(error?.message);
      // console.log(error);
    }
  };

  useEffect(() => {
    if (user === "super_admin") {
      setDefaultValue({ userName: "SA00001", password: "123456" });
    } else if (user === "manager") {
      setDefaultValue({ userName: "A00001", password: "123456" });
    } else if (user === "driver") {
      setDefaultValue({ userName: "D00001", password: "123456" });
    } else if (user === "helper") {
      setDefaultValue({ userName: "H00001", password: "123456" });
    } else {
      setDefaultValue({});
    }
  }, [user]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="relative "
    >
      <img
        src="https://media.giphy.com/media/21QEGwILf5SGDRRHMn/giphy.gif"
        alt=""
        className="absolute inset-0 object-cover w-full h-screen"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative bg-transparent bg-opacity-75 h-screen "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 "
        >
          <div className="flex flex-col items-center justify-center mt-[15%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="w-full max-w-xl xl:px-8 xl:w-5/12 "
            >
              <motion.div
                variants={formVariants}
                initial="initial"
                animate="animate"
                className="bg-white rounded shadow-2xl p-7 sm:p-10"
              >
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Login Dashboard
                </h3>
                <motion.div variants={formVariants}>
                  <Form
                    submitHandler={onSubmit}
                    defaultValues={defaultValue}
                    // variants={formVariants}
                  >
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
                      <Button
                        type="default"
                        htmlType="submit"
                        style={{ width: "100%" }}
                        size="large"
                      >
                        <ButtonLoading />
                      </Button>
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

                    <Divider style={{ margin: "15px 0" }}>
                      Go To
                      <Link href="/" className="ml-1">
                        Home
                      </Link>
                    </Divider>

                    <div className="flex text-sm align-center">
                      <div className="flex mx-auto">
                        <Button
                          type="link"
                          onClick={() => setUser("super_admin")}
                          className="!p-0 "
                          size="large"
                        >
                          Super Admin
                        </Button>
                        <Divider
                          type="vertical"
                          className="h-full"
                          style={{ height: "100%", margin: "0 8px" }}
                        />
                        <Button
                          type="link"
                          onClick={() => setUser("manager")}
                          className="!p-0 "
                          size="large"
                        >
                          Manager
                        </Button>
                        <Divider
                          type="vertical"
                          style={{ height: "100%", margin: "0 8px" }}
                        />
                        <Button
                          type="link"
                          onClick={() => setUser("driver")}
                          className="!p-0 "
                          size="large"
                        >
                          Driver
                        </Button>
                        <Divider
                          type="vertical"
                          style={{ height: "100%", margin: "0 8px" }}
                        />
                        <Button
                          type="link"
                          onClick={() => setUser("helper")}
                          className="!p-0 "
                          size="large"
                        >
                          Helper
                        </Button>
                      </div>
                    </div>
                  </Form>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
