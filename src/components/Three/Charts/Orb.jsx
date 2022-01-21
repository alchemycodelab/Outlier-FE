export default function Orb({ positionX, positionY, positionZ, scale }) {

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <group>
      <mesh 
        position={[-6, 2, 1]} 
        onClick={handleClick}
        visible 
        castShadow
      >
        <sphereGeometry attach="geometry" args={[scale[0], 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="green"
          wireframe={false}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh 
        position={[-4, 6, 3]}
        onClick={handleClick} 
        visible 
        castShadow
      >
        <sphereGeometry attach="geometry" args={[scale[1], 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="aquamarine"
          wireframe={false}
          roughness={0}
          metalness={1}
      />
      </mesh>
      <mesh 
        position={[-15, 1, 10]}
        onClick={handleClick} 
        visible 
        castShadow
      >
        <sphereGeometry attach="geometry" args={[scale[2], 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="red"
          wireframe={true}
          roughness={0}
          metalness={1}
        />
      </mesh>
      <mesh 
        position={[15, 4, 2]}
        onClick={handleClick}
        visible 
        castShadow
      >
        <sphereGeometry attach="geometry" args={[scale[3], 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="red"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh 
        position={[4, 3, 5]}
        onClick={handleClick} 
        visible 
        castShadow
      >
        <sphereGeometry attach="geometry" args={[scale[4], 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="aquamarine"
          wireframe={false}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh 
        position={[6, 6, 4]}
        onClick={handleClick} 
        visible 
        castShadow
      >
        <sphereGeometry attach="geometry" args={[scale[5], 16, 16]} />
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
