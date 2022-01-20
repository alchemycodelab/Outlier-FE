import React, { useCallback, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function RI({ ...props }) {  
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
    //----------Rhode Island---------//
      <mesh
        ref={mesh}
        name='RI'
        geometry={nodes.Plane003.geometry}
        material={nodes.Plane003.material}
        position={[10.2, positionY, -4.58]}
        scale={[1, 1.4, 1]}
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