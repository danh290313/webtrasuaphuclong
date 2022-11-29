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
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
// import { authorsTableData, projectsTableData } from "@/data";
import { Link } from "react-router-dom";
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
export function Customer() {
  const handleResetPass = (id) => {
    console.log(id);
  };
  return (
    <div className="mt-12 mb-8 flex flex-col gap-8">
      <div className="flex justify-between">

      
        <div>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900
               focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white
                dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
              <tr>
                {[
                  "name",
                  "gender",
                  "phone",
                  "dob",
                  "active",
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
              {customer.map(
                (
                  { id, 
                    name,
                    gender,
                    phone,
                    dob,
                    active},
                  key
                ) => {
                  const className = `py-3 px-5 ${
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
                        <div className="flex space-x-2">
                          <Link to={id}>
                            <Button
                              variant={"gradient"}
                              color={"blue"}
                              className="flex items-center px-3 py-1 capitalize"
                            >
                              <Typography
                                color="inherit"
                                className="font-medium capitalize"
                              >
                                Edit
                              </Typography>
                            </Button>
                          </Link>
                          {/* </td>
                          <td className={className}> */}

                          <Button
                            variant={"gradient"}
                            color={"blue"}
                            className="flex items-center px-3 py-1 capitalize"
                            onClick={() => handleResetPass(id)}
                          >
                            <Typography
                              color="inherit"
                              className="whitespace-nowrap font-medium capitalize"
                            >
                              Reset pass
                            </Typography>
                          </Button>
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
    </div>
  );
}

export default Customer;
