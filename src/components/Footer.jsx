import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";

export const Footer = ({ isMenuVisible }) => {
    const footerWrapRef = useRef();
    const footerRef = useRef(null);

    useEffect(() => {
        if (isMenuVisible) {
            footerWrapRef.current.classList.add("navbar-close");
            gsap.timeline({ defaults: { duration: 0.7, ease: "power2" } }).to(
                [footerRef.current],
                {
                    y: "-150%",
                    rotate: -5,
                }
            );
        } else {
            footerWrapRef.current.classList.remove("navbar-close");
            gsap.timeline({ defaults: { duration: 1.2, ease: "expo" } })
                .set(footerRef.current, {
                    y: "150%",
                    rotate: 15,
                })
                .to(footerRef.current, {
                    y: "0%",
                    rotate: 0,
                });
        }
    }, [isMenuVisible]);

    return (
        <div className="footer oh" ref={footerWrapRef}>
            <span className="oh__inner" ref={footerRef}>
                © 2023 Tan Sheng Da
            </span>
        </div>
    );
};

Footer.propTypes = {
    isMenuVisible: PropTypes.bool.isRequired,
};
