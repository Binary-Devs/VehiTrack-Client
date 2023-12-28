import {
  BankOutlined,
  CarOutlined,
  DashboardFilled,
  HistoryOutlined,
  MoneyCollectOutlined,
  PaperClipOutlined,
  ProfileOutlined,
  StrikethroughOutlined,
  TaobaoOutlined,
  ThunderboltOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import Link from "next/link";
import { TbReportAnalytics } from "react-icons/tb";
import { USER_ROLE } from "./role";

export const sidebarItem = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      key: "profile",
      label: (
        <Link className="text-sm " href={`/${role}`}>
          Profile
        </Link>
      ),
      icon: <ProfileOutlined />,
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: (
        <Link className="text-sm " href={`/dashboard`}>
          Dashboard
        </Link>
      ),
      key: "dashboard",
      icon: <DashboardFilled />,
    },
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
          key: `${role}/driver_management/driver_list`,
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
              href={`/${role}/helper_management/add_new_helper`}
            >
              Add New Helper
            </Link>
          ),
          key: `${role}/helper_management/add_new_helper`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/helper_management/helper_list`}
            >
              Helper List
            </Link>
          ),
          key: `${role}/helper_management/helper_list`,
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
        // {
        //   label: (
        //     <Link
        //       className="text-sm "
        //       href={`/${role}/trip_management/trip_expense_head`}
        //     >
        //       Trip Expense Head
        //     </Link>
        //   ),
        //   key: `/${role}/trip_management/trip_expense_head`,
        // },
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
        // {
        //   label: (
        //     <Link
        //       className="text-sm "
        //       href={`/${role}/financial_management/balance_sheet`}
        //     >
        //       Balance Sheet
        //     </Link>
        //   ),
        //   key: `/${role}/financial_management/balance_sheet`,
        // },
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
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/paper_work/paper_work_list`}
            >
              Paper Work List
            </Link>
          ),
          key: `/${role}/paper_work/paper_work_list`,
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
        // {
        //   label: (
        //     <Link
        //       className="text-sm "
        //       href={`/${role}/store_management/stock_status`}
        //     >
        //       Stock Status
        //     </Link>
        //   ),
        //   key: `/${role}/store_management/stock_status`,
        // },
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
  ];

  const adminSidebarItems: MenuProps["items"] = [...commonAdminSidebarItems];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...commonAdminSidebarItems,
    ...defaultSidebarItems,
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
