'use client';
import { useRouter } from "next/navigation";
import React from "react";

interface IOrder {
  order:string
}

const Card = ({ order }: IOrder) => {
  console.log(order);
  const router = useRouter();

  return (
    <div className=" text-black flex gap-3">
      <h1>caradsasdd {order}</h1>
      <button  onClick={()=>router.push('/driver2')}>
        choose
      </button>
    </div>
  );
};

export default Card;
