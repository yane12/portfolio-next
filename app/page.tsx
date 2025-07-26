import Image from "next/image";
import Navbar from "./ui/navbar";

export default function Home() {
  return (
    <div className="px-8">
      <Navbar />
      <div className="p-8 flex">
        <div className="flex-1/2">
           <h1>Veder</h1>
          <p>Crafting Responsive and User-Friendly Websites</p>
        </div>
       
        <div className="flex-1/2">
          <Image alt='snow' src='/laptop.jpg' width={500} height={500} className="w-full" />
        </div>
      </div>
    </div>
  );
}
