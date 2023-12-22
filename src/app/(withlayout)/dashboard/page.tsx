"use client";

import ColumnChart from "@/components/Charts/ColumnChart";
import LineChart from "@/components/Charts/LineChart";
import { Button, Card, Col, Row, Typography, message } from "antd";
import { useState } from "react";

import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const DashboardPage = () => {
  const { Title, Text } = Typography;

  const onChange = (e: { target: { value: any } }) =>
    console.log(`radio checked:${e.target.value}`);

  const [reverse, setReverse] = useState(false);

  const dollor = [
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
  const heart = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const cart = [
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z"
        fill="#fff"
      ></path>
    </svg>,
  ];
  const count = [
    {
      today: "Total Trip",
      title: "3,200",
      persent: "+20%",
      icon: profile,
      bnb: "bnb2",
    },
    {
      today: "Total Trip Income",
      title: "$53,000",
      persent: "+30%",
      icon: dollor,
      bnb: "bnb2",
    },

    {
      today: "Total Trip Expense",
      title: "$1,200",
      persent: "-20%",
      icon: dollor,
      bnb: "redtext",
    },
    {
      today: "Net Profit",
      title: "$13,200",
      persent: "10%",
      icon: dollor,
      bnb: "bnb2",
    },
  ];

  const list = [
    {
      image: team1,
      name: "Demo 1",
      startLocation: "Dhaka",
      endLocation: "Rajshahi",
      date: "22/12/2023",
      amount: "$1,299.22",
    },
    {
      image: team2,
      name: "Demo 2",
      startLocation: "Dhaka",
      endLocation: "Rajshahi",
      date: "22/12/2023",
      amount: "$1,299.22",
    },
    {
      image: team3,
      name: "Demo 3",
      startLocation: "Dhaka",
      endLocation: "Rajshahi",
      date: "22/12/2023",
      amount: "$1,299.22",
    },
    {
      image: team4,
      name: "Demo 4",
      startLocation: "Dhaka",
      endLocation: "Rajshahi",
      date: "22/12/2023",
      amount: "$1,299.22",
    },
    {
      image: team1,
      name: "Demo 5",
      startLocation: "Dhaka",
      endLocation: "Rajshahi",
      date: "22/12/2023",
      amount: "$1,299.22",
    },
    {
      image: team2,
      name: "Demo 6",
      startLocation: "Dhaka",
      endLocation: "Rajshahi",
      date: "22/12/2023",
      amount: "$1,299.22",
    },
    {
      image: team3,
      name: "Demo 7",
      startLocation: "Dhaka",
      endLocation: "Rajshahi",
      date: "22/12/2023",
      amount: "$1,299.22",
    },
    {
      image: team4,
      name: "Demo 8",
      startLocation: "Dhaka",
      endLocation: "Rajshahi",
      date: "22/12/2023",
      amount: "$1,299.22",
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

  const timelineList = [
    {
      title: "$2,400 - Redesign store",
      time: "09 JUN 7:20 PM",
      color: "green",
    },
    {
      title: "New order #3654323",
      time: "08 JUN 12:20 PM",
      color: "green",
    },
    {
      title: "Company server payments",
      time: "04 JUN 3:10 PM",
    },
    {
      title: "New card added for order #4826321",
      time: "02 JUN 2:45 PM",
    },
    {
      title: "Unlock folders for development",
      time: "18 MAY 1:30 PM",
    },
    {
      title: "New order #46282344",
      time: "14 MAY 3:30 PM",
      color: "gray",
    },
  ];

  const uploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info: any) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
      <div>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mb-5">
          {count.map((c, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white rounded-lg p-6"
            >
              <div>
                <span className="text-[#8c8c8c] font-semibold text-sm">
                  {c.today}
                </span>
                <p className="text-3xl font-bold ">
                  {c.title}{" "}
                  {/* <small
                    className={`text-sm font-semibold ${
                      c.bnb === "redtext" ? "text-red-500" : "text-[#52c41a]"
                    }`}
                  >
                    {c.persent}
                  </small> */}
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

        <Row gutter={[20, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-5">
            <Card bordered={false} className="criclebox h-full">
              <ColumnChart />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-5">
            <Card bordered={false} className="criclebox h-full">
              <LineChart />
            </Card>
          </Col>
        </Row>

        {/* <Row gutter={[20, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={16} className="">
            <Card bordered={false} className="criclebox h-full">
              <div>
                <div className="flex justify-between ">
                  <div>
                    <Title level={5}>Upcoming Trips</Title>
                    <Paragraph className="lastweek">
                      done this month<span className="blue">40%</span>
                    </Paragraph>
                  </div>
                  <div className="ant-filtertabs">
                    <div className="antd-pro-pages-dashboard-analysis-style-salesExtra">
                      <Radio.Group onChange={onChange} defaultValue="a">
                        <Radio.Button value="a">ALL</Radio.Button>
                        <Radio.Button value="b">ONLINE</Radio.Button>
                        <Radio.Button value="c">STORES</Radio.Button>
                      </Radio.Group>
                    </div>
                  </div>
                </div>

                <div className="">
                  Table
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      Table header
                      <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                        <tr>
                          <th className="px-2 py-3 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Client
                            </div>
                          </th>
                          <th className="px-2 py-3 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Start Location
                            </div>
                          </th>
                          <th className="px-2 py-3 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              End Location
                            </div>
                          </th>
                          <th className="px-2 py-3 whitespace-nowrap">
                            <div className="font-semibold text-left">Date</div>
                          </th>
                          <th className="px-2 py-3 whitespace-nowrap">
                            <div className="font-semibold text-right">
                              Amount
                            </div>
                          </th>
                        </tr>
                      </thead>
                      Table body
                      <tbody className="text-sm divide-y divide-slate-100">
                        Row
                        {list.map((l, i) => (
                          <tr key={i}>
                            <td className="px-2 py-3 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="shrink-0 rounded-full mr-2 sm:mr-3">
                                  <Image
                                    className="w-9 h-9 rounded-full"
                                    src={l.image}
                                    width="36"
                                    height="36"
                                    alt="User 05"
                                  />
                                </div>
                                <div className="font-medium text-slate-800">
                                  {l.name}
                                </div>
                              </div>
                            </td>
                            <td className="px-2 py-3 whitespace-nowrap">
                              <div>{l.startLocation}</div>
                            </td>
                            <td className="px-2 py-3 whitespace-nowrap">
                              <div>{l.endLocation}</div>
                            </td>
                            <td className="px-2 py-3 whitespace-nowrap">
                              <div>{l.date}</div>
                            </td>
                            <td className="px-2 py-3 whitespace-nowrap">
                              <div className="font-medium text-emerald-500 text-right">
                                {l.amount}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="text-center border-t border-slate-100 px-2">
                    <a
                      className="block text-sm font-medium text-indigo-500 hover:text-indigo-600 pt-4 pb-1"
                      href="#0"
                    >
                      View All -&gt;
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={8} className="">
            <Card bordered={false} className="criclebox h-full">
              <div className="timeline-box">
                <Title level={5}>Orders History</Title>
                <Paragraph className="lastweek" style={{ marginBottom: 24 }}>
                  this month <span className="bnb2">20%</span>
                </Paragraph>

                <Timeline
                  pending="Recording..."
                  className="timelinelist"
                  reverse={reverse}
                >
                  {timelineList.map((t, index) => (
                    <Timeline.Item color={t.color} key={index}>
                      <Title level={5}>{t.title}</Title>
                      <Text>{t.time}</Text>
                    </Timeline.Item>
                  ))}
                </Timeline>
                <Button
                  type="primary"
                  className="w-full"
                  onClick={() => setReverse(!reverse)}
                >
                  {<MenuUnfoldOutlined />} 
                  REVERSE
                </Button>
              </div>
            </Card>
          </Col>
        </Row> */}

        <div className=" grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          <div className="overflow-x-hidden overflow-y-auto rounded-lg bg-white md:min-h-[40vh] lgg:min-h-[60vh] p-6 shadow">
            <div className="inline-block min-w-full align-middle">
              <h3 className="text-base font-medium underline underline-offset-2">
                Recent Trip
              </h3>
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="">
                    <th
                      scope="col"
                      className="py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Vehicle
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
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
                              <img
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
          </div>
          <div className="overflow-x-hidden overflow-y-auto rounded-lg bg-white md:min-h-[40vh] lgg:min-h-[60vh] p-6 shadow">
            <div className="inline-block min-w-full align-middle">
              <h3 className="text-base font-medium underline underline-offset-2">
                Pending Trip
              </h3>
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="">
                    <th
                      scope="col"
                      className="py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Vehicle
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data?.length ? (
                    data?.map(
                      ({ businessDetails, address, _id, create_date }, i) => (
                        <tr key={_id} className="hover:bg-slate-50 w-full">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            <div className="flex items-center gap-x-4 group">
                              <img
                                src={businessDetails?.businessLogo}
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
          </div>
          <div className="overflow-x-hidden overflow-y-auto rounded-lg bg-white md:min-h-[40vh] lgg:min-h-[60vh] p-6 shadow">
            <div className="inline-block min-w-full align-middle">
              <h3 className="text-base font-medium underline underline-offset-2">
                Upcoming Maintenance
              </h3>
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="">
                    <th
                      scope="col"
                      className="py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Vehicle
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
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
                              <img
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
          </div>

          <div className="bg-red-100">
            <Button type="primary">Primary</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;