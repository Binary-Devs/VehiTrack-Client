"use client";
import AddPumpStation from "@/components/CreateUpdateFrom/AddPumpStation";
import Loader from "@/components/Utlis/Loader";
import ActionBar from "@/components/ui/ActionBar";
import ModalComponent from "@/components/ui/Modal";
import UMTable from "@/components/ui/Table";
import { useGetAllFuelStationQuery } from "@/redux/api/fuelStation/fuelStationApi";
import { useDebounced } from "@/redux/hooks";
import { EditOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Grid, Input } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const PumpStationPage = () => {
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

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetAllFuelStationQuery({
    ...query,
  });
  if (isLoading) {
    return <Loader className="h-[50vh] flex items-end justify-center" />;
  }

  const fuelStations = data?.fuelStations;

  const meta = data?.meta;

  const columns = [
    {
      title: "label",
      dataIndex: "label",
    },
    {
      title: "Address",
      dataIndex: "address",
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
          <>
            {/* <Link
              href={`/super_admin/manage-fuel/pump-station/details/${data?.id}`}
            >
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
                <AddPumpStation id={data?.id} />
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
      <ActionBar inline={screens.xs ? false : true} title="Pump Station List">
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
          <ModalComponent buttonText="Add Pump Station" icon={<IoMdAdd />}>
            <AddPumpStation />
          </ModalComponent>
        </div>
      </ActionBar>
      <UMTable
        columns={columns}
        loading={false}
        dataSource={fuelStations}
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

export default PumpStationPage;
