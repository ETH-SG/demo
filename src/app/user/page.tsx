"use client";

import Image from "next/image";
import user1 from "../assets/user1.png";
import { useWindowSize } from "react-use";
import { useRouter } from "next/navigation";
import {
  ReversifiWidget,
  useReversifiContext,
  getAllEscrow,
} from "reversifi-sdk";

const User = () => {
  const { width } = useWindowSize();
  const router = useRouter();
  const primaryWallet = useReversifiContext();

  // async function test() {
  // console.log(getSigner(primaryWallet));
  // console.log(getAllEscrow(primaryWallet));
  // }

    const handleClick = () => {
    // Run the first command (call the getAllEscrow function)
    getAllEscrow(primaryWallet.primaryWallet);
    
    // Then navigate to the desired route
    router.push("/user2");
  };
  
  if (width > 430) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div>
          <Image
            src={user1}
            alt="Picture of the author"
            className="max-w-[390px]"
          />
          <div className="relative bottom-[160px]">
            <ReversifiWidget />
          </div>
          <button
            className="relative left-4 bottom-[140px] text-black border rounded-full py-5 px-40 bg-green-500"
            onClick={handleClick}
          >
            Book
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="relative">
      {width <= 390 ? (
        <div>
          <Image
            src={user1}
            alt="Picture of the author"
            className="max-w-[390px]"
          />
          <div className="relative bottom-[165px]">
            <ReversifiWidget />
          </div>
          <button
            className="absolute bottom-28 left-3 text-black border rounded-full py-4 px-[162px] bg-green-500"
            onClick={handleClick}
          >
            Book
          </button>
        </div>
      ) : (
        <div>
          <Image
            src={user1}
            alt="Picture of the author"
            className="max-w-[430px]"
          />
          <div className="relative bottom-[165px]">
            <ReversifiWidget />
          </div>
          <button
            className="absolute bottom-[75px] left-4 text-[18px] text-black border rounded-full py-4 px-[180px] bg-green-500"
            onClick={handleClick}
          >
            Book
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
