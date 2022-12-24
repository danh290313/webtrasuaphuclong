import {
  DocumentIcon,
  DocumentTextIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { RecipesIcon } from "@/assets/icon";
function DrinkCard({ data }) {
  return (
    <Card className="w-full">
      <CardBody>
        <div className="flex justify-between">
          <img src={data.image} alt="" className="mr-10 w-[50px]" />
          <div className="flex justify-between">
            <div>
              <Chip value={data.active?"active":"unactive"} className="bg-green-400" />
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-full items-center justify-between">
          <Typography variant="h5" className=" cursor-default">
            {data.name}
          </Typography>

          <Chip value={data.price} />
        </div>
        <p
          // variant="small"
          className="max-h-[100px] cursor-default  overflow-hidden"
        >
          {data.description}
        </p>
        <div className="flex">
          <div>
            {/* <span className="mr-10 cursor-default">Sale on day: 0</span> */}
            <div className="text-bold">slug: {data.slug}</div>
          </div>
          <div className="ml-auto flex items-center justify-between space-x-3">
            <Link to={`${data.id}`}>
              <Tooltip content="see info">
                <InformationCircleIcon className="h-7 w-7 text-light-blue-500" />
              </Tooltip>
            </Link>
            <Link to={`info/${data.id}`}>
              <Tooltip content="see recipes">
                <DocumentTextIcon className="h-6 w-6 text-light-blue-500" />
              </Tooltip>
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default DrinkCard;
