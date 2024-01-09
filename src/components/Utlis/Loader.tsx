import Image from "next/image";
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
    // <div
    //   className={`${
    //     className ? className : "flex justify-center items-center"
    //   }`}
    // >
    //   <Flex justify="center" align="center" gap="middle">
    //     <Spin size={size ? size : "default"} />
    //   </Flex>
    //   {/* <HashLoader
    //     color={color ? color : "#1890ff"}
    //     size={50}
    //   /> */}
    // </div>
    <div
      className={`${
        className ? className : "flex justify-center items-center"
      }`}
    >
      <Image
        priority
        width={60}
        height={60}
        src={"/loading.gif"}
        alt="loading"
      />
    </div>
  );
};

export default Loader;
