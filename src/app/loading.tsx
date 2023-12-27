// import LoadingForDataFetch from "@/components/Utlis/LoadingForDataFetch";
import Loader from "@/components/Utlis/Loader";

const Loading = () => {
  return (
    <>
      {/* <LoadingForDataFetch /> */}
      <Loader className="h-[50vh] flex items-end justify-center" size="large" />
    </>
  );
};

export default Loading;
