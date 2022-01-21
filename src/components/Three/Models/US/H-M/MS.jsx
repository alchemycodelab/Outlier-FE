import React, { useCallback, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useActiveStates } from '../../../../../context/State/StateCtx';

export default function MS({ ...props }) {  
  const mesh = useRef();
    const group = useRef();
  const [positionY, setPositionY] = useState(0);
  const [active, setActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { setActiveStates } = useActiveStates([]);

  const { nodes, materials } = useGLTF('/models/states/usa.glb')

  const onHover = useCallback((e, v) => {
    e.stopPropagation(); //stop ref at first intersection
    e.target;
    setIsHovered(v);
  }, [setIsHovered]);

  function handleClick() {
    setActive(v => !v);
    active ? setPositionY(0) :
    setPositionY(2);
    setActiveStates((prevState) => {
      return [ ...prevState, 'MS' ];
    });
  }

  return (
  <group ref={group} {...props} dispose={null}>
    //---------MS---------//
      <mesh
        ref={mesh}
        name='MS'
        geometry={nodes.Plane066.geometry}
        material={nodes.Plane066.material}
        position={[2.28, positionY, 2.83]}
        scale={[1, 1.29, 1]}
        onPointerOver={e => onHover(e, true)}
        onPointerOut={e => onHover(e, false)}
        onClick={() => handleClick()}
        >
        <meshStandardMaterial
          color = {isHovered? '#fff' : '#399E5A'}
          />
      </mesh>
      //-------
  </group>
  );
};

useGLTF.preload('/models/states/usa.glb');