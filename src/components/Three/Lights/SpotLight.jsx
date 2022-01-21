import { SpotLight } from '@react-three/drei';

export default function SpotLights({ position }) {

  return (
    <SpotLight
      position={position}
      distance={50}
      angle={3}
      attenuation={5}
      anglePower={5}
    />
  )
}