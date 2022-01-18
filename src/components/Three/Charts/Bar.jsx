import React from 'react'

export default function Bar() {
  return (
    <group>
      <mesh position={[4, 0, 0]} visible castShadow>
        <cylinderGeometry 
          attach='geometry'
          args={[0.5, 0.5, 10, 16]}
        />
        <meshStandardMaterial
          attach='material'
          color='pink'
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
    </group>
  )
}
