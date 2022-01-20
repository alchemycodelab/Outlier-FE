import { Canvas } from 'react-three-fiber';
import FillLight from './Lights/FillLight';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Model from './Models/Usa';
import NYNC from './Models/NYNC';
import NC from './Models/Nc';
import KeyLight from './Lights/KeyLight';
import RimLight from './Lights/RimLight';
import GroundPlane from './Setting/GroundPlane';

export default function ThreeMap() {

  return (
    <Canvas
      camera={{ fov: 15, position: [-10, 45, 20]}}
      style={{display: 'flex', height: '40rem', width: '60rem'}}
    >
      <FillLight brightness={3} color='#ffbdf4'/>
      <KeyLight brightness={3.6} color='#ffbdf4'/>
      <RimLight brightness={5} color='#fff'/>
      <Suspense fallback={null}>
        <Model />
        {/* <NYNC /> */}
        <GroundPlane />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};