"use client";
import AddFuelTypes from "@/components/CreateUpdateFrom/AddUpdateFuelTypes";
import Loader from "@/components/Utlis/Loader";
import ActionBar from "@/components/ui/ActionBar";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { useGetAllFuelTypeQuery } from "@/redux/api/fuelType/fuelTypeApi";
import { useDebounced } from "@/redux/hooks";
import { EditOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Grid, Input } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const FuelTypesPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetAllFuelTypeQuery({
    ...query,
  });
  if (isLoading) {
    return <Loader className="h-[50vh] flex items-end justify-center" />;
  }
  const fuelTypes = data?.fuelTypes;

  const meta = data?.meta;

  const columns = [
    {
      title: "label",
      dataIndex: "label",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            {/* <Link
              href={`/super_admin/manage-fuel/fuel-type/details/${data?.id}`}
            >
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link> */}
            {/* <Link href={`/super_admin/manage-fuel/fuel-type/edit/${data?.id}`}>
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
            <div
              style={{
                margin: "0px 5px",
              }}
              onClick={() => {}}
            >
              <ModalComponent icon={<EditOutlined />}>
                <AddFuelTypes id={data?.id} />
              </ModalComponent>
            </div>
            {/* <Button onClick={() => console.log(data?.id)} type="primary" danger>
              <DeleteOutlined />
            </Button> */}
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
  return (
    <div className="bg-white border border-blue-200 rounded-lg shadow-md shadow-blue-200 p-5 space-y-3">
      <ActionBar inline={screens.xs ? false : true} title="Fuel Type List">
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
          <ModalComponent buttonText="Add Fuel Type" icon={<IoMdAdd />}>
            <AddFuelTypes />
          </ModalComponent>
        </div>
      </ActionBar>

      <UMTable
        columns={columns}
        loading={false}
        dataSource={fuelTypes}
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

export default FuelTypesPage;
