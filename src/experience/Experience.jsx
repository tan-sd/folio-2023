import { Canvas, useFrame } from "@react-three/fiber";
import {
    PerspectiveCamera,
    PresentationControls,
    useGLTF,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";

import { PokeGen } from "../assets/model/pokegen/Pokegen";
import { Tasktopia } from "../assets/model/tasktopia/Tasktopia";

export const Experience = ({ selectedProject }) => {
    const projectCanvasRef = useRef();
    const [projectVisibility, setProjectVisibility] = useState({
        pokegen: false,
        bojio: false,
        mernfolio: false,
        makanboleh: false,
        tasktopia: false,
    });

    useEffect(() => {
        if (selectedProject !== null) {
            projectCanvasRef.current.classList.add("project--open");

            setProjectVisibility({
                ...projectVisibility,
                pokegen: selectedProject === "PokéGen",
                tasktopia: selectedProject === "Tasktopia",
            });
        } else {
            projectCanvasRef.current.classList.remove("project--open");
        }
    }, [selectedProject]);

    return (
        <div className="project__canvas" ref={projectCanvasRef}>
            <Canvas>
                <ambientLight color={"#ffffff"} intensity={1} />
                <pointLight position={[-1, -5, 10]} intensity={150} />
                <Suspense fallback={null}>
                    <PresentationControls snap={true}>
                        <PokeGen visibleStatus={projectVisibility.pokegen} />
                    </PresentationControls>
                    <PresentationControls snap={true}>
                        <Tasktopia
                            visibleStatus={projectVisibility.tasktopia}
                        />
                    </PresentationControls>
                </Suspense>
            </Canvas>
        </div>
    );
};
