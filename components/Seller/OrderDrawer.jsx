import { Drawer } from "@mui/material";
import React from "react";
import { MdClear, MdOutlinePayment } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";

const OrderItem = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-5">
        <div className="w-[44px] bg-flipkartYellow rounded-md h-[44px]"></div>
        <div className="">
          <div className="font-[500] text-sm">Iphone 11 (4GB/64GB)</div>
          <div className="text-sm text-gray-400">4GB - 64GB</div>
        </div>
      </div>
      <div className="text-sm">₹350</div>
    </div>
  );
};

const OrderDrawer = ({ isOpen, handleClose }) => {
  return (
    <div>
      <Drawer open={isOpen} onClose={handleClose} anchor={"right"}>
        <div className="w-[500px] p-7 h-[100vh] overflow-y-auto">
          <div className="flex items-center justify-between w-full">
            <div className="text-xl font-[500]">Order #23301</div>
            <div className="" onClick={handleClose}>
              <MdClear size={24} />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="text-base">
              <span className="font-[500]">Date : </span> 13 March 2022
            </div>
            <div className="select">
              <select className="border-b-[2px] rounded-md px-5 py-1 outline-none">
                <option value="">Pending</option>
                <option value="">Shipped</option>
                <option value="">Delivered</option>
                <option value="">Cancelled</option>
              </select>
            </div>
          </div>
          <div className="mt-6 w-full">
            <div className="bg-bgPrimary-600 flex items-center py-[7px] px-2">
              <div className="font-semibold">Order Summary</div>
            </div>
            <div className="mt-5 w-full space-y-6 pb-5 border-b-[1px]">
              <OrderItem />
              <OrderItem />
              <OrderItem />
            </div>
            <div className="mt-5 space-y-1 text-sm">
              <div className="flex justify-between items-center">
                <div className="font-[600]">Sub Total</div>
                <div>₹1250</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-[600]">Discount</div>
                <div>₹0</div>
              </div>
              <div className="flex justify-between items-center pt-5">
                <div className="font-[600]">Total</div>
                <div className="font-[600]">₹1250</div>
              </div>
            </div>
          </div>
          <div className="mt-6 w-full">
            <div className="bg-bgPrimary-600 flex items-center py-[7px] px-2">
              <div className="font-semibold">Customer Details</div>
            </div>
            <div className="mt-5 text-gray-800">
              <div className="w-full flex justify-between">
                <div className="flex gap-2 items-center">
                  <div className="w-[40px] h-[40px] rounded-full bg-flipkartYellow"></div>
                  <div className="">Pratham Rasal</div>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <TbPhoneCall />
                  </div>
                  <div className="text-gray-600 text-sm">+91 7049930190</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5 px-2">
                <div>
                  <AiOutlineShoppingCart />
                </div>
                <div className="text-sm">
                  13/16 Vijay Nagar Opposite Jain Mandir, Near Sayaji
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2 px-2">
                <div>
                  <MdOutlinePayment />
                </div>
                <div className="text-sm">Cash on delivery</div>
              </div>
            </div>

            <div className="mt-6">
            <div className='bg-bgPrimary-600 flex items-center py-[7px] px-2 mt-6'>
                <div className='font-semibold'>Additional Details</div>
            </div>
            <div className="mt-4 text-sm space-y-1">
                <div className="flex items-center gap-2">
                    <div className="font-[600]">Warranty NFT : </div>
                    <div className="">Not Minted</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="font-[600]">Warranty : </div>
                    <div className="">2 Years</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="font-[600]">Customer Wallet Address : </div>
                    <div className="">Not Found</div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default OrderDrawer;
