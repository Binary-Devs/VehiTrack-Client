import { Card, Col, Row, Statistic } from "antd";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRoad } from "react-icons/fa6";
import { LuFuel } from "react-icons/lu";
import { TbEngine } from "react-icons/tb";

import { Typography } from "antd";

const { Title, Text } = Typography;

const VehicleInfo = () => {
  return (
    <div>
      <Row gutter={[16, 16]} className="mb-10">
        <Col span={6}>
          <Card bordered={true}>
            <Statistic
              title="Engine"
              value={1.8}
              precision={1}
              valueStyle={{ color: "#3f8600", fontSize: 20 }}
              prefix={<TbEngine />}
              suffix="L"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={true}>
            <Statistic
              title="MILEAGE (KM)"
              value={128000}
              precision={0}
              valueStyle={{ color: "#3f8600", fontSize: 20 }}
              prefix={<FaRoad />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={true}>
            <Statistic
              title="YEAR"
              value={1992}
              precision={0}
              valueStyle={{ color: "#3f8600", fontSize: 20 }}
              prefix={<FaRegCalendarAlt />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={true}>
            <Statistic
              title="FUEL TYPE"
              value={"Petrol"}
              precision={0}
              valueStyle={{ color: "#3f8600", fontSize: 20 }}
              prefix={<LuFuel />}
            />
          </Card>
        </Col>
      </Row>
      <div className="p-6 my-8 border-2 border-gray-400 rounded-lg">
        <Title level={4}>Description</Title>
        <Text>
          <p className="mb-4">
            Excellent AC, DVD Player, Push Start, HID Projection Headlight, Two
            Door Power, Seat Heater, Leather Interior, Power Steering, 4 Disk
            Brake, Power Windows & Mirror, Airbag, Back Camera, Central DVD
            Player, Central Lock, Tempered Glass, All Power, All Papers R UP to
            Date.
          </p>
          <p>
            This vehicle is equipped with advanced features to ensure a
            comfortable and safe driving experience. The sleek design, powerful
            engine, and modern interior make it a perfect choice for those who
            appreciate both style and performance.
          </p>
        </Text>
      </div>
    </div>
  );
};

export default VehicleInfo;
