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
				className="absolute z-1 right-0 w-[40dvw] max-w-75"
				src="/flowers/disco-ball.png"
				width={500}
				height={500}
				alt=""
			/>
			<Image
				className="absolute z-1 -top-[3%] -left-[7%] w-[30dvw] max-w-75"
				src="/flowers/flowers-top-left.png"
				width={500}
				height={500}
				alt=""
			/>
			<Image
				className="absolute z-1 -top-[3%] left-[10%] w-[30dvw] max-w-40 -rotate-16"
				src="/flowers/cherry.png"
				width={500}
				height={500}
				alt=""
			/>
			<Image
				className="absolute z-1 bottom-0 w-[30dvw] max-w-75"
				src="/flowers/flowers-bottom-left.png"
				width={500}
				height={500}
				alt=""
			/>
			<Image
				className="absolute z-1 top-[15%] w-[20dvw] max-w-50 right-0 mx-auto rotate-170"
				src="/flowers/orange-disco.png"
				width={500}
				height={500}
				alt=""
			/>
			<Image
				className="absolute z-1 translate-y-20 bottom-0 w-[30dvw] max-w-60 right-0 mx-auto -rotate-6 translate-x-10"
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
