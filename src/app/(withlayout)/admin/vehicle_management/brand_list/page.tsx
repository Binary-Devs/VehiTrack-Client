"use client";

import AddUpdateBrand from "@/components/CreateUpdateFrom/AddUpdateBrand";
import ActionBar from "@/components/ui/ActionBar";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { USER_ROLE } from "@/constants/role";
import { useGetAllBrandQuery } from "@/redux/api/brand/brandApi";
import { useDebounced } from "@/redux/hooks";
import { EditOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const BrandListPage = () => {
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

  //Get
  const { data, isLoading } = useGetAllBrandQuery({ ...query });

  const brands = data?.brands;
  const meta = data?.meta;

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
      title: "Brand name",
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
          <div className="flex">
            {/* <Link href={``}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link> */}
            <div
              style={{
                margin: "0px 5px",
              }}
              onClick={() => {}}
            >
              <ModalComponent icon={<EditOutlined />}>
                <AddUpdateBrand id={data} />
              </ModalComponent>
            </div>
            {/* <Button
              onClick={() => {
                updateBrand({id:data,data:{}});
              }}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button> */}
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
      <ActionBar inline title="Brand List">
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
          <ModalComponent buttonText="Add Brand" icon={<IoMdAdd />}>
            <AddUpdateBrand />
          </ModalComponent>
        </div>
      </ActionBar>

      <UMTable
        loading={isLoading}
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

export default BrandListPage;
