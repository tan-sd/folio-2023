import { Plane, useGLTF, useTexture } from "@react-three/drei";
import mernfolio from "./mernfolio.glb";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import mongodbImg from "../../image/projects/mernfolio/mongodb-logo.svg";
import expressImg from "../../image/projects/mernfolio/express-logo.svg";
import reactImg from "../../image/projects/mernfolio/react-logo.svg";
import nodejsImg from "../../image/projects/mernfolio/nodejs-logo.svg";

export const Mernfolio = ({ visibleStatus }) => {
    const gltf = useGLTF(mernfolio);
    const modelRef = useRef();

    const logo1Ref = useRef();
    const logo2Ref = useRef();
    const logo3Ref = useRef();
    const logo4Ref = useRef();

    const mongoTexture = useTexture(mongodbImg);
    const expressTexture = useTexture(expressImg);
    const reactTexture = useTexture(reactImg);
    const nodejsTexture = useTexture(nodejsImg);

    let dir1 = new THREE.Vector3(-0.5, 0.5, 0);
    let dir2 = new THREE.Vector3(0.5, -0.5, 0);
    let dir3 = new THREE.Vector3(0.2, 0.5, 0);
    let dir4 = new THREE.Vector3(-0.5, -0.1, 0);
    const speed = 0.02 * 0.5;

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        if (modelRef.current) {
            modelRef.current.position.y = -1.5 + Math.sin(time) * 0.1;
        }

        if (logo1Ref.current) {
            const displacement = dir1.clone().multiplyScalar(speed);
            let logoPosition1 = logo1Ref.current.position
                .clone()
                .add(displacement);

            const maxX = 1.47;
            const minX = -1.46;
            const maxY = 2.45;
            const minY = 0.67;

            if (logoPosition1.x > maxX || logoPosition1.x < minX) {
                dir1.x *= -1;
            }
            if (logoPosition1.y > maxY || logoPosition1.y < minY) {
                dir1.y *= -1;
            }
            logo1Ref.current.position.copy(logoPosition1);
        }

        if (logo2Ref.current) {
            const displacement = dir2.clone().multiplyScalar(speed);
            let logoPosition2 = logo2Ref.current.position
                .clone()
                .add(displacement);

            const maxX = 1.35;
            const minX = -1.3;
            const maxY = 2.53;
            const minY = 0.67;

            if (logoPosition2.x > maxX || logoPosition2.x < minX) {
                dir2.x *= -1;
            }
            if (logoPosition2.y > maxY || logoPosition2.y < minY) {
                dir2.y *= -1;
            }
            logo2Ref.current.position.copy(logoPosition2);
        }

        if (logo3Ref.current) {
            const displacement = dir3.clone().multiplyScalar(speed);
            let logoPosition3 = logo3Ref.current.position
                .clone()
                .add(displacement);

            const maxX = 1.33;
            const minX = -1.3;
            const maxY = 2.45;
            const minY = 0.67;

            if (logoPosition3.x > maxX || logoPosition3.x < minX) {
                dir3.x *= -1;
            }
            if (logoPosition3.y > maxY || logoPosition3.y < minY) {
                dir3.y *= -1;
            }
            logo3Ref.current.position.copy(logoPosition3);
        }

        if (logo4Ref.current) {
            const displacement = dir4.clone().multiplyScalar(speed);
            let logoPosition4 = logo4Ref.current.position
                .clone()
                .add(displacement);

            const maxX = 1.35;
            const minX = -1.35;
            const maxY = 2.45;
            const minY = 0.75;

            if (logoPosition4.x > maxX || logoPosition4.x < minX) {
                dir4.x *= -1;
            }
            if (logoPosition4.y > maxY || logoPosition4.y < minY) {
                dir4.y *= -1;
            }
            logo4Ref.current.position.copy(logoPosition4);
        }
    });

    useGLTF.preload(mernfolio);
    return (
        <mesh
            ref={modelRef}
            rotation={[0, 0, 0]}
            position={[0, 0, 0]}
            scale={1.15}
            visible={visibleStatus}
        >
            <primitive object={gltf.scene} />
            <Plane
                args={[0.5, 0.5]}
                ref={logo1Ref}
                rotation={[0, 0, 0]}
                position={[-0.1, 1.2, -1.11]}
            >
                <meshStandardMaterial map={mongoTexture} transparent />
            </Plane>
            <Plane
                args={[0.5, 0.5]}
                ref={logo2Ref}
                rotation={[0, 0, 0]}
                position={[0.4, 1.1, -1.11]}
            >
                <meshStandardMaterial map={expressTexture} transparent />
            </Plane>

            <Plane
                args={[0.5, 0.5]}
                ref={logo3Ref}
                rotation={[0, 0, 0]}
                position={[0.95, 0.97, -1.11]}
            >
                <meshStandardMaterial map={reactTexture} transparent />
            </Plane>

            <Plane
                args={[0.5, 0.5]}
                ref={logo4Ref}
                rotation={[0, 0, 0]}
                position={[0.4, 0.85, -1.11]}
            >
                <meshStandardMaterial map={nodejsTexture} transparent />
            </Plane>
        </mesh>
    );
};
