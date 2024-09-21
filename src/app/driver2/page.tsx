'use client'
import Image from "next/image";
import driver2 from "../assets/userDriver.png";
import { useWindowSize } from "react-use";
import { useRouter } from "next/navigation";

export default function Home() {
  const { width } = useWindowSize();
  const router = useRouter();

  if (width > 430) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div>
          <Image
            src={driver2}
            alt="Picture of the author"
            className="max-w-[390px]"
          />
          <button className="relative bottom-[7.5rem] left-3 text-black border rounded-full py-5 px-40 bg-orange-500"
          onClick={()=> router.push('/driver')}>
            Arrive
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
            src={driver2}
            alt="Picture of the author"
            className="max-w-[390px]"
          />
          {/* <button className="absolute bottom-14 left-3 text-black border rounded-full py-4 px-40 bg-orange-500">
            deploy
          </button> */}
        </div>
      ) : (
        <div>
          <Image
            src={driver2}
            alt="Picture of the author"
            className="max-w-[430px]"
          />
          {/* <button className="absolute bottom-16 left-4 text-black border rounded-full py-6 px-44 bg-orange-500">
            deploy
          </button> */}
        </div>
      )}
    </div>
  );
}