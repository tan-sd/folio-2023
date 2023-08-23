import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import loadingLogo from "../assets/image/logo/logo-loading.png";
import { gsap } from "gsap";

export const LoadingScreen = ({ onCompleted }) => {
    const loadingscreenRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
        tl.to(loadingscreenRef.current, { opacity: 1, scale: 1, duration: 1.2 })
            .to(
                loadingscreenRef.current,
                { duration: 2, repeat: -1, yoyo: true },
                "-=0.6"
            )
            .to(loadingscreenRef.current, {
                opacity: 0,
                scale: 1.2,
                duration: 0.8,
                ease: "power3.in",
            })
            .to(loadingscreenRef.current, {
                display: "none",
                onComplete: () => {
                    onCompleted();
                },
            });
    }, []);

    return (
        <div className="loading-screen" ref={loadingscreenRef}>
            <img src={loadingLogo} alt="loading-icon" />
        </div>
    );
};

LoadingScreen.propTypes = {
    onCompleted: PropTypes.func.isRequired,
};
