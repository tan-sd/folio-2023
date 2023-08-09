import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";

export const Menu = ({ isMenuVisible, onMenuButtonClick }) => {
    const menuRef = useRef();
    const ohInnerRef = useRef([]);
    const menuCloseCtrlRef = useRef();
    const isAnimating = true;

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
    });

    const closeMenu = () => {
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

    return (
        <div className="menu-container" ref={menuRef}>
            <nav className="menu">
                <span className="menu__item oh">
                    <button
                        className="menu__item-link oh__inner"
                        ref={(el) => (ohInnerRef.current[0] = el)}
                        disabled={isAnimating}
                    >
                        PokéGen
                    </button>
                </span>
                <span className="menu__item oh">
                    <button
                        className="menu__item-link oh__inner"
                        ref={(el) => (ohInnerRef.current[1] = el)}
                        disabled={isAnimating}
                    >
                        BOJIO
                    </button>
                </span>
                <span className="menu__item oh">
                    <button
                        className="menu__item-link oh__inner"
                        ref={(el) => (ohInnerRef.current[2] = el)}
                        disabled={isAnimating}
                    >
                        MERNfolio
                    </button>
                </span>
                <span className="menu__item oh">
                    <button
                        className="menu__item-link oh__inner"
                        ref={(el) => (ohInnerRef.current[3] = el)}
                        disabled={isAnimating}
                    >
                        MakanBoleh
                    </button>
                </span>
                <span className="menu__item oh">
                    <button
                        className="menu__item-link oh__inner"
                        ref={(el) => (ohInnerRef.current[4] = el)}
                        disabled={isAnimating}
                    >
                        Tasktopia
                    </button>
                </span>
            </nav>
            <button
                className="close close--menu oh unbutton"
                aria-label="Close menu"
                onClick={() => {
                    closeMenu(); onMenuButtonClick();
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
    isMenuVisible: PropTypes.bool.isRequired,
    onMenuButtonClick: PropTypes.func.isRequired,
};