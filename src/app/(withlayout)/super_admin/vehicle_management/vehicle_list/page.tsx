"use client";
import ActionBar from "@/components/ui/ActionBar";

import { useDebounced } from "@/redux/hooks";
import {
  CarOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Input } from "antd";
import Link from "next/link";
import { useState } from "react";

import dayjs from "dayjs";

import AddUpdateVehicle from "@/components/CreateUpdateFrom/AddUpdateVehicle";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { USER_ROLE } from "@/constants/role";
import { useGetAllBrandQuery } from "@/redux/api/brand/brandApi";
import { useGetAllDriverQuery } from "@/redux/api/driver/driverApi";
import { useGetAllHelperQuery } from "@/redux/api/helper/helperApi";
import { useGetAllModelQuery } from "@/redux/api/model/modelApi";
import { useGetAllVehicleQuery } from "@/redux/api/vehicle/vehicleApi";

const VehicleListPage = () => {
  const SUPER_ADMIN = USER_ROLE.ADMIN;
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [adminId, setAdminId] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const { data, isLoading } = useGetAllVehicleQuery({
    ...query,
    isActive: true,
  });

  const vehicles = data?.vehicles;
  const meta = data?.meta;

  console.log(vehicles);

  // BrandData for creating vehicle
  const { data: brandData, isLoading: brandLoad } = useGetAllBrandQuery({});
  const brands = brandData?.brands;

  // ModelData for creating vehicle
  const { data: modelData, isLoading: modelLoad } = useGetAllModelQuery({
    limit: "100",
  });
  const models = modelData?.models;

  // DriverData for creating vehicle
  const { data: driverData, isLoading: driverLoad } = useGetAllDriverQuery({
    limit: "100",
  });
  const drivers = driverData?.drivers;

  // HelperData for creating vehicle
  const { data: helperData, isLoading: helperLoad } = useGetAllHelperQuery({
    limit: "100",
  });
  const helpers = helperData?.helpers;

  //@ts-ignore
  const generalUserData = [
    {
      _id: 1,
      name: "C.N.G",
      regNo: "DP-01441",
      bandName: "TATA",
      vehicleValue: 400000,
      isActive: true,
      createdAt: "2023-01-01",
      phoneNumber: "014741154151",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      _id: 2,
      name: "C.N.G",
      regNo: "DP-01441",
      bandName: "TATA",
      vehicleValue: 400000,
      isActive: true,
      createdAt: "2023-01-01",
      phoneNumber: "014741154151",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      _id: 3,
      name: "C.N.G",
      regNo: "DP-01441",
      bandName: "TATA",
      vehicleValue: 400000,
      isActive: true,
      createdAt: "2023-01-01",
      phoneNumber: "014741154151",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  //@ts-ignore
  // const meta = {
  //   page: 1,
  //   limit: 10,
  //   total: 3,
  // };

  const columns = [
    {
      title: "",
      // fixed: "left",
      // width: 80,
      render: function (data: any) {
        const fullName = `${data?.image} `;
        return (
          // <Image
          //   src={fullName}
          //   width={100}
          //   height={100}
          //   alt=""
          //   style={{ width: "70px", height: "50px" }}
          // />
          <Avatar shape="square" size={64} icon={<CarOutlined />} />
        );
      },
    },
    // {
    //   title: "Name",
    //   render: function (data: any) {
    //     const fullName = `${data?.name}`;
    //     return <>{fullName}</>;
    //   },
    // },
    {
      title: "Band Name",
      dataIndex: "brand",
      render: (data: any) => {
        return `${data.label}`;
      },
    },
    {
      title: "Model Name",
      dataIndex: "model",
      render: (data: any) => {
        return `${data.label}`;
      },
    },
    {
      title: "Reg No",
      dataIndex: "regNo",
    },
    {
      title: "Value",
      dataIndex: "vehicleValue",
    },
    {
      title: "Driver Name",
      dataIndex: "driver",
      render: (data: any) => {
        return `${data.fullName}`;
      },
    },
    {
      title: "Helper Name",
      dataIndex: "helper",
      render: (data: any) => {
        return `${data ? data.fullName : ""}`;
      },
    },
    // {
    //   title: "Status",
    //   render: (isActive: boolean) =>
    //     isActive ? (
    //       <Tag color="green">Active</Tag>
    //     ) : (
    //       <Tag color="red">Not Active</Tag>
    //     ),
    // },

    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/manage_vehicle`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/${SUPER_ADMIN}/general_user/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              //   onClick={() => deleteGeneralUserHandler(data)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  //   const deleteGeneralUserHandler = async (id: string) => {
  //     console.log(id);
  //     confirm_modal(`Are you sure you want to delete`).then(async (res) => {
  //       if (res.isConfirmed) {
  //         try {
  //           const res = await deleteGeneralUser(id).unwrap();
  //           if (res.success == false) {
  //             // message.success("Admin Successfully Deleted!");
  //             // setOpen(false);
  //             Error_model_hook(res?.message);
  //           } else {
  //             Success_model("Customer Successfully Deleted");
  //           }
  //         } catch (error: any) {
  //           message.error(error.message);
  //         }
  //       }
  //     });
  //   };
  // if (isLoading) {
  //   return <Loader className="h-[50vh] flex items-end justify-center" />;
  // }
  return (
    <div className="bg-white border border-blue-200 rounded-xl shadow-md shadow-blue-200 p-5 space-y-3">
      <ActionBar inline title="Vehicle List">
        <div className="flex items-center gap-2">
          <Input
            // size="large"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            // style={{
            //   minWidth: "150px",
            //   maxWidth: "300px",
            // }}
          />
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              // style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
          <ModalComponent buttonText="Add Vehicle">
            <AddUpdateVehicle
              brands={brands}
              models={models}
              drivers={drivers}
              helpers={helpers}
            />
          </ModalComponent>
        </div>
      </ActionBar>

      <UMTable
        loading={
          isLoading || brandLoad || modelLoad || driverLoad || helperLoad
        }
        columns={columns}
        dataSource={vehicles}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />

      {/* <UMModal
        title="Remove admin"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteGeneralUserHandler(adminId)}
      >
        <p className="my-5">Do you want to remove this admin?</p>
      </UMModal> */}
    </div>
  );
};

export default VehicleListPage;
