import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Hamburger from "./Hamburger";
import Fox from "./Fox";
import Placeholder from "./Placeholder";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={4.5}
        shadow-normalBias={0.05}
      />
      <ambientLight intensity={1.5} />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Suspense
        fallback={<Placeholder position={[0, 0.5, 0]} scale={[2, 3, 2]} />}
      >
        <Hamburger scale={0.35} />
      </Suspense>
      <Fox />
    </>
  );
}

export default App;
