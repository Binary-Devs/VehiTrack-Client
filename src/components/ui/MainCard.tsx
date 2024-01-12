"use client";

import { Card } from "antd";
import { CardSize } from "antd/es/card/Card";

type CardProps = {
  size?: CardSize;
  bordered?: boolean;
  children: React.ReactNode;
  extra?: React.ReactNode | string;
  style?: object;
  title: React.ReactNode | string;
};

const MainCard = ({
  size,
  bordered = true,
  children,
  extra,
  style = {},
  title,
}: CardProps) => {
  return (
    <Card
      className="!bg-white !border !border-blue-200 !rounded-lg !shadow-md !shadow-blue-200"
      title={title}
      extra={extra}
      bordered={bordered}
      style={{
        width: "100%",
        ...style,
      }}
      size={size}
    >
      {children}
    </Card>
  );
};

export default MainCard;
