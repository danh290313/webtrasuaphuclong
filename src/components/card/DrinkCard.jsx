import { InformationCircleIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function DrinkCard() {
  return (
    <Card className="w-full">
      <CardBody>
        <div className="flex justify-between">
          <img
            src="https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2020/05/tra-dao.png"
            alt=""
            className="mr-10 w-[50px]"
          />
          <div className="flex justify-between">
            <div>
              <Chip value="active" className="bg-green-400" />
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-full items-center justify-between">
          <Typography variant="h5" className=" cursor-default">
            Trà đào
          </Typography>

          <Chip value="40.0000 đ" />
        </div>
        <p
          // variant="small"
          className="max-h-[100px] cursor-default  overflow-hidden"
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one ofelief, Lorem Ipsum
          is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one ofelief, Lorem Ipsum is not simply random text. It has
          roots in a piece of classical Latin literature from 45 BC, making it
          over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of
        </p>
        <div className="flex">
          <div>
            <span className="mr-10 cursor-default">Sale on day:11/11/1111</span>
            <div className="text-bold">slug: /tradao</div>
          </div>
          <div className="flex items-center justify-between">
            <Link to="recipes">
              <Tooltip content="see recipes">
                <InformationCircleIcon className="h-7 w-7 text-light-blue-500" />
              </Tooltip>
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default DrinkCard;
