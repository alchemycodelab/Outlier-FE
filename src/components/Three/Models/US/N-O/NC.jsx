import React, { useCallback, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useActiveStates } from '../../../../../context/State/StateCtx';

export default function NC({ ...props }) {  
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
      return [ ...prevState, 'NC' ];
    });
  }

  return (
  <group ref={group} {...props} dispose={null}>

  </group>
  );
};

useGLTF.preload('/models/states/usa.glb');