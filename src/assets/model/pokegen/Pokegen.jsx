import { useGLTF } from "@react-three/drei";
import pokegen from "./pokegen.glb";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const PokeGen = ({visibleStatus}) => {
    const gltf = useGLTF(pokegen);
    const modelRef = useRef();

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        if (modelRef.current) {
            modelRef.current.position.y = -1.5 + Math.sin(time) * 0.1;
        }
    });

    useGLTF.preload(pokegen);

    return (
        <primitive
            object={gltf.scene}
            ref={modelRef}
            rotation={[0, -2, 0]}
            position={[0.5, 0, 1]}
            scale={1.1}
            visible={visibleStatus}
        />
    );
};
