"use client";
import ActionBar from "@/components/ui/ActionBar";
import { useDebounced } from "@/redux/hooks";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input, Tag, message } from "antd";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

import CreateManager from "@/components/CreateUpdateFrom/ManagerCreate";
import ManagerUpdate from "@/components/CreateUpdateFrom/ManagerUpdate";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { USER_ROLE } from "@/constants/role";
import {
  useGetAllAdminQuery,
  useInactiveAdminMutation,
} from "@/redux/api/admin/adminApi";
import { confirm_modal } from "@/utils/modalHook";
import Image from "next/image";

const AllManagerList = () => {
  const SUPER_ADMIN = USER_ROLE.SUPER_ADMIN;
  const [deleteAdmin, { isLoading: adminUpdateLoading }] =
    useInactiveAdminMutation();
  const query: Record<string, any> = {};
  const [showModel, setShowModel] = useState(false);

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // query["limit"] = size;
  // query["page"] = page;
  // query["sortBy"] = sortBy;
  // query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const columns = [
    {
      title: "",
      dataIndex: "profileImg",
      render: function (data: any) {
        console.log(data);

        const image =
          data ||
          "https://res.cloudinary.com/dnzlgpcc3/image/upload/v1704419785/oiav6crzfltkswdrrrli.png";
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
    {
      title: "Name",
      dataIndex: "fullName",
    },
    {
      title: "Active",
      dataIndex: "isActive",
      width: 100,
      render: (isActive: boolean) =>
        isActive ? (
          <Tag color="green">Active</Tag>
        ) : (
          <Tag color="red">Not Active</Tag>
        ),
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <div className="flex">
            {/* <Link href={`/${SUPER_ADMIN}/manager/details/${data}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link> */}
            <div
              style={{
                margin: "0px 5px",
              }}
            >
              <ModalComponent
                showModel={showModel}
                setShowModel={setShowModel}
                icon={<EditOutlined />}
              >
                <ManagerUpdate id={data} />
              </ModalComponent>
            </div>
            {/* <Link href={`/${SUPER_ADMIN}/manager/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link> */}
            <Button onClick={() => handleDelete(data)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  const { data, isLoading } = useGetAllAdminQuery({ ...query });
  const AllAdminData = data?.admins?.filter((item) => item.isActive) || [];

  const onPaginationChange = (page: number, pageSize: number) => {
    // console.log("Page:", page, "PageSize:", pageSize);
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
  const handleDelete = (id: string) => {
    confirm_modal(`Are you sure you want to delete`).then(async (res) => {
      if (res.isConfirmed) {
        try {
          message.loading("Please await...");
          const res = await deleteAdmin(`${id}`).unwrap();
          if (res.id) {
            // message.success("Admin Successfully Deleted!");
            // setOpen(false);
            message.success("Admin Successfully Deleted!");
          } else {
            message.error(res?.message);
          }
        } catch (error: any) {
          message.error(error.message);
        }
      }
    });
  };

  return (
    <div className="bg-white border border-blue-200 rounded-lg shadow-md shadow-blue-200 p-5">
      <br />
      <ActionBar title="Manager List">
        <Input
          size="middle"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "200px",
          }}
        />
        <div className="flex gap-2">
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
          <ModalComponent
            showModel={showModel}
            setShowModel={setShowModel}
            buttonText="Create Manager"
            icon={<IoMdAdd />}
          >
            <CreateManager />
          </ModalComponent>
        </div>
      </ActionBar>
      <br />

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={AllAdminData}
        pageSize={size}
        totalPages={AllAdminData.length}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default AllManagerList;
