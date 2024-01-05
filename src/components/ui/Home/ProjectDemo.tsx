import { motion } from "framer-motion";
import Image from "next/image";
import projectImage from "../../../assets/all-devices-black.png";

export default function ProjectDemo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.4, duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.8, duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="max-w-3xl text-center space-y-6"
        variants={textVariants}
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          Transform Your business with VMS
        </h1>
        <p className="text-lg">
          Harness the power of VMS for streamlined project management.
          Experience the efficiency of technology in Human Resource Management.
        </p>
      </motion.div>
      <motion.div
        className="relative w-full max-w-4xl h-72 md:h-96 my-6 rounded-xl overflow-hidden"
        variants={imageVariants}
      >
        <Image
          src={projectImage}
          layout="fill"
          objectFit="contain"
          alt="Project Demo"
        />
      </motion.div>
    </motion.div>
  );
}
