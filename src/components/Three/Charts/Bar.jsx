import React, { useEffect, useState } from 'react'
import { useActiveData } from '../../../context/Data/DataCtx';
import { useActiveStates } from '../../../context/State/StateCtx';

export default function Bar() {
  const {stateNames, setStateNames, activeStates, setActiveStates } = useActiveStates();
  const {activeData, setActiveData, activePopulation, setActivePopulation} = useActiveData();
  const [positionY, setPositionY] = useState(2.5);
  const [scaleZ, setScaleZ] = useState(5);

  useEffect(() => {
    const populateChart = async () => {
      const res = await activeStates.map((abrv) => {
        getPopsByState(abrv);
        // setActiveData(res);
        console.log(res);
      });
      populateChart();
    }
  }, []);

  return (
    <group>
      <mesh position={[4, positionY, 0]} visible castShadow>
        <cylinderGeometry 
          attach='geometry'
          args={[0.5, 0.5, scaleZ, 16]}
        />
        <meshStandardMaterial
          attach='material'
          color='pink'
          wireframe={true}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
    </group>
  )
}
