import React, { Suspense, useEffect, useState } from 'react';
import Orb from './Charts/Orb';
import FillLight from './Lights/FillLight';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';
import { DataProvider, useActiveData } from '../../context/Data/DataCtx';
import { StateProvider } from '../../context/State/StateCtx';

export default function ThreeSphere() {
  const { activeData, activePopulation, } = useActiveData();
  const [positionX, setPositionX] = useState([]);
  const [positionY, setPositionY] = useState([]);
  const [positionZ, setPositionZ] = useState([]);
  const [scale, setScale] = useState([]);
  const [loading, setLoading] = useState(true)

  const data = [
    activeData[0][activePopulation],
    activeData[1][activePopulation],
    activeData[2][activePopulation],
    activeData[3][activePopulation],
    activeData[4][activePopulation]
  ]

  // const totalPopData = [
  //   activeData[0].total,
  //   activeData[1].total,
  //   activeData[2].total,
  //   activeData[3].total,
  //   activeData[4].total
  // ]

  // const difference = [
  //   totalPopData[0] - selectedPopData[0],
  //   totalPopData[1] - selectedPopData[1],
  //   totalPopData[2] - selectedPopData[2],
  //   totalPopData[3] - selectedPopData[3],
  //   totalPopData[4] - selectedPopData[4]
  // ]

  useEffect(() => {
    const sortedMap = data.map((v) => parseInt(v)).sort((a, b) => {
      return a - b
    });
    const scaleMap =  sortedMap.map((v) => v/sortedMap[4] * 2);
    const yPositionMap = scaleMap.map((v) => v);
    const zPositionMap = sortedMap.map((v) => v/ sortedMap[4] * 3);
    const xPositionMap = sortedMap.map((v) => v/ sortedMap[4] * 6);
    setScale(scaleMap);
    setPositionY(yPositionMap);
    setPositionZ(zPositionMap);
    setPositionX(xPositionMap);
    setLoading(false);
    console.log(data, sortedMap, scaleMap);
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
            <Orb
              positionX={positionX} 
              positionY={positionY} 
              positionZ={positionZ} 
              scale={scale}
            />
          </DataProvider>
          </StateProvider>
        </Suspense>
        <OrbitControls />
        <axesHelper args={[10]} />
        {/* <gridHelper args={[10, 20, 'green', 'blue']} /> */}
      </Canvas>
    </section>
  );
}
