"use client";
import ActionBar from "@/components/ui/ActionBar";

import { useDebounced } from "@/redux/hooks";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
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
import {
  useGetAllVehicleQuery,
  useUpdateVehicleMutation,
} from "@/redux/api/vehicle/vehicleApi";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";

const VehicleListPage = () => {
  const SUPER_ADMIN = USER_ROLE.ADMIN;
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
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

  // Inactive vehicle
  const [updateVehicle, { isLoading: updateLoad }] = useUpdateVehicleMutation();

  const columns = [
    {
      title: "",
      // fixed: "left",
      // width: 80,
      render: function (data: any) {
        const image = `${
          data?.imageUrl ||
          "https://res.cloudinary.com/dnzlgpcc3/image/upload/v1704419785/oiav6crzfltkswdrrrli.png"
        } `;
        return (
          <Image
            src={image}
            width={100}
            height={100}
            alt=""
            style={{ width: "70px", height: "50px" }}
          />
          // <Avatar shape="square" size={64} icon={<CarOutlined />} />
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
        return `${data ? data.fullName : "N/A"}`;
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
          <div className="flex">
            {/* <Link href={`/manage_vehicle`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link> */}
            <div
              style={{
                margin: "0px 5px",
              }}
            >
              <ModalComponent icon={<EditOutlined />}>
                <AddUpdateVehicle
                  id={data}
                  brands={brands}
                  models={models}
                  drivers={drivers}
                  helpers={helpers}
                />
              </ModalComponent>
            </div>
            <Button
              //   onClick={() => deleteGeneralUserHandler(data)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </div>
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
    <div className="bg-white border border-blue-200 rounded-lg shadow-md shadow-blue-200 p-5 space-y-3">
      <ActionBar inline title="Vehicle List">
        <div className="flex items-center justify-between flex-grow gap-2">
          <Input
            // size="large"
            placeholder="Search"
            value={searchTerm}
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
          <ModalComponent buttonText="Add Vehicle" icon={<IoMdAdd />}>
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
    </div>
  );
};

export default VehicleListPage;
