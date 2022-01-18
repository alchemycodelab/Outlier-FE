import { useActiveStates } from "../../context/State/StateCtx";
import ThreeScene from "../../components/Three/ThreeScene";
import { DataProvider, useActiveData } from "../../context/Data/DataCtx";

export default function Data() {
  const {stateNames, setStateNames, activeStates, setActiveStates } = useActiveStates();
  const {activeData, setActiveData, activePopulation, setActivePopulation} = useActiveData();

  return (
    <>
      <h1> Data Page </h1>
      <h2>{activeStates[0]}</h2>
      <h2>{activeStates[1]}</h2>
      <ThreeScene />
    </>
  );
};
