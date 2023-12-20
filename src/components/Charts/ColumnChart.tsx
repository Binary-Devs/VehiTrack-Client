"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";
import { Row, Col, Typography } from "antd";
import columnChart from "./configs/columnChart";

const ColumnChart = () => {
  const { Title, Paragraph } = Typography;

  const items = [
    {
      Title: "3,6K",
      user: "Users",
    },
    {
      Title: "2m",
      user: "Clicks",
    },
    {
      Title: "$772",
      user: "Sales",
    },
    {
      Title: "82",
      user: "Items",
    },
  ];

  return (
    <>
      <div className="chart-vistior">
        <Title level={5}>Trip Summery</Title>
        <Paragraph className="lastweek">
          than last year <span className="bnb2">+30%</span>
        </Paragraph>
        {/* <Paragraph className="lastweek">
          We have created multiple options for you to put together and customise
          into pixel perfect pages.
        </Paragraph> */}
        {/* <Row gutter>
          {items.map((v, index) => (
            <Col xs={6} xl={6} sm={6} md={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{v.Title}</Title>
                <span>{v.user}</span>
              </div>
            </Col>
          ))}
        </Row> */}
      </div>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          // @ts-ignore
          options={columnChart.options}
          series={columnChart.series}
          type="bar"
          height={300}
        />
      </div>
    </>
  );
};

export default ColumnChart;
