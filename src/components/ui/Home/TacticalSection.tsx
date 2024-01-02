import { Button, Flex } from "antd";
import Image from "next/image";
import one from "../../../assets/1tac.png";
import two from "../../../assets/2tac.png";
import trhee from "../../../assets/3tac.png";
import four from "../../../assets/4tac.png";
import five from "../../../assets/5tac.png";
import ser from "../../../assets/6tac.png";
export default function TacticalSection() {
  const data = [
    {
      title: "Manage your vehicle from home",
      img: one,
      details:
        "The VMS software helps you to manage vehicles, store all important data about vehicle type, fitness, routes, stations, driver-helper-officer details, vehicle base performance etc.",
    },
    {
      title: "Manage inventory & expenses under control",
      img: ser,
      details:
        "Get all inventory records such as stock in hand, vehicle wise parts use report etc. We have designed an expense management system to take your inventory & expenses under control.",
    },
    {
      title: "Ensure the best profitability",
      img: five,
      details:
        "Use automation in every section of your business. Such as asset tracking, manage daily activities, get automatic calculation of finance .That’s why to ensure the best profitability you should have an vehicle management system.",
    },
    {
      title: "Take authentic decision",
      img: four,
      details:
        "VMS includes an integrated system that helps you to keep all your information in one place. You can view your all data at a glance at any time, get instant reports & can be able to make authentic decisions.",
    },
    {
      title: "Be the market leader of your industry",
      img: trhee,
      details:
        "A computer based management system brings a supersonic speed to manage an organization, get reports & ensure sustainable business growth. Having an automation system will help you to be the market leader",
    },
    {
      title: "Own a competent workforce",
      img: two,
      details:
        "An automation system makes easy dealing of your daily activities. You can specify your functionality as admins, superadmins inventory manager & other employees activities. And have the system for monetising their performance to make them competent.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-5 bg-[#f7f7f7] p-4">
      <h1 className="text-2xl md:text-5xl max-w-6xl font-semibold text-center">
        Be Tactical, Chose Automation, Ensure Profitability
      </h1>
      <p className="text-lg max-w-6xl">
        This fleet management system provides an ordained solution for the
        problems, generally a transport manager faced. Have an attentive tour
        from top to bottom & get a complete idea about a vehicle management
        system
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-7">
        {data.map((data, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col gap-3 bg-white text-center px-9 py-3 max-w-sm"
          >
            <Image
              src={data.img}
              width={200}
              height={200}
              alt=""
              className="rounded-full w-36 h-32"
            />
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <p className="text">{data.details}</p>
          </div>
        ))}
      </div>
      <div className=" max-w-6xl space-y-7 text-start">
        <h1 className="text-2xl md:text-5xl max-w-6xl font-semibold text-center">
          Vehicle Management System
        </h1>
        <p>
          Vehicle management system is an automated software for the
          transportation industry or an organization which owns a large number
          of vehicle & managing fleets. It is an organized code which provides
          management functions that permit corporations to get rid of or
          minimize the risks related to vehicles. It helps a business to boost
          up some outstanding criteria including the daily management of
          vehicles, fuel and services management, cost & inventory management
          etc.
        </p>
        <p>
          Bdtask has designed the most modern vehicle management software to
          manage large vehicles and fleets. This system processes and analyzes
          every single data of all vehicles. It is an online based software
          which is really helpful for Bus, Car, Taxi, Cover Van & Truck
          operators to manage everyday workflow and performance.
        </p>
        <Flex justify="center" align="center" gap="small">
          <Button>View Demo </Button>
          <Button type="primary">Buy Now</Button>
        </Flex>
      </div>
    </div>
  );
}
