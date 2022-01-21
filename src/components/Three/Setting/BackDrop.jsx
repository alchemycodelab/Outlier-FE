function BackDrop() {
  return (
    <mesh receiveShadow position = {[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial wireframe={false} attatch='material' color='#86626E' />
    </mesh>
  );
};

export default BackDrop;