import React from 'react'

export default function FillLight({ brightness, color }) {

  return (
    <rectAreaLight 
      width={6}
      height={6}
      intensity={brightness}
      color={color}
      position={[2, -1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
    // <rectAreaLight
    //   width={4}
    //   height={4}
    //   intensity={brightness}
    //   color={color}
    //   position={[2, 1, 4]}
    //   lookAt={[0, 0, 0]}
    //   penumbra={2}
    //   castShadow
    // />
  )
}
