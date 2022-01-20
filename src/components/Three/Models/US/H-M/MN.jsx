import React, { useCallback, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function MN({ ...props }) {  
  const mesh = useRef();
  const group = useRef();
  const [positionY, setPositionY] = useState(0);
  const [active, setActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { nodes, materials } = useGLTF('/models/states/usa.glb')

  const onHover = useCallback((e, v) => {
    e.stopPropagation(); //stop ref at first intersection
    e.target;
    setIsHovered(v);
  }, [setIsHovered]);

  function handleClick() {
    setActive(v => !v);
    active ? setPositionY(0) :
    setPositionY(0.35);
  }

  return (
  <group ref={group} {...props} dispose={null}>
    //---------MN---------//
    <mesh
      ref={mesh}
      name='MN'
      geometry={nodes.Plane060.geometry}
      material={nodes.Plane060.material}
      position={[0.1, positionY, -6.33]}
      scale={[1, 1.51, 1]}
      onPointerOver={e => onHover(e, true)}
      onPointerOut={e => onHover(e, false)}
      onClick={() => handleClick()}
    >
      <meshStandardMaterial
        color = {isHovered? '#fff' : '#399E5A'}
      />
    </mesh>
  </group>
  );
};

useGLTF.preload('/models/states/usa.glb');