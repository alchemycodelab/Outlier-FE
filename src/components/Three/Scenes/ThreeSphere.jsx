import React, { Suspense, useEffect, useState } from 'react';
import Orb from '../Charts/Orb';
import FillLight from '../Lights/FillLight';
import { OrbitControls, useContextBridge } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';
import { DataProvider, useActiveData } from '../../../context/Data/DataCtx';
import { StateProvider } from '../../../context/State/StateCtx';
import { DataCtx } from '../../../context/Data/DataCtx';
import { StateCtx } from '../../../context/State/StateCtx';
import KeyLight from '../Lights/KeyLight';
import RimLight from '../Lights/RimLight';
import GroundPlane from '../Setting/GroundPlane';
import PointLight from '../Lights/PointLight';
import SpotLights from '../Lights/SpotLight';

export default function ThreeSphere() {
  const ContextBridge = useContextBridge(DataCtx, StateCtx);
  const { activeData, activePopulation, activeStats} = useActiveData();
  const [positionX, setPositionX] = useState([]);
  const [positionY, setPositionY] = useState([]);
  const [positionZ, setPositionZ] = useState([]);
  const [scale, setScale] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const calcPercentages = async () => {
      const activeOne = (parseInt(activeData[0][activePopulation]) / parseInt(activeData[0].total));
      const totalOne = 1 - activeOne;
      const hateOne = parseInt(activeStats[0].value) * totalOne;
      const activeTwo = (parseInt(activeData[1][activePopulation]) / parseInt(activeData[1].total));
      const totalTwo = 1 - activeTwo;
      const hateTwo = parseInt(activeStats[1].value) * totalTwo;
      const zArr = [totalOne, activeOne, hateOne, hateTwo, activeTwo, totalTwo]
      const scaleMap = zArr.map((v) => v * 5 )
      setScale(scaleMap);
      // const yPositionMap = scaleMap.map((v) => v / 2)
      // setPositionY(yPositionMap);
      console.log(zArr)
    }
    calcPercentages();
  }, [])

  // useEffect(() => {
  //   const sortedMap = data.map((v) => parseInt(v)).sort((a, b) => {
  //     return a - b
  //   });
  //   const scaleMap =  sortedMap.map((v) => v/sortedMap[4] * 2);
  //   const yPositionMap = scaleMap.map((v) => v);
  //   const zPositionMap = sortedMap.map((v) => v/ sortedMap[4] * 3);
  //   const xPositionMap = sortedMap.map((v) => v/ sortedMap[4] * 6);
  //   setScale(scaleMap);
  //   setPositionY(yPositionMap);
  //   setPositionZ(zPositionMap);
  //   setPositionX(xPositionMap);
  //   setLoading(false);
  //   console.log(data, sortedMap, scaleMap);
  // }, []);

  return (
    <section>
      <Canvas
        style={{ display: 'flex', height: '40rem', width: '40rem' }}
        camera={{ fov: 35, position: [-10, 45, 40] }}
      >
        <ContextBridge>
          <FillLight brightness={20} color='#ffbdf4'/>
          <KeyLight brightness={3.6} color='#ffbdf4'/>
          <RimLight brightness={5} color='#fff'/>
          {/* <DirectionLight /> */}
          <SpotLights position={[3, 100, 0]}/>
          <Suspense fallback={null}>
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
            <GroundPlane color='#86626E'/>
          </Suspense>
          <OrbitControls />
          <axesHelper args={[10]} />
        </ContextBridge>
      </Canvas>
    </section>
  );
}
