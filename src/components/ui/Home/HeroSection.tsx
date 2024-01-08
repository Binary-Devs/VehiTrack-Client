"use client";
import { motion } from "framer-motion";

import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="relative flex justify-center items-center h-[92.7vh] overflow-hidden">
        <div className="flex-1">
          <Image
            src="/assets/images/banner.jpg"
            layout="fill"
            objectFit="cover"
            alt="Background Image"
          />
        </div>

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
                System. From maintenance to tracking, we&apos;ve got you
                covered.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <section className="px-3 py-5 bg-neutral-100 lg:py-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-bold md:text-7xl text-orange-600">
              25% OFF
            </p>
            <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
            <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
            <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
              Shop Now
            </button>
          </div>
          <div className="order-1 lg:order-2">
            {/* <img
              className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
              src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              alt=""
            /> 

            <Image
              src="/assets/images/banner.jpg"
              className=""
              width={800}
              height={800}
              alt="Background Image"
            />
          </div>
        </div>
      </section> */}
    </>
  );
}
