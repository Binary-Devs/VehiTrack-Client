"use client";

import { useGetProfileQuery } from "@/redux/api/profile/profileApi";
import { CarOutlined } from "@ant-design/icons";
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
const DashboardPage = () => {
  const { Title, Text } = Typography;

  const { data: userData, isLoading } = useGetProfileQuery(undefined);
  const trips = userData?.driver?.trips;
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

  const tripCount = [
    {
      title: "Total Trips",
      today: trips ? trips.length : 0,
      icon: <CarOutlined />,
    },
    {
      title: "Total Accident Histories",
      today: trips ? trips.length : 0,
      icon: <CarOutlined />,
    },
    {
      title: "Total maintenances",
      today: trips ? trips.length : 0,
      icon: <CarOutlined />,
    },
    {
      title: "Total vehicles Drive",
      today: trips ? trips.length : 0,
      icon: <CarOutlined />,
    },
    // Add more trip-related counts as needed
    // {
    //   title: "Another Count",
    //   today: ...,
    //   icon: ...,
    // },
  ];

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
          >
            <div>
              <span className="w-70% text-[#8c8c8c] font-semibold text-sm">
                {c.today}
              </span>
              <p className="text-3xl font-bold">{c.title}</p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-[#1890ff] rounded-[0.5rem]">
              {c.icon}
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

export default DashboardPage;
