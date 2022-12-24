import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Tooltip,
  Button,
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
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

// import { authorsTableData, projectsTableData } from "@/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderCard from "@/components/card/OrderCard";
import DrinkCardSkeleton from "@/components/card/DrinkCardSkeleton";
import { Grid } from "@mui/material";
import useOrder from "@/hooks/useOrder";
import { useEffect } from "react";



const Order = [
  {
    id: "123",
    created_at: "11/11/1111",
    paid: "True",
    note: "description",
    status: { id: 18, value: "shipping" },
  },
  {
    id: "123",
    created_at: "11/11/1111",
    paid: "True",
    note: "description",
    status: { id: 18, value: "delivery" },
  },
  {
    id: "123",
    created_at: "11/11/1111",
    paid: "True",
    note: "description",
    status: { id: 8, value: "delivered" },
  },
  {
    id: "123",
    created_at: "11/11/1111",
    paid: "True",
    note: "description",
    status: { id: 12, value: "not delivery" },
  },
  {
    id: "123",
    created_at: "11/11/1111",
    paid: "",
    note: "description",
    status: { id: 18, value: "shipping" },
  },
];
const filter = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Online",
    value: "online",
  },
  {
    label: "Offline",
    value: "offline",
  },
];



export function Orders() {

  const [idChoosing, setIdChoosing] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getOrders } = useOrder();
  useEffect(() => {
    setLoading(true);
    const getOrderss = async () => {
      try {
        const res = await getOrders(1);
        setOrders(res?.data);
        setLoading(false);
      } catch (err) {
        toastError(err.message);
      }
    };
    getOrderss();
  }, []);
  console.log("danh ",orders);
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
              placeholder="Search Orders"
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
              Add Orders
            </Typography>
          </Button>
        </Link>
      </div>
      <div>
        <Tabs value="all">
          <TabsHeader className="ml-4 max-w-[300px]">
            {filter.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {filter.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {value === "online" || value === "all" ? (
                 // <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">

                    <Grid container spacing={2}>
                      {false
                        ? [1, 2, 3, 4].map((v, i) => {
                          return (
                            <Grid key={i} item md={6} sm={12}>
                              <DrinkCardSkeleton />
                            </Grid>
                          );
                        })
                        : orders.map((order, i) => (
                          
                          <Grid key={i} item md={6} sm={12}>
                            <OrderCard data={order} />
                          </Grid>
                        ))}
                    </Grid>
                 // </div>
                ) : (
                  "123"
                )}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>

      {/* <Card>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Id", "created_at", "paid", "note", "status", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[15px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Order.map(({ id, created_at, paid, note, status }, key) => {
                const className = `py-3 px-5 whitespace-nowrap bg-cyan-50  ${
                  key === Order.length - 1 ? "" : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={key}>

                    <td className={className}>
                      <div>{id}</div>
                    </td>
                    <td className={className}>
                      <div>{created_at}</div>
                    </td>
                    <td className={className}>
                      <div>{paid}</div>
                    </td>

                    <td className={className}>
                      <div>{note}</div>
                    </td>
                    <td className={className}>
                      <div>{status.value}</div>
                    </td>

                    <td className={className}>
                      <div className="flex space-x-3">
                        

                        <Link to={id}>
                          <Tooltip content="Edit">
                            <PencilSquareIcon className="h-9 w-5 cursor-pointer text-light-blue-600" />
                          </Tooltip>
                        </Link>

                        <button onClick={() => handleOpen(id)}>
                          <Tooltip content="Delete">
                            <TrashIcon className="h-5 w-5 cursor-pointer text-red-500" />
                          </Tooltip>
                        </button>
                        
                      </div>
                    </td>
             
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>  */}
      {/* // <Dialog open={open} handler={handleOpen} size="xl">
      //   <DialogBody>
      //     <Typography color="inherit" className=" font-medium capitalize">
      //       Do you delete the order?
      //     </Typography>
      //   </DialogBody>
      //   <DialogFooter>
      //     <div className="flex">
      //       <Button
      //         variant="text"
      //         color="red"
      //         onClick={handleOpen}
      //         className="mr-1"
      //       >
      //         <span>Cancel</span>
      //       </Button>
      //       <Button
      //         variant="gradient"
      //         color="green"
      //         onClick={() => handleResetPass()}
      //       >
      //         <span>Confirm</span>
      //       </Button>
      //     </div>
      //   </DialogFooter>
      // </Dialog> */}
    </div>
  );
}

export default Orders;
