export default function Orb() {
  return (
    <group>
      <mesh position={[4, 0, 0]} visible castShadow>
        <sphereGeometry attach="geometry" args={[1.5, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="orange"
          wireframe={false}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
}
