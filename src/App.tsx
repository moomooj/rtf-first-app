import { OrbitControls } from "@react-three/drei";
import { button, useControls } from "leva";
import { Perf } from "r3f-perf";
//interface IDebugObject {}

function App() {
  const { perfVisble } = useControls({
    perfVisble: true,
  });

  const { position, color, visble, myIntercval, select } = useControls("원형", {
    position: { value: { x: -2, y: 0 }, step: 0.01, joystick: "invertY" },
    color: "#ff0000",
    visble: true,
    myIntercval: {
      min: 0,
      max: 10,
      value: [4, 5],
    },
    clikMe: button(() => {
      console.log("버튼 입니다.");
    }),
    select: {
      options: ["a", "b", "c"],
    },
  });

  return (
    <>
      {perfVisble ? <Perf position="top-left" /> : null}
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh position={[position.x, position.y, 0]} visible={visble}>
        <sphereGeometry />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}

export default App;
