"use client";
import AddUpdateParty from "@/components/CreateUpdateFrom/AddUpdateParty";
import ActionBar from "@/components/ui/ActionBar";
import DeleteModal from "@/components/ui/DeleteModal";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import {
  useGetAllPartiesQuery,
  useInactivePartyMutation,
} from "@/redux/api/party/partyApi";
import { useDebounced } from "@/redux/hooks";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const PartyListPage = () => {
  const query: Record<string, any> = {};
  const [showModel, setShowModel] = useState(false);

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<string>("");

  // query["limit"] = size;
  // query["page"] = page;
  // query["sortBy"] = sortBy;
  // query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetAllPartiesQuery({ ...query });

  const parties = data?.parties.filter((item) => item.isActive);
  const meta = data?.meta;

  const columns = [
    {
      title: "Name",
      dataIndex: "fullName",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    // {
    //   title: "Active",
    //   dataIndex: "isActive",
    //   render: (isActive: boolean) =>
    //     isActive ? (
    //       <Tag color="green">Active</Tag>
    //     ) : (
    //       <Tag color="red">Not Active</Tag>
    //     ),
    // },
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
      dataIndex: "id",
      render: function (data: any) {
        return (
          <div className="flex gap-2">
            <ModalComponent
              showModel={showModel}
              setShowModel={setShowModel}
              icon={<EditOutlined />}
            >
              <AddUpdateParty id={data} />
            </ModalComponent>
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
                setId(data);
              }}
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

  const [inactiveParty] = useInactivePartyMutation();

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await inactiveParty(id);
      if (!!res) {
        message.success("delete successfully");
        setOpen(false);
      } else {
        message.error("delete failed");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <div className="bg-white border border-blue-200 rounded-lg shadow-md shadow-blue-200 p-5 space-y-3">
      <ActionBar title="Party List">
        <Input
          type="text"
          size="middle"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          style={{
            width: "100%",
            maxWidth: "200px",
          }}
        />
        <ModalComponent
          showModel={showModel}
          setShowModel={setShowModel}
          buttonText="Add Party"
          icon={<IoMdAdd />}
        >
          <AddUpdateParty />
        </ModalComponent>
      </ActionBar>

      <UMTable
        columns={columns}
        dataSource={parties}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        loading={isLoading}
      />

      <DeleteModal
        title="Delete Party"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteHandler(id)}
      >
        <p className="my-5">Do you want to delete this?</p>
      </DeleteModal>
    </div>
  );
};

export default PartyListPage;
