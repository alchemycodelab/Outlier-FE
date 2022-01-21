import { Canvas } from 'react-three-fiber';
import FillLight from '../Lights/FillLight';
import { Cloud, OrbitControls, Sky, Stars, Stats, useContextBridge } from '@react-three/drei';
import { Suspense } from 'react';
import KeyLight from '../Lights/KeyLight';
import RimLight from '../Lights/RimLight';
import GroundPlane from '../Setting/GroundPlane';
import States from '../Models/States';
import { DataCtx } from '../../../context/Data/DataCtx';
import { StateCtx, StateProvider } from '../../../context/State/StateCtx';
import SpotLights from '../Lights/SpotLight';

export default function ThreeMap() {
  const ContextBridge = useContextBridge(DataCtx, StateCtx);
  
  return (
    <Canvas
      camera={{ fov: 25, position: [-10, 55, 40]}}
      style={{display: 'flex', height: '35rem', width: '40rem'}}
    >
      {/* <StateProvider value={activeStates, setActiveStates}> */}
      <ContextBridge>
        <Suspense fallback='Loading...'>
          <Sky 
            distance={4500} 
            sunPosition={[0, 1, 0]} 
            inclination={0} 
            azimuth={180}
            elevation={0}
            turbidity={1.8}
            rayleigh={1.386} 
            exposure={0.5}
          />
          <Cloud
            position={[-17, 11, 2]}
            opacity={0.5}
            speed={0.4} // Rotation speed
            width={10} // Width of the full cloud
            depth={1.5} // Z-dir depth
            segments={20} // Number of particles
          />
          <Cloud
            position={[14, 10.5, -8]}
            opacity={0.5}
            speed={0.4} // Rotation speed
            width={10} // Width of the full cloud
            depth={1.5} // Z-dir depth
            segments={20} // Number of particles
          />
          <SpotLights position={[3, 40, 0]}/>
          <FillLight brightness={3} color='#ffbdf4'/>
          <KeyLight brightness={3.6} color='#ffbdf4'/>
          <RimLight brightness={5} color='#fff'/>
            <States />
            <GroundPlane color='#86626E' position={[0, -10, 0]}/>
          <OrbitControls />
          <Stats />
        </Suspense>
      </ContextBridge>
      {/* </StateProvider> */}
    </Canvas>
  );
};