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
const staff = [
  {
    id: "123",
    name: "tu nguyen",
    gender: "male",
    address: "ho chi minh",
    dob: "11/11/1111",
    hometown: "Binh Thuan",
    active: "true",
    phone: "092222222",
  },
  {
    id: "123",
    name: "tu nguyen",
    gender: "male",
    address: "ho chi minh",
    dob: "11/11/1111",
    hometown: "Binh Thuan",
    active: "true",
    phone: "092222222",
  },
  {
    id: "123",
    name: "tu nguyen",
    gender: "male",
    address: "ho chi minh",
    dob: "11/11/1111",
    hometown: "Binh Thuan",
    active: "true",
    phone: "092222222",
    branch: {
      id: 123,
      name: "Binh Thuan",
    },
  },
  {
    id: "123",
    name: "tu nguyen",
    gender: "male",
    address: "ho chi minh",
    dob: "11/11/1111",
    hometown: "Binh Thuan",
    active: "true",
    phone: "092222222",
  },
  {
    id: "123",
    name: "tu nguyen",
    gender: "male",
    address: "ho chi minh",
    "identity-card-number": "",
    dob: "11/11/1111",
    hometown: "Binh Thuan",
    active: "true",
    phone: "092222222",
  },
];
export function Staff() {
  const [idChoosing, setIdChoosing] = useState(null);

  const handleResetPass = () => {
    console.log({ idChoosing });
    setOpen(!open);
    toast.success("🦄 Change success!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [open, setOpen] = useState(false);
  const handleOpen = (id) => {
    setOpen(!open);
    setIdChoosing(id);
  };
  return (
    <div className="mt-12 mb-8 flex flex-col gap-8">
      <div className="flex justify-between">
        <div>
          <div class="relative focus:outline-none">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </div>
            <input
              type="search"
              id="default-search"
              class="primary-search"
              placeholder="Search staff"
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
              Add Staff
            </Typography>
          </Button>
        </Link>
      </div>
      <Card>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["name", "gender", "phone", "dob", "active", ""].map((el) => (
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
              {staff.map(({ active, dob, gender, id, name, phone }, key) => {
                const className = `py-3 px-5 whitespace-nowrap ${
                  key === staff.length - 1 ? "" : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={key}>
                    <td className={className}>
                      <div>{name}</div>
                    </td>
                    <td className={className}>
                      <div>{gender}</div>
                    </td>
                    <td className={className}>
                      <div>{phone}</div>
                    </td>

                    <td className={className}>
                      <div>{dob}</div>
                    </td>

                    <td className={className}>
                        <div>{String(active)}</div>
                      </td>

                   
                    
                   
                    <td className={className}>
                      <div className="flex space-x-3">

                      <Link to={`delete/${id}`}>
                      <Button
                        variant={"gradient"}
                        color={"blue"}
                        className="flex items-center px-3 py-1 capitalize"
                      >
                        <Typography
                          color="inherit"
                          className="font-medium capitalize"
                        >
                          Delete
                        </Typography>
                      </Button>
                    </Link>

                        <Link to={id}>
                          <Tooltip content="Edit">
                            <PencilSquareIcon className="h-9 w-5 cursor-pointer text-light-blue-600" />
                          </Tooltip>
                        </Link>
                        <button onClick={() => handleOpen(id)}>
                          <Tooltip content="Reset password">
                            <ArrowPathIcon className="h-5 w-5 cursor-pointer text-red-500" />
                          </Tooltip>
                        </button>
                      </div>
                    </td>
                    {/* diaglog reset pass */}
                  </tr>
                );
              })}
            
            </tbody>
          </table>
        </CardBody>
      </Card>
      <Dialog open={open} handler={handleOpen} size="xl">
        <DialogBody>
          <Typography color="inherit" className=" font-medium capitalize">
            Reset this staff's password ?
          </Typography>
        </DialogBody>
        <DialogFooter>
          <div className="flex">
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
          </div>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default Staff;
