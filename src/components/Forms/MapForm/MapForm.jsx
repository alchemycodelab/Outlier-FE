import { useEffect, useState } from 'react';
import { useActiveData } from '../../../context/Data/DataCtx';
import { useActiveStates } from '../../../context/State/StateCtx';
import useForm from '../../../hooks/UseForm';
import { getPopsByState } from '../../../services/populations';
import { getStates } from '../../../services/states';
import { getHateCrimes, getKey } from '../../../services/hateCrimes';


export default function MapForm() {
  const { setStateNames, activeStates } = useActiveStates();
  const [loading, setLoading] = useState(true);
  const [popSelection, setPopSelection] = useState('lgbt');
  const [stats, setStats] = useState([]);
  // const { activeStates, handleActiveStatesChange } = useForm([]);
  const { 
    activeChart, 
    setActiveChart, 
    activeData,
    setActiveData, 
    activePopulation, 
    setActivePopulation, 
    activeStats, 
    setActiveStats,
  } = useActiveData();

  useEffect(() => {
    const fetchStates = async () => {
      const res = await getStates();
      setStateNames(res);
    };    
    fetchStates();
    setLoading(false);
  }, []);

  const handleSelections = async (e) => {
    e.preventDefault();
    setActivePopulation(popSelection);
    const res = async () => {
      const resolution = await Promise.all(
         activeStates.map((state) => getPopsByState(state))
      )
      console.log(resolution);
      setActiveData(resolution);
    }
    res()
  }
    
  const handleStateSubmit = async (e) => {
    e.preventDefault();  
    const fetchStats = async () => {
      const res = await getHateCrimes(activeStates);
      console.log('hate crimes', res);
    }
    fetchStats();
  };
console.log(activeStates, activePopulation, popSelection, activeChart, activeStats);

  const handleViewStats = async () => {
    const res = async () => {
      const resolution = await Promise.all(
         activeStates.map((state) => getKey(popSelection, state))
      )
      console.log(resolution);
      setActiveStats(resolution.flat());
    };
    res()
  };
  
  return loading ? (
    <h1>Loading..</h1>
  ) : (
    <>
      <h3>{activeStates[0]}</h3>
      <h3>{activeStates[1]}</h3>
      <h3>{activeStates[2]}</h3>
      <h3>{activeStates[3]}</h3>
      <h3>{activeStates[4]}</h3>
      <form onSubmit={handleStateSubmit}>
        <input type='radio' name='chart' value='bar' onChange={(e) => setActiveChart(e.target.value)}/>
        <input type='radio' name='chart' value='sphere' onChange={(e) => setActiveChart(e.target.value)}/>
        <select
          value={popSelection}
          onChange={(e) => setPopSelection(e.target.value)}
        >
          <option>populations</option>
          <option>lgbt</option>
          <option>black</option>
          <option>latinx</option>
        </select>
        <button type="submit">Submit</button> 
      </form>
        <button onClick={handleSelections}>Set</button>         
        <button onClick={handleViewStats}>Stats</button>
        <button onClick={() => console.log(activeData)}>Stats</button>
    </>
  );
}
