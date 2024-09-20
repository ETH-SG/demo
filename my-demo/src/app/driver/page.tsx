import Image from "next/image";
import driver1 from "../assets/driver1.png";
import { useWindowSize } from "react-use";
import Card from "./components/card";

const dummyArray = ["order1", "order2", "order3", "order4"];

const user = () => {
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
          <div className="absolute w-80 h-60 bg-slate-400 bottom-10 left-11  rounded-xl">
            <ul>
              {dummyArray.map((order, index) => (
                <li key={index}>
                  <Card order={order} />
                </li>
              ))}
            </ul>
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

export default user;
