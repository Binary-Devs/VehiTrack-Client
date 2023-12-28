"use client";

import ActionBar from "@/components/ui/ActionBar";
import { useDebounced } from "@/redux/hooks";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import Link from "next/link";
import { useState } from "react";

import dayjs from "dayjs";

import AddUpdateModel from "@/components/CreateUpdateFrom/AddUpdateModel";
import Loader from "@/components/Utlis/Loader";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { USER_ROLE } from "@/constants/role";
import { useGetAllModelQuery } from "@/redux/api/model/modelApi";
import Image from "next/image";

const ModelListPage = () => {
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
  query["page"] = page - 1;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const { data, isLoading } = useGetAllModelQuery({ ...query });

  const brands = data?.models;
  const meta = data?.meta;

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
    // {
    //   title: "",
    //   // fixed: "left",
    //   width: 80,
    //   render: function (data: any) {
    //     const fullName = `${data?.image} `;
    //     return (
    //       <Image
    //         src={fullName}
    //         width={100}
    //         height={100}
    //         alt=""
    //         style={{ width: "70px", height: "50px" }}
    //       />
    //     );
    //   },
    // },
    {
      title: "Model name",
      dataIndex: "label",
    },
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
            <Link href={``}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={``}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
              {/* <ModalComponent buttonText="" icon={<EditOutlined />}>
                <AddUpdateBrand />
              </ModalComponent> */}
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
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="rounded-xl bg-white p-5">
      <ActionBar title="Brand List">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            minWidth: "150px",
            maxWidth: "300px",
          }}
        />
        <div>
          <ModalComponent buttonText="Add Model">
            <AddUpdateModel />
          </ModalComponent>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <UMTable
        loading={false}
        columns={columns}
        dataSource={brands}
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

export default ModelListPage;
