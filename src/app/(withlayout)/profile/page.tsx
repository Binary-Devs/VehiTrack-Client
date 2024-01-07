"use client";
import { AllImage } from "@/components/Image";
import Loader from "@/components/Utlis/Loader";
import { USER_ROLE } from "@/constants/role";
import { useGetProfileQuery } from "@/redux/api/profile/profileApi";
import { Col, Row } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaAccessibleIcon } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { GrHostMaintenance } from "react-icons/gr";
import { MdElectricCar } from "react-icons/md";
import formatMongoCreatedAtDate from "../../../utils/formateMongoTimeToLocal";
const ProfilePage = () => {
  const { data, isLoading, error } = useGetProfileQuery(undefined);
  const [allUserData, setAllUserData] = useState({});

  useEffect(() => {
    if (data?.role) {
      setAllUserData({ ...data, userInfo: data[data?.role] });
    }

    return () => {};
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }
  // console.log(allUserData);
  return (
    <section className="mx-[-25px] md:mx-0">
      <div className="">
        {
          //@ts-ignore
          data?.role !== USER_ROLE.ADMIN &&
          //@ts-ignore
          data?.role !== USER_ROLE.SUPER_ADMIN ? (
            <Row gutter={[16, 16]}>
              <Col sm={24} md={12}>
                <div className="max-w-3xl  sm:max-w-sm md:max-w-sm lg:max-w-2xl xl:max-w-2xl sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-xl rounded-lg text-gray-900 pb-14 px-6">
                  <div className="rounded-t-lg h-32 overflow-hidden">
                    <Image
                      className="object-cover object-top w-full"
                      src={AllImage.webLogo}
                      alt="Mountain"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="mx-auto w-[150px] h-[150px] relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    {/* <img
                  className="object-cover object-center h-32"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  alt="Woman looking front"
                /> */}
                    <Image
                      className="object-cover object-center w-[150px] h-[150px]"
                      src={AllImage.profileImageAvator}
                      alt=""
                      height={500}
                      width={500}
                    />
                  </div>
                  <div className="text-center mt-2">
                    <h2 className="font-semibold text-3xl px-2">
                      {data.role === "super_admin"
                        ? data.superAdmin.fullName
                        : data[data.role]["fullName"]}
                    </h2>
                  </div>

                  <div className="p-1 md:p-4 border-t md:mx-8 mt-2 space-y-6 ">
                    <div className="text-base md:text-xl font-semibold px-8 py-4 rounded-xl ring-1 ring-sky-200 shadow-md flex  items-center">
                      Phone :
                      <span className="ml-6 md:ml-20">
                        {data.role === "super_admin"
                          ? data.superAdmin.mobile
                          : data[data.role]["mobile"]}
                      </span>
                    </div>
                    <p className="text-base md:text-xl font-semibold px-8 py-4 rounded-xl ring-1 ring-sky-200 shadow-md flex  items-center">
                      UserId :
                      <span className="ml-6 md:ml-20"> {data["userName"]}</span>
                    </p>
                    <p className="text-base md:text-xl font-semibold px-8 py-4 rounded-xl ring-1 ring-sky-200 shadow-md flex  items-center">
                      Address :
                      <span className="ml-4 md:ml-16">
                        {data.role === "super_admin"
                          ? data.superAdmin.mobile
                          : data[data.role]["address"]}
                      </span>
                    </p>
                  </div>
                  {/* <div className="p-1 md:p-4 border-t md:mx-8 mt-2  ">
                Professional Summary :
                <p className="text-black  border-2 rounded-md p-3">
                  Friendly and outgoing car driver proficient in safe
                  operations, passenger transportation and inclement weather
                  driving. Excellent communicator and problem solver with a
                  solid track record in the field. Outstanding safety background
                  and consistently requested by repeat customers for regular
                  transportation.
                </p>
              </div> */}
                </div>
              </Col>
              <Col sm={24} md={12}>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 mb-5">
                  <div className="flex items-center justify-between bg-white border border-blue-200 shadow-md shadow-blue-200 rounded-lg p-5">
                    <div>
                      <span className="text-[#8c8c8c] font-semibold text-sm">
                        Total Trip
                      </span>
                      <p className="text-3xl font-bold ">
                        {
                          //@ts-ignore
                          allUserData?.userInfo?.trips?.length
                        }
                        {/* 
                  <small
                    className={`text-sm font-semibold ${
                      c.bnb === "redtext" ? "text-red-500" : "text-[#52c41a]"
                    }`}
                  >
                    {c.percent}
                  </small> 
                  */}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 bg-[#1890ff] rounded-[0.5rem]">
                        {<FaCarSide className="text-4xl text-white" />}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-white border border-blue-200 shadow-md shadow-blue-200 rounded-lg p-5">
                    <div>
                      <span className="text-[#8c8c8c] font-semibold text-sm">
                        Total Accident Histories
                      </span>
                      <p className="text-3xl font-bold ">
                        {
                          //@ts-ignore
                          allUserData?.userInfo?.accidentHistories?.length
                        }
                        {/* 
                  <small
                    className={`text-sm font-semibold ${
                      c.bnb === "redtext" ? "text-red-500" : "text-[#52c41a]"
                    }`}
                  >
                    {c.percent}
                  </small> 
                  */}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 bg-[#1890ff] rounded-[0.5rem]">
                        {<FaAccessibleIcon className="text-4xl text-white" />}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-white border border-blue-200 shadow-md shadow-blue-200 rounded-lg p-5">
                    <div>
                      <span className="text-[#8c8c8c] font-semibold text-sm">
                        Total maintenances
                      </span>
                      <p className="text-3xl font-bold ">
                        {
                          //@ts-ignore
                          allUserData?.userInfo?.maintenances?.length
                        }
                        {/* 
                  <small
                    className={`text-sm font-semibold ${
                      c.bnb === "redtext" ? "text-red-500" : "text-[#52c41a]"
                    }`}
                  >
                    {c.percent}
                  </small> 
                  */}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 bg-[#1890ff] rounded-[0.5rem]">
                        {<GrHostMaintenance className="text-4xl text-white" />}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-white border border-blue-200 shadow-md shadow-blue-200 rounded-lg p-5">
                    <div>
                      <span className="text-[#8c8c8c] font-semibold text-sm">
                        Total vehicles Drive
                      </span>
                      <p className="text-3xl font-bold ">
                        {
                          //@ts-ignore
                          allUserData?.userInfo?.vehicles?.length
                        }
                        {/* 
                  <small
                    className={`text-sm font-semibold ${
                      c.bnb === "redtext" ? "text-red-500" : "text-[#52c41a]"
                    }`}
                  >
                    {c.percent}
                  </small> 
                  */}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 bg-[#1890ff] rounded-[0.5rem]">
                        {<MdElectricCar className="text-4xl text-white" />}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-blue-200 shadow-md shadow-blue-200 rounded-lg py-5 pl-5 pr-1.5 lg:col-span-5 overflow-auto">
                  <div className="pr-3.5">
                    {/* <h1 className="text-lg">Trip history</h1> */}
                    {/* <Paragraph className="lastweek !m-0">
                than last year <span className="blue">+10%</span>
              </Paragraph> */}
                  </div>
                  <div className="overflow-auto  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full pr-1.5">
                    <header className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm d p-2 md:text-base font-bold">
                      Trip history
                    </header>
                    <ul className="my-1">
                      {
                        //@ts-ignore
                        allUserData?.userInfo?.trips
                          .slice(0, 5)
                          ?.map((data, i) => (
                            <li
                              key={i}
                              className="flex px-2 items-center gap-2 hover:bg-slate-50 "
                            >
                              {data.status === "complete" ? (
                                <div
                                  className={`w-9 h-9 rounded-full shrink-0 bg-emerald-500 my-2 mr-3`}
                                >
                                  <svg
                                    className="w-9 h-9 fill-current text-emerald-50"
                                    viewBox="0 0 36 36"
                                  >
                                    <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                                  </svg>
                                </div>
                              ) : (
                                <div
                                  className={`w-9 h-9 rounded-full shrink-0 bg-red-500 my-2 mr-3`}
                                >
                                  <svg
                                    className="w-9 h-9 fill-current text-emerald-50"
                                    viewBox="0 0 36 36"
                                  >
                                    <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                                  </svg>
                                </div>
                              )}
                              <div>
                                <h1 className="md:text-base font-bold whitespace-nowrap">
                                  {data?.tripNo}
                                </h1>
                              </div>
                              <div className="md:text-base font-bold whitespace-nowrap">
                                Start time :{" "}
                                {formatMongoCreatedAtDate(data?.startedTime)}
                              </div>
                              <div className="grow flex items-center border-b border-slate-100 text-sm ">
                                <div className="grow flex justify-between items-cente">
                                  <div className="self-center whitespace-nowrap">
                                    {data.name}
                                  </div>
                                  <div className="shrink-0 self-start ml-2 md:text-base font-bold">
                                    <span className="whitespace-nowrap">
                                      From:{data?.from} ➡ to: {data.to}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))
                      }
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <div className="max-w-3xl  sm:max-w-sm md:max-w-sm lg:max-w-2xl xl:max-w-2xl sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-xl rounded-lg text-gray-900 pb-14">
              <div className="rounded-t-lg h-32 overflow-hidden">
                <Image
                  className="object-cover object-top w-full"
                  src={AllImage.webLogo}
                  alt="Mountain"
                  width={300}
                  height={300}
                />
              </div>
              <div className="mx-auto w-[150px] h-[150px] relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                {/* <img
                  className="object-cover object-center h-32"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  alt="Woman looking front"
                /> */}
                <Image
                  className="object-cover object-center w-[150px] h-[150px]"
                  src={AllImage.profileImageAvator}
                  alt=""
                  height={500}
                  width={500}
                />
              </div>
              <div className="text-center mt-2">
                <h2 className="font-semibold text-4xl">
                  {data.role === "super_admin"
                    ? data.superAdmin.fullName
                    : data[data.role]["fullName"]}
                </h2>
              </div>

              <div className="p-1 md:p-4 border-t md:mx-8 mt-2 space-y-6 ">
                <div className="text-xl font-semibold px-8 py-4 rounded-xl ring-1 ring-sky-200 shadow-md flex  items-center">
                  Phone :
                  <span className="ml-20">
                    {data.role === "super_admin"
                      ? data.superAdmin.mobile
                      : data[data.role]["mobile"]}
                  </span>
                </div>
                <p className="text-xl font-semibold px-8 py-4 rounded-xl ring-1 ring-sky-200 shadow-md flex  items-center">
                  UserId :<span className="ml-20"> {data["userName"]}</span>
                </p>
                <p className="text-xl font-semibold px-8 py-4 rounded-xl ring-1 ring-sky-200 shadow-md flex  items-center">
                  Address :
                  <span className="ml-16">
                    {data.role === "super_admin"
                      ? data.superAdmin.mobile
                      : data[data.role]["address"]}
                  </span>
                </p>
              </div>
              {/* <div className="p-1 md:p-4 border-t md:mx-8 mt-2  ">
                Professional Summary :
                <p className="text-black  border-2 rounded-md p-3">
                  Friendly and outgoing car driver proficient in safe
                  operations, passenger transportation and inclement weather
                  driving. Excellent communicator and problem solver with a
                  solid track record in the field. Outstanding safety background
                  and consistently requested by repeat customers for regular
                  transportation.
                </p>
              </div> */}
            </div>
          )
        }
      </div>
    </section>
  );
};

export default ProfilePage;
