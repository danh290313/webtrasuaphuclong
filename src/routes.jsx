import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { Staff } from "./pages/dashboard/staff";
import StaffEdit from "./pages/dashboard/staffEdit";
import StaffAdd from "./pages/dashboard/staffAdd";
import Customer from "./pages/dashboard/custormer";
import Warehouses from "./pages/dashboard/warehouses";
const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        notOnSidebar: true,
        path: "/staff/add",
        element: <StaffAdd />,
      },
      {
        notOnSidebar: true,
        path: "/staff/:id",
        element: <StaffEdit />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "staff",
        path: "/staff",
        element: <Staff />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "customer",
        path: "/customer",
        element: <Customer />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "warehouses",
        path: "/warehouses",
        element: <Warehouses />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "notifactions",
        path: "/notifactions",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
