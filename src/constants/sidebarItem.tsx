import {
  BankOutlined,
  CarOutlined,
  CreditCardOutlined,
  DashboardFilled,
  MoneyCollectOutlined,
  PaperClipOutlined,
  ProfileOutlined,
  ScheduleOutlined,
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

      // children: [
      //   {
      //     label: (
      //       <Link className="text-sm " href={`/${role}`}>
      //         Account Profile
      //       </Link>
      //     ),
      //     key: `/${role}/profile`,
      //   },
      // ],
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
      label: "Manage Users",
      key: "manage-user",
      icon: <ScheduleOutlined />,
      children: [
        {
          label: "Admin",
          key: "Admin",
          icon: <UserOutlined />,
          children: [
            {
              label: (
                <Link className="text-sm " href={`/${role}/admin/create`}>
                  Create Admin{" "}
                </Link>
              ),
              key: `${role}/admin/create`,
            },
            {
              label: (
                <Link className="text-sm " href={`/${role}/admin/all_admin`}>
                  Admin List
                </Link>
              ),
              key: `${role}/admin/all_admin`,
            },
          ],
        },
        {
          label: "Driver",
          key: "Driver",
          icon: <UserOutlined />,
          children: [
            {
              label: (
                <Link className="text-sm " href={`/${role}/driver/create`}>
                  Create Driver
                </Link>
              ),
              key: `${role}/driver/create`,
            },
            {
              label: (
                <Link className="text-sm " href={`/${role}/driver/all_driver`}>
                  Driver List
                </Link>
              ),
              key: `${role}/driver/all_driver`,
            },
          ],
        },
        {
          label: "Helper",
          key: "Helper",
          icon: <UserOutlined />,
          children: [
            {
              label: (
                <Link className="text-sm " href={`/${role}/helper/create`}>
                  Create Helper
                </Link>
              ),
              key: `${role}/helper/create`,
            },
            {
              label: (
                <Link className="text-sm " href={`/${role}/helper/all_helper`}>
                  Helper List
                </Link>
              ),
              key: `${role}/helper/all-helper`,
            },
          ],
        },
      ],
    },
    {
      label: "Vehicle Management",
      icon: <CarOutlined />,
      key: `vehicle`,
      children: [
        {
          label: (
            <Link className="text-sm " href={`/${role}/vehicle/create`}>
              Entry New Vehicle
            </Link>
          ),
          key: `/${role}/vehicle/create`,
        },
        {
          label: (
            <Link className="text-sm " href={`/${role}/vehicle/vehicle_list`}>
              Vehicle list
            </Link>
          ),
          key: `/${role}/vehicle/vehicle_list`,
        },
      ],
    },
    {
      label: "Manage Trip",
      icon: <TaobaoOutlined />,
      key: `/${role}/manage-Trip`,
      children: [
        {
          label: (
            <Link className="text-sm " href={`/${role}/academic/Trip`}>
              Trip List
            </Link>
          ),
          key: `/${role}/academicdd/semesterdd`,
        },
        {
          label: (
            <Link className="text-sm " href={`/${role}/academic/Trip`}>
              Pending Trip
            </Link>
          ),
          key: `/${role}/academddic/Trip`,
        },
      ],
    },
    {
      label: "Financial  Management",
      icon: <BankOutlined />,
      key: `/${role}/manage-financial`,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/manage-financial/account-type`}
            >
              Account Type
            </Link>
          ),
          key: `/${role}/manage-financial/account-type`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/manage-financial/account-heads`}
            >
              Account Heads
            </Link>
          ),
          key: `/${role}/manage-financial/account-heads`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/manage-financial/account-status`}
            >
              Account Status
            </Link>
          ),
          key: `/${role}/manage-financial/account-status`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/manage-financial/balance-sheet`}
            >
              Balance Sheet
            </Link>
          ),
          key: `/${role}/manage-financial/balance-sheet`,
        },
      ],
    },
    {
      label: "Fuel Management",
      icon: <ThunderboltOutlined />,
      key: `/${role}/manage-fuel`,
      children: [
        {
          label: (
            <Link className="text-sm " href={`/${role}/manage-fuel/fuel-types`}>
              Fuel Types
            </Link>
          ),
          key: `/${role}/manage-fuel/fuel-types`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/manage-fuel/pump-station`}
            >
              Pump Station
            </Link>
          ),
          key: `/${role}/manage-fuel/pump-station`,
        },
        {
          label: (
            <Link className="text-sm " href={`/${role}/manage-fuel/refueling`}>
              Refueling
            </Link>
          ),
          key: `/${role}/manage-fuel/refueling`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/manage-fuel/fuel-status`}
            >
              Fuel Status
            </Link>
          ),
          key: `/${role}/manage-financial/fuel-status`,
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
              href={`/${role}/maintenance/repair-maintenance`}
            >
              Repair Maintenance
            </Link>
          ),
          key: `/${role}/maintenance/repair-maintenance`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/maintenance/accident-history`}
            >
              Accident History
            </Link>
          ),
          key: `/${role}/maintenance/accident-history`,
        },
      ],
    },
    {
      label: "Paper Work",
      icon: <PaperClipOutlined />,
      key: `/${role}/paper-work`,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/paper-work/registration`}
            >
              Registration
            </Link>
          ),
          key: `/${role}/paper-work/repair-paper-work`,
        },
        {
          label: (
            <Link className="text-sm " href={`/${role}/paper-work/tax-token`}>
              Tax/Token
            </Link>
          ),
          key: `/${role}/maintenance/tax-token`,
        },
        {
          label: (
            <Link className="text-sm " href={`/${role}/paper-work/fitness`}>
              Fitness
            </Link>
          ),
          key: `/${role}/maintenance/fitness`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/paper-work/route-permit`}
            >
              Route Permit
            </Link>
          ),
          key: `/${role}/paper-work/route-permit`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/paper-work/paper-work-list`}
            >
              Paper Work List
            </Link>
          ),
          key: `/${role}/paper-work/paper-work-list`,
        },
      ],
    },
    {
      label: "Miscellaneous Expenses",
      icon: <MoneyCollectOutlined />,
      key: `/${role}/miscellaneous-expenses`,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/miscellaneous-expenses/expense-heads`}
            >
              Expense Heads
            </Link>
          ),
          key: `/${role}/miscellaneous-expenses/expense-heads`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/miscellaneous-expenses/expense-list`}
            >
              Expense List
            </Link>
          ),
          key: `/${role}/maintenance/list`,
        },
      ],
    },
    {
      label: "Income",
      icon: <CreditCardOutlined />,
      key: `/${role}/income`,
      children: [
        {
          label: (
            <Link className="text-sm " href={`/${role}/income/income_sources`}>
              Income Sources
            </Link>
          ),
          key: `/${role}/income/income_sources`,
        },
        {
          label: (
            <Link className="text-sm " href={`/${role}/income/income_history`}>
              Income History
            </Link>
          ),
          key: `/${role}/income/income_history`,
        },
      ],
    },
    {
      label: "Expenses",
      icon: <MoneyCollectOutlined />,
      key: `/${role}/expenses`,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/expenses/expenses_history`}
            >
              Expenses History
            </Link>
          ),
          key: `/${role}/expenses/expenses_history`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/expenses/expenses_sources`}
            >
              Expenses Sources
            </Link>
          ),
          key: `/${role}/expenses/expenses_sources`,
        },
      ],
    },
    {
      label: "Store Management",
      icon: <StrikethroughOutlined />,
      key: `/${role}/store`,
      children: [
        {
          label: (
            <Link className="text-sm " href={`/${role}/store/equipment`}>
              Equipment
            </Link>
          ),
          key: `/${role}/store/equipment`,
        },
        {
          label: (
            <Link className="text-sm " href={`/${role}/store/equipment_In`}>
              Equipment In
            </Link>
          ),
          key: `/${role}/store/equipment_In`,
        },
        {
          label: (
            <Link className="text-sm " href={`/${role}/store/stock_status`}>
              Stock Status
            </Link>
          ),
          key: `/${role}/store/stock_status`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/store/unit_of_measurement`}
            >
              Unit of Measurement
            </Link>
          ),
          key: `/${role}/store/unit_of_measurement`,
        },
      ],
    },
    {
      label: "Paper work",
      icon: <PaperClipOutlined />,
      key: `/${role}/paper_work`,
      children: [
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
              href={`/${role}/paper_work/registration`}
            >
              Registration
            </Link>
          ),
          key: `/${role}/paper_work/registration`,
        },
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/paper_work/route_permit`}
            >
              Route permit
            </Link>
          ),
          key: `/${role}/paper_work/route_permit`,
        },
        {
          label: (
            <Link className="text-sm " href={`/${role}/paper_work/tax_token`}>
              Tax token
            </Link>
          ),
          key: `/${role}/paper_work/tax_token`,
        },
      ],
    },
    {
      label: "Miscellaneous Expenses",
      icon: <StrikethroughOutlined />,
      key: `/${role}/miscellaneous_expenses`,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/miscellaneous_expenses/expense_heads`}
            >
              Expense heads
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
            <Link className="text-sm " href={`/${role}/report/annual-report`}>
              Annual Report
            </Link>
          ),
          key: `/${role}/report/annual-report`,
        },
      ],
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...commonAdminSidebarItems,
 
  ];

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
