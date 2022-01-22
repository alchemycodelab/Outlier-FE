function GroundPlane({ color, position }) {
  return (
    <mesh 
      receiveShadow 
      rotation = {[5, 0, 0]} 
      position={position}
    >
      <planeBufferGeometry attatch='geometry' args={[500, 500]} />
      <meshStandardMaterial attatch='material' color={color} />
    </mesh>
  );
};

export default GroundPlane;