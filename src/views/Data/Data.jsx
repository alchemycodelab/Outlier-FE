import { useActiveStates } from '../../context/State/StateCtx';
import ThreeBar from '../../components/Three/Scenes/ThreeBar';
import ThreeSphere from '../../components/Three/Scenes/ThreeSphere';
import { useActiveData } from '../../context/Data/DataCtx';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Data() {
  const { activeData, activePopulation, activeChart, activeStats } = useActiveData();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if(activeData[0].stateAbrv) {
  //     setLoading(false)
  //   } else
  //   navigate('/map', { replace: true })
  // }, []);

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
      {activeChart === 'bar' ? <ThreeBar /> : <ThreeSphere />}      
    </>
  );
}
