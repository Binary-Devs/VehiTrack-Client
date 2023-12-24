import {
  CarOutlined,
  CreditCardOutlined,
  DashboardFilled,
  MoneyCollectOutlined,
  PaperClipOutlined,
  ProfileOutlined,
  ScheduleOutlined,
  StrikethroughOutlined,
  TaobaoOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import Link from "next/link";
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
      label: "Manage Vehicle",
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
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
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
