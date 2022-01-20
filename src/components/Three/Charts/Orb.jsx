export default function Orb({ positionX, positionY, positionZ, scale }) {
  // const {infoCtx, setInfoCtx} = useInfo();

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <group>
      <mesh 
        position={[-4, positionY[0], positionZ[0]]} 
        onClick={handleClick}
        visible 
        castShadow
      >
        <sphereGeometry attach="geometry" args={[scale[0], 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="orange"
          wireframe={false}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh 
        position={[-2, positionY[1], positionZ[1]]}
        onClick={handleClick} 
        visible 
        castShadow
      >
        <sphereGeometry attach="geometry" args={[scale[1], 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="red"
          wireframe={false}
          roughness={0.5}
          metalness={0.5}
      />
      </mesh>
      <mesh 
        position={[0, positionY[2], positionZ[2]]}
        onClick={handleClick} 
        visible 
        castShadow
      >
        <sphereGeometry attach="geometry" args={[scale[2], 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="green"
          wireframe={false}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh 
        position={[3, positionY[3], positionZ[3]]}
        onClick={handleClick}
        visible 
        castShadow
      >
        <sphereGeometry attach="geometry" args={[scale[3], 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="green"
          wireframe={false}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh 
        position={[7, positionY[4], positionZ[4]]}
        onClick={handleClick} 
        visible 
        castShadow
      >
        <sphereGeometry attach="geometry" args={[scale[4], 16, 16]} />
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
