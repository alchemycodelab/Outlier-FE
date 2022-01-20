import { useActiveStates } from '../../context/State/StateCtx';
import ThreeBar from '../../components/Three/Scenes/ThreeBar';
import ThreeSphere from '../../components/Three/Scenes/ThreeSphere';
import { DataProvider, useActiveData } from '../../context/Data/DataCtx';
import { useEffect } from 'react';
import { getPopsByState } from '../../services/populations';

export default function Data() {
  const { stateNames, setStateNames, activeStates, setActiveStates } =
    useActiveStates();
  const { activeData, setActiveData, activePopulation, setActivePopulation } =
    useActiveData();

  return (
    <>
      <h1> Data Page </h1>
      <button onClick={() => activeData[0][activePopulation] / activeData[0][activePopulation] * 10}>tst</button>
      <button onClick={() => console.log(activePopulation)}>tst2</button>
      <button onClick={() => console.log(activeStates)}>tst3</button>
      {/* <ThreeScene /> */}
      <ThreeSphere />
    </>
  );
}
