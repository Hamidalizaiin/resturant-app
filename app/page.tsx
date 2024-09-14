'use client'
import Image from "next/image";
import cornerWave from "@/app/public/sideWave.png";
import hero from "@/app/public/heroImage.png";
import Item from "./component/Item";

export default function Home() {
  return (
    <>

      <section className="relative bg-priamry w-full h-60 flex items-center sm:h-72 sm:justify-center md:h-80  ">
        <Image
          src={cornerWave}
          alt="cornerWave"
          className="absolute -top-7 left-0 w-32 md:w-60 md:-top-12"
        />
        <div className="w-1/2 flex justify-center">
          <Image
            src={hero}
            alt="hero"
            className=" w-auto sm:w-3/4 lg:w-1/2"
          />
        </div>
        <div className=" w-1/2 flex justify-center -mt-14 md:items-start">
          <div className="text-right text-secondary mt-7 pl-0 sm:pl-12">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              DELIVERING
            </h1>{" "}
            <p className="text-2xl font-bold -mr-4   sm:-mr-12 sm:text-3xl md:text-4xl">
              CHEEZY
            </p>{" "}
          </div>
        </div>
      </section>
      <Item />
    </>
  );
}
