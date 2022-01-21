import { SpotLight } from '@react-three/drei';

export default function SpotLights({ position }) {

  return (
    <SpotLight
      position={[3, 40, 0]}
      distance={50}
      angle={3}
      attenuation={5}
      anglePower={5}
    />
  )
}