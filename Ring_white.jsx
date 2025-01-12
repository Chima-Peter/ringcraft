import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useColorContext } from './src/hooks/colorContext'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ring_white.glb')

  const { outerColor, shankColor } = useColorContext()

  useEffect(() => {
    // Change material properties here
    // Example: Change color of different materials

    // Change the color of item01 material
    materials['335_Mystic_Black_Pearl'].color.set(outerColor)

    // Change the color of item02 material
    materials['001_718_Crystal_Red_Coral_Pearl'].color.set(outerColor)

    materials['PM3D_rander ring 2_default'].color.set(shankColor)
    

  }, [outerColor, shankColor])

  useEffect(() => {
    console.log("Materials:", materials);
  }, [])



  return (
    <group {...props} dispose={null}>
      <group position={[-0.225, 0.534, -0.216]}>
        <group position={[0.225, -0.534, 0.216]} scale={1.626}>
          <group position={[0.016, 0.242, 0.003]} rotation={[0, 0.81, 0]} scale={0.785}>
            <mesh geometry={nodes.oval.geometry} material={nodes.oval.material} position={[0, 0.332, 0]} scale={0.002} />
            <mesh geometry={nodes.ring_metal.geometry} material={materials['PM3D_rander ring 2_default']} scale={0.025}>
              <group scale={39.37}>
                <mesh geometry={nodes['dia_1_006'].geometry} material={nodes['dia_1_006'].material} position={[-0.051, 0.329, -0.147]} scale={0} />
                <mesh geometry={nodes['dia_1_001'].geometry} material={nodes['dia_1_001'].material} position={[-0.133, 0.329, 0]} scale={0} />
                <mesh geometry={nodes['dia_1_014'].geometry} material={nodes['dia_1_014'].material} position={[0.135, 0.329, 0]} scale={0} />
                <mesh geometry={nodes['dia_1_022'].geometry} material={nodes['dia_1_022'].material} position={[0.081, 0.329, 0.128]} scale={0} />
                <mesh geometry={nodes.dia_2_004.geometry} material={nodes.dia_2_004.material} position={[-0.063, 0.347, -0.096]} scale={0} />
                <mesh geometry={nodes['dia_1_002'].geometry} material={nodes['dia_1_002'].material} position={[-0.13, 0.329, -0.035]} scale={0} />
                <mesh geometry={nodes['dia_1_011'].geometry} material={nodes['dia_1_011'].material} position={[0.104, 0.329, -0.1]} scale={0} />
                <mesh geometry={nodes['dia_1_019'].geometry} material={nodes['dia_1_019'].material} position={[-0.104, 0.329, 0.1]} scale={0} />
                <mesh geometry={nodes['dia_1_020'].geometry} material={nodes['dia_1_020'].material} position={[0.104, 0.329, 0.1]} scale={0} />
                <mesh geometry={nodes['dia_1_023'].geometry} material={nodes['dia_1_023'].material} position={[-0.051, 0.329, 0.149]} scale={0} />
                <mesh geometry={nodes.dia_2_016.geometry} material={nodes.dia_2_016.material} position={[-0.063, 0.347, 0.094]} scale={0} />
                <mesh geometry={nodes['dia_1_007'].geometry} material={nodes['dia_1_007'].material} position={[-0.018, 0.329, -0.158]} scale={0} />
                <mesh geometry={nodes.dia_2_003.geometry} material={nodes.dia_2_003.material} position={[-0.082, 0.347, -0.068]} scale={0} />
                <mesh geometry={nodes['dia_1_003'].geometry} material={nodes['dia_1_003'].material} position={[-0.121, 0.329, -0.069]} scale={0} />
                <mesh geometry={nodes['dia_1_010'].geometry} material={nodes['dia_1_010'].material} position={[0.081, 0.329, -0.127]} scale={0} />
                <mesh geometry={nodes['dia_1_018'].geometry} material={nodes['dia_1_018'].material} position={[0.121, 0.329, 0.07]} scale={0} />
                <mesh geometry={nodes.dia_2_011.geometry} material={nodes.dia_2_011.material} position={[0.098, 0.347, 0]} scale={0} />
                <mesh geometry={nodes['dia_1_004'].geometry} material={nodes['dia_1_004'].material} position={[-0.104, 0.329, -0.1]} scale={0} />
                <mesh geometry={nodes.dia_2_002.geometry} material={nodes.dia_2_002.material} position={[-0.092, 0.347, -0.034]} scale={0} />
                <mesh geometry={nodes.dia_2_008.geometry} material={nodes.dia_2_008.material} position={[0.061, 0.347, -0.096]} scale={0} />
                <mesh geometry={nodes.dia_2_018.geometry} material={nodes.dia_2_018.material} position={[-0.033, 0.347, 0.116]} scale={0} />
                <mesh geometry={nodes.dia_2_007.geometry} material={nodes.dia_2_007.material} position={[0.034, 0.347, -0.116]} scale={0} />
                <mesh geometry={nodes.dia_2_006.geometry} material={nodes.dia_2_006.material} position={[0, 0.347, -0.123]} scale={0} />
                <mesh geometry={nodes.dia_2_019.geometry} material={nodes.dia_2_019.material} position={[0.034, 0.347, 0.115]} scale={0} />
                <mesh geometry={nodes.dia_2_015.geometry} material={nodes.dia_2_015.material} position={[0.083, 0.347, 0.067]} scale={0} />
                <mesh geometry={nodes['dia_1_017'].geometry} material={nodes['dia_1_017'].material} position={[-0.121, 0.329, 0.07]} scale={0} />
                <mesh geometry={nodes.dia_2_010.geometry} material={nodes.dia_2_010.material} position={[0.094, 0.347, -0.034]} scale={0} />
                <mesh geometry={nodes['dia_1_013'].geometry} material={nodes['dia_1_013'].material} position={[0.13, 0.329, -0.035]} scale={0} />
                <mesh geometry={nodes['dia_1_005'].geometry} material={nodes['dia_1_005'].material} position={[-0.081, 0.329, -0.127]} scale={0} />
                <mesh geometry={nodes['dia_1_008'].geometry} material={nodes['dia_1_008'].material} position={[0.017, 0.329, -0.158]} scale={0} />
                <mesh geometry={nodes['dia_1_015'].geometry} material={nodes['dia_1_015'].material} position={[-0.13, 0.329, 0.035]} scale={0} />
                <mesh geometry={nodes['dia_1_012'].geometry} material={nodes['dia_1_012'].material} position={[0.121, 0.329, -0.069]} scale={0} />
                <mesh geometry={nodes.dia_2_005.geometry} material={nodes.dia_2_005.material} position={[-0.033, 0.347, -0.115]} scale={0} />
                <mesh geometry={nodes.dia_2_001.geometry} material={nodes.dia_2_001.material} position={[-0.095, 0.347, 0]} scale={0} />
                <mesh geometry={nodes['dia_1_016'].geometry} material={nodes['dia_1_016'].material} position={[0.13, 0.329, 0.035]} scale={0} />
                <mesh geometry={nodes.dia_2_009.geometry} material={nodes.dia_2_009.material} position={[0.083, 0.347, -0.068]} scale={0} />
                <mesh geometry={nodes.dia_2_012.geometry} material={nodes.dia_2_012.material} position={[-0.092, 0.347, 0.035]} scale={0} />
                <mesh geometry={nodes.dia_2_017.geometry} material={nodes.dia_2_017.material} position={[0.061, 0.347, 0.094]} scale={0} />
                <mesh geometry={nodes['dia_1_009'].geometry} material={nodes['dia_1_009'].material} position={[0.051, 0.329, -0.147]} scale={0} />
                <mesh geometry={nodes.dia_2_013.geometry} material={nodes.dia_2_013.material} position={[0.094, 0.347, 0.035]} scale={0} />
                <mesh geometry={nodes['dia_1_024'].geometry} material={nodes['dia_1_024'].material} position={[0.051, 0.329, 0.149]} scale={0} />
                <mesh geometry={nodes['dia_1_026'].geometry} material={nodes['dia_1_026'].material} position={[0.017, 0.329, 0.157]} scale={0} />
                <mesh geometry={nodes['dia_1_021'].geometry} material={nodes['dia_1_021'].material} position={[-0.081, 0.329, 0.128]} scale={0} />
                <mesh geometry={nodes.dia_2_020.geometry} material={nodes.dia_2_020.material} position={[0, 0.347, 0.123]} scale={0} />
                <mesh geometry={nodes.dia_2_014.geometry} material={nodes.dia_2_014.material} position={[-0.082, 0.347, 0.067]} scale={0} />
                <mesh geometry={nodes['dia_1_025'].geometry} material={nodes['dia_1_025'].material} position={[-0.018, 0.329, 0.157]} scale={0} />
              </group>
            </mesh>
          </group>
          <mesh geometry={nodes.item01.geometry} material={materials['335_Mystic_Black_Pearl']} rotation={[-Math.PI, -Math.PI / 4, -Math.PI]} scale={17.534} />
          <mesh geometry={nodes.item02.geometry} material={materials['001_718_Crystal_Red_Coral_Pearl']} position={[0, 0.003, 0]} rotation={[-Math.PI, -Math.PI / 4, -Math.PI]} scale={17.534} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ring_white.glb')
