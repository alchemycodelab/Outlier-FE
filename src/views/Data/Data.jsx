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
  useEffect(() => {
    const res = async () => {
      // await activeStates((abrv) => {
      //   getPopsByState.map(activeStates);
      //   console.log(res);
      // });
      console.log('%%%', activeStates);
      const result = await Promise.all(
        activeStates.map((state) => getPopsByState(state))
      );
      console.log('$$$', result);
      // await getPopsByState(activeStates[0]).then((value) => console.log(value));
      // return res;
    };
    setActiveData(res);

    console.log('@@@', activeData);
  }, []);

  return (
    <>
      <h1> Data Page </h1>
      {/* <h2>{activeStates[0]}</h2> */}
      {/* <h2>{activeStates[1]}</h2> */}
      {/* <h2>{activePopulation}</h2> */}
      {/* <h2>{activeData}</h2> */}
      <button onClick={() => console.log(getPopsByState(activeStates))}>
        tst1
      </button>
      <button onClick={() => console.log(activePopulation)}>tst2</button>
      <button onClick={() => console.log(activeStates)}>tst3</button>
      <ThreeScene />
    </>
  );
}
