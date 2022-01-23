import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useThree } from 'react-three-fiber';
import ThreeBar from '../../components/Three/Scenes/ThreeBar';
import ThreeSphere from '../../components/Three/Scenes/ThreeSphere';
import { useActiveData } from '../../context/Data/DataCtx';
import { clearTable } from '../../services/hateCrimes';
import css from './Data.css'

export default function Data() {
  const { activeData, activePopulation, activeChart, activeStats } = useActiveData();
  
  const navigate = useNavigate();

  useEffect(() => {
    clearTable();
    console.log(clearTable)    
  }, []);



  return (
    // activeData.stateAbrv ? 
    <>
      <section className={css.dataPage}>
      <h1> Data </h1>
        <section className={css.dataInfo}>        
          <div className={css.data}>
            <h4>{activeData[0].stateAbrv}</h4>
            <p>Total Population: {activeData[0].total}</p>
            <p>{activePopulation}: {activeData[0][activePopulation]}</p>
            <p>Hate Incidents: {activeStats[0].value}</p>
          </div>
          <div className={css.data}>
            <h4>{activeData[1].stateAbrv}</h4>
            <p>Total Population: {activeData[1].total}</p>
            <p>{activePopulation}: {activeData[1][activePopulation]}</p>
            <p>Hate Incidents: {activeStats[1].value}</p>
          </div>
        </section>
        {activeChart === 'bar' ? <ThreeBar /> : <ThreeSphere />}      
      </section> 
    </> 
    // :
    // <>
    // <p>Something went wrong...</p> 
    // <Link to={('/map')}>Back to map</Link>
    // </>
  );
}
