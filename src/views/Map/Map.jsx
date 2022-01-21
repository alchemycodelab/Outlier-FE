import { useEffect, useState } from "react";
import MapForm from "../../components/Forms/MapForm/MapForm";
import ThreeMap from "../../components/Three/Scenes/ThreeMap";
import { StateProvider } from "../../context/State/StateCtx";
import css from './Map.css';

export default function Map() {
  const [loading, setLoading] = useState(true);

  return (
    // loading ? <h1>Loading..</h1> :
   <>
    <StateProvider>
   <section className={css.mapView}>
      <MapForm />
      <div className={css.canvas}>
        <ThreeMap />
      </div>
   </section>
    </StateProvider>
   </>
  );
}
