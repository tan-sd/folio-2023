import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import logo from "../assets/image/logo/logo.png";

export const Navbar = ({
    isMenuVisible,
    onMenuButtonClick,
    isAboutVisible,
    onAboutButtonClick,
}) => {
    const navbarRef = useRef();
    const menuOpenCtrlRef = useRef(null);
    const aboutOpenCtrlRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        if (isMenuVisible || isAboutVisible) {
            navbarRef.current.classList.add("navbar-close");
            gsap.timeline({ defaults: { duration: 0.7, ease: "power2" } }).to(
                [
                    menuOpenCtrlRef.current,
                    aboutOpenCtrlRef.current,
                    headingRef.current,
                ],
                {
                    y: "-150%",
                    rotate: -5,
                }
            );
        } else {
            navbarRef.current.classList.remove("navbar-close");
            gsap.timeline({ defaults: { duration: 1.2, ease: "expo" } })
                .set(
                    [
                        menuOpenCtrlRef.current,
                        aboutOpenCtrlRef.current,
                        headingRef.current,
                    ],
                    {
                        y: "150%",
                        rotate: 15,
                    }
                )
                .to(
                    [
                        menuOpenCtrlRef.current,
                        aboutOpenCtrlRef.current,
                        headingRef.current,
                    ],
                    {
                        y: "0%",
                        rotate: 0,
                    }
                );
        }
    }, [isMenuVisible, isAboutVisible]);

    return (
        <>
            <div className="navbar-container" ref={navbarRef}>
                <div className="oh">
                    <span className="oh__inner" ref={headingRef}>
                        <img src={logo} alt="logo" className="logo" />
                    </span>
                </div>
                <div className="navbar-link-container">
                    <button className="menu-link oh unbutton">
                        <span
                            className="oh__inner"
                            ref={menuOpenCtrlRef}
                            onClick={onMenuButtonClick}
                        >
                            Projects
                        </span>
                    </button>
                    <button className="menu-link oh unbutton">
                        <span
                            className="oh__inner"
                            ref={aboutOpenCtrlRef}
                            onClick={onAboutButtonClick}
                        >
                            About
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};

Navbar.propTypes = {
    isMenuVisible: PropTypes.bool.isRequired,
    onMenuButtonClick: PropTypes.func.isRequired,
    isAboutVisible: PropTypes.bool.isRequired,
    onAboutButtonClick: PropTypes.func.isRequired,
};