'use client';
import { useRouter } from "next/navigation";
import React from "react";

interface IOrder {
  order: string;
}

const Card = ({ order }: IOrder) => {
  console.log(order);
  const router = useRouter();

  return (
    <div className="flex justify-between items-center bg-white p-2 shadow-md rounded-md">
      <h1 className="text-black font-medium">{order}</h1>
      <button 
        onClick={() => router.push('/driver2')} 
        className="border border-green-600 text-green-600 px-3 py-1 rounded hover:bg-green-100 transition"
      >
        Choose
      </button>
    </div>
  );
};

export default Card;