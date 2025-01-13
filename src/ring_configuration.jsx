import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Model } from "../Ring_white"
import FilterControl from "./filter_control"
import Loading from "./components/loading"

const RingConfiguration = () => {
    return (
        <main className="flex justify-between bg-[#f3f4f6] w-[100%] font-main">
            <Suspense fallback={<Loading />}>
                <Canvas style={{ height: '100vh', width: '70vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <OrbitControls enableDamping enablePan enableZoom />
                    <directionalLight castShadow={true} position={[2, 5, 3]} intensity={8} />
                    <color attach="background" args={['#f3f4f6']} />
                    <Model />
                </Canvas>
            </Suspense>
            <FilterControl />
        </main>
    )
}

export default RingConfiguration
