import { useState } from "react";
import { useActiveStates } from "../context/State/StateCtx";


function useForm() {
  const { activeStates, setActiveStates } = useActiveStates();
  const [positionY, setPositionY] = useState(0);
  const [active, setActive] = useState(false);


  const handleActiveStatesChange = (e) => {
    setActive(v => !v);
    active ? setPositionY(0) :
    setPositionY(2)
    const { value } = e.target;
    setActiveStates((prevState) => {
      return [ ...prevState, value ];
      });
    };

  return { activeStates, handleActiveStatesChange};
}
export default useForm;
