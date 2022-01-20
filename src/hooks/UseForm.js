import { useState } from "react";


function useForm() {
  const [formState, setFormState] = useState([]);

  const handleActiveStatesChange = (e) => {
    const value = e.target;
    setFormState((prevState) => {
      return { ...prevState, value };
      });
    };

  return { formState, handleActiveStatesChange};
}
export default useForm;
