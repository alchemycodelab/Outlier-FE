import { useActiveStates } from '../../context/State/StateCtx';
import ThreeBar from '../../components/Three/Scenes/ThreeBar';
import ThreeSphere from '../../components/Three/Scenes/ThreeSphere';
import { useActiveData } from '../../context/Data/DataCtx';

export default function Data() {
  const { activeStates } = useActiveStates();
  const { activeData, activePopulation, activeChart, activeStats } = useActiveData();

  return (
    <>
      <h1> Data Page </h1>
      <section>
        <h4>{activeData[0].stateAbrv}</h4>
        <p>Total Population: {activeData[0].total}</p>
        <p>{activePopulation}: {activeData[0][activePopulation]}</p>
        <p>Hate Incidents: {activeStats[0].value}</p>
      </section>
      <section>
        <h4>{activeData[1].stateAbrv}</h4>
        <p>Total Population: {activeData[1].total}</p>
        <p>{activePopulation}: {activeData[1][activePopulation]}</p>
        <p>Hate Incidents: {activeStats[1].value}</p>
      </section>
      <button onClick={() => activeData[0][activePopulation] / activeData[0][activePopulation] * 10}>tst</button>
      <button onClick={() => console.log(activeStates)}>tst3</button>
      {activeChart === 'bar' ? <ThreeBar /> : <ThreeSphere />}      
    </>
  );
}
