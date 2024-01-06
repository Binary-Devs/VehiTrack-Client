"use client";
import Loader from "@/components/Utlis/Loader";
import { useGetProfileQuery } from "@/redux/api/profile/profileApi";
import { Col, Divider, Flex, Row, Statistic, Typography } from "antd";
import dayjs from "dayjs";
import Image from "next/image";

const ProfilePage = () => {
  const { data, isLoading, error } = useGetProfileQuery(undefined);

  const { Title } = Typography;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="">
      <div className="min-h-[80vh]">
        <Row gutter={[30, 24]} className="flex justify-center">
          <Col md={10} className="w-full">
            <div className="w-full rounded-3xl bg-white shadow-xl p-4 mx-auto">
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

          {data.role !== "super_admin" && data.role !== "admin" && (
            <Col md={14} className={`w-full`}>
              <Flex gap={30} vertical>
                <div className="">
                  <Row
                    gutter={[20, 20]}
                    className="w-full rounded-3xl bg-white shadow-xl p-6 md:px-10 mx-auto !m-0"
                  >
                    <Col span={12} className="">
                      <Statistic
                        title="vehicles"
                        className="mx-auto"
                        valueStyle={{ color: "#1890ff" }}
                        value={data[data?.role]?.vehicles?.length}
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
                        title="Accident History"
                        valueStyle={{ color: "#1890ff" }}
                        value={data[data?.role]?.accidentHistories?.length}
                      />
                    </Col>
                  </Row>
                </div>
                <div className="w-full rounded-3xl bg-white shadow-xl p-6  md:px-10 overflow-auto h-96">
                  <div className="">
                    <Title level={5} className="text-center">
                      Trip History
                    </Title>
                  </div>
                  <Divider />
                  <div className="overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
                    <ul className="my-1 flex flex-col gap-2">
                      {data[data?.role]?.trips.map(
                        (trip: any, index: number) => (
                          <li
                            key={index}
                            className="flex flex-col md:flex-row ring-1 md:ring-0 justify-around m-1 rounded-2xl md:rounded-full hover:bg-sky-100 p-4 md:p-1"
                          >
                            <p className="text-lg font-medium">
                              Trip ID : {trip?.tripNo}
                            </p>
                            <Divider type="vertical" />
                            <p className="text-lg font-medium">
                              Date :{" "}
                              {dayjs(trip?.startDate).format("MMM D, YYYY")}
                            </p>
                            <Divider type="vertical" />

                            <p className="text-lg font-medium ">
                              From : {trip?.from} ➡ to : {trip.to}
                            </p>
                          </li>
                        )
                      )}
                      <li className="flex flex-col md:flex-row ring-1 md:ring-0 justify-around m-1 rounded-2xl md:rounded-full hover:bg-sky-100 p-4 md:p-1">
                        <p className="text-lg font-medium">Trip ID :</p>
                        <Divider type="vertical" />
                        <p className="text-lg font-medium">Date :</p>
                        <Divider type="vertical" />

                        <p className="text-lg font-medium ">From :</p>
                      </li>
                      <li className="flex flex-col md:flex-row ring-1 md:ring-0 justify-around m-1 rounded-2xl md:rounded-full hover:bg-sky-100 p-4 md:p-1">
                        <p className="text-lg font-medium">Trip ID :</p>
                        <Divider type="vertical" />
                        <p className="text-lg font-medium">Date :</p>
                        <Divider type="vertical" />

                        <p className="text-lg font-medium ">From :</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Flex>
            </Col>
          )}
        </Row>
      </div>
    </section>
  );
};

export default ProfilePage;
