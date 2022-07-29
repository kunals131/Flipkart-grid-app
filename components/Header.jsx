import React from "react";
import Image from "next/image";
import WhiteLogo from "../public/assets/whitelogo.svg";
import {BsFillPersonFill} from 'react-icons/bs';
import { FiSearch } from "react-icons/fi";
import {MdShoppingCart} from 'react-icons/md';
const Header = () => {
  return (
    <div className="py-3 px-32 bg-flipkartBlue">
      <div className="flex items-center justify-between">
        <div className="flex gap-10 items-center">
          <div className="w-[140px]">
            <Image src={WhiteLogo} alt="Logo" />
          </div>
          <div className="w-[400px] ml-8 relative flex items-center justify-center">
            <input
              className="w-full py-[6px] rounded-sm bg-bgPrimary-600 px-3 text-textPrimary outline-none  placeholder:text-sm"
              placeholder="Search for items"
            />
            <div className="absolute right-3 ">
              <FiSearch className="text-gray-500" size={20} />
            </div>
          </div>
          <div className="px-10 py-[6px] rounded-sm font-semibold cursor-pointer bg-bgPrimary-600 text-flipkartBlue">Login</div>
          <div className="text-white font-[500] cursor-pointer hover:underline">Become a Seller</div>
        </div>
        <div className="flex items-center gap-5 text-white">
          
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="relative"><MdShoppingCart size={25}/><div className="text-xs absolute bg-flipkartYellow rounded-full text-black w-[15px] h-[15px] flex items-center justify-center -top-1 -right-1">1</div></div>
            <div className="font-[500]">Cart</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
