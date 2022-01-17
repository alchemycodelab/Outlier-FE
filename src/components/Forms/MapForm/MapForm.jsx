import { useEffect, useState } from "react";
import { useActiveStates } from "../../../context/Profile/StateCtx";
import { getStates } from "../../../services/states";




export default function MapForm() {
  const { stateNames, setStateNames, activeStates, setActiveStates } = useActiveStates();
  const [loading, setLoading] = useState(true)
  const [stateSelection, setStateSelection] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      const res = await getStates();
      setStateNames(res);
    };
    fetchStates();
    setLoading(false)
  }, []);
  console.log(stateNames)
  
  const handleStateSubmit = (e) => {
    e.preventDefault();
    setActiveStates(stateSelection)
  }

  return (
    loading ? <h1>Loading..</h1> :
    <>
    <h2>{activeStates[0]}</h2>
    <h2>{activeStates[1]}</h2>
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
      <button type='submit'>Test</button>
      <button onClick={console.log(activeStates)}>Test 2</button>
    </form>
    </>
  );
};