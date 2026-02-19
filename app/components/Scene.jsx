"use client";

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Balloons from "./Balloons";
import Background from "./Background";
import Banner from "./Banner";
import DialogModal from "./DialogModal";

export default function Scene() {
  return (
    <>
      <Image
        className="animate-wiggle absolute right-0 bottom-0 z-1 w-[30dvw] max-w-75 translate-x-10 -translate-y-50"
        src="/rachel-badge-1.png"
        width={500}
        height={500}
        alt=""
      />
      <Image
        className="animate-wiggle absolute right-0 z-1 w-[40dvw] max-w-75"
        src="/flowers/disco-ball.png"
        width={500}
        height={500}
        alt=""
      />
      <Image
        className="animate-wiggle absolute -top-[3%] -left-[7%] z-1 w-[30dvw] max-w-75"
        src="/flowers/flowers-top-left.png"
        width={500}
        height={500}
        alt=""
      />
      <Image
        className="animate-wiggle absolute -top-[3%] left-[7%] z-1 w-[20dvw] max-w-40 -rotate-16"
        src="/flowers/cherry.png"
        width={500}
        height={500}
        alt=""
      />
      <Image
        className="animate-wiggle absolute bottom-0 z-1 w-[30dvw] max-w-75"
        src="/flowers/flowers-bottom-left.png"
        width={500}
        height={500}
        alt=""
      />
      <Image
        className="animate-wiggle absolute top-[15%] right-0 z-1 mx-auto w-[20dvw] max-w-50 rotate-170"
        src="/flowers/orange-disco.png"
        width={500}
        height={500}
        alt=""
      />
      <Image
        className="animate-wiggle absolute right-0 bottom-0 z-1 mx-auto w-[30dvw] max-w-60 translate-x-10 translate-y-20 -rotate-20"
        src="/flowers/glass.png"
        width={500}
        height={500}
        alt=""
      />
      <Banner />
      <Canvas className="bg-[#ff90e7]">
        <directionalLight intensity={1.4} position={[0, 2, 3]} />
        <Environment preset="lobby" />
        <Background />
        <Balloons />
      </Canvas>
      <DialogModal />
    </>
  );
}
