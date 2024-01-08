import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import one from "../../../assets/1h.png";
import two from "../../../assets/2h.png";
import trhee from "../../../assets/3h.png";
import four from "../../../assets/4h.png";
import five from "../../../assets/5h.png";
import ser from "../../../assets/6h.png";

export default function TacticalSection() {
  const data = [
    {
      title: "Remote Vehicle Management",
      img: one,
      details:
        "Effortlessly manage your vehicles from anywhere using our VehiTrack system. Keep track of vehicle details, routes, and performance.",
    },
    {
      title: "Streamlined Inventory Control",
      img: ser,
      details:
        "Take control of inventory and expenses with our advanced system. Manage stock levels, track parts usage, and streamline expense management.",
    },
    {
      title: "Boost Profitability with Automation",
      img: five,
      details:
        "Utilize automation across your business operations for asset tracking, daily activity management, and automatic financial calculations.",
    },
    {
      title: "Informed Decision-Making",
      img: four,
      details:
        "Make authentic decisions with our integrated system. Access all your information, view instant reports, and make data-driven decisions.",
    },
    {
      title: "Become a Market Leader",
      img: trhee,
      details:
        "Achieve supersonic speed in managing your organization. Be the market leader with automation, streamlined workflows, and sustainable business growth.",
    },
    {
      title: "Empower Your Workforce",
      img: two,
      details:
        "Provide your workforce with an easy-to-use automation system. Specify roles, manage activities, and monetize performance for a competent team.",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2, delayChildren: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <>
      <motion.div
        className="container text-center mx-auto py-24 p-4"
        variants={containerVariants}
        ref={ref}
        initial="hidden"
        animate={controls}
      >
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          Welcome to VehiTrack
        </h1>
        <p className="text-xl mx-auto mb-8">
          VehiTrack is your all-in-one solution for efficient vehicle management
        </p>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mt-10">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center h-full"
              variants={itemVariants}
            >
              <div
                className="h-40 mb-4 overflow-hidden"
                style={{ borderRadius: "50%" }}
              >
                <Image
                  src={item.img}
                  width={200}
                  height={200}
                  alt={item.title}
                  objectFit="cover"
                  className="mx-auto my-auto"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
