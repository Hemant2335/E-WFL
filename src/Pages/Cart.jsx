import React from "react";
import { Wrapper , Cartcard } from "../Components";
import { useContext } from "react";
import Context from "../context/Context";

const Cart = () => {
  const { User } = useContext(Context);

  return (
    <Wrapper>
      <h1 className="mb-[10vh] font-montserrat font-bold text-2xl mt-[5vh]">
        Your Cart
      </h1>
      <div className="flex md:flex-row flex-col gap-[5vh]">
        <div className="w-full  flex flex-col gap-[5vh]">
          {User?.cart?.map((item) => {
            console.log("I am Item",item);
            return (<Cartcard/>)
          })}
        </div>
        <div className="shadow-3xl p-4 rounded-xl h-fit">
          <h2 className="font-medium font-montserrat text-xl mb-8">Summary</h2>
          <div className="bg-Grey font-montserrat md:h-[200px] md:w-[350px] w-auto h-[250px]  rounded-md p-4">
            <h3 className="text-start font-medium mb-2">SubTotal : ₹ 500</h3>
            <hr />
            <div className="text-start mt-2">
              This Tells you about total Expenses you would cost after buying
              the products present in your cart and also Never doubt our
              calculations
            </div>
          </div>
          <button className="px-10 py-2 border-2 font-montserrat hover:bg-[#01796f] hover:scale-105  mt-4 rounded-lg  font-semibold  transition-transform active:scale-105">
            Check Out
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
