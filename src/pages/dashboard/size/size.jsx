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
import { useEffect } from "react";
import { Pagination } from "@mui/material";
import ConfirmDialog from "@/components/ConfirmDialog";
import useSize from "@/hooks/useSize";
import { data } from "autoprefixer";
export function Size() {
  const [idChoosing, setIdChoosing] = useState(null);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const [size, setSize] = useState();
  const [page, setPage] = useState(1);
  const { getSizes, deleteSize } = useSize();
  useEffect(() => {
    (async () => {
      const res = await getSizes(page);
      console.log({ res });
      setSize(res);
    })();
  }, [page]);
  const handleOpen = (id) => {
    setOpen(true);
    setIdChoosing(id);
  };
  const handleOK = () => {
    setOpen(false);
    (async () => {
      await deleteSize(idChoosing);
      let npage;
      console.log({ size });
      if (size?.data?.length === 1) {
        npage = page - 1;
      } else npage = page;
      const res = await getSizes(npage);
      setSize(res);
      setPage(npage);
    })();
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangePage = (e, npage) => {
    setPage(npage);
  };
  return (
    size && (
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
                placeholder="Search size"
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
                Add Size
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
                    "ratio",
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
                {size?.data.map(
                  (
                    { id, name, ratio },
                    key
                  ) => {
                    const className = `py-3 px-5 whitespace-nowrap ${
                      key === size.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;
                    return (
                      <tr key={key}>
                        <td className={className}>
                          <div>{name}</div>
                        </td>
                        <td className={className}>
                          <div>{ratio}</div>
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
            count={Math.ceil(size?.meta?.total / size?.meta?.per_page)}
            page={page}
            onChange={handleChangePage}
          />
        </div>
        <ConfirmDialog
          title={"Delete this size ?"}
          handleClose={handleClose}
          open={open}
          handleOK={handleOK}
        />
      </div>
    )
  );
}

export default Size;
