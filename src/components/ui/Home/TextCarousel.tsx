import { Carousel } from "antd";
import { FaQuoteLeft } from "react-icons/fa";

export default function TextCarousel() {
  const data = [
    {
      details:
        "The vehicle management code structure is integrated and the system is easy to understand. You do not need any coding knowledge to use the system. The software can be easily run by following their provided documentation. I really appreciate the efforts of the BDTASK team.",
      authorName: "Sampod",
      authorCountry: "Bangladesh",
    },
    {
      details:
        "If you want to run a small or large vehicle business, then this software is suitable for you. I bought this software, and when I run into a problem, they fix it right away. So far, my experience with this software has been great. I hope you all like it. Thanks to the BDTASK team for an amazing vehicle management system.",
      authorName: "Akahs Daha",
      authorCountry: "USA",
    },
    {
      details:
        "The vehicle management code structure is integrated and the system is easy to understand. You do not need any coding knowledge to use the system. The software can be easily run by following their provided documentation. I really appreciate the efforts of the BDTASK team.",
      authorName: "Sampod",
      authorCountry: "Bangladesh",
    },
  ];

  return (
    <div className="p-12 text-gray-800 my-4 bg-white">
      <div className="flex flex-col justify-center items-center">
        <FaQuoteLeft className="text-5xl text-[#1890ff]" />
        <div className="container max-w-5xl mx-auto">
          <Carousel autoplay dots className="p-10">
            {data.map((item, index) => (
              <div
                key={index}
                className="text-center space-y-4 leading-relaxed"
              >
                <p className="text-lg">{item.details}</p>
                <p className="text-sm font-semibold">{item.authorCountry}</p>
                <p className="text-base font-bold">{item.authorName}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
