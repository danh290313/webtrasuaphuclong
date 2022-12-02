import { Card, CardBody, Typography } from "@material-tailwind/react";

function OrderDetails() {
  return (
    <div className="flex space-x-4">
      <div className="space-y-4">
        <Card>
          <CardBody>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="flex  w-full flex-col">
                  <span>order date</span>
                  <span>MAY 11,2020, 5:54:24 pm</span>
                </div>
                <div className="flex w-full flex-col">
                  <span>payment</span>
                  <span>cash</span>
                </div>
                <div className="flex w-full flex-col">
                  <span>status</span>
                  <span>success</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex  w-full flex-col">
                  <span>address</span>
                  <span>1642 Cambridge Drive, Phoenix, 85029 Arizona</span>
                </div>
                <div className="flex  w-full flex-col">
                  <span>paid</span>
                  <span>yes</span>
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
                      <div>Trà đào</div>
                      <div>
                        Material Tailwind is an easy to use components library
                        for Tailwind CSS
                      </div>
                      <div className="">Des: Đá: Không, Đường: ít</div>
                      <div>45000.00 đ</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
      <div className="space-y-4">
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
      </div>
    </div>
  );
}

export default OrderDetails;
