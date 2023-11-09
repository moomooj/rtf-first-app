interface IProps {
  position: [number, number, number];
  scale: [number, number, number];
}

function Placeholder({ position, scale }: IProps) {
  return (
    <mesh position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
      <meshBasicMaterial wireframe color="red" />
    </mesh>
  );
}

export default Placeholder;
