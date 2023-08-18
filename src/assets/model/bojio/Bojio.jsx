import { useGLTF } from "@react-three/drei";
import bojio from "./bojio.glb";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const Bojio = ({visibleStatus}) => {
    const gltf = useGLTF(bojio);
    const modelRef = useRef();

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        if (modelRef.current) {
            modelRef.current.position.y = -2.6 + Math.sin(time) * 0.1;
        }
    });

    useGLTF.preload(bojio);
    return (
        <primitive
            object={gltf.scene}
            ref={modelRef}
            rotation={[0, -1, 0]}
            position={[0.5, 0, 0]}
            scale={1.1}
            visible={visibleStatus}
        />
    );
}