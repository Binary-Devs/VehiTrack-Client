import { Divider } from "antd";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center lg:text-left">
      <div className="container py-6 text-gray-800">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-medium uppercase">Our Story</h5>

            <p className="mb-4">
              Explore our journey and the values that drive our team to create
              meaningful experiences and products.
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-medium uppercase flex justify-end">
              Connect With Us
            </h5>

            <div className="flex space-x-6 justify-end">
              <a href="#" className="text-[#1890ff] hover:text-blue-700">
                <FaFacebook size={32} />
              </a>
              <a href="#" className="text-[#1890ff] hover:text-blue-700">
                <FaTwitter size={32} />
              </a>
              <a href="#" className="text-[#1890ff] hover:text-blue-700">
                <FaInstagram size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Divider>© 2024 vehitrack - All rights reserved</Divider>
    </footer>
  );
};

export default Footer;
