// import LoadingForDataFetch from "@/components/Utlis/LoadingForDataFetch";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="h-[50vh] flex items-end justify-center">
      {/* <LoadingForDataFetch /> */}
      {/* <Loader className="h-[50vh] flex items-end justify-center" size="large" /> */}
      <Image width={100} height={100} src={"/loading.gif"} alt="loading" />
    </div>
  );
};

export default Loading;
