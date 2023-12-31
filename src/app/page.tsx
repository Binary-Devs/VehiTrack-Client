"use client";
import ContactUs from "@/components/ui/Home/ContactUs";
import FAQSection from "@/components/ui/Home/Faq";
import Footer from "@/components/ui/Home/Footer";
import Header from "@/components/ui/Home/Header";
import HeroSection from "@/components/ui/Home/HeroSection";
import ProjectDemo from "@/components/ui/Home/ProjectDemo";
import TacticalSection from "@/components/ui/Home/TacticalSection";
import TextCarousel from "@/components/ui/Home/TextCarousel";
import VehicleCategory from "@/components/ui/Home/VehicleCategory";

const HomePage = () => {
  // router.push("/login");

  return (
    <section className="">
      <Header />
      <div className=" container mx-auto mt-10">
        <HeroSection />
        <TacticalSection />
        <TextCarousel />
        <FAQSection/>
        <ProjectDemo/>
        <VehicleCategory />

        <hr className="my-5 border-2" />
        <ContactUs />
        <Footer />
      </div>
    </section>
  );
};

export default HomePage;
