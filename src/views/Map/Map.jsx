import { useEffect, useState } from "react";
import MapForm from "../../components/Forms/MapForm/MapForm";
import ThreeMap from "../../components/Three/Scenes/ThreeMap";
import { StateProvider } from "../../context/State/StateCtx";


export default function Map() {
  const [loading, setLoading] = useState(true)

export default function () {
  const [loading, setLoading] = useState(true);

  return (
    // loading ? <h1>Loading..</h1> :
    <>
    <StateProvider>
    <MapForm />
    <ThreeMap />;
    </StateProvider>
    </>
  );
}
