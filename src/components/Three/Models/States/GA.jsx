import React, { useCallback, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function GA({ ...props }) {  const mesh = useRef();
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
<group ref={group} {...props} dispose={null}>
//----------Georgia---------//
      <mesh
        ref={mesh}
        name='GA'
        geometry={nodes.Plane006.geometry}
        material={nodes.Plane006.material}
        position={[6.01, 0, 2.04]}
        scale={[1, 1.29, 1]}
        onPointerOver={e => onHover(e, true)}
        onPointerOut={e => onHover(e, false)}
        onClick={() => handleClick()}
      >
        <meshStandardMaterial
            color = {isHovered? '#fff' : '#399E5A'}
        />
      </mesh>
  </group>
}