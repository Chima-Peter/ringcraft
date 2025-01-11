import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Model } from "../Ring_white"
import { useColorContext } from "./colorContext"

const RingConfiguration = () => {
    const { outerColor, setOuterColor, innerColor, setInnerColor } = useColorContext()

    return (
        <main className="flex justify-between bg-[#f3f4f6] w-[100%] p-6">
            <Canvas style={{ height: '100vh', width: '70vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <OrbitControls enableDamping enablePan enableZoom />
                <directionalLight castShadow={true} position={[2, 5, 3]} intensity={8} />
                <color attach="background" args={['#f3f4f6']} />
                <Suspense fallback={<div>Loading Model...</div>}>
                    <Model />
                </Suspense>
            </Canvas>
            <section className="h-[90vh] overflow-y-auto w-[500px] shadow-xl rounded-2xl bg-white text-black flex gap-4 py-4 px-6 flex-col">
                <h1>Customize your ring</h1>
                <div>
                    <h2>Outer box</h2>
                    <p>Change the color of the outer box</p>
                    <input 
                        type="color" 
                        name="color" 
                        id="color" 
                        value={outerColor} 
                        onChange={(e) => setOuterColor(e.target.value)} 
                    />
                </div>
                <div>
                    <h2>Inner lining</h2>
                    <p>Change the color of the inner lining of the ring</p>
                    <input 
                        type="color" 
                        name="color" 
                        id="color" 
                        value={innerColor} 
                        onChange={(e) => setInnerColor(e.target.value)} 
                    />
                </div>
                <div>
                    <h2>Ring</h2>
                    <p> Don't like the ring color? Change it</p>
                </div>
            </section>
        </main>
    )
}

export default RingConfiguration
