import { useState } from "react";
import { useActiveStates } from "../context/State/StateCtx";


function useForm() {
  const { activeStates, setActiveStates } = useActiveStates();

  const handleActiveStatesChange = (e) => {
    const { value } = e.target;
    setActiveStates((prevState) => {
      return [ ...prevState, value ];
      });
    };

  return { activeStates, handleActiveStatesChange};
}
export default useForm;
