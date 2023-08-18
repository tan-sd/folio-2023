import { useGLTF } from "@react-three/drei";
import mernfolio from "./mernfolio.glb";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const Mernfolio = ({ visibleStatus }) => {
    const gltf = useGLTF(mernfolio);
    const modelRef = useRef();

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        if (modelRef.current) {
            modelRef.current.position.y = -1.5 + Math.sin(time) * 0.1;
        }
    });

    useGLTF.preload(mernfolio);
    return (
        <primitive
            object={gltf.scene}
            ref={modelRef}
            rotation={[0, -0.5, 0]}
            position={[0.5, 0, 0]}
            scale={1.1}
            visible={visibleStatus}
        />
    );
};
