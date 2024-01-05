"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMTable from "@/components/ui/Table";
import { useGetAllTripQuery } from "@/redux/api/trip/tripApi";
import { useDebounced } from "@/redux/hooks";
import { ReloadOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const UpcomingTrip = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetAllTripQuery({
    ...query,
    status: "Pending",
  });

  const trips = data?.trips;
  const meta = data?.meta;
  //   const { id: userId } = getUserInfo() as any;
  //   const { data: driver, isLoading: getLoad } = useGetAllDriverQuery({
  //     userId: userId,
  //   });
  //   console.log(driver);
  // console.log(userId); //c111a14b-591f-4331-b649-cdd5bea082d6
  const helperId = "d4996f5d-26ab-48f7-a864-fdc537044bf7";
  const upcomingTrips = trips?.filter((trip) => trip.driverId === helperId);
  const columns = [
    {
      title: "Trip No",
      dataIndex: "tripNo",
      eclipse: true,
    },
    {
      title: "driver",
      dataIndex: "driver",
      render: (driver: any) => <span>{driver ? driver.fullName : "N/A"}</span>,
    },
    // {
    //   title: "helper",
    //   dataIndex: "helper",
    //   render: (helper: any) => <span>{helper && helper.fullName}</span>,
    // },
    {
      title: "Start Date",
      dataIndex: "startDate",
      render: (data: string) => dayjs(data).format("DD/MM/YYYY"),
      sorter: true,
    },
    // {
    //   title: "End Date",
    //   dataIndex: "endDate",
    // },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "From",
      dataIndex: "from",
    },
    {
      title: "To",
      dataIndex: "to",
    },
    {
      title: "Distance",
      dataIndex: "distance",
    },
    // {
    //   title: "Action",
    //   render: function (data: any) {
    //     return (
    //       <div className="flex items-center gap-1">
    //         <Link
    //           href={`/super_admin/manage-fuel/refueling/details/${data?.id}`}
    //         >
    //           <Button onClick={() => console.log(data)} type="primary">
    //             <EyeOutlined />
    //           </Button>
    //         </Link>
    //         <Link href={`/super_admin/manage-fuel/refueling/edit/${data?.id}`}>
    //           <Button onClick={() => console.log(data)} type="primary">
    //             <EditOutlined />
    //           </Button>
    //         </Link>
    //         <Button onClick={() => console.log(data?.id)} type="primary" danger>
    //           <DeleteOutlined />
    //         </Button>

    //         <ModalComponent icon={<MoneyCollectOutlined />}>
    //           <AddTrip />
    //         </ModalComponent>
    //       </div>
    //     );
    //   },
    // },
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
  return (
    <div className="bg-white border border-blue-200 rounded-lg shadow-md shadow-blue-200 p-5 space-y-3">
      <ActionBar inline title="Upcoming Trip">
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
        </div>
      </ActionBar>

      <UMTable
        columns={columns}
        dataSource={upcomingTrips}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        loading={isLoading}
      />
    </div>
  );
};

export default UpcomingTrip;
