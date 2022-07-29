import React from "react";
import AccountLayout from "../../../components/AccountLayout";
import { BsCheck2 } from "react-icons/bs";
import Image from "next/image";
import { verifyAuthentication } from "../../../utils/verifyAuth";
import { fetchOrderAPI } from "../../../APIs/order";


export const getServerSideProps = async(ctx) => {
  const auth = verifyAuthentication(ctx.req);
  if (auth.state) {
    try {
      console.log(ctx.query.id)
    const orderData = await fetchOrderAPI(ctx.query.id,auth.token);
    return {props : {order : orderData.data.order, user : auth.decodedData.user}};
    }catch(err) {
      console.log(err);
      return {props : {user : auth.decodedData.user}};
    }
  }
  return {
    redirect : {
      destination : '/auth'
    }
  }
};



const OrderItem = ({details}) => {
  return (
    <div className="flex items-center space-x-5 p-1 border-[1px] rounded-md">
      <div className="p-1 h-[50px] w-[50px] relative">
        <Image src={details.image} layout='fill' objectFit="contain" />
      </div>
      <div>
        <div className="font-semibold">{details.name}</div>
        <div className="text-accent text-sm ">Price : ₹{details.cost}</div>
      </div>
      <hr />
    </div>
  );
};

const Order = ({order,user}) => {
  return (
    <AccountLayout>
      <div className="font-default 2xl:px-5">
        <div className="p-2">
          <div className="text-sm text-gray-500 font-semibold">
            #{order?.orderId}
          </div>
          <div className="mt-1 text-xl font-poppins font-semibold">
            ORDER DETAILS
          </div>
        </div>
        <div className="mt-2 p-2">
          <div className="text-green-600 text-lg ">Delivered</div>
          <div className="mt-5">
            <div className="h-[5px] flex items-center justify-between w-[100%] bg-flipkartBlue">
              <div className="flex flex-col mt-[15px] justify-center">
                <div className="h-[20px] w-[20px] bg-flipkartBlue rounded-full flex items-center justify-center text-white">
                  <BsCheck2 />
                </div>
                <div className="text-xs">Ordered</div>
              </div>
              <div className="flex flex-col mt-[15px] items-center justify-center">
                <div className="h-[20px] w-[20px] bg-flipkartBlue rounded-full flex items-center justify-center text-white">
                  <BsCheck2 />
                </div>
                <div className="text-xs">Dispatched</div>
              </div>
              <div className="flex flex-col mt-[15px] items-end">
                <div className="h-[20px] w-[20px] bg-flipkartBlue rounded-full flex items-center justify-center text-white">
                  <BsCheck2 />
                </div>
                <div className="text-xs">Delivered</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 p-2">
          <div className="font-semibold text-lg">Items in this Order</div>
          <div className="mt-2 space-y-3">
            <OrderItem details={order.product}/>
          </div>
        </div>
        <div className="mt-5 p-2">
          <div className="font-semibold text-lg">Order Summary</div>
          <div className="mt-3">
            <div className="justify-between flex">
              <div>Items Subtotal(3) : </div>
              <div>₹{order.totalCost}</div>
            </div>
            <div className="justify-between flex">
              <div>Delivery Charges : </div>
              <div>₹{0}</div>
            </div>
            <div className="justify-between flex">
              <div>Total Tax : </div>
              <div>₹{0}</div>
            </div>
            <div className="justify-between flex mt-3">
              <div className="font-bold">Grand Total : </div>
              <div className="font-bold">₹{order.totalCost}</div>
            </div>
            <div className="justify-between flex mt-1">
              <div className="font-bold text-green-600">Total Savings : </div>
              <div className="font-bold text-green-600"> ₹{0}</div>
            </div>
          </div>
        </div>
        <div className="mt-5 p-2">
          <div className="text-lg font-semibold">Delivery Address</div>
          <div className="mt-2">
            <div>Kunal Sangtiani</div>
            <div>32/5 Rajmahal Colony, Manik Bagh Road</div>
            <div>Indore, India</div>
          </div>
        </div>
        <div className="flex mt-7 p-2">
          <div className="px-3 py-1 bg-red-500 cursor-pointer text-white rounded-md">
            Cancel Order
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default Order;
