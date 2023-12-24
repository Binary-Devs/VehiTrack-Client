import {
  BankOutlined,
  CarOutlined,
  CreditCardOutlined,
  DashboardFilled,
  MoneyCollectOutlined,
  PaperClipOutlined,
  ProfileOutlined,
  ScheduleOutlined,
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
      key: `/${role}/manage-Idncomdde`,
      children: [
        {
          label: (
            <Link
              className="text-sm "
              href={`/${role}/manage-financialIncome/Income`}
            >
              Income History
            </Link>
          ),
          key: `/${role}/academic/dddd`,
        },
        {
          label: (
            <Link className="text-sm " href={`/${role}/academiddc/Income`}>
              Income Sources
            </Link>
          ),
          key: `/${role}/academiddddc/dd`,
        },
      ],
    },
    {
      label: "Expenses",
      icon: <MoneyCollectOutlined />,
      key: `/${role}/manage-Incomdde`,
      children: [
        {
          label: (
            <Link className="text-sm " href={`/${role}/Expenses/dd`}>
              Expenses History
            </Link>
          ),
          key: `/${role}/acaddddemic/dssddd`,
        },
        {
          label: (
            <Link className="text-sm " href={`/${role}/academiddddc/Incoddme`}>
              Expenses Sources
            </Link>
          ),
          key: `/${role}/academiddddddc/dd`,
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
    ...defaultSidebarItems,
    // {
    //   label: "Manage academic",
    //   key: "manage-academic",
    //   // icon: <TableOutlined />,
    //   children: [
    //     {
    //       label: (
    //         <Link className="text-sm " href={`/${role}/academic/faculty`}>
    //           Faculties
    //         </Link>
    //       ),
    //       key: `/${role}/academic/faculty`,
    //     },
    //     {
    //       label: (
    //         <Link className="text-sm " href={`/${role}/academic/department`}>
    //           Departments
    //         </Link>
    //       ),
    //       key: `/${role}/academic/department`,
    //     },
    //     {
    //       label: (
    //         <Link className="text-sm " href={`/${role}/academic/semester`}>
    //           Semesters
    //         </Link>
    //       ),
    //       key: `/${role}/academic/semester`,
    //     },
    //   ],
    // },
    // {
    //   label: "Management",
    //   key: "management",
    //   //  icon: <AppstoreOutlined />,
    //   children: [
    //     {
    //       label: (
    //         <Link className="text-sm " href={`/${role}/department`}>
    //           Department
    //         </Link>
    //       ),
    //       key: `/${role}/department`,
    //     },
    //     {
    //       label: (
    //         <Link className="text-sm " href={`/${role}/building`}>
    //           Building
    //         </Link>
    //       ),
    //       key: `/${role}/building`,
    //     },
    //     {
    //       label: (
    //         <Link className="text-sm " href={`/${role}/room`}>
    //           Rooms
    //         </Link>
    //       ),
    //       key: `/${role}/room`,
    //     },
    //     {
    //       label: (
    //         <Link className="text-sm " href={`/${role}/course`}>
    //           Course
    //         </Link>
    //       ),
    //       key: `/${role}/course`,
    //     },
    //     {
    //       label: (
    //         <Link className="text-sm " href={`/${role}/semester-registration`}>
    //           Semester registration
    //         </Link>
    //       ),
    //       key: `/${role}/semester-registration`,
    //     },
    //     {
    //       label: (
    //         <Link className="text-sm " href={`/${role}/offered-course`}>
    //           Offered courses
    //         </Link>
    //       ),
    //       key: `/${role}/offered-course`,
    //     },
    //     {
    //       label: (
    //         <Link className="text-sm " href={`/${role}/offered-course-section`}>
    //           Course sections
    //         </Link>
    //       ),
    //       key: `/${role}/offered-course-section`,
    //     },
    //     {
    //       label: (
    //         <Link
    //           className="text-sm "
    //           href={`/${role}/offered-course-schedule`}
    //         >
    //           Course schedules
    //         </Link>
    //       ),
    //       key: `/${role}/offered-course-schedule`,
    //     },
    //   ],
    // },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...commonAdminSidebarItems,
    ...defaultSidebarItems,
    // {
    //   label: <Link className="text-sm " href={`/${role}/admin`}>Manage Admin</Link>,
    //   icon: <TableOutlined />,
    //   key: `/${role}/admin`,
    // },
    // {
    //   label: <Link className="text-sm " href={`/${role}/user`}>Manage User</Link>,
    //   icon: <TableOutlined />,
    //   key: `/${role}/user`,
    // },
    // {
    //   label: "Management",
    //   key: "management",
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     {
    //       label: <Link className="text-sm " href={`/${role}/department`}>Department</Link>,
    //       key: `/${role}/department`,
    //     },
    //   ],
    // },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
