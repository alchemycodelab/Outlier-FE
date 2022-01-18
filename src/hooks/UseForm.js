import { useState } from "react";


function useForm(inputs = {}) {
  const [formState, setFormState] = useState(inputs);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => {
      return { ...prev, [name]: value};
    });
  };

  return { formState, handleFormChange};
}
export default useForm;
