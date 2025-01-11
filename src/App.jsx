import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Model } from "../Ring_white"
import './index.css'
import { useColorContext } from "./colorContext"

const App = () => {
  const { outerColor, setOuterColor, innerColor, setInnerColor } = useColorContext()

  return (
    <main className="flex justify-between">
      <Canvas style={{ height: '100vh', width: '70vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Hello ThreeJS
        <OrbitControls enableDamping enablePan enableZoom enableRotate />
        <ambientLight intensity={0.5} />
        <directionalLight castShadow={false} position={[ 5, 5, 5 ]} intensity={10} color={0xffffff} />
        <color attach="background" args={['#D3D3D3']} />
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Model />
      </Canvas>
      <section className="h-[100vh] my-4 mx-6">
        <h1>
          Customise your ring
        </h1>
        <div>
          <h2>
            Outer box
          </h2>
          <p>
            Change the color of the outer box
          </p>
          <input type="color" name="color" id="color" value={outerColor} onChange={(e) => setOuterColor(e.target.value)} />
        </div>
        <div>
          <h2>
            Inner lining
          </h2>
          <p>
            Change the color of the inner lining of the ring
          </p>
          <input type="color" name="color" id="color" value={innerColor} onChange={(e) => setInnerColor(e.target.value)} />
        </div>
        <div>
          <h2>
            Ring
          </h2>
          <p>
            Dont't like ring color? Change it
          </p>
        </div>
      </section>
    </main>
  )
}

export default App