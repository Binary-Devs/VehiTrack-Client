"use client";
import AddRefueling from "@/components/CreateUpdateFrom/AddRefueling";
import Loader from "@/components/Utlis/Loader";
import ActionBar from "@/components/ui/ActionBar";
import DeleteModal from "@/components/ui/DeleteModal";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import {
  useDeleteFuelMutation,
  useGetAllFuelQuery,
} from "@/redux/api/fuel/fuelApi";
import { useDebounced } from "@/redux/hooks";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input, message } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const RefuelingPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }
  const [deleteFuel] = useDeleteFuelMutation();
  //delete
  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteFuel(id);
      if (!!res) {
        message.success("delete successfully");
        setOpen(false);
      } else {
        message.error("delete failed");
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const { data, isLoading } = useGetAllFuelQuery({ ...query });
  if (isLoading) {
    return <Loader className="h-[50vh] flex items-end justify-center" />;
  }
  const fuels = data?.fuels;
  console.log(fuels);
  const meta = data?.meta;

  const columns = [
    {
      title: "vehicle",
      dataIndex: "vehicle",
      render: (vehicle: any) => <span>{vehicle && vehicle.regNo}</span>,
    },
    {
      title: "driver",
      dataIndex: "driver",
      render: (driver: any) => <span>{driver && driver.fullName}</span>,
    },
    {
      title: "fuel Station",
      dataIndex: "fuelStation",
      render: (fuelStation: any) => (
        <span>{fuelStation && fuelStation.label}</span>
      ),
    },
    {
      title: "fuelType",
      dataIndex: "fuelType",
      render: (fuelType: any) => <span>{fuelType && fuelType.label}</span>,
    },
    {
      title: "odometer",
      dataIndex: "odometer",
    },
    {
      title: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "amount",
      dataIndex: "amount",
    },
    {
      title: "remarks",
      dataIndex: "remarks",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <div className="flex">
            {/* <Link
              href={`/super_admin/manage-fuel/refueling/details/${data?.id}`}
            >
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link> */}
            {/* <Link href={`/super_admin/manage-fuel/refueling/edit/${data?.id}`}>
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
              onClick={() => console.log(data?.id)}
            >
              <ModalComponent icon={<EditOutlined />}>
                <AddRefueling id={data?.id} />
              </ModalComponent>
            </div>
            <div>
              <Button
                type="primary"
                onClick={() => {
                  //  console.log(data?.id);
                  setOpen(true);
                  setId(data?.id);
                }}
                danger
                style={{ marginLeft: "3px" }}
              >
                <DeleteOutlined />
              </Button>
            </div>
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
  return (
    <div className="bg-white border border-blue-200 rounded-lg shadow-md shadow-blue-200 p-5 space-y-3">
      <ActionBar inline title="Refueling List">
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
          <ModalComponent buttonText="Add Refueling" icon={<IoMdAdd />}>
            <AddRefueling />
          </ModalComponent>
        </div>
      </ActionBar>

      <UMTable
        columns={columns}
        loading={false}
        dataSource={fuels}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
      <DeleteModal
        title="Delete Refueling"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteHandler(id)}
      >
        <p className="my-5">Do you want to delete this?</p>
      </DeleteModal>
    </div>
  );
};

export default RefuelingPage;
