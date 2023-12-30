import ContactUs from "@/components/ui/Home/ContactUs";
import Footer from "@/components/ui/Home/Footer";
import Header from "@/components/ui/Home/Header";
import HeroSection from "@/components/ui/Home/HeroSection";
import OurVehicle from "@/components/ui/Home/OurVehicle";
import VehicleCategory from "@/components/ui/Home/VehicleCategory";

const HomePage = () => {
  return (
    <section className="max-w-[1990px] mx-auto">
      <div className="mx-4">
        <Header />

        <HeroSection />
        <VehicleCategory/>
        <OurVehicle />
        <hr className="my-5 border-2"/>
        <ContactUs/>
        <Footer/>
      </div>
    </section>
  );
};

export default HomePage;
