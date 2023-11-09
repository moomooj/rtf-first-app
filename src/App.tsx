import {
  PivotControls,
  OrbitControls,
  TransformControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useRef } from "react";
import styled from "styled-components";
import { Mesh } from "three";

function App() {
  const cube = useRef<Mesh>(null!);
  const sphere = useRef<Mesh>(null!);
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <PivotControls anchor={[0, 0, 0]} depthTest={false}>
        <mesh ref={sphere} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Label
            center
            distanceFactor={6}
            position={[1, 1, 0]}
            occlude={[sphere, cube]}
          >
            That' s a sphere
          </Label>
        </mesh>
      </PivotControls>

      <TransformControls>
        <mesh ref={cube} position-x={2} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </TransformControls>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/*<meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial
          mirror={0.1}
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={10}
          color={"greenyellow"}
        />
      </mesh>

      <Float speed={5} floatIntensity={2}>
        <Text
          fontSize={1}
          color={"tomato"}
          maxWidth={4}
          position={[0, 3, 0]}
          textAlign="center"
          font="./Pretendard-Bold.woff"
        >
          I LOVE R3f
        </Text>
      </Float>
    </>
  );
}

export default App;

const Label = styled(Html)`
  font-family: Helvetica, Arial;
  background: #00000088;
  color: white;
  padding: 15px;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 30px;
  user-select: none;
`;
