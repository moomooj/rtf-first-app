import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    bottomBun: THREE.Mesh;
    meat: THREE.Mesh;
    cheese: THREE.Mesh;
    topBun: THREE.Mesh;
  };
  materials: {
    BunMaterial: THREE.MeshStandardMaterial;
    SteakMaterial: THREE.MeshStandardMaterial;
    CheeseMaterial: THREE.MeshStandardMaterial;
  };
};

function Hamburger(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/hamburger.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.bottomBun.geometry}
        material={materials.BunMaterial}
      />
      <mesh
        geometry={nodes.meat.geometry}
        material={materials.SteakMaterial}
        position={[0, 2.817, 0]}
      />
      <mesh
        geometry={nodes.cheese.geometry}
        material={materials.CheeseMaterial}
        position={[0, 3.04, 0]}
      />
      <mesh
        geometry={nodes.topBun.geometry}
        material={materials.BunMaterial}
        position={[0, 1.771, 0]}
      />
    </group>
  );
}

useGLTF.preload("/hamburger.glb");

export default Hamburger;
