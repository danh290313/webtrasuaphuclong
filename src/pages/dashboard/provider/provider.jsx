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
import useProvider from "@/hooks/useProvider";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Pagination } from "@mui/material";
import { positions } from "@mui/system";
export function Provider() {
  const [idChoosing, setIdChoosing] = useState(null);
  const [open, setOpen] = useState(false);
  const [provider, setProvider] = useState();
  const [page, setPage] = useState(1);
  const { getProviders, deleteProvider } = useProvider();
  
  const handleOpen = (id) => {
    setOpen(true);
    setIdChoosing(id);
  };
  const handleOK = () => {
    setOpen(false);
    deleteProvider(idChoosing);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangePage = (e, npage) => {
    setPage(npage);
  };
  useEffect(() => {
    (async () => {
      const res = await getProviders(page);
      console.log("danh",res);
      setProvider(res);
    })();
  }, [page]);

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
              Add Provider
            </Typography>
          </Button>
        </Link>
      </div>
      <Card>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead className="bg-orange-500 ">
              <tr>
                {[
                  "name",
                  "address",
                  "phoneNumber",
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
              {provider?.data?.map(
                (
                  { id,
                    name,
                    address,
                    phoneNumber,
                  },
                  key
                ) => {
                  const className = `py-3 px-5 whitespace-nowrap ${
                    key === provider.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={key}>
                      <td className={className}>
                        <div>{name}</div>
                      </td>
                      <td className={className}>
                        <div>{address}</div>
                      </td>
                      <td className={className}>
                        <div>{phoneNumber}</div>
                      </td>
                      
                      <td className={className}>
                        <div className="flex items-center space-x-3">
                          {/* <Link to={`delete/${id}`}>
                          <Tooltip content="Edit">
                            <TrashIcon className="h-5 w-5 text-red-500" />

                          </Link> */}

                          <Link to={`${String(id)}`}>
                            <Tooltip content="Edit">
                              <PencilSquareIcon className="h-9 w-5 cursor-pointer text-light-blue-600" />
                            </Tooltip>
                          </Link>
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
          count={Math.ceil(provider?.meta?.total / provider?.meta?.per_page)}
          page={page}
          onChange={handleChangePage}
        />
      </div>
      <ConfirmDialog
        title={"Delete this Provider ?"}
        handleClose={handleClose}
        open={open}
        handleOK={handleOK}
      />
    </div>
  );
}

export default Provider;
