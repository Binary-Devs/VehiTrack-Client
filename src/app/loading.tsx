// import LoadingForDataFetch from "@/components/Utlis/LoadingForDataFetch";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="h-[50vh] flex items-end justify-center">
      {/* <LoadingForDataFetch /> */}
      {/* <Loader className="h-[50vh] flex items-end justify-center" size="large" /> */}
      <Image width={60} height={60} src={"/loading.gif"} alt="loading" />
    </div>
  );
};

export default Loading;
