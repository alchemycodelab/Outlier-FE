function GroundPlane() {
  return (
    <mesh 
      receiveShadow 
      rotation = {[5, 0, 0]} 
      position={[0, -10, 0]}
    >
      <planeBufferGeometry attatch='geometry' args={[500, 500]} />
      <meshStandardMaterial attatch='material' color='#86626E' />
    </mesh>
  );
};

export default GroundPlane;