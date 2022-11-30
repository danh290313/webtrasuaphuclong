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
import { Staff } from "./pages/dashboard/staff/staff";
import StaffEdit from "./pages/dashboard/staff/staffEdit";
import StaffAdd from "./pages/dashboard/staff/staffAdd";
import Customer from "./pages/dashboard/customer/customer";
import CustomerAdd from "./pages/dashboard/customer/customerAdd";
import CustomerEdit from "./pages/dashboard/customer/customerEdit";

import Warehouses from "./pages/dashboard/warehouses/warehouses";
import { Drinks } from "./pages/dashboard/drinks/drinks";
import DrinksEdit from "./pages/dashboard/drinks/drinksEdit";
import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import DrinksRecipesTopping from "./pages/dashboard/drinksRecipesTopping";
import WarehousesAdd from "./pages/dashboard/warehouses/warehousesAdd";
import WarehousesEdit from "./pages/dashboard/warehouses/warehousesEdit";
const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      //staff
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
      //customer
      {
        notOnSidebar: true,
        path: "/customer/add",
        element: <CustomerAdd />,
      },

      {
        notOnSidebar: true,
        path: "/customer/:id",
        element: <CustomerEdit />,
      },

      {
        icon: <UserGroupIcon {...icon} />,
        name: "customer",
        path: "/customer",
        element: <Customer />,
      },

      {
        notOnSidebar: true,
        path: "/drinks/info/:id",
        element: <DrinksRecipesTopping />,
      },
      {
        notOnSidebar: true,
        path: "/drinks/:id",
        element: <DrinksEdit />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "drinks",
        path: "/drinks",
        element: <Drinks />,
      },
      {
        icon: <BuildingStorefrontIcon {...icon} />,
        name: "warehouses",
        path: "/warehouses",
        element: <Warehouses />,
      },
      {
        notOnSidebar: true,
        path: "/warehouses/Add",
        element: <WarehousesAdd />,
      },
      {
        notOnSidebar: true,
        path: "/warehouses/:id",
        element: <WarehousesEdit />,
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
