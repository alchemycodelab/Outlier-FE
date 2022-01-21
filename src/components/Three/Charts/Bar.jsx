import React, { useEffect, useState } from 'react';
import { useActiveData } from '../../../context/Data/DataCtx';
import { useActiveStates } from '../../../context/State/StateCtx';
import { getPopsByState } from '../../../services/populations';

export default function Bar({scaleZ, positionY}) {

  return (
    <group>
      <mesh position={[6, positionY[0], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[0], 16]} />
        <meshStandardMaterial
          attach="material"
          color="blue"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[3.5, positionY[1], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[1], 16]} />
        <meshStandardMaterial
          attach="material"
          color="gold"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[1.25, positionY[2], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[2], 16]} />
        <meshStandardMaterial
          attach="material"
          color="limegreen"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[-1.25, positionY[3], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[3], 16]} />
        <meshStandardMaterial
          attach="material"
          color="limegreen"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[-3.5, positionY[4], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[4], 16]} />
        <meshStandardMaterial
          attach="material"
          color="gold"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[-6, positionY[5], 0]} visible castShadow>
        <cylinderGeometry attach="geometry" args={[0.5, 0.5, scaleZ[5], 16]} />
        <meshStandardMaterial
          attach="material"
          color="blue"
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
}
