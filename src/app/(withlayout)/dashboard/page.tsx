"use client";

// import ColumnChart from "@/components/Charts/ColumnChart";
// import LineChart from "@/components/Charts/LineChart";
import type { RadioChangeEvent } from "antd";
import { Radio, Typography } from "antd";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const ColumnChart = dynamic(() => import("@/components/Charts/ColumnChart"), {
  ssr: false,
});
const LineChart = dynamic(() => import("@/components/Charts/LineChart"), {
  ssr: false,
});
const DashboardPage = () => {
  const { Title, Text } = Typography;
  const [recentTabData, setRecentTabData] = useState("trip");
  const [upcomingTabData, setUpcomingTabData] = useState("trip");

  const recentTabChange = (e: RadioChangeEvent) => {
    setRecentTabData(e.target.value);
  };
  const upcomingTabChange = (e: RadioChangeEvent) => {
    setUpcomingTabData(e.target.value);
  };

  const dollar = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z"
        fill="#fff"
      ></path>
      <path
        d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z"
        fill="#fff"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z"
        fill="#fff"
      ></path>
    </svg>,
  ];

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

  const count = [
    {
      today: "Total Trip",
      title: "3,200",
      percent: "+20%",
      icon: profile,
      bnb: "bnb2",
    },
    {
      today: "Total Trip Income",
      title: "$53,000",
      percent: "+30%",
      icon: dollar,
      bnb: "bnb2",
    },

    {
      today: "Total Trip Expense",
      title: "$1,200",
      percent: "-20%",
      icon: dollar,
      bnb: "redtext",
    },
    {
      today: "Net Profit",
      title: "$13,200",
      percent: "10%",
      icon: dollar,
      bnb: "bnb2",
    },
  ];

  const data = [
    {
      businessDetails: {
        businessName: "Bus KHSYG56",
        businessLogo:
          "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "Bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Bus HYFOI5603",
        businessLogo:
          "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dddd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "BMW HSFRE876",
        businessLogo:
          "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dddsfdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "BMW DKIU765",
        businessLogo:
          "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsfdsdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Truck KJUY563",
        businessLogo:
          "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsdfsdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Truck KJYD097",
        businessLogo:
          "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsdfsdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Truck REWK421",
        businessLogo:
          "https://plus.unsplash.com/premium_photo-1664695368767-c42483a0bda1?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsdfd",
      create_date: new Date().toLocaleDateString(),
    },
  ];
  const data2 = [
    {
      businessDetails: {
        businessName: "Truck REWK421",
        businessLogo:
          "https://plus.unsplash.com/premium_photo-1664695368767-c42483a0bda1?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsdfd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Truck KJYD097",
        businessLogo:
          "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsdfsdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Truck KJUY563",
        businessLogo:
          "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsdfsdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "BMW DKIU765",
        businessLogo:
          "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsfdsdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "BMW HSFRE876",
        businessLogo:
          "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dddsfdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Bus HYFOI5603",
        businessLogo:
          "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dddd",
      create_date: new Date().toLocaleDateString(),
    },

    {
      businessDetails: {
        businessName: "Bus KHSYG56",
        businessLogo:
          "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "Bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1",
      create_date: new Date().toLocaleDateString(),
    },
  ];

  const dataM = [
    {
      businessDetails: {
        businessName: "Bus KHSYG56",
        businessLogo:
          "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "Bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Bus HYFOI5603",
        businessLogo:
          "https://plus.unsplash.com/premium_photo-1661370367221-982fdba4ce89?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dddd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "BMW HSFRE876",
        businessLogo:
          "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dddsfdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "BMW DKIU765",
        businessLogo:
          "https://plus.unsplash.com/premium_photo-1683140564690-e9bc8a5c6fd4?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsfdsdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Truck KJUY563",
        businessLogo:
          "https://plus.unsplash.com/premium_photo-1663091693418-a64b58275ca4?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsdfsdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Truck KJYD097",
        businessLogo:
          "https://plus.unsplash.com/premium_photo-1664475106832-6bcabd2ce4f3?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsdfsdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Truck REWK421",
        businessLogo:
          "https://images.unsplash.com/photo-1623706897185-32d543db92cf?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsdfd",
      create_date: new Date().toLocaleDateString(),
    },
  ];

  const incomeExpenseData = [
    {
      type: "expense",
      name: "Fuel bill",
      amount: "-$49.88",
    },
    {
      type: "income",
      name: "Trip bonus",
      amount: "+99.99",
    },
    {
      type: "income",
      name: "Trip completed",
      amount: "+1,200.88",
    },
    {
      type: "cancel",
      name: "Trip cancel",
      amount: "+$99.99",
    },
    {
      type: "expense",
      name: "Glass repair",
      amount: "-$49.88",
    },
    {
      type: "expense",
      name: "Bumper repair",
      amount: "-$68.88",
    },
    {
      type: "income",
      name: "Trip completed",
      amount: "+600.88",
    },
    {
      type: "cancel",
      name: "Trip cancel",
      amount: "+$1300.99",
    },
    {
      type: "expense",
      name: "Tire change",
      amount: "-$78.88",
    },
  ];

  return (
    <div>
      {/* Section 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-5">
        {count.map((c, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white border border-blue-200 shadow-md shadow-blue-200 rounded-lg p-5"
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
          </div>
        ))}
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        <div className="bg-white border border-blue-200 shadow-md shadow-blue-200 rounded-lg p-5">
          <ColumnChart />
        </div>
        <div className="bg-white border border-blue-200 shadow-md shadow-blue-200 rounded-lg p-5">
          <LineChart />
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        {/* Recent Data */}
        <div className="bg-white border border-blue-200 shadow-md shadow-blue-200 rounded-lg py-5 pl-5 pr-1.5 lg:col-span-7 overflow-x-auto">
          <div className="flex justify-between items-center pr-3.5 mb-3">
            <div>
              <Title level={5} className="!m-0">
                Recent Data
              </Title>
              {/* <Paragraph className="lastweek !m-0">
                than last year <span className="blue">+10%</span>
              </Paragraph> */}
            </div>
            <div>
              <Radio.Group
                onChange={recentTabChange}
                defaultValue={recentTabData}
              >
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
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.length ? (
                    data.map(
                      ({ businessDetails, address, _id, create_date }, i) => (
                        <tr key={_id} className="hover:bg-slate-50 w-full">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            <div className="flex items-center gap-x-4 group">
                              <Image
                                width={300}
                                height={300}
                                src={businessDetails?.businessLogo}
                                alt="Image"
                                className="h-9 w-9 rounded-full bg-gray-800"
                              />
                              <div className="truncate font-medium leading-6 text-gray-700 group-hover:text-gray-900 capitalize duration-200 ">
                                <p>{businessDetails?.businessName}</p>
                                <p>{new Date(create_date).toLocaleString()}</p>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize truncate hover:text-clip">
                            <span>{address.country},</span> <br />
                            <span>
                              {address.city}, {address.state}
                            </span>
                          </td>
                        </tr>
                      )
                    )
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
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {dataM?.length ? (
                    dataM?.map(
                      ({ businessDetails, address, _id, create_date }, i) => (
                        <tr key={_id} className="hover:bg-slate-50 w-full">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            <div className="flex items-center gap-x-4 group">
                              <Image
                                src={businessDetails?.businessLogo}
                                alt="Image"
                                width={300}
                                height={300}
                                className="h-9 w-9 rounded-full bg-gray-800"
                              />
                              <div className="truncate font-medium leading-6 text-gray-700 group-hover:text-gray-900 capitalize duration-200">
                                <p>{businessDetails?.businessName}</p>
                                <p>{new Date(create_date).toLocaleString()}</p>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500  capitalize truncate hover:text-clip">
                            <span>{address.country},</span> <br />
                            <span>
                              {address.city}, {address.state}
                            </span>
                          </td>
                        </tr>
                      )
                    )
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
        {/* Income/Expense */}
        <div className="bg-white border border-blue-200 shadow-md shadow-blue-200 rounded-lg py-5 pl-5 pr-1.5 lg:col-span-5 overflow-auto">
          <div className="pr-3.5">
            <Title level={5}>Income/Expenses</Title>
            {/* <Paragraph className="lastweek !m-0">
                than last year <span className="blue">+10%</span>
              </Paragraph> */}
          </div>
          <div className="overflow-auto h-[352px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full pr-1.5">
            <header className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2">
              Today
            </header>
            <ul className="my-1">
              {/* Item */}
              {incomeExpenseData.map((d, i) => (
                <li key={i} className="flex px-2 hover:bg-slate-50">
                  <div
                    className={`w-9 h-9 rounded-full shrink-0 ${
                      d.type === "income"
                        ? "bg-emerald-500"
                        : d.type === "expense"
                        ? "bg-rose-500"
                        : "bg-slate-200"
                    } my-2 mr-3`}
                  >
                    {d.type === "income" && (
                      <svg
                        className="w-9 h-9 fill-current text-emerald-50"
                        viewBox="0 0 36 36"
                      >
                        <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                      </svg>
                    )}
                    {d.type === "expense" && (
                      <svg
                        className="w-9 h-9 fill-current text-rose-50"
                        viewBox="0 0 36 36"
                      >
                        <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
                      </svg>
                    )}
                    {d.type === "cancel" && (
                      <svg
                        className="w-9 h-9 fill-current text-slate-400"
                        viewBox="0 0 36 36"
                      >
                        <path d="M21.477 22.89l-8.368-8.367a6 6 0 008.367 8.367zm1.414-1.413a6 6 0 00-8.367-8.367l8.367 8.367zM18 26a8 8 0 110-16 8 8 0 010 16z" />
                      </svg>
                    )}
                  </div>
                  <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                    <div className="grow flex justify-between">
                      <div className="self-center">{d.name}</div>
                      <div className="shrink-0 self-start ml-2">
                        <span
                          className={`font-medium  ${
                            d.type === "income"
                              ? "text-emerald-500"
                              : d.type === "expense"
                              ? "text-rose-500"
                              : "text-slate-800 line-through"
                          }`}
                        >
                          {d.amount}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      {/* Upcoming Data */}
      <div className="bg-white border border-blue-200 shadow-md shadow-blue-200 rounded-lg py-5 pl-5 pr-1.5 lg:col-span-7 overflow-x-auto">
        <div className="flex justify-between items-center mb-3 pr-3.5">
          <div>
            <Title level={5} className="!m-0 flex-1">
              Upcoming Data
            </Title>
          </div>
          <div>
            <Radio.Group
              onChange={upcomingTabChange}
              defaultValue={recentTabData}
            >
              <Radio.Button value="trip">TRIP</Radio.Button>
              <Radio.Button value="maintenance">MAINTENANCE</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        {/* Trip */}
        {upcomingTabData === "trip" && (
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
                    Address
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data2?.length ? (
                  data2?.map(
                    ({ businessDetails, address, _id, create_date }, i) => (
                      <tr key={_id} className="hover:bg-slate-50 w-full">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          <div className="flex items-center gap-x-4 group">
                            <Image
                              src={businessDetails?.businessLogo}
                              width={300}
                              height={300}
                              alt="Image"
                              className="h-9 w-9 rounded-full bg-gray-800"
                            />
                            <div className="truncate font-medium leading-6 text-gray-700 group-hover:text-gray-900 capitalize duration-200">
                              <p> {businessDetails?.businessName}</p>
                              <p>{new Date(create_date).toLocaleString()}</p>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500  capitalize truncate hover:text-clip">
                          <span>{address.country},</span> <br />
                          <span>
                            {address.city}, {address.state}
                          </span>
                        </td>
                      </tr>
                    )
                  )
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
        {/* Maintenance */}
        {upcomingTabData === "maintenance" && (
          <div className="inline-block min-w-full align-middle overflow-auto h-[340px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 scrollbar-track-rounded-full scrollbar-thumb-rounded-full pr-1.5">
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
                    Address
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dataM?.length ? (
                  dataM?.map(
                    ({ businessDetails, address, _id, create_date }, i) => (
                      <tr key={_id} className="hover:bg-slate-50 w-full">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          <div className="flex items-center gap-x-4 group">
                            <Image
                              width={300}
                              height={300}
                              src={businessDetails?.businessLogo}
                              alt="Image"
                              className="h-9 w-9 rounded-full bg-gray-800"
                            />
                            <div className="truncate font-medium leading-6 text-gray-700 group-hover:text-gray-900 capitalize duration-200">
                              <p>{businessDetails?.businessName}</p>
                              <p>{new Date(create_date).toLocaleString()}</p>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500  capitalize truncate hover:text-clip">
                          <span>{address.country},</span> <br />
                          <span>
                            {address.city}, {address.state}
                          </span>
                        </td>
                      </tr>
                    )
                  )
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
  );
};

export default DashboardPage;
