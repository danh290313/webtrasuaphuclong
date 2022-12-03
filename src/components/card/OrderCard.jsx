import { drinksSchema } from "@/utils/schemas";
import {
  InformationCircleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { Card, CardBody, Tooltip, Typography } from "@material-tailwind/react";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
const drinks = [
  {
    imageSource:
      "https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2020/05/tra-dao.png",
  },
  {
    imageSource:
      "https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2020/05/tra-dao.png",
  },
  {
    imageSource:
      "https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2020/05/tra-dao.png",
  },
  {
    imageSource:
      "https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2020/05/tra-dao.png",
  },
];
function OrderCard() {
  return (
    <Card variant="filled">
      <CardBody>
        <div className="flex justify-between text-xs font-bold uppercase">
          <div>order id-111</div>
          <div>order day - 11/11/1111 , 03:39 pm</div>
        </div>
        <div className="flex items-center">
          <div class="mt-3 flex h-10 w-10 -space-x-6  ">
            {[0, 1, 2].map((i) => {
              return (
                drinks[i] && (
                  <img
                    key={i}
                    class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src={drinks[i].imageSource}
                    alt=""
                    className=""
                  />
                )
              );
            })}
          </div>
          <div class=" ml-10 text-sm font-medium">
            {drinks.length - 3 > 0 ? `+ ${drinks.length - 3} others` : ""}
          </div>
          <div className="ml-auto">
            <div className=" text-xs font-bold uppercase">payment- cash</div>
            <div>
              <div>
                <div className="mt-2 max-w-[85px] items-center rounded-lg  bg-green-500 text-center font-bold text-white">
                  pending
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <Divider />
        </div>
        <div className="flex flex-col ">
          <span variant="h6">1642 Cambridge Drive, Phoenix, 85029 Arizona</span>
          <span variant="h6">Total price: 45000.00 đ</span>
          <div className="flex ">
            <span variant="h6">Contact user: 0942342444</span>
            <div className="ml-auto flex space-x-5">
              <Link to={"123"}>
                <Tooltip content="see details">
                  <InformationCircleIcon className=" h-5 w-5 text-blue-500" />
                </Tooltip>
              </Link>
              <Link to={"edit/123"}>
                <Tooltip content="edit">
                  <PencilSquareIcon className=" h-5 w-5 text-red-500" />
                </Tooltip>
              </Link>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default OrderCard;
