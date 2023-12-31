import { Carousel } from "antd";
import { FcLowPriority } from "react-icons/fc";

export default function TextCarousel() {
  const data = [
    {
      details:
        "The vehicle management code structure is integrated and the system is easy to understand. You do not need any coding knowledge to use the system. The software can be easily run by following their provided documentation. I really appreciate the efforts of the BDTASK team.",
      athorName: "Sampod",
      athorCountry: "Banglesed",
    },
    {
      details:
        "If you want to run a small or large vehicle business then this software is suitable for you. I bought this software and when I run into a problem, they fix it right away. So far, my experience with this software has been great. I hope you all like it. Thanks to the BDTASK team for an amazing vehicle management system",
      athorName: "Akahs daha",
      athorCountry: "Us country",
    },
    {
      details:
        "The vehicle management code structure is integrated and the system is easy to understand. You do not need any coding knowledge to use the system. The software can be easily run by following their provided documentation. I really appreciate the efforts of the BDTASK team.",
      athorName: "Sampod",
      athorCountry: "Banglesed",
    },
  ];
  return (
    <div className="flex  justify-center items-center p-16 bg-[#f7f7f7] my-4">
      <div>
        <h1 className="text-center flex justify-center items-center">
          <FcLowPriority className="text-4xl"/>
          <FcLowPriority className="text-4xl"/>
        </h1>
        <div className="my-5  max-w-6xl ">
          <Carousel autoplay>
            {data.map((data, key) => (
              <div className="text-center space-y-4" key={key}>
                <p className="text-xl">{data.details}</p>
                <p className="text-lg">{data.athorCountry}</p>
                <p className="text-lg">{data.athorName}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
