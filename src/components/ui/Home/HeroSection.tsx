import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex justify-center items-center h-[92.7vh] overflow-hidden">
      {/* Image Section */}
      <div className="flex-1">
        <Image
          src="/assets/images/banner.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 relative z-10 bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-10 opacity-80 bo">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl max-w-3xl font-semibold">
            VMS: Simplifying Fleet Management
          </h1>
          <div className="max-w-2xl mt-6">
            <p className="text-xl">
              Manage your vehicle effortlessly with our Vehicle Management
              System. From maintenance to tracking, we&apos;ve got you covered.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
