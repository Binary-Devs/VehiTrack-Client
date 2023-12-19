import {
  DashboardFilled,
  ProfileOutlined,
  ScheduleOutlined,
  TableOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItem = (role: string) => {
  console.log(role);
  const defaultSidebarItems: MenuProps["items"] = [
    {
     
      key: "profile",
      label: <Link href={`/${role}`}>Profile</Link>,
      icon: <ProfileOutlined />,
      // children: [
      //   {
      //     label: <Link href={`/${role}`}>Account Profile</Link>,
      //     key: `/${role}/profile`,
      //   },
      // ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/dashboard`}>Dashboard</Link>,
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
              label: <Link href={`/${role}/admin/all_admin`}>Admin List</Link>,
              key: `${role}/admin/all_admin`,
            },
            {
              label: <Link href={`/${role}/admin/create`}>Create Admin </Link>,
              key: `${role}/admin/create`,
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
                <Link href={`/${role}/driver/all_driver`}>Driver List</Link>
              ),
              key: `${role}/driver/all_driver`,
            },
            {
              label: <Link href={`/${role}/driver/create`}>Create Driver</Link>,
              key: `${role}/driver/create`,
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
                <Link href={`/${role}/helper/all_helper`}>Helper List</Link>
              ),
              key: `${role}/helper/all-helper`,
            },
            {
              label: (
                <Link href={`/${role}/helper/create`}>Create Trainer</Link>
              ),
              key: `${role}/helper/create`,
            },
          ],
        },
      ],
    },
    {
      label: <Link href={`/${role}/manage-Vehicle`}>Manage Vehicle</Link>,
      icon: <TableOutlined />,
      key: `vehicle`,
      children: [
        {
          label: <Link href={`/${role}/vehicle/vehicle_list`}>Vehicle list</Link>,
          key: `/${role}/vehicle/vehicle_list`,
        },
        {
          label: (
            <Link href={`/${role}/vehicle/create`}>Entry New Vehicle</Link>
          ),
          key: `/${role}/vehicle/create`,
        },
      ],
    },
    {
      label: <Link href={`/${role}/manage-Trip`}>Manage Trip</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-Trip`,
      children: [
        {
          label: <Link href={`/${role}/academic/Trip`}>Trip List</Link>,
          key: `/${role}/academicdd/semesterdd`,
        },
        {
          label: <Link href={`/${role}/academic/Trip`}>Pending Trip</Link>,
          key: `/${role}/academddic/Trip`,
        },
      ],
    },
    {
      label: <Link href={`/${role}/manage-Inddcome`}>Income</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-Idncomdde`,
      children: [
        {
          label: (
            <Link href={`/${role}/academicIncome/Income`}>Income History</Link>
          ),
          key: `/${role}/academic/dddd`,
        },
        {
          label: (
            <Link href={`/${role}/academiddc/Income`}>Income Sources</Link>
          ),
          key: `/${role}/academiddddc/dd`,
        },
      ],
    },
    {
      label: <Link href={`/${role}/manadge-Ex`}>Expenses</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-Incomdde`,
      children: [
        {
          label: <Link href={`/${role}/Expenses/dd`}>Expenses History</Link>,
          key: `/${role}/acaddddemic/dssddd`,
        },
        {
          label: (
            <Link href={`/${role}/academiddddc/Incoddme`}>
              Expenses Sources
            </Link>
          ),
          key: `/${role}/academiddddddc/dd`,
        },
      ],
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    // {
    //   label: "Manage academic",
    //   key: "manage-academic",
    //   icon: <TableOutlined />,
    //   children: [
    //     {
    //       label: <Link href={`/${role}/academic/faculty`}>Faculties</Link>,
    //       key: `/${role}/academic/faculty`,
    //     },
    //     {
    //       label: <Link href={`/${role}/academic/department`}>Departments</Link>,
    //       key: `/${role}/academic/department`,
    //     },
    //     {
    //       label: <Link href={`/${role}/academic/semester`}>Semesters</Link>,
    //       key: `/${role}/academic/semester`,
    //     },
    //   ],
    // },
    // {
    //   label: "Management",
    //   key: "management",
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     {
    //       label: <Link href={`/${role}/department`}>Department</Link>,
    //       key: `/${role}/department`,
    //     },
    //     {
    //       label: <Link href={`/${role}/building`}>Building</Link>,
    //       key: `/${role}/building`,
    //     },
    //     {
    //       label: <Link href={`/${role}/room`}>Rooms</Link>,
    //       key: `/${role}/room`,
    //     },
    //     {
    //       label: <Link href={`/${role}/course`}>Course</Link>,
    //       key: `/${role}/course`,
    //     },
    //     {
    //       label: (
    //         <Link href={`/${role}/semester-registration`}>
    //           Semester registration
    //         </Link>
    //       ),
    //       key: `/${role}/semester-registration`,
    //     },
    //     {
    //       label: <Link href={`/${role}/offered-course`}>Offered courses</Link>,
    //       key: `/${role}/offered-course`,
    //     },
    //     {
    //       label: (
    //         <Link href={`/${role}/offered-course-section`}>
    //           Course sections
    //         </Link>
    //       ),
    //       key: `/${role}/offered-course-section`,
    //     },
    //     {
    //       label: (
    //         <Link href={`/${role}/offered-course-schedule`}>
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
    //   label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
    //   icon: <TableOutlined />,
    //   key: `/${role}/admin`,
    // },
    // {
    //   label: <Link href={`/${role}/user`}>Manage User</Link>,
    //   icon: <TableOutlined />,
    //   key: `/${role}/user`,
    // },
    // {
    //   label: "Management",
    //   key: "management",
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     {
    //       label: <Link href={`/${role}/department`}>Department</Link>,
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
