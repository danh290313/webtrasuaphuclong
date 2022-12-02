import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import DrinkCard from "@/components/card/DrinkCard";
import { getAllDrinks } from "@/services/drinksApi";
import { Grid } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import DrinkCardSkeleton from "@/components/card/DrinkCardSkeleton";
export function Drinks() {
  const [idChoosing, setIdChoosing] = useState(null);
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    setLoading(true);
    const getDrinks = async () => {
      try {
        const { data } = await getAllDrinks(signal);
        console.log(data);
        setDrinks(data);
        setLoading(false);
      } catch (err) {}
    };
    getDrinks();
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <div className="mt-12 mb-8 flex  flex-col gap-8">
      <div className="flex justify-between">
        <div>
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
            color={"orange"}
            className="flex items-center px-3 py-1 capitalize"
          >
            <Typography color="inherit" className="font-medium capitalize">
              Add drink
            </Typography>
          </Button>
        </Link>
      </div>
      <Grid container spacing={2}>
        {loading
          ? [1, 2, 3, 4].map(() => {
              return (
                <Grid item md={6} sm={12}>
                  <DrinkCardSkeleton />
                </Grid>
              );
            })
          : drinks?.map((drink, i) => (
              <Grid item md={6} sm={12}>
                <DrinkCard data={drink} key={drink.id} />
              </Grid>
            ))}
      </Grid>
      {/* <Card>
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
                 
                      <td className={className}>
                        <div className="flex space-x-3">
                          <Link to={id}>
                            <Tooltip content="Edit">
                              <PencilSquareIcon className="h-5 w-5 cursor-pointer text-light-blue-600" />
                            </Tooltip>
                          </Link>
                          <Link to={`info/${id}`}>
                            <Tooltip content="see receipt and topping">
                              <InformationCircleIcon className="h-5 w-5 cursor-pointer text-light-blue-600" />
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
      </Card> */}
    </div>
  );
}

export default Drinks;
