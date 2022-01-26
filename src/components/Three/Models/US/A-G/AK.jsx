import React, { useCallback, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import useForm from '../../../../../hooks/UseForm';
import { useActiveStates } from '../../../../../context/State/StateCtx';
import { useFrame } from '@react-three/fiber';

export default function AK({ ...props }) {  
  const mesh = useRef();
  const group = useRef();
  const [positionY, setPositionY] = useState(0);
  const [active, setActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { activeStates, setActiveStates } = useActiveStates([]);
  // const { activeStates, handleActiveStateChanges } = useForm([]);

  const { nodes, materials } = useGLTF('/models/states/usa.glb')

  useFrame(({clock}) => {
    mesh.current.rotation.x = clock.getElapsedTime() / 3
  });

  const onHover = useCallback((e, v) => {
    e.stopPropagation(); //stop ref at first intersection
    e.target;
    setIsHovered(v);
  }, [setIsHovered]);

  function handleClick(e) {
    setActive(v => !v);
    active ? setPositionY(0) :
    setPositionY(2)
    // setActiveStates(['AK'])
    // const { value } = e.target;
    setActiveStates((prevState) => {
    //   console.log(value);
      return [ ...prevState, 'AK' ];
    });
  }

return(
  <group ref={group} {...props} dispose={null}>
    //--------- AK ---------//
    <mesh
      ref={mesh}
      name='AK'
      value='AK'
      geometry={nodes.Plane023.geometry}
      material={nodes.Plane023.material}
      position={[-9.38, positionY, 6.93]}
      scale={[1, 1.29, 1]}
      onPointerOver={e => onHover(e, true)}
      onPointerOut={e => onHover(e, false)}
      // onClick={handleActiveStateChanges}
      // onClick={handleClick}
      onClick={handleClick}
      // onClick={() => greeting.setName(theme.colors.green)}
    >
      <meshStandardMaterial
          color = {isHovered? '#fff' : 'steelblue'}
      />
    </mesh>
  </group>
  )
}

useGLTF.preload('/models/states/usa.glb')
