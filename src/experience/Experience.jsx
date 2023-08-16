import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, PresentationControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";

import { Pokegen } from "../assets/model/pokegen/Pokegen";
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
                <ambientLight color={"#ffffff"} intensity={1.7} />
                <pointLight position={[-0.5, -0.5, 2.5]} intensity={2} />
                <Suspense fallback={null}>
                    <PresentationControls snap={true}>
                        <PerspectiveCamera
                            rotation={[0, -2.2, 0]}
                            position={[0.5, 0, 0]}
                        >
                            <Pokegen
                                visible={projectVisibility.pokegen}
                                scale={1.3}
                            />
                        </PerspectiveCamera>
                        <PerspectiveCamera
                            rotation={[0, -0.5, 0]}
                            position={[0.5, 0, 0]}
                        >
                            <Tasktopia visible={projectVisibility.tasktopia} scale={1.3}/>
                        </PerspectiveCamera>
                    </PresentationControls>
                </Suspense>
            </Canvas>
        </div>
    );
};
