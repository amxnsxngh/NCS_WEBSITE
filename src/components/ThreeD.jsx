import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const ThreeD = (props) => {
    const { nodes, materials } = useGLTF('/3d-logo.glb');
    const groupRef = useRef();

    // The model's 90-degree X tilt makes local Z rotation a left-to-right turn.
    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.8) * (Math.PI / 6);
        }
    });

    // Keep colours visible under ambient light while retaining some metallic shine.
    const applyMetallicProperties = (material) => {
        material.metalness = 0.5;
        material.roughness = 0.5;
    };

    // Apply metallic properties to materials
    applyMetallicProperties(materials.Material);
    applyMetallicProperties(materials['Material.001']);

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.path1002_1.geometry}
                material={materials.Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.path1002_2.geometry}
                material={materials['Material.001']}
            />
        </group>
    );
};

useGLTF.preload('/3d-logo.glb');
export default ThreeD;
