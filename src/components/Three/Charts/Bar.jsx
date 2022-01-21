import React, { useEffect, useState } from 'react';
import { useActiveData } from '../../../context/Data/DataCtx';
import { useActiveStates } from '../../../context/State/StateCtx';
import { getPopsByState } from '../../../services/populations';

export default function Bar({scaleZ, positionY}) {

export default function Bar({ scaleZ, positionY }) {
  return (
    <group>
      <mesh position={[4, positionY[0], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[0], 16]} />
        <meshStandardMaterial
          attach="material"
          color="pink"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[2, positionY[1], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[1], 16]} />
        <meshStandardMaterial
          attach="material"
          color="yellow"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[0, positionY[2], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[2], 16]} />
        <meshStandardMaterial
          attach="material"
          color="orange"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[-2, positionY[3], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[3], 16]} />
        <meshStandardMaterial
          attach="material"
          color="blue"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[-4, positionY[4], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[4], 16]} />
        <meshStandardMaterial
          attach="material"
          color="green"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
}
