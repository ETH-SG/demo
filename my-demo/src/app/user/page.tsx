import Image from "next/image";
import user1 from "../assets/user1.png";
import { useWindowSize } from "react-use";
import { useRouter } from "next/router";

const user = () => {
  const { width } = useWindowSize();
  const router = useRouter();

  if (width > 430) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div>
          <Image
            src={user1}
            alt="Picture of the author"
            className="max-w-[390px]"
          />
          <button
            className="relative left-4 bottom-28  text-black border rounded-full py-5 px-40 bg-orange-500"
            onClick={() => router.push("/user2")}
          >
            book
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
            className="absolute bottom-14 left-3 text-black border rounded-full py-4 px-40 bg-orange-500"
            onClick={() => router.push("/user2")}
          >
            book
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
            className="absolute bottom-16 left-4 text-black border rounded-full py-6 px-44 bg-orange-500"
            onClick={() => router.push("/user2")}
          >
            book
          </button>
        </div>
      )}
    </div>
  );
};

export default user;
