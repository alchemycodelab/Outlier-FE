import React, { Suspense } from 'react';
import Orb from './Charts/Orb';
import FillLight from './Lights/FillLight';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';

export default function ThreeScatter() {
  return (
    <section>
      <Canvas
        style={{ display: 'flex', height: '40rem', width: '40rem' }}
        camera={{ fov: 35, position: [-5, 0, 40] }}
      >
        <FillLight brightness={20} />
        <Suspense>
          <Orb />
        </Suspense>
        <OrbitControls />
        <axesHelper args={[10]} />
        <gridHelper args={[10, 20, 'green', 'blue']} />
      </Canvas>
    </section>
  );
}
