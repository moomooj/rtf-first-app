import { extend, useFrame, Object3DNode, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Mesh } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CustomObject from "./CustomObject";

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

function App() {
  const { camera, gl } = useThree();

  const cubeRef = useRef<Mesh>(null!);
  const groupRef = useRef<Group>(null!);

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
    //const angle = state.clock.elapsedTime;
    //state.camera.position.x = Math.sin(angle) * 8;
    //state.camera.position.z = Math.cos(angle) * 4;
    //state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color={"blue"} />
      </mesh>
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color={"orange"} />
        </mesh>
        <mesh
          rotation-y={Math.PI * 2.5}
          position-x={2}
          scale={1.5}
          ref={cubeRef}
        >
          <boxGeometry />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </group>
      <CustomObject />
    </>
  );
}

export default App;
