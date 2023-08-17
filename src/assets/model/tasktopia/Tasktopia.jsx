import { useGLTF } from "@react-three/drei";
import tasktopia from "./tasktopia.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Tasktopia = ({ visibleStatus }) => {
    const gltf = useGLTF(tasktopia);
    const modelRef = useRef();

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        if (modelRef.current) {
            modelRef.current.position.y = -1.8 + Math.sin(time) * 0.1;
        }
    });

    useGLTF.preload(tasktopia);

    return (
        <primitive
            object={gltf.scene}
            ref={modelRef}
            rotation={[0.1, -0.2, 0]}
            position={[-0.1, -1, 1]}
            scale={1.1}
            visible={visibleStatus}
        />
    );
};
