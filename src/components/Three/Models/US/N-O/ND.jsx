import React, { useCallback, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useActiveStates } from '../../../../../context/State/StateCtx';

export default function ND({ ...props }) {  
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
      return [ ...prevState, 'ND' ];
    });
  }

  return (
  <group ref={group} {...props} dispose={null}>
    //---------ND---------//
      <mesh
        ref={mesh}
        name='ND'
        geometry={nodes.Plane053.geometry}
        material={nodes.Plane053.material}
        position={[-1.91, positionY, -6.44]}
        scale={[1, 1.29, 1]}
        onPointerOver={e => onHover(e, true)}
        onPointerOut={e => onHover(e, false)}
        onClick={() => handleClick()}
        >
          <meshStandardMaterial
            color = {isHovered? '#fff' : 'slategray'}
        />
      </mesh>
  </group>
  );
};

useGLTF.preload('/models/states/usa.glb');