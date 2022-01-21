import React, { useEffect, useState } from 'react';


export default function Bar({scaleZ, positionY}) {

  return (
    <group>
      <mesh position={[6, positionY[0], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[0], 16]} />
        <meshStandardMaterial
          attach="material"
          color="pink"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[3.5, positionY[1], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[1], 16]} />
        <meshStandardMaterial
          attach="material"
          color="yellow"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[1.25, positionY[2], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[2], 16]} />
        <meshStandardMaterial
          attach="material"
          color="orange"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[-1.25, positionY[3], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[3], 16]} />
        <meshStandardMaterial
          attach="material"
          color="pink"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[-3.5, positionY[4], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[4], 16]} />
        <meshStandardMaterial
          attach="material"
          color="yellow"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[-6, positionY[5], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[5], 16]} />
        <meshStandardMaterial
          attach="material"
          color="orange"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
}
