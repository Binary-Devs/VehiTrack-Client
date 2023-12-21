"use client";

import VehicleInfo from "@/components/ui/VehicleInfo";
import { Carousel, Typography } from "antd";
import Image from "next/image";
import { useState } from "react";

const { Title } = Typography;

interface ImageType {
  src: string;
  alt: string;
}

const images: ImageType[] = [
  {
    src: "/assets/images/image1.png",
    alt: "Image 1 description",
  },
  {
    src: "/assets/images/image2.png",
    alt: "Image 2 description",
  },
  {
    src: "/assets/images/image3.png",
    alt: "Image 3 description",
  },
  {
    src: "/assets/images/image4.png",
    alt: "Image 4 description",
  },
];

const data = [
  {
    title: "Brand",
    description: "description data",
  },
  {
    title: "Registration Year",
    description: "description data",
  },
  {
    title: "Fuel Type",
    description: "description data",
  },
  {
    title: "Kilometers run",
    description: "description data",
  },
  {
    title: "Model",
    description: "description data",
  },
  {
    title: "Year of Manufacture",
    description: "description data",
  },
  {
    title: "Engine capacity",
    description: "description data",
  },
];

const ManageVehiclePage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="flex">
      <div className="flex-1 px-4">
        <Title level={2} className="text-center">
          Vehicle Information
        </Title>

        <div className="mt-8">
          {/* <MyList data={data} /> */}

          <VehicleInfo />
        </div>
      </div>
      <div className="w-2/4 mt-12 bg-">
        <Carousel
          dots={true}
          autoplay
          autoplaySpeed={6000}
          beforeChange={(current, next) => setSelectedImageIndex(next)}
          ref={(ref) => ref?.goTo(selectedImageIndex)}
        >
          {images.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="h-96 object-contain"
            />
          ))}
        </Carousel>
        <div className="flex justify-center mt-8">
          {images.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={100}
              height={100}
              // className="h-96 object-contain mx-2"
              className={`object-contain mx-2 cursor-pointer ${
                selectedImageIndex === index ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageVehiclePage;
