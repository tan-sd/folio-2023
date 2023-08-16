import PropTypes from "prop-types";
import { gsap } from "gsap";
import { useEffect, useRef, Suspense } from "react";
import SplitType from "split-type";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, PresentationControls } from "@react-three/drei";

export const Project = ({
    projectName,
    projectText,
    projectTools,
    projectLinks,
    projectPanel,
    projectModel,
    selectedProject,
}) => {
    const projectContentRef = useRef([]);
    const projectWrapRef = useRef([]);
    const projectTextRef = useRef();
    const projectImgRef = useRef([]);

    useEffect(() => {
        if (selectedProject == projectName) {
            projectWrapRef.current.classList.add("project--open");
            gsap.set(projectTextRef.current, {
                opacity: 1,
            });
            gsap.timeline({ defaults: { duration: 0.7, ease: "power2" } })
                .set(projectContentRef.current, {
                    opacity: 1,
                })
                .set(projectContentRef.current, {
                    y: "150%",
                    rotate: 15,
                })
                .to(projectContentRef.current, {
                    y: "0%",
                    rotate: 0,
                });

            gsap.timeline({ defaults: { duration: 2, ease: "expo" } })
                .set(projectImgRef.current, {
                    y: "300%",
                    opacity: 1,
                })
                .to(projectImgRef.current, {
                    y: "0%",
                });

            const text = SplitType.create(projectTextRef.current, {
                types: "words",
            });
            const words = text.words;

            gsap.fromTo(
                words,
                {
                    y: "110%",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.05,
                    duration: 2,
                    ease: "power4.out",
                    delay: "0.35",
                }
            );
        } else {
            gsap.timeline({ defaults: { duration: 0.6, ease: "expo" } })
                .set(projectTextRef.current, {
                    opacity: 1,
                })
                .to(projectTextRef.current, {
                    opacity: 0,
                });

            gsap.timeline({ defaults: { duration: 0.6, ease: "power2" } })
                .to([projectImgRef.current, projectContentRef.current], {
                    y: "-150%",
                    opacity: 0,
                })
                .then(() => {
                    projectWrapRef.current.classList.remove("project--open");
                });
        }
    }, [selectedProject, projectName]);

    return (
        <div className="project__container" ref={projectWrapRef}>
            <div className="panel">
                <img
                    className="panel__img pos-1"
                    src={projectPanel[0].img[0]}
                    alt=""
                    ref={(el) => (projectImgRef.current[0] = el)}
                    style={{ height: projectPanel[0].size, width: "auto" }}
                />
                <img
                    className="panel__img pos-2"
                    src={projectPanel[0].img[1]}
                    alt=""
                    ref={(el) => (projectImgRef.current[1] = el)}
                    style={{ height: projectPanel[0].size, width: "auto" }}
                />
                <img
                    className="panel__img pos-3"
                    src={projectPanel[0].img[2]}
                    alt=""
                    ref={(el) => (projectImgRef.current[2] = el)}
                    style={{ height: projectPanel[0].size, width: "auto" }}
                />
                <img
                    className="panel__img pos-4"
                    src={projectPanel[0].img[3]}
                    alt=""
                    ref={(el) => (projectImgRef.current[3] = el)}
                    style={{ height: projectPanel[0].size, width: "auto" }}
                />
                <img
                    className="panel__img pos-5"
                    src={projectPanel[0].img[4]}
                    alt=""
                    ref={(el) => (projectImgRef.current[4] = el)}
                    style={{ height: projectPanel[0].size, width: "auto" }}
                />
                <img
                    className="panel__img pos-6"
                    src={projectPanel[0].img[5]}
                    alt=""
                    ref={(el) => (projectImgRef.current[5] = el)}
                    style={{ height: projectPanel[0].size, width: "auto" }}
                />
                <img
                    className="panel__img pos-7"
                    src={projectPanel[0].img[6]}
                    alt=""
                    ref={(el) => (projectImgRef.current[6] = el)}
                    style={{ height: projectPanel[0].size, width: "auto" }}
                />
                <img
                    className="panel__img pos-8"
                    src={projectPanel[0].img[7]}
                    alt=""
                    ref={(el) => (projectImgRef.current[7] = el)}
                    style={{ height: projectPanel[0].size, width: "auto" }}
                />
                <img
                    className="panel__img pos-9"
                    src={projectPanel[0].img[8]}
                    alt=""
                    ref={(el) => (projectImgRef.current[8] = el)}
                    style={{ height: projectPanel[0].size, width: "auto" }}
                />
                <img
                    className="panel__img pos-10"
                    src={projectPanel[0].img[9]}
                    alt=""
                    ref={(el) => (projectImgRef.current[9] = el)}
                    style={{ height: projectPanel[0].size, width: "auto" }}
                />
            </div>
            <div className="project__content-container">
                {/* <div className="project__canvas"> */}
                    {/* <Canvas>
                        <ambientLight color={"#ffffff"} intensity={1.7} />
                        <pointLight
                            position={[-0.5, -0.5, 2.5]}
                            intensity={2}
                        />
                        <Suspense fallback={null}>
                            <PresentationControls snap={true}>
                                <PerspectiveCamera
                                    rotation={[0, -2, 0]}
                                    position={[0.5, -1.35, 1.5]}
                                >
                                    <projectModel.model visible={false}/>
                                </PerspectiveCamera>
                            </PresentationControls>
                        </Suspense>
                    </Canvas> */}
                {/* </div> */}
                <div className="project__content">
                    <h3 className="project__content-title oh">
                        <span
                            className="oh__inner"
                            ref={(el) => (projectContentRef.current[0] = el)}
                        >
                            {projectName}
                        </span>
                    </h3>
                    <p className="project__content-text" ref={projectTextRef}>
                        {projectText}
                    </p>
                    <h3 className="project__content-tools-title oh">
                        <span
                            className="oh__inner"
                            ref={(el) => (projectContentRef.current[1] = el)}
                        >
                            Tools used:
                        </span>
                    </h3>
                    <ul className="project__content-tools">
                        {projectTools.map((tool, index) => (
                            <li className="oh" key={index}>
                                <div
                                    className="oh__inner"
                                    ref={(el) =>
                                        (projectContentRef.current[index + 2] =
                                            el)
                                    }
                                >
                                    <img src={tool.img} width="25px" />
                                    <span className="project__content-tools-name">
                                        {tool.name}
                                    </span>
                                </div>
                            </li>
                        ))}
                        <li></li>
                    </ul>
                    {projectLinks.map((link, index) => (
                        <a
                            className="project__content-link oh"
                            href={link.link}
                            target="_blank"
                            key={index}
                            rel="noreferrer"
                        >
                            <div
                                className="oh__inner"
                                ref={(el) =>
                                    (projectContentRef.current[
                                        projectContentRef.current.length + index
                                    ] = el)
                                }
                            >
                                {link.name}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

Project.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectText: PropTypes.string.isRequired,
    projectTools: PropTypes.array.isRequired,
    projectLinks: PropTypes.array.isRequired,
    projectPanel: PropTypes.array.isRequired,
    selectedProject: PropTypes.string,
};
