"use client";
import Loader from "@/components/Utlis/Loader";
import { useGetProfileQuery } from "@/redux/api/profile/profileApi";
import { Col, Divider, Row, Statistic } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
const ProfilePage = () => {
  const { data, isLoading, error } = useGetProfileQuery(undefined);
  const [allUserData, setAllUserData] = useState({});

  useEffect(() => {
    if (data?.role) {
      setAllUserData({ ...data, userInfo: data[data?.role] });
    }

    return () => {};
  }, [data]);

  console.log(allUserData);

  if (isLoading) {
    return <Loader />;
  }
  console.log(allUserData);
  return (
    <section className="">
      <div className="h-[80vh]">
        <Row gutter={16}>
          <Col md={12}>
            <div className="w-full max-w-3xl md:max-w-sm lg:max-w-lg rounded-3xl bg-white shadow-xl p-4 mx-auto">
              <Image
                className="object-cover object-center w-[250px] h-[250px] mx-auto"
                src={"https://joesch.moe/api/v1/random"}
                unoptimized
                alt=""
                height={500}
                width={500}
              />
              <div className="text-center mt-2">
                <h2 className="font-semibold text-4xl">
                  {data.role === "super_admin"
                    ? data.superAdmin.fullName
                    : data[data.role]["fullName"]}
                </h2>

                <p className="font-medium text-base my-1">
                  {data.role === "super_admin"
                    ? "Super Admin"
                    : data.role === "admin"
                    ? "Manager"
                    : data.role === "driver"
                    ? "Driver"
                    : "Helper"}
                </p>
              </div>

              <div className="p-6 border-2 py-8 rounded-3xl border-[#a18dff] m-3 md:m-6 space-y-4 ">
                <div className="text-lg font-normal mx-2 flex items-center justify-between">
                  <span>Phone :</span>
                  <span className="">
                    {data.role === "super_admin"
                      ? data.superAdmin.mobile
                      : data[data.role]["mobile"]}
                  </span>
                </div>

                <Divider className="bg-[#1890ff]" />

                <div className="text-lg font-normal mx-2 flex items-center justify-between">
                  <span>UserId :</span>
                  <span className="">{data["userName"]}</span>
                </div>

                <Divider className="bg-[#1890ff]" />

                <div className="text-lg font-normal mx-2 flex items-center justify-between">
                  <span>Address :</span>
                  <span className="">
                    {data.role === "super_admin"
                      ? data.superAdmin.address
                      : data[data.role]["address"]}
                  </span>
                </div>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="">
              <Row
                gutter={[20, 20]}
                className="w-full rounded-3xl bg-white shadow-xl p-6 px-10"
              >
                <Col span={12} className="">
                  <Statistic
                    title="vehicles"
                    className="mx-auto"
                    valueStyle={{ color: "#1890ff" }}
                    value={data[data?.role]?.vehicles?.length}
                    style={{ color: "#1890ff" }}
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="Completed Trip"
                    valueStyle={{ color: "#1890ff" }}
                    value={
                      data[data?.role]?.trips.filter(
                        (trips: any) => trips.status === "Completed"
                      ).length
                    }
                    suffix={` / ${data[data?.role]?.trips?.length}`}
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="Maintenances"
                    valueStyle={{ color: "#1890ff" }}
                    value={data[data?.role]?.maintenances?.length}
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="Completed Trip"
                    valueStyle={{ color: "#1890ff" }}
                    value={data[data?.role]?.accidentHistories?.length}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ProfilePage;
