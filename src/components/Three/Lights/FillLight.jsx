import { SpotLight } from '@react-three/drei';
import React from 'react'

export default function FillLight({ brightness, color }) {

  return (
    <>
    <rectAreaLight 
      width={10}
      height={10}
      intensity={brightness}
      color={color}
      position={[7, -10, 7]}
      lookAt={[-6, 0, 0]}
      penumbra={2}
      castShadow
    />
    <rectAreaLight 
      width={10}
      height={10}
      intensity={brightness}
      color={color}
      position={[-12, -10, 7]}
      lookAt={[13, 0, 0]}
      penumbra={2}
      castShadow
    />
    </>
  );
};
