import {
  ArrowPathIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
// import { authorsTableData, projectsTableData } from "@/data";
import ConfirmDialog from "@/components/ConfirmDialog";
import useStaff from "@/hooks/useStaff";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
export function Staff() {
  const [idChoosing, setIdChoosing] = useState(null);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const { deleteStaff, staffs, resetPassStaff } = useStaff();
  // const [staffs, setStaffs] = useState([]);
  const handleOpen = (id, type) => {
    setType(type);
    setOpen(!open);
    setIdChoosing(id);
  };
  const handleOK = () => {
    type === "resetpass" ? resetPassStaff(idChoosing) : deleteStaff(idChoosing);
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="mt-12 mb-8 flex flex-col gap-8">
      <div className="flex justify-between">
        <div>
          <div className="relative focus:outline-none">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </div>
            <input
              type="search"
              id="default-search"
              className="primary-search"
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
            <thead className="bg-orange-500 ">
              <tr>
                {["name", "gender", "phone", "dob", "active", "branch", ""].map(
                  (el) => (
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
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {staffs?.data?.map(
                (
                  { active, dob, gender, id, name, phoneNumber, branch },
                  key
                ) => {
                  const className = `py-3 px-5 whitespace-nowrap ${
                    key === staffs.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={key}>
                      <td className={className}>
                        <div>{name}</div>
                      </td>
                      <td className={className}>
                        <div>{gender === 1 ? "Nam" : "Nữ"}</div>
                      </td>
                      <td className={className}>
                        <div>{phoneNumber}</div>
                      </td>

                      <td className={className}>
                        <div>{dob}</div>
                      </td>

                      <td className={className}>
                        <div>{String(active)}</div>
                      </td>
                      <td className={className}>
                        <div>{branch.name}</div>
                      </td>
                      <td className={className}>
                        <div className="flex items-center space-x-3">
                          {/* <Link to={`delete/${id}`}>
                          <Tooltip content="Edit">
                            <TrashIcon className="h-5 w-5 text-red-500" />

                          </Link> */}

                          <Link to={`${id}`}>
                            <Tooltip content="Edit">
                              <PencilSquareIcon className="h-9 w-5 cursor-pointer text-light-blue-600" />
                            </Tooltip>
                          </Link>
                          <button onClick={() => handleOpen(id, "resetpass")}>
                            <Tooltip content="Reset password">
                              <ArrowPathIcon className="h-5 w-5 cursor-pointer text-red-500" />
                            </Tooltip>
                          </button>
                          <button onClick={() => handleOpen(id, "delete")}>
                            <Tooltip content="delete">
                              <TrashIcon className="h-5 w-5 cursor-pointer text-red-500" />
                            </Tooltip>
                          </button>
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
      <ConfirmDialog
        title={
          type === "resetpass"
            ? "Reset this staff's password ?"
            : "Delete this staff ?"
        }
        handleClose={handleClose}
        open={open}
        handleOK={handleOK}
      />
    </div>
  );
}

export default Staff;
