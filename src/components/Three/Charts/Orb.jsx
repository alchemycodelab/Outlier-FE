export default function Orb() {
  return (
    <group>
      <mesh position={[-5, 6, 6]} visible castShadow>
        <sphereGeometry attach="geometry" args={[1.5, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="orange"
          wireframe={false}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[2, 3, 3]} visible castShadow>
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="red"
          wireframe={false}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[6, 5, 5]} visible castShadow>
        <sphereGeometry attach="geometry" args={[1.5, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="green"
          wireframe={false}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
}
