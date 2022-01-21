import { useEffect, useState } from 'react';
import { useActiveData } from '../../../context/Data/DataCtx';
import { useActiveStates } from '../../../context/State/StateCtx';
import useForm from '../../../hooks/UseForm';
import { getPopsByState, getPopulations } from '../../../services/populations';
import { getStates } from '../../../services/states';
import { getHateCrimes } from '../../../services/hateCrimes';


export default function MapForm() {
  const { setStateNames } = useActiveStates();
  const { setActiveData, activePopulation, setActivePopulation, total, setTotal } = useActiveData();
  const [loading, setLoading] = useState(true);
  const [popSelection, setPopSelection] = useState('lgbt');
  const [stats, setStats] = useState([]);
  const { activeStates, handleActiveStatesChange } = useForm([]);
  const [activeChart, setActiveChart] = useState(false)

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

  const handleChart = async (e) => {
    e.preventDefault();
    setActiveChart();
  }
    
  const handleStateSubmit = async (e) => {
    e.preventDefault();
    setActivePopulation(popSelection);
  
    const fetchStats = async () => {
      //get activeStates from hook and feed to gethatecrimes 
      const res = await getHateCrimes(activeStates);
      console.log('hate crimes', res);
      setStats(res);
    }
    fetchStats();
  };
console.log(activeStates, activePopulation, popSelection, activeChart);
  
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
    </>
  );
}
