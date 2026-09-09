import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const ThreeD = (props) => {
    const { nodes, materials } = useGLTF('/3d-logo.glb');
    const groupRef = useRef();

    // Automatically rotate the model
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.z += 0.009; // Adjust rotation speed as needed
        }
    });

    // Set metallic and roughness properties for a more metallic look
    const applyMetallicProperties = (material) => {
        material.metalness = 1;  // Full metallic
        material.roughness = 0.5; // Low roughness for shiny effect
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
