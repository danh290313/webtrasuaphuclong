import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  UserGroupIcon,
  HomeModernIcon,
  ReceiptPercentIcon,
  MapIcon,
  TruckIcon,
  BeakerIcon,
  UserIcon,
  AdjustmentsVerticalIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { Staff, StaffEdit, StaffAdd, StaffUser } from "./pages/dashboard/staff";
import {
  Customer,
  CustomerAdd,
  CustomerEdit,
} from "@/pages/dashboard/customer";
import {
  Warehouses,
  WarehousesAdd,
  WarehousesEdit,
} from "@/pages/dashboard/warehouses";
import {
  Drinks,
  DrinksEdit,
  DrinksAdd,
  DrinksRecipesTopping,
} from "./pages/dashboard/drinks";

import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import {
  Orders,
  OrdersAdd,
  OrderDetails,
  OrdersEdit,
} from "./pages/dashboard/orders";


import { Branch, BranchAdd, BranchEdit } from "./pages/dashboard/branch";
import {
  Provider,
  ProviderAdd,
  ProviderEdit,
} from "./pages/dashboard/provider";
import {
  Size,
  SizeAdd,
  SizeEdit,
} from "@/pages/dashboard/size";
import {
  User,
  UserEdit,
} from "@/pages/dashboard/user";


import { UserMinusIcon } from "@heroicons/react/24/outline";
import { Materials, MaterialEdit, MaterialAdd } from "./pages/dashboard/materials";

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
        notOnSidebar: true,
        path: "/staff/edituser/:id",
        element: <StaffUser />,
      },

      {
        icon: <UserIcon {...icon} />,
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
        icon: <BeakerIcon {...icon} />,
        name: "drinks",
        path: "/drinks",
        element: <Drinks />,
      },
      {
        notOnSidebar: true,
        path: "/drinks/add",
        element: <DrinksAdd />,
      },

      {
        notOnSidebar: true,
        path: "/size/add",
        element: <SizeAdd />,
      },

      {
        notOnSidebar: true,
        path: "/size/:id",
        element: <SizeEdit />,
      },

      {
        icon: <AdjustmentsVerticalIcon {...icon} />,
        name: "size",
        path: "/size",
        element: <Size />,
      },

      {
        icon: <HomeModernIcon {...icon} />,
        name: "warehouse",
        path: "/warehouse",
        element: <Warehouses />,
      },
      {
        notOnSidebar: true,
        path: "/warehouse/Add",
        element: <WarehousesAdd />,
      },
      {
        notOnSidebar: true,
        path: "/warehouse/:id",
        element: <WarehousesEdit />,
      },

      //Orders
      {
        icon: <ReceiptPercentIcon {...icon} />,
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
        icon: <MapIcon {...icon} />,
        name: "branch",
        path: "/branch",
        element: <Branch />,
      },

      //provider
      {
        icon: <TruckIcon {...icon} />,
        name: "provider",
        path: "/provider",
        element: <Provider />,
      },
      {
        notOnSidebar: true,
        path: "/provider/add",
        element: <ProviderAdd />,
      },

      {
        notOnSidebar: true,
        path: "/provider/:id",
        element: <ProviderEdit />,
      },
      {
        icon: <BuildingStorefrontIcon {...icon} />,
        name: "Material",
        path: "/material",
        element: <Materials />,
      },
      {
        notOnSidebar: true,
        path: "/material/:id",
        element: <MaterialEdit />,
      },
      {
        notOnSidebar: true,
        path: "/material/add",
        element: <MaterialAdd />,
      },
      {
        icon: <BuildingStorefrontIcon {...icon} />,
        name: "User",
        path: "/user",
        element: <User />,
      },
      {
        notOnSidebar: true,
        path: "/user/:id",
        element: <UserEdit />,
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
