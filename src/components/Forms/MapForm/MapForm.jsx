import { useEffect, useState } from "react";
import { useActiveStates } from "../../../context/Profile/StateCtx";
import { getDrinkingData } from "../../../services/data";
import { getMissingData } from "../../../services/missingData";
import { getPopsByState, getPopulations } from "../../../services/populations";
import { getStates } from "../../../services/states";

export default function MapForm() {
  const { stateNames, setStateNames, activeData, setActiveData, activeStates, setActiveStates } = useActiveStates();
  const [loading, setLoading] = useState(true)
  const [stateSelection, setStateSelection] = useState([]);
  const [dataRes, setDataRes] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      const res = await getStates();
      setStateNames(res);
    };
    const fetchData = async () => {
      const res = await getPopsByState('AL');
      console.log(res)
      setActiveData(res);
    }
    fetchData();
    fetchStates();
    setLoading(false)
  }, []);
  // console.log(stateNames)
  
  const handleStateSubmit = async (e) => {
    e.preventDefault();
    setActiveStates(stateSelection);
    await getPopsByState('AL')
  }

  return (
    loading ? <h1>Loading..</h1> :
    <>
    {activeStates.map((stateName) => {
      <h3>{stateName.stateName}</h3>
    })}
    <form onSubmit={handleStateSubmit}>
      <select
        value={stateNames.stateName}
        onChange={(e) => stateSelection.push(e.target.value)}
      >
        {stateNames.map((stateName) => (
          <option key={stateName.abrv}>{stateName.stateName}</option>
        ))}
      </select>
      <select
        value={stateNames.stateName}
        onChange={(e) => stateSelection.push(e.target.value)}
      >
        {stateNames.map((stateName) => (
          <option key={stateName.abrv}>{stateName.stateName}</option>
        ))}
      </select>
      <select
        value={stateNames.stateName}
        onChange={(e) => stateSelection.push(e.target.value)}
      >
        {stateNames.map((stateName) => (
          <option key={stateName.abrv}>{stateName.stateName}</option>
        ))}
      </select>
      <select
        value={stateNames.stateName}
        onChange={(e) => stateSelection.push(e.target.value)}
      >
        {stateNames.map((stateName) => (
          <option key={stateName.abrv}>{stateName.stateName}</option>
        ))}
      </select>
      <select
        value={stateNames.stateName}
        onChange={(e) => stateSelection.push(e.target.value)}
      >
        {stateNames.map((stateName) => (
          <option key={stateName.abrv}>{stateName.stateName}</option>
        ))}
      </select>
      <button type='submit'>Submit</button>
      <button onClick={console.log(activeStates)}>Test 2</button>
      <button onClick={console.log(dataRes)}>Test 3</button>
    </form>
    </>
  );
};
/**
 * 
map form to fetch 2 data metrics and set to context (as well as states) and pass to data (to plug)
not a huge fan of props

 */