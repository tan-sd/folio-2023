import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";

export const Menu = ({
    onNavButtonClick,
    isMenuVisible,
    onMenuButtonClick,
    projectsData,
    selectedProject,
    onProjectButtonClick,
}) => {
    const menuRef = useRef();
    const ohInnerRef = useRef([]);
    const menuCloseCtrlRef = useRef();
    const isAnimating = false;

    useEffect(() => {
        // gsap.set(menuRef.current, {
        //     opacity: 0,
        // });
        if (isMenuVisible) {
            ohInnerRef.current.forEach((el) => {
                el.classList.add("menu--open");
            });
            menuCloseCtrlRef.current.classList.add("menu--open");
            gsap.timeline({ defaults: { duration: 1.2, ease: "expo" } })
                .set([menuRef.current, menuCloseCtrlRef.current], {
                    opacity: 1,
                })
                .set([ohInnerRef.current, menuCloseCtrlRef.current], {
                    y: "150%",
                    rotate: 15,
                })
                .to([menuCloseCtrlRef.current, ohInnerRef.current], {
                    y: "0%",
                    rotate: 0,
                    stagger: {
                        each: 0.06,
                        from: "start",
                    },
                });
        }
    }, [isMenuVisible]);

    const closeMenu = () => {
        ohInnerRef.current.forEach((el) => {
            el.classList.remove("menu--open");
        });
        gsap.timeline({ defaults: { duration: 0.7, ease: "power2" } }).to(
            [menuCloseCtrlRef.current, ohInnerRef.current],
            {
                y: "-150%",
                rotate: -5,
                stagger: {
                    each: 0.06,
                    from: "start",
                },
            }
        );
    };

    useEffect(() => {
        if (selectedProject !== null) {
            closeMenu();
        }
    }, [selectedProject]);

    return (
        <div className="menu-container" ref={menuRef}>
            <nav className="menu">
                {projectsData.map((project, index) => (
                    <span className="menu__item oh" key={index}>
                        <button
                            className="menu__item-link oh__inner"
                            ref={(el) => (ohInnerRef.current[index] = el)}
                            disabled={isAnimating}
                            onClick={() => {
                                onProjectButtonClick(project.name);
                                onMenuButtonClick();
                            }}
                        >
                            {project.name}
                        </button>
                    </span>
                ))}
            </nav>
            <button
                className="close oh unbutton"
                onClick={() => {
                    closeMenu();
                    onMenuButtonClick();
                    onNavButtonClick();
                }}
            >
                <span className="oh__inner" ref={menuCloseCtrlRef}>
                    &#10005;
                </span>
            </button>
        </div>
    );
};

Menu.propTypes = {
    onNavButtonClick: PropTypes.func.isRequired,
    isMenuVisible: PropTypes.bool.isRequired,
    onMenuButtonClick: PropTypes.func.isRequired,
    projectsData: PropTypes.array.isRequired,
    selectedProject: PropTypes.string,
    onProjectButtonClick: PropTypes.func.isRequired,
};
