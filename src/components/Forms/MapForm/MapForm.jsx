import { useEffect, useState } from 'react';
import { useActiveData } from '../../../context/Data/DataCtx';
import { useActiveStates } from '../../../context/State/StateCtx';
import { getDrinkingData } from '../../../services/data';
import { getMissingData } from '../../../services/missingData';
import { getPopsByState, getPopulations } from '../../../services/populations';
import { getStates } from '../../../services/states';
import Select from 'react-select';

export default function MapForm() {
  const { stateNames, setStateNames, activeStates, setActiveStates } =
    useActiveStates();
  const { activeData, setActiveData, activePopulation, setActivePopulation } =
    useActiveData();
  const [loading, setLoading] = useState(true);
  const [stateSelection, setStateSelection] = useState([]);
  const [dataRes, setDataRes] = useState([]);
  const [popSelection, setPopSelection] = useState('lgbt');

  useEffect(() => {
    const fetchStates = async () => {
      const res = await getStates();
      setStateNames(res);
    };
    const fetchData = async () => {
      const res = await getPopulations();
      console.log(res);
      setDataRes(res);
    };
    fetchData();
    fetchStates();
    setLoading(false);
  }, []);
  // console.log(stateNames)

  const handleStateSubmit = async (e) => {
    e.preventDefault();
    setActiveStates(stateSelection);
    setActivePopulation(popSelection);
    const res = async () => {
      console.log('%%%', activeStates);
      const result = await Promise.all(
        activeStates.map((state) => getPopsByState(state))
      );
      await setActiveData(result);
    };
    res();
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
        <select
          value={dataRes.lgbt}
          onChange={(e) => setPopSelection(e.target.value)}
        >
          <option>placeholder</option>
          <option>lgbt</option>
        </select>
        <select
          value={stateNames.abrv}
          onChange={(e) => stateSelection.push(e.target.value)}
        >
          {stateNames.map((stateName) => (
            <option key={stateName.abrv}>{stateName.abrv}</option>
          ))}
        </select>
        <select
          value={stateNames.abrv}
          onChange={(e) => stateSelection.push(e.target.value)}
        >
          {stateNames.map((stateName) => (
            <option key={stateName.abrv}>{stateName.abrv}</option>
          ))}
        </select>
        <select
          value={stateNames.abrv}
          onChange={(e) => stateSelection.push(e.target.value)}
        >
          {stateNames.map((stateName) => (
            <option key={stateName.abrv}>{stateName.abrv}</option>
          ))}
        </select>
        <select
          value={stateNames.abrv}
          onChange={(e) => stateSelection.push(e.target.value)}
        >
          {stateNames.map((stateName) => (
            <option key={stateName.abrv}>{stateName.abrv}</option>
          ))}
        </select>
        <select
          value={stateNames.abrv}
          onChange={(e) => stateSelection.push(e.target.value)}
        >
          {stateNames.map((stateName) => (
            <option key={stateName.abrv}>{stateName.abrv}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
        <button onClick={() => console.log(activePopulation)}>
          selected population
        </button>
        <button onClick={() => console.log(activeStates)}>Test 2</button>
        <button onClick={() => console.log(activeData)}>Test 3</button>
        <button onClick={() => setActiveStates([])}>Test 4</button>
        <button onClick={() => console.log(activeData.lgbt)}>tst 5</button>
      </form>
    </>
  );
}
