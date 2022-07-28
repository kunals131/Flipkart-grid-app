import React from "react";
import ProductImg from "../../public/assets/product.png";
import Image from "next/image";
import {AiFillStar} from 'react-icons/ai';

const Rating = ()=>{
    return (
        <div className="flex items-center gap-4">
            <div className="flex px-4 py-[4px] bg-green-600 text-white rounded-xl">
                <div className="text-xs">4.3</div>
                <div><AiFillStar/></div>
            </div>
            <div className="text-sm text-gray-400">0 Ratings & 0 Reviews</div>
        </div>
    )
}

const Product = () => {
  return (
    <div className="grid grid-cols-[0.2fr_0.8fr] gap-2 items-center w-full py-7 px-2 pr-8 border-b-[1px] border-b-gray-300">
      <div>
        <Image src={ProductImg} />
      </div>
      <div className="grid grid-cols-[0.8fr_0.3fr] w-full">
        <div className="">
          <div className="text-xl font-[600]">Apple iPhone 11 (64GB ROM, 4GB RAM)</div>
          <div className="mt-2"><Rating/></div>
          <div className="mt-5 w-[80%] text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, fuga dicta? Quaerat aliquid dolorem repellat mollitia ut, iste deserunt. In!..</div>
          <div className="mt-2">
            <div className="font-[450] text-gray-300 text-sm">Available Offers</div>
            <ul className="mt-1 text-sm font-[350] text-gray-400">
                <li>- 2 Years additional Warranty</li>
                <li>- 30% Off on all services</li>
                {/* <li>2 Years additional Warranty</li> */}
            </ul>
          </div>
        </div>
        <div className="flex w-full items-end flex-col text-right">
            <div className="text-2xl font-semibold">₹32,999</div>
            <div className="flex text-gray-500 mt-2 gap-3 justify-end text-sm w-full">
                <div className=""><strike>₹72000</strike></div>
                <div className="text-green-400   font-semibold ">56% Off</div>
            </div>
            <div className=" mt-7 py-2 cursor-pointer px-8 bg-flipkartBlue w-fit rounded-sm">Add to Cart</div>

        </div>
      </div>
    </div>
  );
};

export default Product;
