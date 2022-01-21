import React, { Suspense, useEffect, useState } from 'react'
import Bar from '../Charts/Bar'
import FillLight from '../Lights/FillLight'
import { OrbitControls, useContextBridge } from '@react-three/drei'
import { Canvas } from 'react-three-fiber';
import { DataCtx, DataProvider, useActiveData } from '../../../context/Data/DataCtx';
import { StateCtx, StateProvider, useActiveStates } from '../../../context/State/StateCtx';
import { getPopsByState } from '../../../services/populations'

export default function ThreeBar() {
  const ContextBridge = useContextBridge(DataCtx, StateCtx);
  const { activeData, activePopulation, activeStats } = useActiveData(); 
  const [positionY, setPositionY] = useState([]);
  const [scaleZ, setScaleZ] = useState([]);
  const [loading, setLoading] = useState(true);  
  
  useEffect(() => {
    const test = async () => {
      const activePopPercOne = (parseInt(activeData[0][activePopulation]) / parseInt(activeData[0].total));
      const totalPopPercOne = 1 - activePopPercOne;
      const hateCrimePercOne = parseInt(activeStats[0].value * totalPopPercOne);
      const activePopPercTwo = (parseInt(activeData[1][activePopulation]) / parseInt(activeData[1].total));
      const totalPopPercTwo = 1 - activePopPercTwo;
      const hateCrimePercTwo = parseInt(activeStats[1].value * totalPopPercTwo);
      const zArr = [totalPopPercOne, activePopPercOne, hateCrimePercOne, hateCrimePercTwo, activePopPercTwo, totalPopPercTwo]
      const zScaleMap = zArr.map((v) => v * 5 )
      setScaleZ(zScaleMap);
      const yPositionMap = zScaleMap.map((v) => v / 2)
      setPositionY(yPositionMap);
      console.log(zArr)
    };
    test();
  }, []);
  
  console.log('Z', scaleZ, 'Y', positionY)
  // useEffect(() => {
    //   const sortedMap = data.map((v) => parseInt(v)).sort((a, b) => {
      //     return a - b
      //   });
      //   const zScaleMap =  sortedMap.map((v) => v/sortedMap[4] * 12);
      //   const yPositionMap = zScaleMap.map((v) => v / 2);
      //   setScaleZ(zScaleMap);
      //   setPositionY(yPositionMap);
      //   setLoading(false);
      //   console.log(sortedMap, activeData[0]);
      // }, []);
        
  return (
    <section>
      <Canvas
        style={{ display: 'flex', height: '40rem', width: '40rem' }}
        camera={{ fov: 35, position: [-5, 0, 40] }}
      >
        <ContextBridge>
          <FillLight brightness={40} />
          <Suspense>
            <StateProvider>
            <DataProvider>
              <Bar scaleZ={scaleZ} positionY={positionY}/>
            </DataProvider>
            </StateProvider>
          </Suspense>
          <OrbitControls />
        <axesHelper args={[10]} />
        </ContextBridge>
        <gridHelper args={[10, 20, 'blue', 'purple']} />
      </Canvas>
    </section>
  );
}
