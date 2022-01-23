import { Canvas } from 'react-three-fiber';
import FillLight from '../Lights/FillLight';
import { Cloud, OrbitControls, Sky, useContextBridge } from '@react-three/drei';
import { Suspense } from 'react';
import KeyLight from '../Lights/KeyLight';
import RimLight from '../Lights/RimLight';
import GroundPlane from '../Setting/GroundPlane';
import States from '../Models/States';
import { DataCtx } from '../../../context/Data/DataCtx';
import { StateCtx } from '../../../context/State/StateCtx';
import SpotLights from '../Lights/SpotLight';
import css from './three.css'
import { useScreen } from '../../../context/Device/Device';

export default function ThreeMap() {
  const { mobile, midSize, largeSize } = useScreen();
  const ContextBridge = useContextBridge(DataCtx, StateCtx);
  console.log(mobile, midSize, largeSize)

  return (
    // <section className={css.canvas}>
    <Canvas
      camera={{ fov: 25, position: [-10, 55, 40]}}
      style={
        mobile ? {
          display: 'flex',
          height:'18.5rem', 
          width: '20.5rem',
          border: '0.35rem solid rgb(50, 68, 66)',
          marginLeft: '2.5%',
          backgroundColor: 'rgb(50, 68, 66)',
          // padding: '2%',
        }
        : midSize ? {
          height: '30rem',
          width: '34rem',
          border: '0.5rem solid rgb(50, 68, 66)',
          backgroundColor: 'rgb(50, 68, 66)'
        }
        : {
          height: '60rem', 
          width: '80rem',
          border: '0.5rem solid rgb(50, 68, 66)',
          backgroundColor: 'rgb(50, 68, 66)'
        }
        }
    >
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
            speed={0.4}
            width={10}
            depth={1.5}
            segments={20}
          />
          <Cloud
            position={[14, 10.5, -8]}
            opacity={0.5}
            speed={0.4}
            width={10}
            depth={1.5}
            segments={20}
          />
          <SpotLights position={[3, 40, 0]}/>
          <FillLight brightness={3} color='#ffbdf4'/>
          <KeyLight brightness={3.6} color='#ffbdf4'/>
          <RimLight brightness={5} color='#fff'/>
            <States />
            <GroundPlane color='#86626E' position={[0, -10, 0]}/>
          <OrbitControls />
        </Suspense>
      </ContextBridge>
    </Canvas>
    // </section>
  );
};