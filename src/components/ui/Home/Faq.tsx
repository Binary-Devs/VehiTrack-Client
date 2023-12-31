"use client";
import { Button } from "antd";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const FAQSection = () => {
  const [answersVisibility, setAnswersVisibility] = useState([
    false,
    false,
    false,
    false,
  ]);

  const toggleAnswer = (index: any) => {
    setAnswersVisibility((prevVisibility) => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };
  const data = [
    {
      title: "Que: What is the Vehicle Management System (VMS)?",
      details:
        "Ans: Vehicle Management System (VMS) is an automated fleet management software that can ensure to manage all of your fleets smoothly and efficiently.",
    },
    {
      title: "Que: Does it provide a vendor adding system?",
      details:
        "Ans: Vehicle Management System (VMS) is an automated fleet management software that can ensure to manage all of your fleets smoothly and efficiently.",
    },
    {
      title: "Que : Can I get any refund or return policy?",
      details:
        "Ans: Vehicle Management System (VMS) is an automated fleet management software that can ensure to manage all of your fleets smoothly and efficiently.",
    },
    {
      title: "Que : Is there any customization facility?",
      details:
        "Ans: Vehicle Management System (VMS) is an automated fleet management software that can ensure to manage all of your fleets smoothly and efficiently.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div className="flex flex-col justify-center items-center ">
        <div  className="space-y-5">
          <h1 className="text-4xl">Frequently Asked Questions</h1>
          <p className="text-xl">
            We use the latest technologies and tools in order to create a better
            code that not only works great, but it is easy easy to work with
            too.
          </p>
          <div className="flex justify-start items-center gap-3">
            <FaFacebook className=" text-4xl"/>
            <FaLinkedin className=" text-4xl"/>
            <FaTwitter className=" text-4xl"/>
          </div>
          <Button type="default"> Ask Anything</Button>
        </div>
      </div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            {data.map((data, questionIndex) => (
              <div
                key={questionIndex}
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              >
                <button
                  type="button"
                  onClick={() => toggleAnswer(questionIndex - 1)}
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold text-black">
                    {data.title}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-6 h-6 text-gray-400 ${
                      answersVisibility[questionIndex - 1]
                        ? "rotate-0"
                        : "rotate-180"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  style={{
                    display: answersVisibility[questionIndex - 1]
                      ? "block"
                      : "none",
                  }}
                  className="px-4 pb-5 sm:px-6 sm:pb-6"
                >
                  <p>{data.details}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 textbase mt-9">
            Still have questions?
            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
              Contact our support
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
