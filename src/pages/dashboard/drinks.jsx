import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  ArrowPathIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
// import { authorsTableData, projectsTableData } from "@/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const drinks = [
  {
    id: "123",
    name: "do uong",
    description: "des",
    price: "40000",
    discount: "24",
    sale_on_days: "",
    image: "",
    active: "",
    type: "tra",
  },
  {
    id: "123",
    name: "do uong do uongdo uongdo uong",
    description:
      "des aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    price: "40000",
    discount: "24",
    sale_on_days: "11/11/1111",
    image: "",
    active: true,
  },
  {
    id: "123",
    name: "do uong",
    description: "des",
    price: "40000",
    discount: "24",
    sale_on_days: "",
    image: "",
    active: "",
  },
];
export function Drinks() {
  const [idChoosing, setIdChoosing] = useState(null);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-8">
      <div className="flex justify-between">
        <div>
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </div>
            <input
              type="search"
              id="default-search"
              class="primary-search"
              placeholder="Search drink"
              required
            />
          </div>
        </div>
        <Link to="add" className="">
          <Button
            variant={"gradient"}
            color={"blue"}
            className="flex items-center px-3 py-1 capitalize"
          >
            <Typography color="inherit" className="font-medium capitalize">
              Add drink
            </Typography>
          </Button>
        </Link>
      </div>
      <Card>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "name",
                  "description",
                  "price",
                  "discount",
                  "type",
                  "sale_on_days",
                  "active",
                  "",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {drinks.map(
                (
                  {
                    id,
                    name,
                    description,
                    price,
                    discount,
                    sale_on_days,
                    image,
                    active,
                    type,
                  },
                  key
                ) => {
                  const className = `py-3 px-5 whitespace-nowrap ${
                    key === drinks.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={key}>
                      <td className={className}>
                        <div className="max-w-[100px] truncate">
                          <Tooltip content={name}>{name}</Tooltip>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="max-w-[100px] truncate">
                          <Tooltip content={description}>{description}</Tooltip>
                        </div>
                      </td>
                      <td className={className}>
                        <div>{price}</div>
                      </td>
                      <td className={className}>
                        <div>{discount}</div>
                      </td>
                      <td className={className}>
                        <div>{type}</div>
                      </td>
                      <td className={className}>
                        <div>{sale_on_days}</div>
                      </td>
                      <td className={className}>
                        <div>{String(active)}</div>
                      </td>
                      {/* <td className={className}>
                        <div>{String(active)}</div>
                      </td> */}
                      <td className={className}>
                        <div className="flex space-x-3">
                          <Link to={id}>
                            <Tooltip content="Edit">
                              <PencilSquareIcon className="h-5 w-5 cursor-pointer text-light-blue-600" />
                            </Tooltip>
                          </Link>
                          {/* <button onClick={}>
                            <Tooltip content="Reset password">
                              <ArrowPathIcon className="h-5 w-5 cursor-pointer text-red-500" />
                            </Tooltip>
                          </button> */}
                        </div>
                      </td>
                      {/* diaglog reset pass */}
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      {/* <Dialog open={open} handler={handleOpen}>
        <DialogBody divider>
          <Typography color="inherit" className=" font-medium capitalize">
          </Typography>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleResetPass()}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog> */}
    </div>
  );
}

export default drinks;
