"use client";
import ContactUs from "@/components/ui/Home/ContactUs";
import Footer from "@/components/ui/Home/Footer";
import Header from "@/components/ui/Home/Header";
import HeroSection from "@/components/ui/Home/HeroSection";
import ProjectDemo from "@/components/ui/Home/ProjectDemo";
import TacticalSection from "@/components/ui/Home/TacticalSection";
import TextCarousel from "@/components/ui/Home/TextCarousel";

const HomePage = () => {
  // router.push("/login");

  return (
    <section className="bg-[#f7f7f7]">
      <Header />
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
