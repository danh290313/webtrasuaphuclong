import {
  ArrowPathIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
  UserIcon,
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
import useUser from "@/hooks/useUser";
import useRole from "@/hooks/useRole";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Pagination } from "@mui/material";
import { positions } from "@mui/system";
export function User() {
  console.log("test");
  const [idChoosing, setIdChoosing] = useState(null);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const { deleteUser, getUsers,getUser, resetPassUser } = useUser();
  const { getRoles } = useRole();
  const [role, setRole] = useState();

  const [Users, setUsers] = useState();
  const [page, setPage] = useState(1);
  const handleOpen = (id, type) => {
    setType(type);
    setOpen(!open);
    setIdChoosing(id);
  };
  const handleOK = () => {
    setOpen(false);
    if (type === "resetpass") 
    {
      (async () => {
        await resetPassUser(idChoosing);
       
      })();
    }
    else {
      (async () => {
        await deleteUser(idChoosing);
        let npage;
        if (Users?.length === 1) npage = page - 1;
        else npage = page;
        const res = await getUsers(npage);
        console.log({ res });
        setUsers(res);
        if (npage !== page) setPage(npage);
      })();
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangePage = (e, npage) => {
    setPage(npage);
  };
  useEffect(() => {
    (async () => {
      const res = await getUsers(page);
      console.log("test",res);
      setUsers(res?.data?.data);
    })();
  }, [page]);

  useEffect(() => {
    (async () => {
      const res = await getRoles();
      setRole(res?.data);
    })();
  }, []);

  

  return (
    role &&
    Users &&
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
              placeholder="Search User"
              required
            />
          </div>
        </div>
        {/* <Link to="add" className="">
          <Button
            variant={"gradient"}
            color={"blue"}
            className="flex items-center px-3 py-1 capitalize"
          >
            <Typography color="inherit" className="font-medium capitalize">
              Add User
            </Typography>
          </Button>
        </Link> */}
      </div>
      <Card>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead className="bg-cyan-600 ">
              <tr>
                {[
                  "id",
                  "email",
                  "role",
                 
                  "",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[15px] font-bold uppercase text-white"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Users.map(
                (
                  {
                    id,
                    email,
                    role_id,

                  },
                  key
                ) => {
                  const className = `py-3 px-5 whitespace-nowrap bg-cyan-50  ${
                    key === Users.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={key}>

                      <td className={className}>
                        <div>{id}</div>
                      </td>

                      <td className={className}>
                        <div>{email}</div>
                      </td>
                      
                      <td className={className}>
                        <div>{role.map((obj) =>
                        (
                          obj.id === role_id ? obj.name :""
                        ))}</div>
                      </td>

                      <td className={className}>
                        <div className="flex items-center space-x-3">
                    
                         

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
      <div className="m-auto w-fit">
        <Pagination
          count={Math.ceil(Users?.meta?.total / Users?.meta?.per_page)}
          page={page}
          onChange={handleChangePage}
        />
      </div>
      <ConfirmDialog
        title={
          type === "resetpass"
            ? "Reset this User's password ?"
            : "Delete this User ?"
        }
        handleClose={handleClose}
        open={open}
        handleOK={handleOK}
      />
    </div>
  );
}

export default User;
