"use client";
import { AllImage } from "@/components/Image";
import Loader from "@/components/Utlis/Loader";
import { authKey } from "@/constants/storageKey";
import { getFromLocalStorage } from "@/utils/local-storage";
import { Error_model_hook } from "@/utils/modalHook";
import { Flex } from "antd";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  // const {data,isLoading,error}=useGetProfileQuery('')
  const [loading, setloading] = useState(true);
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    setloading(true);
    const profile = async () => {
      const data = await axios.get(
        "https://vms-system-backend.vercel.app/api/v1/profile",
        {
          headers: {
            Authorization: getFromLocalStorage(authKey),
          },
        }
      );
      console.log(data?.data?.data);
      if (!data?.data?.data?.id) {
        setloading(false);
        Error_model_hook("login failed");
      } else {
        setUser(data?.data?.data);
        setloading(false);
      }
    };
    profile();

    return () => {};
  }, []);

  if (loading) {
    return <Loader />;
  }
  console.log(user);
  return (
    <section className="">
      <div className="">
        <Flex align="center" justify="center">
          <div className="flex flex-col justify-center items-center shadow-xl rounded-xl p-5 bg-white ring-1 ring-blue-200 max-w-md">
            <div
              className="relative"
              // dot={true}
              // color="green"
              // size="default"
              // style={{ color: "#008000", width: "20px", height: "20px" }}
            >
              <Image
                className="rounded-full w-28 h-28 border "
                src={AllImage.profileImageAvator}
                alt=""
                height={500}
                width={500}
              />
              <p className="absolute top-[10px] right-1 w-5 h-5 rounded-full bg-[#008000]"></p>
            </div>
            <h1 className="text-center font-semibold text-lg ">
              {user.role === "super_admin"
                ? user.superAdmin.fullName
                : user[user.role]["fullName"]}
            </h1>
          
              <h1 className=" font-normal text-base ">
                Address:
                {user.role === "super_admin"
                  ? user.superAdmin.address
                  : user[user.role]["address"]}
              </h1>
              <h1 className=" font-normal text-base ">
                Phone number:
                {user.role === "super_admin"
                  ? user.superAdmin.mobile
                  : user[user.role]["mobile"]}
              </h1>
          
            <p className="">
              Maximus nibh fringilla penatibus est vestibulum hendrerit nam
              curabitur lorem sagittis dis facilisis tempor consectetuer at ante
              egestas interdum proin vivamus lacinia litora ultrices erat nisl
              aptent finibus tortor
            </p>
          </div>
        </Flex>
      </div>
    </section>
  );
};

export default ProfilePage;
