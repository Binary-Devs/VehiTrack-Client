import { Flex, Spin } from "antd";
// import { HashLoader } from "react-spinners";

const Loader = ({
  className,
  color,
  size,
}: {
  className?: string;
  color?: string;
  size?: "small" | "large" | "default";
}) => {
  return (
    <div
      className={`${
        className ? className : "flex justify-center items-center"
      }`}
    >
      <Flex align="center" gap="middle">
        <Spin size={size ? size : "default"} />
      </Flex>
      {/* <HashLoader
        color={color ? color : "#1890ff"}
        size={50}
      /> */}
    </div>
  );
};

export default Loader;
