import { useEffect, useState } from 'react';
import { useActiveData } from '../../../context/Data/DataCtx';
import { useActiveStates } from '../../../context/State/StateCtx';
import { getDrinkingData } from '../../../services/data';
import { getMissingData } from '../../../services/missingData';
import { getPopsByState, getPopulations } from '../../../services/populations';
import { getStates } from '../../../services/states';
import { getHateCrimes } from '../../../services/hateCrimes';
import useForm from '../../../hooks/UseForm';


export default function MapForm() {
  const { stateNames, setStateNames } =
    useActiveStates();
  const { activeData, setActiveData, activePopulation, setActivePopulation } =
    useActiveData();

  const [loading, setLoading] = useState(true);
  const [stateSelection, setStateSelection] = useState([]);
  // const [dataRes, setDataRes] = useState([]);
  const [popSelection, setPopSelection] = useState('lgbt');
  const [stats, setStats] = useState([]);
  const { activeStates, handleActiveStatesChange } = useForm([]);

  useEffect(() => {
    const fetchStates = async () => {
      const res = await getStates();
      setStateNames(res);
    };
    
    fetchStates();
    setLoading(false);
  }, []);
    
    const handleStateSubmit = async (e) => {
      e.preventDefault();
      setActivePopulation(popSelection);
    
      const fetchStats = async () => {
        //get activeStates from hook and feed to gethatecrimes 
        const res = await getHateCrimes(activeStates);
        console.log('hate crimes',res);
        setStats(res);
      }
      fetchStats();

      const res = async () => {
        const result = await Promise.all(
          activeStates.map((state) => getPopsByState(state))
          )
      console.log('activeData', activeStates)
      await setActiveData(result)
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
        {/* <select
          value={dataRes.lgbt}
          onChange={(e) => setPopSelection(e.target.value)}
        >
          <option>populations</option>
          <option>lgbt</option>
        </select> */}
        <select
          value={stateNames.abrv}
          name={stateNames.abrv}
          onChange={handleActiveStatesChange}
        >
          {stateNames.map((stateName) => (
            <option key={stateName.abrv}>{stateName.abrv}</option>
          ))}
        </select>
        <select
          value={stateNames.abrv}
          name={stateNames.abrv}
          onChange={handleActiveStatesChange}
        >
          {stateNames.map((stateName) => (
            <option key={stateName.abrv}>{stateName.abrv}</option>
          ))}
        </select>
        <select
          value={stateNames.abrv}
          name={stateNames.abrv}
          onChange={handleActiveStatesChange}
        >
          {stateNames.map((stateName) => (
            <option key={stateName.abrv}>{stateName.abrv}</option>
          ))}
        </select>
        <select
          value={stateNames.abrv}
          name={stateNames.abrv}
          onChange={handleActiveStatesChange}
        >
          {stateNames.map((stateName) => (
            <option key={stateName.abrv}>{stateName.abrv}</option>
          ))}
        </select>
        <select
          value={stateNames.abrv}
          name={stateNames.abrv}
          onChange={handleActiveStatesChange}
        >
          {stateNames.map((stateName) => (
            <option key={stateName.abrv}>{stateName.abrv}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
        {/* <button onClick={() => console.log(activePopulation)}>
          selected population
        </button>
        <button onClick={() => console.log(activeStates)}>Test 2</button>
        <button onClick={() => console.log(activeData)}>Test 3</button>
        <button onClick={() => setActiveStates([])}>Test 4</button>
        <button onClick={() => console.log(activeData.lgbt)}>tst 5</button> */}
      </form>
    </>
  );
}
