import { Canvas } from "@react-three/fiber";
import Model from "../public/Akabeko";
import { OrbitControls, Plane } from "@react-three/drei";

export default function Home() {
  

  return (
    <div className="main">
      <div className="app_title">
        <h1>Akabeko Animation</h1>
      </div>

      <Canvas
        shadows
        camera={{position: [-8, 3, 8]}}
      >
        <ambientLight />
        <pointLight 
          intensity={0.5}
          position={[-4, 20, 20]} 
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        <OrbitControls />

        <Model />

        <Plane 
          receiveShadow
          args={[50, 50]}
          position={[0, -1.65, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <shadowMaterial opacity={0.3} />

        </Plane>
      </Canvas>
    </div>
  )
}
