import { Canvas } from "@react-three/fiber";
import Model from "../public/Akabeko-draco";
import { OrbitControls, Plane } from "@react-three/drei";
import { Suspense } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Akabeko Animation</title>
      </Head>
      
      <div className="app_title">
        <h1>Akabeko Animation</h1>
        <p>with <span>React</span> & <span>Blender</span></p>
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

        <OrbitControls 
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
        />

        <Suspense fallback={null}>
          <Model />
  
          <Plane 
            receiveShadow
            args={[80, 80]}
            position={[0, -1.65, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <shadowMaterial opacity={0.3} />
  
          </Plane>
        </Suspense>
      </Canvas>
    </div>
  )
}
