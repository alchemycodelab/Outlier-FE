import React, { Suspense, useEffect, useState } from 'react'
import Bar from './Charts/Bar'
import FillLight from './Lights/FillLight'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from 'react-three-fiber'
import { DataProvider, useActiveData } from '../../context/Data/DataCtx'
import { StateProvider, useActiveStates } from '../../context/State/StateCtx'
import { getPopsByState } from '../../services/populations'

export default function ThreeScene() {
  const {activeStates, setActiveStates } = useActiveStates();
  const { activeData, activePopulation, } = useActiveData();
  const [positionY, setPositionY] = useState([]);
  const [scaleZ, setScaleZ] = useState([]);
  const [loading, setLoading] = useState(true)

  const data = [
    activeData[0][activePopulation],
    activeData[1][activePopulation],
    activeData[2][activePopulation],
    activeData[3][activePopulation],
    activeData[4][activePopulation],
  ]
  
useEffect(() => {
  const sortedMap = data.map((v) => parseInt(v)).sort((a, b) => {
    return a - b
  });
  const zScaleMap =  sortedMap.map((v) => v/sortedMap[4] * 12);
  const yPositionMap = zScaleMap.map((v) => v / 2);
  setScaleZ(zScaleMap);
  setPositionY(yPositionMap);
  setLoading(false);
  console.log(sortedMap, activeData);
}, []);



  return (
    <section>
        <Canvas
          style={{ display: 'flex', height: '40rem', width: '40rem' }}
          camera={{ fov: 35, position: [-5, 0, 40] }}
          >
          <FillLight brightness={20} />
          <Suspense>
          <StateProvider>
          <DataProvider>
            <Bar scaleZ={scaleZ} positionY={positionY}/>
          </DataProvider>
          </StateProvider>
          </Suspense>
          <OrbitControls />
          <axesHelper args={[10]} />
          <gridHelper args={[10, 20, 'blue', 'purple']} />
        </Canvas>
    </section>
  );
}
