import { useActiveStates } from '../../context/State/StateCtx';
import ThreeScene from '../../components/Three/ThreeScene';
import { DataProvider, useActiveData } from '../../context/Data/DataCtx';
import { useEffect } from 'react';
import { getPopsByState } from '../../services/populations';

export default function Data() {
  const { stateNames, setStateNames, activeStates, setActiveStates } =
    useActiveStates();
  const { activeData, setActiveData, activePopulation, setActivePopulation } =
    useActiveData();

  // useEffect(() => {
  //   const res = async () => {
  //     console.log('%%%', activeStates);
  //     const result = await Promise.all(
  //       activeStates.map((state) => getPopsByState(state))
  //     )
  //     setActiveData(result)
  //   };
  //   res()
  //   const setSize = async () => {
  //     const sizes = await Promise.all(
  // activeData[0][activePopulation] / activeData[0][activePopulation] * 10
  //     )
  //     setScaleZ(sizes)
  //   }
  //   setSize()
  // }, []);

  // console.log('@@@', activeData);
  return (
    <>
      <h1> Data Page </h1>
      <button
        onClick={() =>
          (activeData[0][activePopulation] / activeData[0][activePopulation]) *
          10
        }
      >
        tst
      </button>
      <button onClick={() => console.log(activePopulation)}>tst2</button>
      <button onClick={() => console.log(activeStates)}>tst3</button>
      <ThreeScene />
    </>
  );
}
