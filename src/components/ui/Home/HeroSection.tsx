import { Button, Flex } from "antd";
import Image from "next/image";
import vehicle from "../../../assets/car-monochromatic.png";

export default function HeroSection() {
  return (
    <section className="text-center flex flex-col justify-center items-center my-10 space-y-5">
      <h1 className="text-2xl md:text-5xl max-w-7xl font-semibold ">
      Vehicle Management System (VMS): A One Stop Fleet Management Solution
      </h1>
      <div className="max-w-7xl mx-auto">

      <p className="text-lg ">
        Netus proin iaculis ad curabitur si magnis et sollicitudin erat felis
        parturient adipiscing nam aenean euismod elementum dui id diam nullam
        commodo habitasse quam auctor urna curae aliquet ut pede
      </p>
      </div>
      <Flex justify="center" align="center" gap="small">
        <Button>View Demo </Button>
        <Button type="primary">Buy Now</Button>
      </Flex>
      <div className="relative">
        <Image
          src={vehicle}
          width={500}
          height={500}
          alt=""
          style={{ overflow: "hidden", objectFit: "cover" }}
        />
        <div className="flex items-center justify-center   absolute top-[10%] inset-0 animate-pulse">
          <button className="relative flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full focus:outline-none">
            <span className="absolute w-8 h-8 bg-white rounded-full"></span>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M5 3l14 9-14 9V3z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
