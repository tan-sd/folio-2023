import PropTypes from "prop-types";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export const Project = ({
    projectName,
    projectText,
    projectTools,
    projectLinks,
    selectedProject,
}) => {
    const projectContentRef = useRef([]);
    const projectWrapRef = useRef([]);
    const projectTextRef = useRef();

    useEffect(() => {
        if (selectedProject == projectName) {
            projectWrapRef.current.classList.add("project--open");
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
            projectWrapRef.current.classList.remove("project--open");
        }
    }, [selectedProject, projectName]);

    return (
        <div className="project__container" ref={projectWrapRef}>
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
                                    (projectContentRef.current[index + 2] = el)
                                }
                            >
                                <img
                                    src={tool.img}
                                    width="25px"
                                    alt=""
                                    style={{ marginRight: "5px" }}
                                />
                                {tool.name}
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
    );
};

Project.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectText: PropTypes.string.isRequired,
    projectTools: PropTypes.array.isRequired,
    projectLinks: PropTypes.array.isRequired,
    selectedProject: PropTypes.string,
};
