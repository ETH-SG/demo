'use client';
import Image from "next/image";
import driver1 from "../assets/driver1.png";
import { useWindowSize } from "react-use";
import Card from "./components/card";

const dummyArray = ["order1", "order2", "order3", "order4"];


const User = () => {
  const { width } = useWindowSize();

  if (width > 430) {
    return (
      <div className="h-screen flex items-center justify-center">
      <div className="relative">
        <Image
          src={driver1}
          alt="Picture of the author"
          className="max-w-[390px]"
        />
        <div className="absolute w-80 p-5 bg-green-500 bottom-10 left-11 rounded-xl">
          <p className="text-black font-bold mb-2">Pending User:</p>
          {dummyArray.length === 0 ? (
            <p className="text-black italic">No orders available</p>
          ) : (
            <ul className="space-y-3">
              {dummyArray.map((order, index) => (
                <li key={index}>
                  <Card order={order} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
    );
  }

  return (
    <div className="relative">
      {width <= 390 ? (
        <div>
          <Image
            src={driver1}
            alt="Picture of the author"
            className="max-w-[390px]"
          />
        </div>
      ) : (
        <div>
          <Image
            src={driver1}
            alt="Picture of the author"
            className="max-w-[430px]"
          />
        </div>
      )}
    </div>
  );
};

export default User;
