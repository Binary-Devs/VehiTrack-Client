"use client";

import AddEquipmentIn from "@/components/CreateUpdateFrom/AddEquipmentIn";
import Loader from "@/components/Utlis/Loader";
import ActionBar from "@/components/ui/ActionBar";
import DeleteModal from "@/components/ui/DeleteModal";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import {
  useDeleteEquipmentInMutation,
  useGetAllEquipmentInQuery,
} from "@/redux/api/equipmentIn/equipmentInApi";
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

const EquipmentInList = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<string>("");

  query["limit"] = size;
  query["page"] = page - 1;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const [deleteEquipmentIn] = useDeleteEquipmentInMutation();
  //delete
  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteEquipmentIn(id);
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

  const { data, isLoading } = useGetAllEquipmentInQuery({ ...query });
  if (isLoading) {
    return <Loader className="h-[50vh] flex items-end justify-center" />;
  }

  const equipments = data?.equipmentIns;
  const meta = data?.meta;

  const columns = [
    // {
    //   title: "SN",
    //   dataIndex: "sn",
    //   key: "sn",
    //   width: "5%",
    //   render: (text: any, record: any, index: number) => {
    //     return index + 1;
    //   },
    // },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (data: string) => dayjs(data).format("DD/MM/YYYY"),
      sorter: true,
    },
    {
      title: "equipment",
      dataIndex: "equipment",
      render: (equipment: any) => <span>{equipment && equipment.label}</span>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Unit price",
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
    {
      title: "Total price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "remarks",
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
            <div
              style={{
                margin: "0px 5px",
              }}
            >
              <ModalComponent icon={<EditOutlined />}>
                <AddEquipmentIn id={data?.id} />
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
      <ActionBar inline title="EquipmentIn List">
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
          <ModalComponent buttonText="Add EquipmentIn" icon={<IoMdAdd />}>
            <AddEquipmentIn />
          </ModalComponent>
        </div>
      </ActionBar>

      <UMTable
        loading={false}
        columns={columns}
        dataSource={equipments}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
      <DeleteModal
        title="Delete EquipmentIn"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteHandler(id)}
      >
        <p className="my-5">Do you want to delete this?</p>
      </DeleteModal>
    </div>
  );
};

export default EquipmentInList;
