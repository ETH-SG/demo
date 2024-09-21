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
          <button className="relative bottom-[6.5rem] left-3 text-black border rounded-full py-5 px-40 bg-green-500 justify-center"
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
          <button className="relative bottom-[6.5rem] left-3 text-black border rounded-full py-5 px-36 bg-green-500 justify-center"
          onClick={()=> router.push('/driver')}>
            Arrive
          </button>
        </div>
      ) : (
        <div>
          <Image
            src={driver2}
            alt="Picture of the author"
            className="max-w-[430px]"
          />
          <button className="relative bottom-[6.5rem] left-3 text-black border rounded-full py-5 px-40 bg-green-500 justify-center"
          onClick={()=> router.push('/driver')}>
            Arrive
          </button>
        </div>
      )}
    </div>
  );
}