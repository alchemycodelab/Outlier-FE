import React, { useCallback, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function NM({ ...props }) {  
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
    //--------- NM ---------//
      <mesh
        ref={mesh}
        name='NM'
        geometry={nodes.Plane051.geometry}
        material={nodes.Plane051.material}
        position={[-6.56, positionY, 2.09]}
        scale={[1, 1.29, 1]}
        onPointerOver={e => onHover(e, true)}
        onPointerOut={e => onHover(e, false)}
        onClick={() => handleClick()}
        >
          <meshStandardMaterial
            color = {isHovered? '#fff' : 'blue'}
        />
      </mesh>
  </group>
  );
};

useGLTF.preload('/models/states/usa.glb');