import { useThree } from "@react-three/fiber";
import { Text, useAspect, useTexture } from "@react-three/drei";
import { useRef } from "react";
import { vertex, fragment } from "./shader";

export default function Background() {
  const { viewport } = useThree();
  const texture = useTexture("/flowers/bg-gradient.png");
  const { width, height } = texture.image;

  const scale = useAspect(width, height, 0.15);

  const uniforms = useRef({
    uTexture: { value: texture },
  });

  return (
    <group>
      <Text
        scale={viewport.width / 11}
        fontSize={3}
        font="/fonts/NotoSans-Bold.ttf"
        position={[0, 0, -0.5]}
        fillOpacity={0.2}
        color={"#C82A5A"}
      >
        PARTY
      </Text>
      {/* <mesh scale={scale}>
				<planeGeometry args={[1, 1, 15, 15]} />
				<shaderMaterial
					vertexShader={vertex}
					fragmentShader={fragment}
					uniforms={uniforms.current}
				/>
			</mesh> */}
    </group>
  );
}
