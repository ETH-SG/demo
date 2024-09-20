import { useRouter } from "next/router";
import React from "react";

const Card = ({ order }: any) => {
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
