import { Html } from "@react-three/drei";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Screen = ({ isMenuVisible, isAboutVisible, selectedProject }) => {
    const [displayStatus, setDisplayStatus] = useState({
        display: "none",
    });

    useEffect(() => {
        if (!isMenuVisible && !isAboutVisible && !selectedProject) {
            const timer = setTimeout(() => {
                setDisplayStatus({
                    display: "block",
                });
            }, 500);

            return () => clearTimeout(timer);
        } else {
            setDisplayStatus({
                display: "none",
            });
        }
    }, [isMenuVisible, isAboutVisible, selectedProject]);

    return (
        <Html
            className="screen"
            position={[0, 1.5, -10]}
            transform
            style={{ ...displayStatus }}
        >
            <iframe src="https://my-room-in-3d-tan-sd.vercel.app/"></iframe>
        </Html>
    );
};

Screen.propTypes = {
    isMenuVisible: PropTypes.bool.isRequired,
    isAboutVisible: PropTypes.bool.isRequired,
    selectedProject: PropTypes.string,
};
