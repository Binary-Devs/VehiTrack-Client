"use client";

import Loader from "@/components/Utlis/Loader";
import { useGetProfileQuery } from "@/redux/api/profile/profileApi";
// import ColumnChart from "@/components/Charts/ColumnChart";
// import LineChart from "@/components/Charts/LineChart";
import { Typography } from "antd";
import { motion } from "framer-motion";

// const ColumnChart = dynamic(() => import("@/components/Charts/ColumnChart"), {
//   ssr: false,
// });
// const LineChart = dynamic(() => import("@/components/Charts/LineChart"), {
//   ssr: false,
// });
const DriverDashboard = () => {
  const { Title, Text } = Typography;

  const { data: userData, isLoading } = useGetProfileQuery(undefined);

  const isDriver = userData?.role === "driver";
  const trips = isDriver ? userData?.driver?.trips : userData?.helper?.trips;
  const accidentHistories = isDriver
    ? userData?.driver?.accidentHistories
    : userData?.helper?.accidentHistories;
  const maintenances = isDriver
    ? userData?.driver?.maintenances
    : userData?.helper?.maintenances;
  const vehicles = isDriver
    ? userData?.driver?.vehicles
    : userData?.helper?.vehicles;

  // const trips = userData?.driver?.trips;
  const filteredTripsUpcoming: any = trips?.filter(
    (trip: any) => trip.status === "Pending"
  );
  const filteredTripsComplete: any = trips?.filter(
    (trip: any) => trip.status === "Completed"
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  if (isLoading) {
    return <Loader className="h-[50vh] flex items-end justify-center" />;
  }

  const profile = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z"
        fill="#fff"
      ></path>
      <path
        d="M17 6C17 7.65685 15.6569 9 14 9C12.3431 9 11 7.65685 11 6C11 4.34315 12.3431 3 14 3C15.6569 3 17 4.34315 17 6Z"
        fill="#fff"
      ></path>
      <path
        d="M12.9291 17C12.9758 16.6734 13 16.3395 13 16C13 14.3648 12.4393 12.8606 11.4998 11.6691C12.2352 11.2435 13.0892 11 14 11C16.7614 11 19 13.2386 19 16V17H12.9291Z"
        fill="#fff"
      ></path>
      <path
        d="M6 11C8.76142 11 11 13.2386 11 16V17H1V16C1 13.2386 3.23858 11 6 11Z"
        fill="#fff"
      ></path>
    </svg>,
  ];

  const tripCount = [
    {
      today: "Total Trips",
      title: trips ? trips.length : 0,
      percent: "+20%",
      icon: profile,
      bnb: "bnb2",
    },
    {
      today: "Total Accident Histories",
      title: accidentHistories ? accidentHistories.length : 0,
      percent: "+20%",
      icon: profile,
      bnb: "bnb2",
    },
    {
      today: "Total maintenances",
      title: maintenances ? maintenances.length : 0,
      percent: "+20%",
      icon: profile,
      bnb: "bnb2",
    },
    {
      today: "Total vehicles Drive",
      title: vehicles ? vehicles.length : 0,
      percent: "+20%",
      icon: profile,
      bnb: "bnb2",
    },
    // Add more trip-related counts as needed
    // {
    //   title: "Another Count",
    //   today: ...,
    //   icon: ...,
    // },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="your-container-styles"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* trip card */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {tripCount.map((c, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between bg-white border border-blue-200 shadow-md shadow-blue-200 rounded-lg p-5"
            variants={itemVariants}
          >
            <div>
              <span className="text-[#8c8c8c] font-semibold text-sm">
                {c.today}
              </span>
              <p className="text-3xl font-bold ">
                {c.title}{" "}
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
                {c.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* upcoming trip */}
      <div className="mb-5">
        {/* driver upcoming trip */}
        <div className="bg-white border border-blue-200 shadow-md shadow-blue-200 rounded-lg py-5 pl-5 pr-1.5 lg:col-span-7 overflow-x-auto">
          <div className="flex justify-between items-center pr-3.5 mb-3">
            <Title level={5} className="!m-0">
              Upcoming Trip
            </Title>
          </div>
          {/* Trip */}
          {filteredTripsUpcoming && (
            <div className="inline-block min-w-full align-middle overflow-auto h-[340px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full pr-1.5">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="">
                    <th
                      scope="col"
                      className="py-2 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Trip No
                    </th>
                    <th
                      scope="col"
                      className="py-2 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Helper
                    </th>
                    <th
                      scope="col"
                      className="py-2 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Start Date
                    </th>
                    <th
                      scope="col"
                      className="py-2 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-sm font-semibold text-gray-900"
                    >
                      From
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-sm font-semibold text-gray-900"
                    >
                      To
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-sm font-semibold text-gray-900"
                    >
                      Distance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredTripsUpcoming.length ? (
                    filteredTripsUpcoming.map((trip: any) => (
                      <tr key={trip.id} className="hover:bg-slate-50 w-full">
                        <td className="whitespace-nowrap py-4 pl-3 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {trip.tripNo}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-3 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {trip.helper?.fullName || "N/A"}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-3 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {new Date(trip.startDate).toLocaleDateString()}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-3 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {trip.status}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize truncate hover:text-clip">
                          {trip.from}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize truncate hover:text-clip">
                          {trip.to}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize truncate hover:text-clip">
                          {trip.distance}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="py-20 w-full text-center text-red-400">
                        Empty !
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {/* my trip */}
      <div className="mb-5">
        {/* driver upcoming trip */}
        <div className="bg-white border border-blue-200 shadow-md shadow-blue-200 rounded-lg py-5 pl-5 pr-1.5 lg:col-span-7 overflow-x-auto">
          <div className="flex justify-between items-center pr-3.5 mb-3">
            <Title level={5} className="!m-0">
              Complete Trip
            </Title>
          </div>
          {/* Trip */}
          {filteredTripsComplete && (
            <div className="inline-block min-w-full align-middle overflow-auto h-[340px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full pr-1.5">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="">
                    <th
                      scope="col"
                      className="py-2 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Trip No
                    </th>
                    <th
                      scope="col"
                      className="py-2 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Helper
                    </th>
                    <th
                      scope="col"
                      className="py-2 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Start Date
                    </th>
                    <th
                      scope="col"
                      className="py-2 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-sm font-semibold text-gray-900"
                    >
                      From
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-sm font-semibold text-gray-900"
                    >
                      To
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-2 text-left text-sm font-semibold text-gray-900"
                    >
                      Distance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredTripsComplete.length ? (
                    filteredTripsComplete.map((trip: any) => (
                      <tr key={trip.id} className="hover:bg-slate-50 w-full">
                        <td className="whitespace-nowrap py-4 pl-3 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {trip.tripNo}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-3 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {trip.helper?.fullName}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-3 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {new Date(trip.startDate).toLocaleDateString()}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-3 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {trip.status}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize truncate hover:text-clip">
                          {trip.from}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize truncate hover:text-clip">
                          {trip.to}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize truncate hover:text-clip">
                          {trip.distance}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="py-20 w-full text-center text-red-400">
                        Empty !
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DriverDashboard;
