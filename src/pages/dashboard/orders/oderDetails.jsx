import BackBtn from "@/components/backBtn";
import useOrder from "@/hooks/useOrder";
import useStaff from "@/hooks/useStaff";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Divider } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function OrderDetails() {
  const [order, setOrder] = useState();
  let {id } = useParams();
  const { getOrder } = useOrder();
  useEffect(
    () => {
      ( async () => {
        const res = await getOrder(id);
        setOrder(res);
      })();

    }, []
  );
 
  const sum = order?.orderDetail.reduce( 
    (subtotal, a ) => subtotal + a.quantity*a.price, 0
  )

    


  return (
    order &&
    <> 
      <BackBtn to={"/dashboard/orders"} />
      <div className="gap-4 md:flex ">
        <div className="flex-1 space-y-4 ">
          <Card className="bg-green-100">
            <CardBody>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div className="flex  w-full flex-col">
                    <span className="text-red-600 uppercase font-bold" >order id {order?.order?.id}</span>
                  </div>
                  <div className="flex  w-full flex-col">
                    <span className="text-cyan-600 uppercase font-bold">order date</span>
                    <span>{order?.order?.createdAt}</span>
                  </div>
                  <div className="flex w-full flex-col">
                    <span className="text-cyan-600 uppercase font-bold">payment</span>
                    <span>{order?.order?.paid}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex max-w-[200px] w-full flex-col">
                    <span className="text-cyan-600 uppercase font-bold">ship to</span>
                    <span>{order?.order?.address.address}</span>
                  </div>
                  <div className="flex min-w-[85px] flex-col">
                    <span className="text-cyan-600 uppercase font-bold">paid</span>
                    <span>{order?.order?.paid}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-cyan-600 uppercase font-bold">status</span>
                    <span>success</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="bg-green-50">
            <CardBody>
              <Typography varient="h2" className="font-bold">
                ITEMS
              </Typography>
              {order?.orderDetail.map(({drinkName,drinkSize,quantity,price,topping_list}) => (
                
                <div className="mt-4 space-y-3" >
                  <div className="flex">
                    <div className="flex mt-4">
                      <img
                        src="https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2020/05/tra-dao.png"
                        alt=""
                        className="h-20 w-20"
                      />
                      <div className="ml-3">
                        <div className="font-bold">{drinkName}</div>
                        <div className="">{drinkSize}</div>
                        <div>Quantity: {quantity}</div>
                        
                        <div className="flex space-x-3">
                          <div >{price}</div>
                        </div>
                      </div>

                    </div>
                    <div className="flex">
                        {
                         
                          // ({topping_list})?.map(
                          //   (quan) =>
                          //   (
                          //     <div className="flex">
                          //       <div >asdna {quan}</div>
                          //     </div>
                          //   )
                          // )
                         
                        }
                        
                    </div>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>
        <div className="mt-4 flex-1 space-y-4 md:mt-0">
          <Card className="bg-green-100">
            <CardBody>
              <div className="space-y-3">
                <div className="space-y-6">
                  <div className="flex  w-full ">
                    <span className="mr-2 text-cyan-600 uppercase font-bold" > Name:  </span>
                    <span>  {order?.order?.staff.name}</span>
                  </div>
                  <div className="flex w-full l">
                    <span className="mr-2 text-cyan-600 uppercase font-bold">phoneNumber:</span>
                    <span> {order?.order?.staff.phoneNumber}</span>
                  </div>
                  <div className="flex w-full ">
                    <span className="mr-2 text-cyan-600 uppercase font-bold">Address:</span>
                    <span>  {order?.order?.staff.address}</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="bg-green-50">
            <CardBody>
              <div className="space-y-3">
                <div className="space-y-6">

                  <div className="flex  w-full flex-col">
                    <span className="text-cyan-600 uppercase font-bold ">Subtotal: </span>
                    <span>{sum} đ</span>
                  </div>
         
                  <div className="flex w-full flex-col ">
                    <span className="text-cyan-600 uppercase font-bold" >Discount</span>
                    <span>0 đ</span>
                  </div>
                  <div className="flex w-full flex-col ">
                    <span className="text-cyan-600 uppercase font-bold" >Tax</span>
                    <span>3000.00 đ</span>
                  </div>
                  <div className="flex w-full flex-col">
                    <span className="text-cyan-600 uppercase font-bold" >Shipping</span>
                    <span>20000.00 đ</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full border-b-2 border-gray-800" />
                    <div className="flex w-full flex-row">
                      <span className="font-bold font-semibold text-cyan-600 uppercase font-bold">Total</span>
                      <span className="ml-5 font-bold">{sum + 3000 + 20000 } đ</span>
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
