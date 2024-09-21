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

  if (width > 430) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div>
          <Image
            src={user1}
            alt="Picture of the author"
            className="max-w-[390px]"
          />
          <ReversifiWidget />
          <button
            className="relative left-4 bottom-28  text-black border rounded-full py-5 px-40 bg-green-500"
            onClick={() => getAllEscrow(primaryWallet.primaryWallet)}
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
          <button
            className="absolute bottom-12 left-3 text-black border rounded-full py-4 px-[162px] bg-green-500"
            onClick={() => router.push("/user2")}
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
          <button
            className="absolute bottom-12 left-4 text-[18px] text-black border rounded-full py-4 px-[180px] bg-green-500"
            onClick={() => router.push("/user2")}
          >
            Book
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
