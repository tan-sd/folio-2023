import { useRef } from "react";
import logo from "../assets/image/logo/logo.png";

export const Navbar = () => {
    const menuOpenCtrlRef = useRef(null);
    const aboutOpenCtrlRef = useRef(null);
    const headingRef = useRef(null);
    return (
        <>
            <div className="navbar-container">
                <div>
                    <span className="oh__inner" ref={headingRef}>
                        <img src={logo} alt="logo" className="logo" />
                    </span>
                </div>
                <div className="navbar-link-container">
                    <button className="menu-link oh unbutton">
                        <span className="oh__inner" ref={menuOpenCtrlRef}>
                            Projects
                        </span>
                    </button>
                    <button className="menu-link oh unbutton">
                        <span className="oh__inner" ref={aboutOpenCtrlRef}>
                            About
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};
