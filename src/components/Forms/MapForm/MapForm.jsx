import { useEffect, useState } from 'react';
import { useActiveData } from '../../../context/Data/DataCtx';
import { useActiveStates } from '../../../context/State/StateCtx';
import { getPopsByState } from '../../../services/populations';
import { getStates } from '../../../services/states';
import { getHateCrimes, getKey } from '../../../services/hateCrimes';
import css from './MapForm.css';
import { useTheme } from '../../../context/Theme/Theme';

export default function MapForm() {
  const { setStateNames, activeStates } = useActiveStates();
  const [loading, setLoading] = useState(false);
  const [popSelection, setPopSelection] = useState('');
  const { isActive, setActive } = useTheme(false);
  const [confirm, setConfirm] = useState(false);

  const { 
    activeChart, 
    setActiveChart,
    setActiveData, 
    activeData, 
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

  const handleStateSubmit = async (e) => {
    e.preventDefault();  
    const fetchStats = async () => {
      await getHateCrimes(activeStates);
    };
    fetchStats();
    setConfirm(true);
  };

  const handleSelections = async (e) => {
    e.preventDefault();
    setActivePopulation(popSelection);
    const res = async () => {
      const resolution = await Promise.all(
         activeStates.map((state) => getPopsByState(state))
      );
      console.log(resolution);
      setActiveData(resolution);
    };
    res();
  };    
  
  const handleViewStats = async () => {
    const res = async () => {
      const resolution = await Promise.all(
        activeStates.map((state) => getKey(popSelection, state))
        );
        console.log(resolution);
        setActiveStats(resolution.flat());
      };
      res();
    };

    function handlePopSelection(e) {
      // e.preventDefault();
      setActive(!isActive);
      setPopSelection(e)
    }

    function handleToggle() {
      setActive(!isActive);
    }

  console.log(activeStates, activeData, popSelection, activeChart, activeStats);
    
  return loading ? (
    <h1>Loading..</h1>
  ) : (
    <>
    <section className={css.MapForm}>
    <div className={css.confirmControls}>
    <button onClick={handleStateSubmit}>Set States</button>
    <button onClick={handleSelections} className={popSelection ? css.statSelect : css.hiddenForm}>Set</button>         
    <button onClick={handleViewStats} className={activePopulation ? css.statSelect : css.hiddenForm}>Stats</button>
    </div>
    <section className={confirm ? css.popSelect : css.hiddenForm}>
      <button onClick={handleToggle}>Populations</button>
      <div className={isActive ? css.displayForm : css.hiddenForm}>
        <button value='lgbt' onClick={(e) => handlePopSelection(e.target.value)}>LGBTQ</button>
        <button value='black' onClick={(e) => handlePopSelection(e.target.value)}>Black</button>
        <button value='latinx' onClick={(e) => handlePopSelection(e.target.value)}>Latinx</button>
      </div>
    </section>
      <div className={css.radioDiv}>
        <span className={css.radio}>
        <label htmlFor='bar' className = {activeChart === 'bar' ? css.activeRad : null}>Bar</label>
          <input
            id='bar' 
            type='radio' 
            name='chart' 
            value='bar'
            className={css.hidden} 
            onChange={(e) => setActiveChart(e.target.value)}/>
        </span>
        <span className={css.radio}>
          <label htmlFor='sphere' className = {activeChart === 'sphere' ? css.activeRad : null}>Sphere</label>
          <input
            id='sphere' 
            type='radio' 
            name='chart' 
            value='sphere'
            className={css.hidden}  
            onChange={(e) => setActiveChart(e.target.value)}/>
        </span>
      </div>
    </section>
    </>
  );
}
