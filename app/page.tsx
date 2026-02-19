"use client";
import dynamic from "next/dynamic";
import Scene from "./components/Scene";

// const Scene = dynamic(() => import("./components/Scene"), {
// 	// ssr: false,
// 	loading: () => <p>Loading...</p>,
// });

export default function Home() {
	return (
		<main className="relative h-dvh max-h-dvh w-dvw overflow-hidden">
			<Scene />
		</main>
	);
}
