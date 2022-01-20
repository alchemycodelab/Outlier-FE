import { Canvas } from 'react-three-fiber';
import FillLight from './Lights/FillLight';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Model from './Models/Usa';
import NY from './Models/Ny';
import NC from './Models/Nc';

export default function ThreeMap() {

  return (
    <Canvas
      camera={{ fov: 45, position: [-10, 45, 20]}}
      style={{display: 'flex', height: '40rem', width: '60rem'}}
    >
      <FillLight brightness={7.6}/>
      <Suspense>
        <Model />
        <NY />
        <NC />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};