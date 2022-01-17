import { useEffect, useState } from "react";
import MapForm from "../../components/Forms/MapForm/MapForm";


export default function Map() {
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const fetchStates = async () => {
  //     const res = await getStates();
  //     setStateNames(res);
  //   };
  //   fetchStates();
  //   setLoading(false)
  // }, []);
  // console.log(stateNames)

  return (
    // loading ? <h1>Loading..</h1> :
    <>
    <MapForm />
    </>
  )
}