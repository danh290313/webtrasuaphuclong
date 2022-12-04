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
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
// import { authorsTableData, projectsTableData } from "@/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const customer = [
  {
    id: "123",
    name: "tu nguyen",
    gender: "male",
    dob: "11/11/1111",
    active: "true",
    phone: "092222222",
  },
  {
    id: "123",
    name: "tu nguyen",
    gender: "male",
    dob: "11/11/1111",
    active: "true",
    phone: "092222222",
  },
  {
    id: "123",
    name: "tu nguyen",
    gender: "male",
    dob: "11/11/1111",
    active: "true",
    phone: "092222222",
  },
  {
    id: "123",
    name: "tu nguyen",
    gender: "male",
    dob: "11/11/1111",
    active: "true",
    phone: "092222222",
  },
  {
    id: "123",
    name: "tu nguyen",
    gender: "male",
    dob: "11/11/1111",
    active: "true",
    phone: "092222222",
  },
];
import { useEffect } from "react";
import { Pagination } from "@mui/material";
import ConfirmDialog from "@/components/ConfirmDialog";
import useCus from "@/hooks/useCus";
export function Customer() {
  const [idChoosing, setIdChoosing] = useState(null);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const [customer, setCustomer] = useState();
  const [page, setPage] = useState(customer?.meta?.current_page);
  const { getAllCus, deleteCus } = useCus();
  useEffect(() => {
    (async () => {
      const res = await getAllCus();
      // console.log(data);
      setCustomer(res);
    })();
  }, []);
  const handleOpen = (id) => {
    setOpen(true);
    setIdChoosing(id);
  };
  const handleOK = () => {
    setOpen(false);
    deleteCus(idChoosing);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangePage = (e, npage) => {
    setPage(npage);
  };
  return (
    <div className="mt-12 mb-8 flex flex-col gap-8">
      <div className="flex justify-between">
        <div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </div>
            <input
              type="search"
              id="default-search"
              className="primary-search"
              placeholder="Search customer"
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
              Add Customer
            </Typography>
          </Button>
        </Link>
      </div>
      <Card>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr className="bg-orange-500 ">
                {[
                  "name",
                  "gender",
                  "phone",
                  "dob",
                  "address",
                  "active",
                  "",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-white"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {customer?.data?.map(
                (
                  { id, name, gender, phoneNumber, dob, active, addresses },
                  key
                ) => {
                  const className = `py-3 px-5 whitespace-nowrap ${
                    key === customer.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;
                  return (
                    <tr key={key}>
                      <td className={className}>
                        <div>{name}</div>
                      </td>
                      <td className={className}>
                        <div>{gender === 0 ? "Nam" : "Nữ"}</div>
                      </td>
                      <td className={className}>
                        <div>{phoneNumber}</div>
                      </td>
                      <td className={className}>
                        <div>{String(dob)}</div>
                      </td>
                      <td className={className}>
                        <div className="max-w-[200px] truncate">
                          {String(addresses[0]?.address)}
                        </div>
                      </td>
                      <td className={className}>
                        <div>{String(active)}</div>
                      </td>

                      <td className={className}>
                        <div className="flex items-center space-x-3">
                          <button onClick={() => handleOpen(id)}>
                            <Tooltip content="delete">
                              <TrashIcon className="h-5 w-5 text-red-500" />
                            </Tooltip>
                          </button>

                          <Link to={`${String(id)}`}>
                            <Tooltip content="Edit">
                              <PencilSquareIcon className="h-9 w-5 cursor-pointer text-light-blue-600" />
                            </Tooltip>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <div className="m-auto w-fit">
        <Pagination
          count={Math.ceil(customer?.meta?.total / customer?.meta?.per_page)}
          page={page}
          onChange={handleChangePage}
        />
      </div>
      <ConfirmDialog
        title={"Delete this customer ?"}
        handleClose={handleClose}
        open={open}
        handleOK={handleOK}
      />
    </div>
  );
}

export default Customer;
