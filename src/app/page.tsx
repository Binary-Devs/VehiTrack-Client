"use client";
// import ContactUs from "@/components/ui/Home/ContactUs";
// import Footer from "@/components/ui/Home/Footer";
// import HomeHeader from "@/components/ui/Home/Header";
// import HeroSection from "@/components/ui/Home/HeroSection";
// import ProjectDemo from "@/components/ui/Home/ProjectDemo";
// import TacticalSection from "@/components/ui/Home/TacticalSection";
// import TextCarousel from "@/components/ui/Home/TextCarousel";
import React from "react";
const HomeHeader = React.lazy(
  () => import("@/components/ui/Home/Header")
);
const ProjectDemo = React.lazy(
  () => import("@/components/ui/Home/ProjectDemo")
);
const HeroSection = React.lazy(
  () => import("@/components/ui/Home/HeroSection")
);
const TacticalSection = React.lazy(
  () => import("@/components/ui/Home/TacticalSection")
);
const TextCarousel = React.lazy(
  () => import("@/components/ui/Home/TextCarousel")
);
const ContactUs = React.lazy(
  () => import("@/components/ui/Home/ContactUs")
);
const Footer = React.lazy(
  () => import("@/components/ui/Home/Footer")
);
const HomePage = () => {
  // router.push("/login");

  return (
    <section className="bg-[#f7f7f7]">
      <HomeHeader />
      <div className="mx-auto">
        <HeroSection />
        <TacticalSection />
        <TextCarousel />
        <ProjectDemo />
        <ContactUs />
        <Footer />
      </div>
    </section>
  );
};

export default HomePage;
