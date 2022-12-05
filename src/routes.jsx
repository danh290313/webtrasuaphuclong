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
import { Staff, StaffEdit, StaffAdd } from "./pages/dashboard/staff";
import {Customer, CustomerAdd, CustomerEdit} from "@/pages/dashboard/customer";
import {Warehouses, WarehousesAdd, WarehousesEdit} from "@/pages/dashboard/warehouses";
import { Drinks, DrinksEdit, DrinksRecipesTopping } from "./pages/dashboard/drinks";

import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import {Orders, OrdersAdd, OrderDetails, OrdersEdit} from "./pages/dashboard/orders";

import { Branch, BranchAdd, BranchEdit } from "./pages/dashboard/branch";
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

      //Orders
      {
        icon: <BuildingStorefrontIcon {...icon} />,
        name: "Orders",
        path: "/orders",
        element: <Orders />,
      },
      {
        notOnSidebar: true,
        path: "/orders/add",
        element: <OrdersAdd />,
      },
      {
        notOnSidebar: true,
        path: "/orders/edit/:id",
        element: <OrdersEdit />,
      },
      {
        notOnSidebar: true,
        path: "/orders/:id",
        element: <OrderDetails />,
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


      //Branch 
      {
        notOnSidebar: true,
        path: "/branch/add",
        element: <BranchAdd />,
      },

      {
        notOnSidebar: true,
        path: "/branch/:id",
        element: <BranchEdit />,
      },

      {
        icon: <UserGroupIcon {...icon} />,
        name: "branch",
        path: "/branch",
        element: <Branch />,
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
