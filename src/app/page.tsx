'use client'
import { redirect } from "next/navigation";

const HomePage = () => {

  // router.push("/login");
 
  return redirect('/dashboard');
    // <section className="max-w-[1990px] mx-auto">
    //   <div className="mx-4">
    //     <Header />

    //     <HeroSection />
    //     <VehicleCategory />
    //     <OurVehicle />
    //     <hr className="my-5 border-2" />
    //     <ContactUs />
    //     <Footer />
    //   </div>
    // </section>

};

export default HomePage;
