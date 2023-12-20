"use client"

import React from "react";
import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./configs/lineChart";

const LineChart = () => {
  const { Title, Paragraph } = Typography;

  return (
    <>
      <div className="linechart">
        <div>
          <Title level={5}>Fuel Summery</Title>
          <Paragraph className="lastweek">
            than last year <span className="bnb2">+10%</span>
          </Paragraph>
        </div>
        <div className="sales">
          <ul>
            <li>{<MinusOutlined />} Diesel</li>
            <li>{<MinusOutlined />} Petrol</li>
          </ul>
        </div>
      </div>

      <ReactApexChart
        className="h-full w-full"
        // @ts-ignore
        options={lineChart.options}
        series={lineChart.series}
        type="area"
        height={300}
        width={"100%"}
      />
    </>
  );
};

export default LineChart;
