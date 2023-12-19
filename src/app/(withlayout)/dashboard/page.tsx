import {
  BsBagPlus,
  BsBookmarkCheck,
  BsJournalBookmarkFill,
  BsPencilSquare,
} from "react-icons/bs";
import { BiBarChartAlt2, BiListPlus } from "react-icons/bi";
import { TbCurrencyTaka, TbNotesOff } from "react-icons/tb";

import { FaUsers } from "react-icons/fa";

import {
  MdGroupOff,
  MdOutlineDoNotDisturbOff,
  MdWorkOutline,
} from "react-icons/md";

import { useSelector } from "react-redux";

import { useRouter } from "next/router";

import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { VscSymbolInterface } from "react-icons/vsc";
import { USER_ROLE } from "@/constants/role";

const HomePage = () => {
  const user = {
    role: "admin",
  };
  const data = [
    {
      businessDetails: {
        businessName: "Damo1",
        businessLogo:
          "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Damo1",
        businessLogo:
          "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dddd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Damo1",
        businessLogo:
          "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dddsfdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Damo1",
        businessLogo:
          "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsfdsdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Damo1",
        businessLogo:
          "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsdfsdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Damo1",
        businessLogo:
          "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsdfsdd",
      create_date: new Date().toLocaleDateString(),
    },
    {
      businessDetails: {
        businessName: "Damo1",
        businessLogo:
          "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      address: {
        city: "dhaka",
        country: "bangladesh",
        state: "dkahak",
        street: "noaklue",
      },
      _id: "1dsdfd",
      create_date: new Date().toLocaleDateString(),
    },
  ];

  return (
    <div className="w-full mx-auto p-4 grid grid-cols-12 gap-2 min-h-screen">
      <section className="col-span-12">
        {/* <Chart></Chart> */}
        <section className="grid grid-cols-1 lg:grid-cols-3  gap-4 xl:gap-6 text-[30px]">
          <div className="border text-white bg-[#4e36e2] w-full p-4 shadow rounded-xl flex justify-between items-center h-28 ">
            <p className="border-2 border-white rounded-md p-1 w-9 h-9">
              <BiListPlus className="text-2xl text-white" />
            </p>
            <div className="space-y-2">
              <p className="text-end font-normal text-base lggg:text-lg">
                Total Vehicle
              </p>

              <div className="font-bold font-sans text-end text-2xl">
                <span>{"30"}</span>
              </div>
            </div>
          </div>
          {user.role === USER_ROLE.ADMIN && (
            <div className="border text-white bg-[#48a9f8] w-full p-4 shadow rounded-xl flex justify-between items-center h-28">
              <p className="border-2 border-white rounded-md p-1 w-9 h-9">
                <AiOutlineUsergroupAdd className="text-2xl text-white" />
              </p>
              <div className="space-y-2">
                <p className="text-end font-normal text-base lggg:text-lg">
                  Total driver
                </p>

                <div className="font-bold font-sans text-end text-2xl">
                  <span>{"25"}</span>
                </div>
              </div>
            </div>
          )}
           <div className="border text-white bg-[#508baa] w-full p-4 shadow rounded-xl flex justify-between items-center h-28">
            <p className="border-2 border-white rounded-md p-1 w-9 h-9">
              <MdOutlineDoNotDisturbOff className="text-2xl text-white" />
            </p>
            <div className="space-y-2">
              <p className="text-end font-normal text-base lggg:text-lg">
                Total helper
              </p>

              <div className="font-bold font-sans text-end text-xl lgg:text-2xl">
                <span>{24}</span>
              </div>
            </div>
          </div>
          <div className="border text-white bg-[#1ad588] w-full p-4 shadow rounded-xl flex justify-between items-center h-28">
            <p className="border-2 border-white rounded-md p-1 w-9 h-9">
              <MdWorkOutline className="text-2xl text-white" />
            </p>
            <div className="space-y-2">
              <p className="text-end font-normal text-base lggg:text-lg">
                {user.role === USER_ROLE.ADMIN
                  ? "Total Active Trip"
                  : "Accepted Trip"}
              </p>

              <div className="font-bold font-sans text-end text-2xl">
                <h1>{user.role === USER_ROLE.ADMIN ? "960" : "250"}</h1>
              </div>
            </div>
          </div>
          <div className="border text-white bg-[#60803b] w-full p-4 shadow rounded-xl flex justify-between items-center h-28">
            <p className="border-2 border-white rounded-md p-1 w-9 h-9">
              <VscSymbolInterface className="text-2xl text-white" />
            </p>
            <div className="space-y-2">
              <p className="text-end font-normal text-base lggg:text-lg">
                Total Pending Trip
              </p>

              <div className="font-bold font-sans text-end text-xl lgg:text-2xl">
                <span>{"30"}</span>
              </div>
            </div>
          </div>
         
          <div className="border text-white bg-[#1d7ca5] w-full p-4 shadow rounded-xl flex justify-between items-center h-28">
            <p className="border-2 border-white rounded-md p-1 w-9 h-9">
              <TbNotesOff className="text-2xl text-white" />
            </p>
            <div className="space-y-2">
              <p className="text-end font-normal text-base lggg:text-lg">
               Total Net Balance
              </p>

              <div className="font-bold font-sans text-end text-xl lgg:text-2xl">
                <span>{925411} Tk</span>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          <div className="overflow-x-hidden overflow-y-auto rounded-lg bg-white md:min-h-[40vh] lgg:min-h-[60vh] px-4 py-5 shadow">
            <div className="inline-block min-w-full py-2 align-middle px-4">
              <h3 className="text-base font-medium underline underline-offset-2">
                Recent Trip
              </h3>
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="">
                    <th
                      scope="col"
                      className="py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Vehicle
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.length ? (
                    data.map(
                      ({ businessDetails, address, _id, create_date }, i) => (
                        <tr key={_id} className="hover:bg-slate-50 w-full">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            <div className="flex items-center gap-x-4 group">
                              <img
                                src={businessDetails?.businessLogo}
                                alt="Image"
                                className="h-9 w-9 rounded-full bg-gray-800"
                              />
                              <div className="truncate font-medium leading-6 text-gray-700 group-hover:text-gray-900 capitalize duration-200 ">
                                <p>{businessDetails?.businessName}</p>
                                <p>{new Date(create_date).toLocaleString()}</p>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize truncate hover:text-clip">
                            <span>{address.country},</span> <br />
                            <span>
                              {address.city}, {address.state}
                            </span>
                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <tr>
                      <td className="py-20 w-full text-center text-red-400">
                        Empty !
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="overflow-x-hidden overflow-y-auto rounded-lg bg-white md:min-h-[40vh] lgg:min-h-[60vh] px-4 py-5 shadow">
            <div className="inline-block min-w-full py-2 align-middle px-4">
              <h3 className="text-base font-medium underline underline-offset-2">
                Pending Trip
              </h3>
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="">
                    <th
                      scope="col"
                      className="py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Vehicle
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data?.length ? (
                    data?.map(
                      ({ businessDetails, address, _id, create_date }, i) => (
                        <tr key={_id} className="hover:bg-slate-50 w-full">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            <div
                              className="flex items-center gap-x-4 group"
                              
                            >
                              <img
                                src={businessDetails?.businessLogo}
                                alt="Image"
                                className="h-9 w-9 rounded-full bg-gray-800"
                              />
                              <div className="truncate font-medium leading-6 text-gray-700 group-hover:text-gray-900 capitalize duration-200">
                                <p> {businessDetails?.businessName}</p>
                                <p>{new Date(create_date).toLocaleString()}</p>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500  capitalize truncate hover:text-clip">
                            <span>{address.country},</span> <br />
                            <span>
                              {address.city}, {address.state}
                            </span>
                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <tr>
                      <td className="py-20 w-full text-center text-red-400">
                        Empty !
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="overflow-x-hidden overflow-y-auto rounded-lg bg-white md:min-h-[40vh] lgg:min-h-[60vh] px-4 py-5 shadow">
            <div className="inline-block min-w-full py-2 align-middle px-4">
              <h3 className="text-base font-medium underline underline-offset-2">
                Upcoming Maintenance
              </h3>
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="">
                    <th
                      scope="col"
                      className="py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Vehicle
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data?.length ? (
                    data?.map(
                      ({ businessDetails, address, _id, create_date }, i) => (
                        <tr key={_id} className="hover:bg-slate-50 w-full">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            <div
                              className="flex items-center gap-x-4 group"
                              
                            >
                              <img
                                src={businessDetails?.businessLogo}
                                alt="Image"
                                className="h-9 w-9 rounded-full bg-gray-800"
                              />
                              <div className="truncate font-medium leading-6 text-gray-700 group-hover:text-gray-900 capitalize duration-200">
                                <p>{businessDetails?.businessName}</p>
                                <p>{new Date(create_date).toLocaleString()}</p>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500  capitalize truncate hover:text-clip">
                            <span>{address.country},</span> <br />
                            <span>
                              {address.city}, {address.state}
                            </span>
                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <tr>
                      <td className="py-20 w-full text-center text-red-400">
                        Empty !
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
