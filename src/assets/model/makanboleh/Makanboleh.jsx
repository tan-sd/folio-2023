import { useGLTF } from "@react-three/drei";
import makanboleh from "./makanboleh.glb";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const Makanboleh = ({ visibleStatus }) => {
    const gltf = useGLTF(makanboleh);
    const modelRef = useRef();

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        if (modelRef.current) {
            modelRef.current.position.y = -1.5 + Math.sin(time) * 0.1;
        }
    });

    useGLTF.preload(makanboleh);
    return (
        <primitive
            object={gltf.scene}
            ref={modelRef}
            rotation={[0, 0, 0]}
            position={[1, 0, 0]}
            scale={1.1}
            visible={visibleStatus}
        />
    );
};
