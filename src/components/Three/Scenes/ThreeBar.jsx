import React, { Suspense, useEffect, useState } from 'react'
import Bar from '../Charts/Bar'
import FillLight from '../Lights/FillLight'
import KeyLight from '../Lights/KeyLight'
import RimLight from '../Lights/RimLight';
import PointLight from '../Lights/PointLight'
import { OrbitControls, Sky, useContextBridge } from '@react-three/drei'
import { Canvas } from 'react-three-fiber';
import { DataCtx, DataProvider, useActiveData } from '../../../context/Data/DataCtx';
import { StateCtx, StateProvider, useActiveStates } from '../../../context/State/StateCtx';
import GroundPlane from '../Setting/GroundPlane';
import BackDrop  from '../Setting/BackDrop'
import SpotLights from '../Lights/SpotLight';

export default function ThreeBar({position, brightness}) {
  const ContextBridge = useContextBridge(DataCtx, StateCtx);
  const { activeData, activePopulation, activeStats } = useActiveData(); 
  const [positionY, setPositionY] = useState([]);
  const [scaleZ, setScaleZ] = useState([]);
  const [loading, setLoading] = useState(true);
  
  //outer bars express total population percentage outside of given community
  //second from the center shows the active population percentage
  //inner columns show the number of incidents proportional to the active populations %

  //the active population is divided by the total population
  //that value is subtracted from one to find the corresponding percenteage for the rest of the population
  //the number of hate crimes is then multiplied by rest of the populations percentage 
  //these numbers are not entirely precise and can be taken out of context however they're also 
  //on the low side when compared to multiple studies and also only track reported cases
  //recorded by the fbi
  
  
  useEffect(() => {
    if(activeData){
      const test = async () => {
        const activePopPercOne = (parseInt(activeData[0][activePopulation]) / parseInt(activeData[0].total));
        const totalPopPercOne = 1 - activePopPercOne;
        const hateCrimePercOne = parseInt(activeStats[0].value) * totalPopPercOne;
        const activePopPercTwo = (parseInt(activeData[1][activePopulation]) / parseInt(activeData[1].total));
        const totalPopPercTwo = 1 - activePopPercTwo;
        const hateCrimePercTwo = parseInt(activeStats[1].value) * totalPopPercTwo;
        const zArr = [totalPopPercOne, activePopPercOne, hateCrimePercOne, hateCrimePercTwo, activePopPercTwo, totalPopPercTwo]
        const zScaleMap = zArr.map((v) => v * 5 )
        setScaleZ(zScaleMap);
        const yPositionMap = zScaleMap.map((v) => v / 2)
        setPositionY(yPositionMap);
        console.log(zArr)
      }
      test() 
    }
    
  }, []);
  
  console.log('Z', scaleZ, 'Y', positionY)
        
  return (
    <section>
      <Canvas
        style={{ display: 'flex', height: '40rem', width: '40rem'}}
        camera={{ fov: 35, position: [-10, 45, 40] }}
      >
        <ContextBridge>
          <Sky 
            distance={450000} 
            sunPosition={[0, 1, 0]} 
            inclination={0} 
            azimuth={180}
            turbidity={10}
            rayleigh={3}
            mieCoefficient={0.005}
            mieDirectionalG={0.7}
            elevation={2}
            exposure={0.5}
          />

          {/* <PointLight brightness={0.2}/> */}
          <FillLight brightness={10} color='#ffbdf4'/>
          <SpotLights position={[15, 100, 0]}/>
          <KeyLight brightness={3.6} color='#ffbdf4'/>
          <RimLight brightness={25} color='#fad6a5'/>
          <Suspense>
            <StateProvider>
            <DataProvider>
              <Bar scaleZ={scaleZ} positionY={positionY}/>
            </DataProvider>
            </StateProvider>
            <BackDrop />
            <GroundPlane color='#86626E' position={[0, -1, 0]}/>
          </Suspense>
          <OrbitControls />
        <axesHelper args={[10]} />
        </ContextBridge>
        <gridHelper args={[10, 20, 'blue', 'purple']} />
      </Canvas>
    </section>
  );
}
