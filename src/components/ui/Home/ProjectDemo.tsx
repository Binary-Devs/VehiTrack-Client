import Image from "next/image";
import projectImage from "../../../assets/all-devices-black.png";

export default function ProjectDemo() {
  return (
    <div className="flex flex-col justify-center items-center py-24">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Transform Your business with VMS
        </h1>
        <p className="text-lg">
          Harness the power of VMS for streamlined project management.
          Experience the efficiency of technology in Human Resource Management.
        </p>
      </div>
      <div className="relative w-full max-w-4xl h-72 md:h-96 my-6 rounded-xl overflow-hidden mt-10">
        <Image
          src={projectImage}
          layout="fill"
          objectFit="contain"
          alt="Project Demo"
        />
      </div>
    </div>
  );
}
