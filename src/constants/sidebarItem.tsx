import {
  BankOutlined,
  CarOutlined,
  DashboardFilled,
  DashboardOutlined,
  HistoryOutlined,
  HomeOutlined,
  MessageOutlined,
  MoneyCollectOutlined,
  PaperClipOutlined,
  StrikethroughOutlined,
  TaobaoOutlined,
  ThunderboltOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import Link from "next/link";
import { FaRoadCircleCheck } from "react-icons/fa6";
import { MdOutlineUpcoming } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { USER_ROLE } from "./role";

export const sidebarItem = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      key: "/home",
      label: (
        <Link className="text-sm" href={`/`}>
          Home
        </Link>
      ),
      icon: <HomeOutlined />,
    },
    {
      label: (
        <Link className="text-sm " href={`/dashboard`}>
          Dashboard
        </Link>
      ),
      key: "/dashboard",
      icon: <DashboardOutlined/>,
    },
    {
      label: (
        <Link className="text-sm " href={`/inbox`}>
          Inbox
        </Link>
      ),
      key: "/inbox",
      icon: <MessageOutlined />,
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Vehicle Management",
      icon: <CarOutlined />,
      key: `/${role}/vehicle_management`,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/vehicle_management/brand_list`}
            >
              Brand List
            </Link>
          ),
          key: `/${role}/vehicle_management/brand_list`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/vehicle_management/model_list`}
            >
              Model List
            </Link>
          ),
          key: `/${role}/vehicle_management/model_list`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/vehicle_management/vehicle_list`}
            >
              Vehicle List
            </Link>
          ),
          key: `/${role}/vehicle_management/vehicle_list`,
        },
      ],
    },
    {
      label: "Driver Management",
      key: `/${role}/driver_management`,
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/driver_management/driver_list`}
            >
              Driver List
            </Link>
          ),
          key: `/${role}/driver_management/driver_list`,
        },
      ],
    },
    {
      label: "Helper Management",
      key: `/${role}/helper_management`,
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/helper_management/helper_list`}
            >
              Helper List
            </Link>
          ),
          key: `/${role}/helper_management/helper_list`,
        },
      ],
    },
    {
      label: "Trip Management",
      icon: <TaobaoOutlined />,
      key: `/${role}/trip_management`,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/trip_management/party_list`}
            >
              Party List
            </Link>
          ),
          key: `/${role}/trip_management/party_list`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/trip_management/trip_list`}
            >
              Trip List
            </Link>
          ),
          key: `/${role}/trip_management/trip_list`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/trip_management/trip_expense_head`}
            >
              Trip Expense Head
            </Link>
          ),
          key: `/${role}/trip_management/trip_expense_head`,
        },
      ],
    },
    {
      label: "Financial  Management",
      icon: <BankOutlined />,
      key: `/${role}/financial_management`,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/financial_management/account_type`}
            >
              Account Type
            </Link>
          ),
          key: `/${role}/financial_management/account_type`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/financial_management/account_heads`}
            >
              Account Heads
            </Link>
          ),
          key: `/${role}/financial_management/account_heads`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/financial_management/balance_sheet`}
            >
              Balance Sheet
            </Link>
          ),
          key: `/${role}/financial_management/balance_sheet`,
        },
      ],
    },
    {
      label: "Fuel Management",
      icon: <ThunderboltOutlined />,
      key: `/${role}/fuel_management`,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/fuel_management/fuel_types`}
            >
              Fuel Types
            </Link>
          ),
          key: `/${role}/fuel_management/fuel_types`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/fuel_management/pump_station`}
            >
              Pump Station
            </Link>
          ),
          key: `/${role}/fuel_management/pump_station`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/fuel_management/refueling`}
            >
              Refueling
            </Link>
          ),
          key: `/${role}/fuel_management/refueling`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/fuel_management/fuel_status`}
            >
              Fuel Status
            </Link>
          ),
          key: `/${role}/fuel_management/fuel_status`,
        },
      ],
    },
    {
      label: "Paper Work",
      icon: <PaperClipOutlined />,
      key: `/${role}/paper_work`,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/paper_work/registration`}
            >
              Registration
            </Link>
          ),
          key: `/${role}/paper_work/registration`,
        },
        {
          label: (
            <Link className="text-sm " href={`/${role}/paper_work/tax_token`}>
              Tax/Token
            </Link>
          ),
          key: `/${role}/paper_work/tax_token`,
        },
        {
          label: (
            <Link className="text-sm " href={`/${role}/paper_work/fitness`}>
              Fitness
            </Link>
          ),
          key: `/${role}/paper_work/fitness`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/paper_work/route_permit`}
            >
              Route Permit
            </Link>
          ),
          key: `/${role}/paper_work/route_permit`,
        },
      ],
    },
    {
      label: "Store Management",
      icon: <StrikethroughOutlined />,
      key: `/${role}/store_management`,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/store_management/equipment`}
            >
              Equipment
            </Link>
          ),
          key: `/${role}/store_management/equipment`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/store_management/equipment_in`}
            >
              Equipment In
            </Link>
          ),
          key: `/${role}/store_management/equipment_in`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/store_management/stock_status`}
            >
              Stock Status
            </Link>
          ),
          key: `/${role}/store_management/stock_status`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/store_management/unit_of_measurement`}
            >
              Unit of Measurement
            </Link>
          ),
          key: `/${role}/store_management/unit_of_measurement`,
        },
      ],
    },
    {
      label: "Maintenance",
      icon: <ToolOutlined />,
      key: `/${role}/maintenance`,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/maintenance/maintenance_head`}
            >
              Maintenance Heads
            </Link>
          ),
          key: `/${role}/maintenance/maintenance_head`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/maintenance/repair_maintenance`}
            >
              Repair Maintenance
            </Link>
          ),
          key: `/${role}/maintenance/repair_maintenance`,
        },
      ],
    },
    {
      label: "Miscellaneous Expenses",
      icon: <MoneyCollectOutlined />,
      key: `/${role}/miscellaneous_expenses`,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/miscellaneous_expenses/expense_heads`}
            >
              Expense Heads
            </Link>
          ),
          key: `/${role}/miscellaneous_expenses/expense_heads`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/miscellaneous_expenses/expense_list`}
            >
              Expense List
            </Link>
          ),
          key: `/${role}/miscellaneous_expenses/expense_list`,
        },
      ],
    },
    {
      label: "Report",
      icon: <TbReportAnalytics />,
      key: `/${role}/report`,
      children: [
        {
          label: (
            <Link className="text-sm " href={`/${role}/report/summary`}>
              Summary
            </Link>
          ),
          key: `/${role}/report/summary`,
        },
        {
          label: (
            <Link className="text-sm " href={`/${role}/report/annual_report`}>
              Annual Report
            </Link>
          ),
          key: `/${role}/report/annual_report`,
        },
      ],
    },
    {
      label: (
        <Link className="text-sm " href={`/${role}/accident_history`}>
          Accident History
        </Link>
      ),
      icon: <HistoryOutlined />,
      key: `/${role}/accident_history`,
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...commonAdminSidebarItems,
    {
      label: "Manger Management",
      key: `/${role}/manager`,
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/manager/add_new_manager`}
            >
              Add New Manager
            </Link>
          ),
          key: `${role}/manager/add_new_manager`,
        },
        {
          label: (
            <Link className="text-sm " href={`/${role}/manager/manager_list`}>
              Manager List
            </Link>
          ),
          key: `${role}/manager/manager_list`,
        },
      ],
    },
    {
      label: (
        <Link className="text-sm " href={`/profile`}>
          Profile
        </Link>
      ),
      icon: <UserOutlined />,
      key: `/profile`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...commonAdminSidebarItems,
    {
      label: (
        <Link className="text-sm " href={`/profile`}>
          Profile
        </Link>
      ),
      icon: <UserOutlined />,
      key: `/profile`,
    },
  ];

  const driverSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: (
        <Link className="text-sm " href={`/dashboard`}>
          Dashboard
        </Link>
      ),
      key: "/dashboard",
      icon: <DashboardFilled />,
    },
    {
      label: (
        <Link className="text-sm " href={`/${role}/upcoming_trip`}>
          Upcoming Trip
        </Link>
      ),
      icon: <MdOutlineUpcoming />,
      key: `/${role}/upcoming_trip`,
    },
    {
      label: (
        <Link className="text-sm " href={`/${role}/my_trip`}>
          My Trip
        </Link>
      ),
      icon: <FaRoadCircleCheck />,
      key: `/${role}/my_trip`,
    },
    {
      label: (
        <Link className="text-sm " href={`/profile`}>
          Profile
        </Link>
      ),
      icon: <UserOutlined />,
      key: `/profile`,
    },
  ];

  const helperSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: (
        <Link className="text-sm " href={`/${role}/upcoming_trip`}>
          Upcoming Trip
        </Link>
      ),
      icon: <MdOutlineUpcoming />,
      key: `/${role}/upcoming_trip`,
    },
    {
      label: (
        <Link className="text-sm " href={`/${role}/my_trip`}>
          My Trip
        </Link>
      ),
      icon: <FaRoadCircleCheck />,
      key: `/${role}/my_trip`,
    },
    {
      label: (
        <Link className="text-sm " href={`/profile`}>
          Profile
        </Link>
      ),
      icon: <UserOutlined />,
      key: `/profile`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.DRIVER) return driverSidebarItems;
  else if (role === USER_ROLE.HELPER) return helperSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
