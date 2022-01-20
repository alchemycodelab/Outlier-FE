import { Canvas } from 'react-three-fiber';
import FillLight from '../Lights/FillLight';
import { OrbitControls, Stats, useContextBridge } from '@react-three/drei';
import { Suspense } from 'react';
import KeyLight from '../Lights/KeyLight';
import RimLight from '../Lights/RimLight';
import GroundPlane from '../Setting/GroundPlane';
import States from '../Models/States';
import { DataCtx } from '../../../context/Data/DataCtx';
import { StateCtx, StateProvider } from '../../../context/State/StateCtx';

export default function ThreeMap() {
  const ContextBridge = useContextBridge(DataCtx, StateCtx);
  
  return (
    <Canvas
      camera={{ fov: 25, position: [-10, 45, 20]}}
      style={{display: 'flex', height: '40rem', width: '45rem'}}
    >
      {/* <StateProvider value={activeStates, setActiveStates}> */}
      <ContextBridge>
        <FillLight brightness={3} color='#ffbdf4'/>
        <KeyLight brightness={3.6} color='#ffbdf4'/>
        <RimLight brightness={5} color='#fff'/>
        <Suspense fallback={null}>
          <States />
          {/* <NYNC /> */}
          <GroundPlane />
        </Suspense>
        <OrbitControls />
        <Stats />
      </ContextBridge>
      {/* </StateProvider> */}
    </Canvas>
  );
};