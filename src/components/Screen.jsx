import { Html } from "@react-three/drei";
import PropTypes from "prop-types";

export const Screen = ({ isMenuVisible, isAboutVisible, selectedProject }) => {
    const displayStatus = {
        display:
            !isMenuVisible && !isAboutVisible && !selectedProject
                ? "block"
                : "none",
    };

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
