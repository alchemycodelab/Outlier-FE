import { useEffect, useState } from 'react';
import MapForm from '../../components/Forms/MapForm/MapForm';
import ThreeMap from '../../components/Three/ThreeMap';

export default function () {
  const [loading, setLoading] = useState(true);

  return (
    // loading ? <h1>Loading..</h1> :
    <>
      <MapForm />
      {/* <ThreeMap />; */}
    </>
  );
}
