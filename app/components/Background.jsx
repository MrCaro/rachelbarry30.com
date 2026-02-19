import { useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";

export default function Background() {
	const { viewport } = useThree();

	return (
		<group>
			<Text
				scale={viewport.width / 11}
				fontSize={3}
				font="/fonts/NotoSans-Bold.ttf"
				position={[0, 0, -0.5]}
				fillOpacity={0.4}
				color={"#9810fa"}
			>
				RACHEL
			</Text>
		</group>
	);
}
