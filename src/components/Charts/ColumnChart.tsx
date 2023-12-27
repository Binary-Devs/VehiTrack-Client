"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import columnChart from "./configs/columnChart";

const ColumnChart = () => {
  const { Title, Paragraph } = Typography;

  return (
    <div className="overflow-hidden">
      <div>
        <Title level={5}>Trip Summery</Title>
        <Paragraph className="lastweek">
          than last year <span className="bnb2">+30%</span>
        </Paragraph>
      </div>
      <div>
        <ReactApexChart
          className="bar-chart"
          // @ts-ignore
          options={columnChart.options}
          series={columnChart.series}
          type="bar"
          height={300}
        />
      </div>
    </div>
  );
};

export default ColumnChart;
