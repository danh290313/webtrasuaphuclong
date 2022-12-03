import BackBtn from "@/components/backBtn";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Divider } from "@mui/material";

function OrderDetails() {
  return (
    <>
      <BackBtn to={"/dashboard/orders"} />
      <div className="gap-4 md:flex">
        <div className="flex-1 space-y-4">
          <Card>
            <CardBody>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div className="flex  w-full flex-col">
                    <span>order id</span>
                    <span>#123123123</span>
                  </div>
                  <div className="flex  w-full flex-col">
                    <span>order date</span>
                    <span>MAY 11,2020, 5:54:24 pm</span>
                  </div>
                  <div className="flex w-full flex-col">
                    <span>payment</span>
                    <span>cash</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex w-full flex-col">
                    <span>ship to</span>
                    <span>1642 Cambridge Drive, Phoenix, 85029 Arizona</span>
                  </div>
                  <div className="flex min-w-[85px] flex-col">
                    <span>paid</span>
                    <span>yes</span>
                  </div>
                  <div className="flex flex-col">
                    <span>status</span>
                    <span>success</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Typography varient="h2" className="font-bold">
                ITEMS
              </Typography>
              {[1, 2, 3, 4, 5, 6].map(() => (
                <div className="mt-4 space-y-3">
                  <div className="flex">
                    <div className="flex">
                      <img
                        src="https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2020/05/tra-dao.png"
                        alt=""
                        className="h-20 w-20"
                      />
                      <div className="ml-3">
                        <div className="font-bold">Trà đào x2</div>
                        <div className="">Des: Đá: Không, Đường: ít</div>
                        <div>Customer note: ko trà ko đào</div>
                        <div className="flex space-x-3">
                          <div className="line-through">45000.00 đ</div>{" "}
                          <div>300000.00 đ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>
        <div className="mt-4 flex-1 space-y-4 md:mt-0">
          <Card>
            <CardBody>
              <div className="space-y-3">
                <div className="space-y-6">
                  <div className="flex  w-full flex-col">
                    <span>user name</span>
                    <span>tu nguyen</span>
                  </div>
                  <div className="flex w-full flex-col">
                    <span>user mobile</span>
                    <span>0934213413</span>
                  </div>
                  <div className="flex w-full flex-col">
                    <span>user address</span>
                    <span>1642 Cambridge Drive, Phoenix, 85029 Arizona</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div className="space-y-3">
                <div className="space-y-6">
                  <div className="flex  w-full flex-col">
                    <span>Subtotal </span>
                    <span>2000000.00 đ</span>
                  </div>
                  <div className="flex w-full flex-col">
                    <span>Discount</span>
                    <span>-500000.00 đ</span>
                  </div>
                  <div className="flex w-full flex-col">
                    <span>Tax</span>
                    <span>3000.00 đ</span>
                  </div>
                  <div className="flex w-full flex-col">
                    <span>Shipping</span>
                    <span>20000.00 đ</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full border-b-2 border-gray-800" />
                    <div className="flex w-full flex-col">
                      <span className="font-bold font-semibold">Total</span>
                      <span>1500000.00 đ</span>
                    </div>
                    <div className="w-full border-b-2 border-gray-900" />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
