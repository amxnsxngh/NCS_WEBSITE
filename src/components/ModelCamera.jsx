import {OrbitControls} from "@react-three/drei";
import {useRef} from "react";

const ModelCamera = ({children}) => {
    const groupRef = useRef();
    const orbitRef = useRef();


    return (
        <group ref={groupRef}>
            {children}
            <OrbitControls
                ref={orbitRef}  // Ref for programmatic control (if needed)
                enableZoom={true}  // Enable zooming
                enablePan={false}  // Disable panning
                enableRotate={false} // Keep the front visible during the automatic swing
                minDistance={10}   // Minimum zoom distance (adjust as needed)
                maxDistance={200}  // Maximum zoom distance (adjust as needed)
                target={[0, 0, 0]}  // Center around the HackerRoom model
            />
        </group>
    )
}
export default ModelCamera
