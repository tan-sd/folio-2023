import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { PokeGen } from "../assets/model/pokegen/Pokegen";
import { Bojio } from "../assets/model/bojio/Bojio";
import { Makanboleh } from "../assets/model/makanboleh/Makanboleh";
import { Mernfolio } from "../assets/model/mernfolio/Mernfolio";
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
            setTimeout(() => {
                projectCanvasRef.current.classList.add("project--open");
            }, 400);

            setProjectVisibility({
                ...projectVisibility,
                pokegen: selectedProject === "PokéGen",
                bojio: selectedProject === "BOJIO",
                makanboleh: selectedProject === "MakanBoleh",
                mernfolio: selectedProject === "MERNfolio",
                tasktopia: selectedProject === "Tasktopia",
            });
        } else {
            projectCanvasRef.current.classList.remove("project--open");
            setProjectVisibility({
                ...projectVisibility,
                pokegen: selectedProject === false,
                bojio: selectedProject === false,
                makanboleh: selectedProject === false,
                mernfolio: selectedProject === false,
                tasktopia: selectedProject === false,
            });
        }
    }, [selectedProject]);

    return (
        <div className="project__canvas-model" ref={projectCanvasRef}>
            <Canvas>
                <ambientLight color={"#ffffff"} intensity={1} />
                <pointLight position={[-1, -5, 10]} intensity={250} />
                <Suspense fallback={null}>
                    <PresentationControls snap={true}>
                        <PokeGen visibleStatus={projectVisibility.pokegen} />
                    </PresentationControls>
                    <PresentationControls snap={true}>
                        <Bojio visibleStatus={projectVisibility.bojio} />
                    </PresentationControls>
                    <PresentationControls snap={true}>
                        <Makanboleh
                            visibleStatus={projectVisibility.makanboleh}
                        />
                    </PresentationControls>
                    <PresentationControls snap={true}>
                        <Mernfolio
                            visibleStatus={projectVisibility.mernfolio}
                        />
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

Experience.propTypes = {
    selectedProject: PropTypes.string,
};
