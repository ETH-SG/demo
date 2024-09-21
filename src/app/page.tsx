'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen flex justify-center items-center gap-10">
      <button onClick={() => router.push("/user")}> USER</button>
      <button onClick={() => router.push("/driver")}> DRIVER</button>
    </div>
  );
}
