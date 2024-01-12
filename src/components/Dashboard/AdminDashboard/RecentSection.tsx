import { useGetAllMaintenanceQuery } from "@/redux/api/maintenance/maintenanceApi";
import { useGetAllTripQuery } from "@/redux/api/trip/tripApi";
import { Empty, Radio, RadioChangeEvent, Spin, Typography } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import { useState } from "react";

const { Title } = Typography;

const RecentSection = () => {
  const [recentTabData, setRecentTabData] = useState("trip");

  const recentTabChange = (e: RadioChangeEvent) => {
    setRecentTabData(e.target.value);
  };

  // recent trips
  const { data: tripData, isLoading: isTripLoading } = useGetAllTripQuery(
    {
      limit: 10,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const allTrips = tripData?.trips || [];

  // recent maintenance
  const { data: maintenanceData, isLoading: isMaintenanceLoading } =
    useGetAllMaintenanceQuery(
      {
        limit: 10,
      },
      {
        refetchOnMountOrArgChange: true,
      }
    );

  const allMaintenances = maintenanceData?.maintenances || [];

  return (
    <div className="bg-white border border-blue-200 shadow-md shadow-blue-200 rounded-lg py-5 pl-5 pr-1.5 lg:col-span-7 overflow-x-auto">
      <div className="flex justify-between items-center pr-3.5 mb-3">
        <div>
          <Title level={5} className="!m-0">
            Recent Data
          </Title>
        </div>
        <div>
          <Radio.Group onChange={recentTabChange} defaultValue={recentTabData}>
            <Radio.Button value="trip">TRIP</Radio.Button>
            <Radio.Button value="maintenance">MAINTENANCE</Radio.Button>
          </Radio.Group>
        </div>
      </div>
      {/* Trip */}
      {recentTabData === "trip" && (
        <div className="inline-block min-w-full align-middle overflow-auto h-[340px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full pr-1.5">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr className="">
                <th
                  scope="col"
                  className="py-2 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Vehicle
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-left text-sm font-semibold text-gray-900"
                >
                  Destination
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {allTrips.length ? (
                allTrips.map(
                  (
                    { vehicle, startDate, id, from, to }: any,
                    index: number
                  ) => (
                    <tr key={id} className="hover:bg-slate-50 w-full">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        <div className="flex items-center gap-x-4 group">
                          <Image
                            width={300}
                            height={300}
                            //    src={images[index]}
                            src={
                              vehicle?.imageUrl ||
                              "https://res.cloudinary.com/dnzlgpcc3/image/upload/v1704419785/oiav6crzfltkswdrrrli.png"
                            }
                            alt="Image"
                            className="h-9 w-9 rounded-full bg-gray-800"
                          />
                          <div className="truncate font-medium leading-6 text-gray-700 group-hover:text-gray-900 capitalize duration-200 ">
                            <p>{vehicle?.regNo}</p>
                            <p>{dayjs(startDate).format("DD/MM/YYYY")}</p>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize truncate hover:text-clip">
                        <span>{from}</span>
                        <em> to </em>
                        <span>{to}</span>
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td className="py-20 w-full text-center text-red-400">
                    {isTripLoading ? <Spin /> : <Empty />}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      {/* Maintenance */}
      {recentTabData === "maintenance" && (
        <div className="inline-block min-w-full align-middle overflow-auto h-[340px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full pr-1.5">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr className="">
                <th
                  scope="col"
                  className="py-2 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Vehicle
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 text-left text-sm font-semibold text-gray-900"
                >
                  Maintenance Head
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {allMaintenances?.length ? (
                allMaintenances?.map(
                  (
                    { vehicle, date, id, maintenanceHead }: any,
                    index: number
                  ) => (
                    <tr key={id} className="hover:bg-slate-50 w-full">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        <div className="flex items-center gap-x-4 group">
                          <Image
                            width={300}
                            height={300}
                            //    src={images[index]}
                            src={
                              vehicle?.imageUrl ||
                              "https://res.cloudinary.com/dnzlgpcc3/image/upload/v1704419785/oiav6crzfltkswdrrrli.png"
                            }
                            alt="Image"
                            className="h-9 w-9 rounded-full bg-gray-800"
                          />
                          <div className="truncate font-medium leading-6 text-gray-700 group-hover:text-gray-900 capitalize duration-200">
                            <p>{vehicle?.regNO}</p>
                            <p>{dayjs(date).format("DD/MM/YYYY")}</p>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500  capitalize truncate hover:text-clip">
                        {maintenanceHead?.label}
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td className="py-20 w-full text-center text-red-400">
                    {isMaintenanceLoading ? <Spin /> : <Empty />}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RecentSection;
