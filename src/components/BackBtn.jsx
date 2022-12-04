import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function BackBtn({ to }) {
  const nav = useNavigate();
  return (
    <div className="my-2 hover:[&_div]:underline  ">
      <button onClick={() => nav(to)}>
        <div className="flex items-center">
          <ArrowLeftIcon className="h-5 w-5" />
          <div className="ml-4 font-semibold ">Back</div>
        </div>
      </button>
    </div>
  );
}

export default BackBtn;
