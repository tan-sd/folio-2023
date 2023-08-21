import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";

export const CloseProject = ({
    selectedProject,
    onProjectButtonClick,
    onMenuButtonClick,
}) => {
    const projectCloseCtrlRef = useRef([]);

    useEffect(() => {
        if (selectedProject !== null) {
            projectCloseCtrlRef.current.forEach((el) => {
                el.classList.add("project--open");
            });
            gsap.timeline({ defaults: { duration: 1.2, ease: "expo" } })
                .set(projectCloseCtrlRef.current, {
                    y: "150%",
                    rotate: 15,
                })
                .to(projectCloseCtrlRef.current, {
                    y: "0%",
                    rotate: 0,
                });
        } else {
            document.documentElement.style.setProperty('--overflow-setting', 'hidden');
            gsap.timeline({ defaults: { duration: 0.7, ease: "power2" } })
                .to(projectCloseCtrlRef.current, {
                    y: "-150%",
                    rotate: -5,
                    stagger: {
                        each: 0.06,
                        from: "start",
                    },
                })
                .then(() => {
                    projectCloseCtrlRef.current.forEach((el) => {
                        el.classList.remove("project--open");
                    });
                });
        }
    }, [selectedProject]);

    return (
        <button
            className="close oh unbutton project__content-close"
            ref={(el) => (projectCloseCtrlRef.current[0] = el)}
            onClick={() => {
                onProjectButtonClick(null);
                onMenuButtonClick();
            }}
        >
            <span
                className="oh__inner"
                ref={(el) => (projectCloseCtrlRef.current[1] = el)}
            >
                {/* &#8617; */}
                &#10005;
            </span>
        </button>
    );
};

CloseProject.propTypes = {
    selectedProject: PropTypes.string,
    onProjectButtonClick: PropTypes.func.isRequired,
    onMenuButtonClick: PropTypes.func.isRequired,
};
